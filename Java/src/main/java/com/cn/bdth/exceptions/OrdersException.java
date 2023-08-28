package com.cn.bdth.exceptions;


import lombok.Data;


@SuppressWarnings("all")
@Data
public class OrdersException extends RuntimeException {

    private String message;


    private Integer code;


    public OrdersException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public OrdersException() {

        this.message = "请勿重复下单";
        this.code = 500;
    }
}
