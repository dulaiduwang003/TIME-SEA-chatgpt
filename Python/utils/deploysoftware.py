import json
import paramiko

class DeploymentSoftwareHandler:
    def __init__(self, commands, username, password, host, port, chunk_size):
        self.commands = commands
        self.username = username
        self.password = password
        self.host = host
        self.port = port
        self.chunk_size = chunk_size
        self.output_lines = []

    def execute_command(self):
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        try:
            ssh.connect(
                self.host,
                port=self.port,
                username=self.username,
                password=self.password
            )

            for cmd in self.commands:
                stdin, stdout, stderr = ssh.exec_command(cmd)
                output = stdout.read().decode().strip()
                self.output_lines.append(json.dumps({'output': output}))

        except paramiko.AuthenticationException as e:
            self.output_lines.append(json.dumps({'output': f"Authentication failed: {str(e)}"}))
        except paramiko.SSHException as e:
            self.output_lines.append(json.dumps({'output': f"SSH connection failed: {str(e)}"}))
        except paramiko.BadHostKeyException as e:
            self.output_lines.append(json.dumps({'output': f"Host key could not be verified: {str(e)}"}))
        except Exception as e:
            self.output_lines.append(json.dumps({'output': str(e)}))

        finally:
            ssh.close()

        # 添加空字符串作为结束标记
        self.output_lines.append('')

    def get_output(self):
        chunked_output = [self.output_lines[i:i+self.chunk_size] for i in range(0, len(self.output_lines), self.chunk_size)]
        for output_chunk in chunked_output:
            yield output_chunk