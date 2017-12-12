/**
 * Created by wuxy on 2017/11/23.
 * 模块信息
 */

layui.define(['config','url','dict'],function(exports){
    var lang = layui.config.getLang();
    var url = layui.url;
    var dict = layui.dict;

    function getInfo(moduleName){
        return{
            url:url[moduleName],
            dict:dict.getModule(moduleName,lang)
        }
    }

    var module = {
        getInfo:getInfo
    };

    console.info(module);
    exports('module',module);
});
