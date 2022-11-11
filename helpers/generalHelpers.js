import moment from 'moment';

export function countTime(start, finish) {
    return Math.round((start - finish) / 100) + 's';
}

export function ymdNow() {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
}

export class Response {
    constructor(code, message, time, count, data) {
        this.code = code;
        this.message = message;
        this.time = time;
        this.count = count;
        this.data = data;
    }
}