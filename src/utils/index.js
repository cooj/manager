import { SStorage } from './common';

// 使用session本地缓存  /////////////////////////
export const Session = new SStorage('session');

// async / await 方法调用定时器
export const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Done waiting");
            resolve(ms)
        }, ms)
    })
}
