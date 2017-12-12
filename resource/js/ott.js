/**
 * Created by wuxy on 2017/11/20.
 */
/*
 配置文件
 **/
layui.define(['config','dict','tableset','url','dialog','module','http','select','myutils'],function (exports) {
    var config = layui.config,
        module = layui.module,
        url = layui.url,
        dict = layui.dict,
        dialog = layui.dialog,
        tableset = layui.tableset,
        http = layui.http,
        select = layui.select,
        myutils = layui.myutils;
    var ott = {
        /*-配置-*/
        config:config,

        /*-模块-*/
        module:module,

        /*-数据表格配置-*/
        tableset: tableset,

        /*-地址-*/
        url:url,

        dict:dict,

        /*-弹框-*/
        dialog:dialog,

        /*-http请求-*/
        http:http,

        /*-下拉框-*/
        select:select,

        /*工具*/
        myutils:myutils
    };

    exports('ott', ott); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});