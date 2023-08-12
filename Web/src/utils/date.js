

export function conversionTime(time) {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const now = new Date().getTime();
    const diffValue = now - time;
    if (diffValue < 0) {
        return;
    }
    let result;
    if (diffValue <= minute) {
        result = "刚刚";
    } else if (diffValue <= hour) {
        result = Math.floor(diffValue / minute) + "分钟前";
    } else if (diffValue <= day) {
        result = Math.floor(diffValue / hour) + "小时前";
    } else if (diffValue <= week) {
        result = Math.floor(diffValue / day) + "天前";
    } else if (diffValue <= month) {
        result = Math.floor(diffValue / week) + "周前";
    } else if (diffValue <= month * 12) {
        result = Math.floor(diffValue / month) + "月前";
    } else {
        result = Math.floor(diffValue / (month * 12)) + "年前";
    }
    return result;
}
