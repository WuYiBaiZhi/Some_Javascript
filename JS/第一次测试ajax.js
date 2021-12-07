//创建ajax对象
var xhr = new XMLHttpRequest();
//配置本次请求信息
xhr.open(请求方式,请求地址,是否异步);
//注册请求完成事件
xhr.onload = function () {

};
//发送请求
xhr.send();