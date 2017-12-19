/**
 * Created by wuxy on 2017/11/22.
 */

/*http请求模块*/
layui.define('jquery',function(exports){
        var $ =  layui.jquery;

        var http = {
            postConfig:{        //默认配置
                url:'',
                dataType:'json',
                data:'',
                success:function(data){},
                fail:function(){}
            },
            submitConfig:{
                url: '',
                type: 'POST',
                elem: '',             //指定原始 table 容器的选择器或 DOM 如: .class  #id
                processData: false,   // 告诉jQuery不要去处理发送的数据
                contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
                success:function(data){},
                fail:function(){}
            },
            post:function(options){         //post 请求
                console.info(options);
                var config = $.extend({},this.postConfig,options);
                $.post({
                    url:config.url,
                    dataType:config.dataType,
                    data:config.data,
                    success:function(data){
                        //console.info(data);
                        if('success' ===  data.mString){
                            config.success(data);
                        }else {
                            config.fail(data.mString);
                        }
                    },
                    error:function (data) {
                        //console.error(data);
                        layer.open({
                            title:data.statusText,
                            content:data.responseText
                        });
                    }
                })
            },
            submit:function(options){       //表单提交
                var config = $.extend({},this.submitConfig,options);
                var $elem = $(config.elem);
                if(0 === $elem.length){
                    var msg = '请设置正确的表单选择器 [elem] 属性';
                    console.error(msg);
                    config.fail(msg);
                }

                var formData = new FormData($elem[0]);

                $.ajax({
                    url: config.url,
                    type: config.type,
                    data: formData,
                    processData: config.processData,  // 告诉jQuery不要去处理发送的数据
                    contentType: config.contentType   // 告诉jQuery不要去设置Content-Type请求头
                }).done(function(data) {
                    if('success' ===  data.mString){
                        config.success(data);
                    }else {
                        config.fail(data.mString);
                    }
                }).fail(function(data) {
                    layer.open({        //错误提示
                        title:data.statusText,
                        content:data.responseText
                    });
                });
            }
        };

        exports('http', http);
});