/**
 * Created by wuxy on 2017/11/23.
 * 数据字典
 */

layui.define(function(exports){

    /*模块类
    * field 字段
    * titleCn 中文标题
    * titleEn 英文标题
    * */
    function MODULE_ITEM(field, titleCn,titleEn) {
        this.field = field;

        this.title = [];
        this.title[constant.lang.cn] = titleCn;
        this.title[constant.lang.en] = titleEn;
    }

    /*---定义常量---*/
    var constant =  {
        module:{//模块相关
            main:'main',            //主页面
            login:'login',          //登陆

            /*内容信息管理*/
            category:'category',    //片源样式管理
            class:'class',          //片源风格管理

            vod:'vod',              //点播
            live:'live',            //直播
            epg:'epg',              //epg
            episode:'episode' ,     //剧集
            broadcastadd:'broadcastadd' ,     //视频源

            /*系统管理*/
            user:'user',            //用户管理
            role:"role",            //角色管理
            version:'version',      //系统版本
            server:'server',        //服务器组管理

            /*运营服务管理*/
            product:'product' ,          //产品服务管理
            advertising:'advertising',  //广告服务管理
            adPict:'adPict',            //图片广告
            adText:'adText',            //文字广告
            adVideo:'adVideo',           //视频广告

            statistics:'statistics',    //统计管理
            log:'log',                  //日志查询
            update:'update',            //软件更新
            feedback:'feedback'         //用户反馈
        },

        lang:{  //语言相关
            cn:'cn',    //中文
            en:'en'     //英文
        },

        updateType:{//更新类型
            key:'type', //key
            add:'add',  //添加
            edit:'edit' //编辑
        }
    };

    /*---定义模块数据---*/
    function getModuleData(){
        var mod = [];
        var set=  new MODULE_ITEM('set', '设置','Set');
        mod[constant.module.vod] = {
            /*表格*/
            movieName:new MODULE_ITEM('moviename','影片名称','Movie Name'),
            actor:new MODULE_ITEM('actor','演员','Actor'),
            director:new MODULE_ITEM('director','导演','Director'),
            releaseDate:new MODULE_ITEM('releasedate','上映日期','Release Date'),
            isPay:new MODULE_ITEM('ispay','是否收费','Is Pay'),
            referencePrice:new MODULE_ITEM('referenceprice','价格','Reference Price'),
            isReferral:new MODULE_ITEM('isreferral','是否推荐','Is Referral'),
            isMultyBitrate:new MODULE_ITEM('ismultybitrate','多分辨率','Is Multy Bitrate'),
            drmState:new MODULE_ITEM('drmstate','DRM状态','Drm State'),


            isLock:new MODULE_ITEM('islock','是否加锁','Is Lock'),
            level:new MODULE_ITEM('level','限制级','Level'),
            language:new MODULE_ITEM('language','语言','Language'),
            score:new MODULE_ITEM('score','评分','Score'),
            area:new MODULE_ITEM('area','上映地点','Area'),
            rcompany:new MODULE_ITEM('rcompany','发行公司','Company'),
            copyright:new MODULE_ITEM('copyright','版权单位','Copyright'),
            content:new MODULE_ITEM('content','影片简介','Content'),
            updateFrequency:new MODULE_ITEM('updatefrequency','更新频率','Update Frequency'),
            episodes:new MODULE_ITEM('episodes','剧集','Episodes'),
            imgFile:new MODULE_ITEM('imgfile','影片海报','Poster'),

            set:set
        };

        mod[constant.module.episode] = {
            /*表格*/
            description:new MODULE_ITEM('description','剧集数','Description'),
            name:new MODULE_ITEM('name','名称','Name'),

            set:set

        };

        mod[constant.module.category] = {
            /*表格*/
            categoryName: new MODULE_ITEM('categoryname', '片源样式','Category Name'),
            type: new MODULE_ITEM('type', '所属类型','Type'),// var CATEGORY_TYPE = ['直播','点播','其他'];
            set:set
        };

        mod[constant.module.class] = {
            /*表格*/
            className: new MODULE_ITEM('classname', '片源风格','Class Name'),
            categoryName: new MODULE_ITEM('categoryname', '片源样式','Category Name'),
            set:set
        };

        mod[constant.module.user] = {
            /*表格*/
            userName: new MODULE_ITEM('username', '用户名','User Name'),
            reaName: new MODULE_ITEM('reaname', '管理员','Rea Name'),
            phone: new MODULE_ITEM('phone', '电话','Phone'),
            email: new MODULE_ITEM('email', '邮箱','Email'),
            createTime: new MODULE_ITEM('createtime', '创建时间','Create Time'),
            roleName: new MODULE_ITEM('rolename', '角色名','Role Name'),
            set:set
        };

        mod[constant.module.role] = {
            /*表格*/
            roleName: new MODULE_ITEM('rolename', '角色名','Role Name'),
            description: new MODULE_ITEM('description', '描述','Description'),
            set:set
        };

        mod[constant.module.update] = {
            /*表格*/
            fileName: new MODULE_ITEM('filename', '软件名称','fileName'),
            versionCode: new MODULE_ITEM('versioncode', '版本号','versionCode'),
            versionName: new MODULE_ITEM('versionname', '版本名称','versionName'),
            updateType: new MODULE_ITEM('updatetype', '升级类型','updateType'),//1强制升级、2手动升级
            type: new MODULE_ITEM('type', '设备类型','type'),//设备类型：1手机、2平板、3机顶盒、4其他
            size: new MODULE_ITEM('size', '文件大小','size'),
            url: new MODULE_ITEM('url', '下载地址','url'),

            content: new MODULE_ITEM('content', '描述','content'),
            otId: new MODULE_ITEM('ottd', '设备编号','otId'),
            md5: new MODULE_ITEM('md5', 'Md5值','md5'),
            serialNoBegin: new MODULE_ITEM('serialnobegin', '序列号开始','serialNoBegin'),
            serialNoEnd: new MODULE_ITEM('serialnoend', '序列号结束','serialNoEnd'),

            set:set
        };

        mod[constant.module.log] = {
            /*表格*/
            createDate: new MODULE_ITEM('createdate', '日志日期','createDate'),
            logContext: new MODULE_ITEM('logcontext', '日志内容','logContext'),
            userName: new MODULE_ITEM('username', '操作员','userName'),

            logState: new MODULE_ITEM('logstate', '状态值','logState'),//
            type: new MODULE_ITEM('type', '设备类型','type'),//服务端操作日志、终端接口调用日志、系统异常日志
            invokeClass: new MODULE_ITEM('invokeclass', '调用类名','invokeClass'),

            set:set
        };

        mod[constant.module.feedback] = {
            /*表格*/
            content: new MODULE_ITEM('content', '反馈意见','content'),
            clientName: new MODULE_ITEM('clientname', '客户名','clientName'),//
            clientCode: new MODULE_ITEM('clientcode', '客户编号','clientCode'),
            feedbackTime: new MODULE_ITEM('feedbacktime', '提交时间','feedbacktime'),

            set:set
        };


        mod[constant.module.epg] = {
            /*表格*/
            epgName: new MODULE_ITEM('epgname', '名称','epgName'),
            programDate: new MODULE_ITEM('programdate', '节目日期','programDate'),//
            week: new MODULE_ITEM('week', '星期','week'),
            playTime: new MODULE_ITEM('playtime', '播放时间','playTime'),
            channelId: new MODULE_ITEM('channelid', '频道ID','channelId'),
            duration: new MODULE_ITEM('duration', '时长','duration'),
            playUrl: new MODULE_ITEM('playurl', '播放地址','playUrl'),
            examineState: new MODULE_ITEM('examinestate', '审核状态','examineState'),

            set:set
        };

        mod[constant.module.live] = {
            /*表格*/
            channelName: new MODULE_ITEM('channelname', '频道名称','channelName'),
            inputType: new MODULE_ITEM('inputtype', '输入模式','inputType'),//节目信号类型：UDP级联选择HLS、URL级联选择HLS、GM8000A级联选择GM8000A
            outputType: new MODULE_ITEM('outputtype', '输出模式','outputType'),//输出类型(级联选择)：HLS、GM8000A
            outsideUrl: new MODULE_ITEM('outsideurl', '输出地址','outsideUrl'),//推送地址(URL类型)
            isLock: new MODULE_ITEM('islock', '是否加锁','isLock'),//是否加锁：0否、1是
            referencePrice: new MODULE_ITEM('referenceprice', 'Epg菜单名','referencePrice'),//参考价格
            provider: new MODULE_ITEM('provider', '来源','provider'),//（供应商）来源

            set:set
        };

        mod[constant.module.adPict] = {
            /*表格*/
            adName: new MODULE_ITEM('adName', '广告名称','adName'),
            adUrl: new MODULE_ITEM('adUrl', '图片地址','adUrl'),
            url: new MODULE_ITEM('url', '链接地址','url'),
            set:set
        };

        mod[constant.module.adText] = {
            /*表格*/
            adContent: new MODULE_ITEM('adContent', '内容','adContent'),
            adScrollTimes: new MODULE_ITEM('adScrollTimes', '滚动时长','adScrollTimes'),
            startTime: new MODULE_ITEM('startTime', '开始时间','startTime'),
            intervalTime: new MODULE_ITEM('intervalTime', '间隔时长','intervalTime'),//间隔时间（单位：分钟）
            set:set
        };

        mod[constant.module.adVideo] = {
            /*表格*/
            adName: new MODULE_ITEM('adName', '广告名称','adName'),
            adUrl: new MODULE_ITEM('adUrl', '视频地址','adUrl'),
            playDate: new MODULE_ITEM('playDate', '播放日期','playDate'),
            playType: new MODULE_ITEM('playType', '插播方式','playType'),//插播方式：0开始位置、1中间位置、2结束位置
            validDays: new MODULE_ITEM('validDays', '有效期','validDays'),//有效期（单位：天）
            status: new MODULE_ITEM('status', '状态','status'),//状态：0停播、1在播放

            set:set
        };

        var formatMod = [];
        formatMod[constant.lang.en] = [];
        formatMod[constant.lang.cn] = [];

        for(var item in mod){
            var m = mod[item];
            formatMod[constant.lang.en][item] = [];
            formatMod[constant.lang.cn][item] = [];
            for(var i  in m){
                formatMod[constant.lang.en][item][i] = {
                    field:m[i].field,
                    title:m[i].title[constant.lang.en]
                };

                formatMod[constant.lang.cn][item][i] = {
                    field:m[i].field,
                    title:m[i].title[constant.lang.cn]
                };
            }
        }
        //console.info(formatMod);
        return formatMod;
    };


    function getModule(key,lang){
        var module = getModuleData();

        console.info(module[lang][key]);
        return module[lang][key];
    }

    var dict = {
        constant:constant,    //获取常量字典
        getModule:getModule         //获取模块字典
    };

    exports("dict",dict);
});
