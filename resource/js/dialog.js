/**
 * Created by wuxy on 2017/11/23.
 */

layui.define(['jquery','dict'],function(exports){
    var $ = layui.jquery;
    var updateType = layui.dict.constant.updateType;
    var dialog = {
        /*弹出层*/
        /*
         参数解释：
         title	标题
         url		请求的url
         id		需要操作的数据id
         w		弹出层宽度（缺省调默认值）
         h		弹出层高度（缺省调默认值）
         */
        open:function(title,url,w,h){
            if (title == null || title == '') {
                title=false;
            };
            if (url == null || url == '') {
                url="404.html";
            };
            if (w == null || w == '') {
                w='80%';
            };
            if (h == null || h == '') {
                h='80%';
            };
            layer.open({
                type: 2,
                area: [w, h],
                fix: false, //不固定
                maxmin: true,
                shade:0.4,
                title: title,
                content: url,
               /* end:function(){       //弹框关闭后，刷新
                    console.info(parent);
                    var $refresh = $("#refresh");
                    if(1 == $refresh.length){
                        $refresh.click();    //刷新
                    }
                }*/
            });
        },
        openAdd:function(id){
            if(typeof (id) == "undefined"){
                id = -1;
            }
            this.open("添加",'update.html?'+updateType.key+"="+updateType.add+"&id="+id);
        },
        openEdit:function(id){
            if(typeof (id) == "undefined"){
                id = -1;
            }
            this.open("编辑",'update.html?'+updateType.key+"="+updateType.edit+"&id="+id);
        }
        /*关闭弹出框口*/
        ,close:function(){
            var index = parent.layer.getFrameIndex(window.name);
            parent.layer.close(index);
        },

        showConfig:{
            time:1300,      //显示时间 ms
            title:'提示',
            icon:1,
            content:"刷新表格",
            offset:'rb',    //右下角显示
            shade: 0,        //没有遮蔽层
            anim: 2           //从最底部往上滑入
        },
        show:function(options){
            layer.open($.extend({},this.showConfig,options));
        },
        closeAndRefresh:function () {
            //注意：parent 是 JS 自带的全局对象，可用于操作父页面
            var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
            console.info(index);
            console.info(window.name);
            parent.layer.close(index);  //关闭自身窗口
            var $refresh = parent.layui.$("#refresh");
            if($refresh.length){
                $refresh.click();    //刷新
            }
        }

};

    exports("dialog",dialog);

});
