/**
 * Created by wuxy on 2017/11/22.
 */
layui.define(['form','http','url'],function(exports) {
    var $ = layui.jquery;

    var form = layui.form;
    var url = layui.url.vod;
    var http = layui.http;

    var select = {
        config: {
            oneSelectChange: function () {        //第一个下拉改变事件回调
                console.info("第一个下拉改变");
            },
            twoSelectChange: function () {       //第二个下拉改变事件回调
                console.info("第二个下拉改变");
            },
            oneField:'select(category)',        //
            twoField:'select(clazz)',
            $one:'',                            //第一个下拉的jquery元素
            $two:'' ,                            //第二个下拉的jquery元素
            oneData:{type:2}                    //1 直播 2 点播

        },
        set: function (options) {
            var that = this;
            $.extend(true, that.config, options);
            return that;
        },
        init: function () {
            var that = this;
            var _config = that.config;

            initSelectListen(_config);
            setCategorySelect(_config);
        },
        createSelect:createSelect
    };

    function initSelectListen(config) {
        form.on(config.oneField, function (data) {
            config.oneSelectChange(data);
            setClazzSelect( data.value,config);
        });

        form.on(config.twoField, function (data) {
            config.twoSelectChange(data);
        });
    }

    function setCategorySelect(config){
        http.post({
            url:url.category,
            data:config.oneData,
            success:function(data){
                createSelect(config.$one,data.listData,'cid','categoryname');
            },
            fail:function(data){
                console.error('获取Category列表失败');
                console.error(data);
            }
        });
    }

    function setClazzSelect(cid,config){
        http.post({
            url:url.clazz,
            data:{cid:cid},
            success:function(data){
                createSelect(config.$two,data.listData,"classid","classname");
            },
            fail:function(data){
                console.error('获取Clazz列表失败');
                console.error(data);
            }
        })
    }

    /*
    * $select 选择器
    * dataList 数据列表
    * value 值对应
    * name  显示的名称
    * */
    function createSelect($select,dataList,value,name){
        if(($select.length) ==0 || (dataList == null)){
            console.error("createSelect ($select.length) ==0 || (dataList == null)");
            return;
        }

        var viewStr = '';
        for(var i=0;i<dataList.length;i++){
            viewStr += ' <option value="'+ dataList[i][value] +'">'+dataList[i][name]+'</option>'
        }

        $select.find("option").eq(0).nextAll().remove();

        $select.append(viewStr);

        form.render(null); //更新 lay-filter="test1" 所在容器内的全部表单状态
    }

    //输出test接口
    exports('select', select);
});
