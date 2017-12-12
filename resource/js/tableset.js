/**
 * Created by wuxy on 2017/11/23.
 */

layui.define(['dialog'],function(exports){
    var dialog = layui.dialog;

    /*---数据表格配置---*/
    var tableset =
    {
        /*---通用设置---*/
        //skin: 'line' //行边框风格
        even: true //开启隔行背景
        , size: 'md' //小尺寸的表格
        , loading: true
        , cellMinWidth: 85 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        , page: true //开启分页

        /*---异步数据接口---*/
        //,where: {param: null}// 接口的其它参数。如：
        , method: "post"
        , request: {
              pageName: "pageIndex"  //当前页面数
            , limitName: "pageSize"    //每页大小
        }
        , response: {
            statusName: 'code' //数据状态的字段名称，默认：code
            , statusCode: 200    //成功的状态码，默认：0
            , msgName: 'hint' //状态信息的字段名称，默认：msg
            , countName: 'count' //数据总数的字段名称，默认：count
            , dataName: 'listData' //数据列表的字段名称，默认：data

        }
        ,done:function(data){
           // dialog.show();    //加载完成显示 完成信息
        }
    };

    exports("tableset",tableset);

});
