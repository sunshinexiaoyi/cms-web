/**
 * Created by wuxy on 2017/11/23. 地址
 */

layui.define("dict", function(exports) {
	var module = layui.dict.constant.module;

	function getTestUrl() {// 获取测试的url
		var url = [];
		var path = "../../../resource/data/";
		url[module.main] = {
			list : '../resource/data/menu.json' // 菜单
		};

        /*内容信息管理*/
		url[module.category] = {
			list : path+'category.json', // 获取列表
			del : path+'category.json', // 删除
			edit : path+'category.json', // 编辑
            load:path+'loadCategory.json'
        };

		url[module.class] = {
			list : path+'class.json', // 获取列表
			del : path+'class.json', // 删除
			add : '  ../../data/class.json', // 添加
			category : path+'class.json', // 样式
            load:path+'loadClass.json'
		};

		url[module.vod] = {
			list : path+'vod.json',
			del : path+'vod.json',
			category : path+'menuCategory.json', // 编辑
			clazz : path+'menuClazz.json', // 编辑
			addBase : path+'vod.json', // 添加基本信息
			addEpisode : path+'vod.json', // 添加剧集信息
            loadBase : path+'loadMovie.json'		// 加载基本信息

        };
        url[module.live] = {
            list : path+'live.json',
            del : path+'live.json',
            category : path+'live.json', // 编辑
            clazz : path+'live.json', // 编辑
            addBase : path+'live.json', // 添加基本信息
            addEpisode : path+'live.json', // 添加剧集信息
            loadBase : path+'live.json'		// 加载基本信息

        };
        url[module.epg] = {
            list : path+'epg.json', 	// 剧集列表     参数：movieId
            add : path+'epg.json', 				// 添加剧集信息    参数：剧集对象episode
            load : path+'epg.json',		// 加载剧集信息
            edit : path+'epg.json',			// 编辑剧集信息    参数：剧集对象episode
            del : path+'epg.json' 				// 删除影片    参数：episodeIds
        };
		url[module.episode] = {
			list : path+'episode.json', 	// 剧集列表     参数：movieId
			add : path+'episode.json', 				// 添加剧集信息    参数：剧集对象episode
			load : path+'loadEpisode.json',		// 加载剧集信息
			edit : path+'episode.json',			// 编辑剧集信息    参数：剧集对象episode
			del : path+'episode.json' 				// 删除影片    参数：episodeIds
		};
		url[module.broadcastadd] = {
			list : path+'broadcastadd.json', // 视频源列表     参数：movieId
			add : path+'broadcastadd.json', 				// 添加视屏源信息    参数：对象
			load : path+'broadcastadd.json',		// 加载视屏源信息    参数：urlId
			edit : path+'broadcastadd.json',			// 编辑视屏源信息    参数：对象
			del : path+'broadcastadd.json' 			// 删除视屏源    参数：urlIds
		};

        /*系统管理*/
        url[module.user] = {
            list : path+'user.json', // 视频源列表     参数：movieId
            add : path+'user.json', 				// 添加视屏源信息    参数：对象
            load : path+'loadUser.json',		// 加载视屏源信息    参数：urlId
            roles : path+'role.json',		// 获取用户绑定角色集合
            edit : path+'user.json',			// 编辑视屏源信息    参数：对象
            del : path+'user.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.role] = {
            list : path+'role.json', // 视频源列表     参数：movieId
            add : path+'loadRole.json', 				// 添加视屏源信息    参数：对象
            load : path+'role.json',		// 加载视屏源信息    参数：urlId
            edit : path+'role.json',			// 编辑视屏源信息    参数：对象
            del : path+'role.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.version] = {
            list : path+'version.json', // 视频源列表     参数：movieId
            add : path+'version.json', 				// 添加视屏源信息    参数：对象
            load : path+'version.json',		// 加载视屏源信息    参数：urlId
            edit : path+'version.json',			// 编辑视屏源信息    参数：对象
            del : path+'version.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.server] = {
            list : path+'server.json', // 视频源列表     参数：movieId
            add : path+'server.json', 				// 添加视屏源信息    参数：对象
            load : path+'server.json',		// 加载视屏源信息    参数：urlId
            edit : path+'server.json',			// 编辑视屏源信息    参数：对象
            del : path+'server.json' 			// 删除视屏源    参数：urlIds
        };

        /*运营服务管理*/
        url[module.product ] = {
            list : path+'product .json', // 视频源列表     参数：movieId
            add : path+'product .json', 				// 添加视屏源信息    参数：对象
            load : path+'product .json',		// 加载视屏源信息    参数：urlId
            edit : path+'product .json',			// 编辑视屏源信息    参数：对象
            del : path+'product .json' 			// 删除视屏源    参数：urlIds
        };

        url[module.advertising] = {
            list : path+'advertising.json', // 视频源列表     参数：movieId
            add : path+'advertising.json', 				// 添加视屏源信息    参数：对象
            load : path+'advertising.json',		// 加载视屏源信息    参数：urlId
            edit : path+'advertising.json',			// 编辑视屏源信息    参数：对象
            del : path+'advertising.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.adText] = {
            list : path+'adText.json', // 视频源列表     参数：movieId
            add : path+'adText.json', 				// 添加视屏源信息    参数：对象
            load : path+'adText.json',		// 加载视屏源信息    参数：urlId
            edit : path+'adText.json',			// 编辑视屏源信息    参数：对象
            del : path+'adText.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.adPict] = {
            list : path+'adPict.json', // 视频源列表     参数：movieId
            add : path+'adPict.json', 				// 添加视屏源信息    参数：对象
            load : path+'adPict.json',		// 加载视屏源信息    参数：urlId
            edit : path+'adPict.json',			// 编辑视屏源信息    参数：对象
            del : path+'adPict.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.adVideo] = {
            list : path+'adVideo.json', // 视频源列表     参数：movieId
            add : path+'adVideo.json', 				// 添加视屏源信息    参数：对象
            load : path+'adVideo.json',		// 加载视屏源信息    参数：urlId
            edit : path+'adVideo.json',			// 编辑视屏源信息    参数：对象
            del : path+'adVideo.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.statistics] = {
            list : path+'statistics.json', // 视频源列表     参数：movieId
            add : path+'statistics.json', 				// 添加视屏源信息    参数：对象
            load : path+'statistics.json',		// 加载视屏源信息    参数：urlId
            edit : path+'statistics.json',			// 编辑视屏源信息    参数：对象
            del : path+'statistics.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.log] = {
            list : path+'log.json', // 视频源列表     参数：movieId
            add : path+'log.json', 				// 添加视屏源信息    参数：对象
            load : path+'log.json',		// 加载视屏源信息    参数：urlId
            edit : path+'log.json',			// 编辑视屏源信息    参数：对象
            del : path+'log.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.update] = {
            list : path+'update.json', // 视频源列表     参数：movieId
            add : path+'update.json', 				// 添加视屏源信息    参数：对象
            load : path+'update.json',		// 加载视屏源信息    参数：urlId
            edit : path+'update.json',			// 编辑视屏源信息    参数：对象
            del : path+'update.json' 			// 删除视屏源    参数：urlIds
        };
        url[module.feedback] = {
            list : path+'feedback.json', // 视频源列表     参数：movieId
            add : path+'feedback.json', 				// 添加视屏源信息    参数：对象
            load : path+'feedback.json',		// 加载视屏源信息    参数：urlId
            edit : path+'feedback.json',			// 编辑视屏源信息    参数：对象
            del : path+'feedback.json' 			// 删除视屏源    参数：urlIds
        };
		return url;

	}

	function getUrl() {
		var url = [];
		
		url[module.login] = {
			login : '/cms/system/login.do', 				// 登录	参数：username,password,inKaptcha
			register : '/cms/system/register.do', 		// 注册	参数：serial
			languange : '/cms/system/setlanguage.do'		// 选择语言    参数：language
		};
		url[module.main] = {
			list : '/cms/system/loadHomePage.do?uid=1', 	// 菜单
			logout : '/cms/system/logout.do' 			// 注销退出    参数：username
		};
		
		url[module.menu] = {
			list : '/cms/system/queryMenulist.do', 	// 获取列表    参数：param
			add  : '/cms/system/addMenu.do', 		// 添加   参数：menu对象
			load : '/cms/system/queryMenuById.do', 	// 加载    参数：menuId
			edit : '/cms/system/updateMenu.do',   	// 编辑    参数：menu对象
			del  : '/cms/system/deleteMenu.do' 		// 删除    参数：menuIds
		};
		
		url[module.user] = {			
			list : '/cms/system/queryUserlist.do', 	// 获取列表    参数：param
			roles : '/cms/system/queryRoles.do',		// 获取用户绑定角色集合
			add  : '/cms/system/addUser.do', 		// 添加   参数：user对象
			load : '/cms/system/queryUserById.do', 	// 加载    参数：userId
			edit : '/cms/system/updateUser.do',   	// 编辑    参数：user对象
			del  : '/cms/system/deleteUser.do' 		// 删除    参数：userIds
		};
		
		url[module.role] = {			
			list : '/cms/system/queryRolelist.do', 	// 获取列表    参数：param			
			add  : '/cms/system/addRole.do', 		// 添加   参数：role对象
			load : '/cms/system/queryRoleById.do', 	// 加载    参数：roleId
			edit : '/cms/system/updateRole.do',   	// 编辑    参数：role对象
			del  : '/cms/system/deleteRole.do' 		// 删除    参数：roleIds
		};
		
		url[module.category] = {
			list : '/cms/category/queryCategoryList.do', // 获取列表    参数：param
			add : '/cms/category/addCategory.do', 		// 添加   参数：category对象
			load : '/cms/category/queryCategoryById.do', // 加载    参数：categoryId
			edit : '/cms/category/updateCategory.do',   	// 编辑    参数：category对象
			del : '/cms/category/deleteCategory.do' 		// 删除    参数：categoryIds
		};
		url[module.class] = {
			list : '/cms/category/queryClazzList.do', 		// 获取列表     参数：param
			category : '/cms/category/queryCatagoryList.do', 	// 样式   参数：
			add : '/cms/category/addClazz.do', 				// 添加   参数：clazz对象
			load : '/cms/category/queryClazzById.do', 		// 加载   参数：clazzId
			edit : '/cms/category/updateClazz.do', 			// 编辑  参数：clazz对象
			del : '/cms/category/deleteClazz.do' 			// 删除  参数：clazzIds
		};
		url[module.vod] = {
			list : '/cms/movie/queryMovieList.do', 				// 影片列表     参数：cid，classid，param
			category : '/cms/movie/queryMovieCategoryList.do', 	// 影片样式集合     参数：type
			clazz : '/cms/movie/queryMovieClassList.do', 		// 影片风格集合 参数：cid
			referral : '/cms/movie/referralMovie.do', 			// 推荐开关   参数：movieId，referral
			bitrate : '/cms/movie/updateMultyBitrate.do', 		// 多分辨率开关  参数：movieId，isMultyBitrate
			drm : '/cms/movie/updateDrm.do', 					// DRM开关 参数：movieId，drmState
			addBase : '/cms/movie/addMovie.do', 					// 添加基本信息   参数：图片对象imgfile，影片对象movie
			loadBase : '/cms/movie/queryMovieById.do', 			// 加载基本信息   参数：movieId
			editBase : '/cms/movie/updateMovie.do', 				// 加载基本信息   参数：图片对象imgfile，影片对象movie
			del : '/cms/movie/deleteMovie.do' 					// 删除影片 参数：movieIds
		};

		url[module.episode] = {
			list : '/cms/movie/queryEpisodeByMovieId.do', 	// 剧集列表     参数：movieId
			add : '/cms/movie/addEpisode.do', 				// 添加剧集信息    参数：剧集对象episode
			load : '/cms/movie/queryEpisodeById.do',			// 加载剧集信息
			edit : '/cms/movie/updateEpisode.do',			// 编辑剧集信息    参数：剧集对象episode
			del : '/cms/movie/deleteEpisode.do' 				// 删除影片    参数：episodeIds
		};

		url[module.broadcastadd] = {
				list : '/cms/movie/queryBroadcastAddByEpisodeId.do', // 视频源列表     参数：movieId
				add : '/cms/movie/addBroadcastAdd.do', 				// 添加视屏源信息    参数：对象
				load : '/cms/movie/queryBroadcastAddById.do',		// 加载视屏源信息    参数：urlId
				edit : '/cms/movie/updateBroadcastAdd.do',			// 编辑视屏源信息    参数：对象
				del : '/cms/movie/deleteBroadcastAdd.do' 			// 删除视屏源    参数：urlIds
			};
		return url;
	}
	
	//var url = getUrl();
	var url = getTestUrl();

	exports('url', url);
});