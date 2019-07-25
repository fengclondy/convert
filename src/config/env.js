// 配置编译环境和线上环境之间的切换

let baseUrl = 'http://172.16.125.69:8086';
let iconfontVersion = ['567566_pwc3oottzol', '1066523_v8rsbcusj5q'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV == 'development') {
    baseUrl = `http://172.16.125.69:8086`; // 开发环境地址
} else if (env.NODE_ENV == 'production') {
    baseUrl = `http://172.16.125.69:8086`; //生产环境地址
} else if (env.NODE_ENV == 'test') {
    baseUrl = `http://172.16.125.69:8086`; //测试环境地址
}
export {
    baseUrl,
    iconfontUrl,
    iconfontVersion,
    codeUrl,
    env
}
