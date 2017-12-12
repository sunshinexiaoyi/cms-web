/**
 * Created by wuxy on 2017/11/20.
 */
/*
 配置文件
 **/
layui.define('dict',function (exports) {
    var lang = layui.dict.constant.lang.cn;   //默认语言

    function getLang(){
        return lang;
    }

    var config = {
        getLang:getLang
    };

    exports('config', config); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});