<template>
	<view id="pag_top" style="background:#F6F8FB;">

		<view class="container-fill">
			<view class="scroll-fullpage">
				<!-- 数字分身页 -->
				<view :style='{height:windowHeight+"px",marginTop: keyHeight +"px"}' class="digital a1">

					<!-- 默认模型展示 -->
					<view v-if="isSpeak == 1">
						<image :src="nospeak" class="video_w" :style="{'z-index': img_index}" mode="aspectFill"></image>
						<video :src="nospeak1" muted id="noVideo" loop :controls="true" :show-fullscreen-btn="false"
							:show-center-play-btn="false" objectFit='cover' http-cache class="video_w"
							:style="{'z-index': no_index}" @click="playVideo"></video>
						<video :src="speak1" id="myVideo" :controls="false" :show-fullscreen-btn="false"
							:show-center-play-btn="false" objectFit='cover' http-cache class="video_w"
							:style="{'z-index': y_index}" @click="playOne" @ended="oneEnd"></video>
					</view>

					<!-- 自己模型展示 -->
					<view v-if="isSpeak == 2">
						<image :src="getImgUrl(infoSpeak.out_video_cover)" class="video_w"
							:style="{'z-index': img_index}" mode="aspectFill"></image>
						<video :src="getImgUrl(infoSpeak.out_video)" muted id="noVideo" loop :controls="false"
							:show-fullscreen-btn="false" objectFit='cover' http-cache :show-center-play-btn="false"
							class="video_w" :style="{'z-index': no_index}" @click="playSpeak"></video>
						<video :src="getImgUrl(infoSpeak.out_video_speak)" muted loop id="myVideo" :controls="false"
							:show-fullscreen-btn="false" objectFit='cover' http-cache :show-center-play-btn="false"
							class="video_w" :style="{'z-index': y_index}" @click="speakOne"></video>
					</view>

					<!-- 顶部选项 -->
					<view class='top-nav' v-if="isSpeak == 2">

						<view v-if="infoSpeak.user_mobile" @click="toPhone(infoSpeak.user_mobile)">
							<image :src='phoneImg'></image>
							<text>电话</text>
						</view>
						<view v-if="infoSpeak.wechat_code" @click="checkInfo(1)">
							<image :src='wxImg'></image>
							<text>微信</text>
						</view>
						<view v-if="infoSpeak.group_code" @click="checkInfo(2)">
							<image :src='wxgImg'></image>
							<text>微信群</text>
						</view>
						<view v-if="infoSpeak.model_website" @click="checkInfo(3)">
							<image :src='webImg'></image>
							<text>网址</text>
						</view>
						<view @click="message()" v-if="temp_id">
							<u-icon name="chat" size="21" color="#FFF"></u-icon>
							<text>留言</text>
						</view>
					</view>
					<!-- 右边菜单 -->
					<view class='right-nav'>
						<!-- <view v-for='(item,index) in digital_right_nav' @click="toDigital(index)" :key='item.text'>
						<image :src='item.img'></image>
						<text>{{item.text}}</text>
					</view> -->
						<view @click="toDigital(0)">
							<image :src='tabImg5'></image>
							<text>创建形象</text>
						</view>
						<view @click="toDigital(1)">
							<image :src='tabImg1'></image>
							<text>我的分身</text>
						</view>
						<view @click="toDigital(2)" v-if="infoSpeak != ''">
							<image :src='tabImg2'></image>
							<text>去对话</text>
						</view>
						<view @click="toDigital(3)" v-if="infoSpeak != '' && !temp_id">
							<image :src='tabImg3'></image>
							<text>分享</text>
						</view>
						<view @click="toDigital(4)" v-if="infoSpeak != '' && !temp_id">
							<image :src='tabImg4'></image>
							<text>记录</text>
						</view>

					</view>
					<!-- 底部滑动提示 -->
					<!-- <view class='bottom-tips'>
						<text>了解更多AI能力</text>
						<image src="https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/更多.png"
							mode=""></image>
					</view> -->
				</view>
				<!-- 留言 -->
				<u-popup :show="messageShow" mode="center" :round="8" length="auto">
					<view class="message-box">
						<view class="message-close" @click="messageShow = false">
							<u-icon name="close" size="21"></u-icon>
						</view>
						<view class="message-title">留言</view>
						<view class="message-content">
							<u-textarea v-model="messageValue" placeholder="请输入你想留言的内容" maxlength="-1"></u-textarea>
							<view class="phone_title">联系方式</view>
							<u--input placeholder="请输入手机号码" border="surround" maxlength="30"
								v-model="messagePhone"></u--input>
							<view class="message-submit" @click="messageSubmit">提交</view>
						</view>
					</view>
				</u-popup>

				<!-- 顶部栏提示内容-->
				<u-popup :show="tipShow" mode="center" :round="8" length="auto">
					<view class="message-box">
						<view class="message-close" @click="tipShow = false">
							<u-icon name="close" size="21"></u-icon>
						</view>
						<!-- <view class="message-title">留言</view> -->
						<view class="message-content" v-if="top_tip == 1">
							<image :src="getImgUrl(infoSpeak.wechat_code)" mode="aspectFit" style="width: 100%"></image>
						</view>

						<view class="message-content" v-if="top_tip == 2">
							<image :src="getImgUrl(infoSpeak.group_code)" mode="aspectFit" style="width: 100%"></image>
						</view>
						<view class="message-content" v-if="top_tip == 3">
							<view style="margin-top: 40rpx; text-align: center;">{{ infoSpeak.model_website }}</view>
							<view class="message-submit" @click="copyWebsite(infoSpeak.model_website)">复制</view>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
	</view>

	</view>
</template>

<script>
	import { getUserInfo } from '@/apis/chat.js'
	import {
		getToken
	} from '@/apis/user.js'
	import {
		getapplication,
		getModelList,
		getInteract,
		creatMessage,
		updateVisit
	} from '@/apis/home.js'

	
	export default {
		
		data() {
			return {
				//触摸
				starty_digital: 0,
				endy_digital: 0,
				scrollindex: 0,
				windowHeight: '100vh', //窗口可用高度
				
				phoneImg: global.baseImg + "/xcx/com/message_center/Frame 427321012.png",
				wxImg: global.baseImg + "/xcx/com/message_center/Frame 427319549.png",
				wxgImg: global.baseImg + "/xcx/com/message_center/users-group.png",
				webImg: global.baseImg + "/xcx/com/message_center/web_site.png",

				tabImg1: global.baseImg + "/xcx/com/message_center/minus-square.png",
				tabImg2: global.baseImg + "/xcx/com/message_center/消息 1.png",
				tabImg3: global.baseImg + "/xcx/com/message_center/分享 4.png",
				tabImg4: global.baseImg + "/xcx/com/message_center/记录 (1).png",
				tabImg5: global.baseImg + "/xcx/com/message_center/creat.png",

				keyHeight: 0,
				// topHeight: 0,
				isTop: false,

				nospeak: global.baseImg + '/xcx/com/message_center/renwu.png',
				nospeak1: global.baseImg + '/xcx/com/message_center/nospeak1.mp4',
				speak1: global.baseImg + '/xcx/com/message_center/speak.mp4',
				isone: true,
				videoContext_no: '',
				videoContext: '',

				infoSpeak: '',
				token: '',
				voice_url: '',
				innerAudioContext: null,

				noLoad: true,
				yLoad: true,
				noSpekLoad: true,
				ySpeakLoad: true,

				nav_title: 'AI数字分身',
				is_click: false,
				interact: '',
				click_count: 0,

				messageShow: false, //留言框
				messageValue: "", //留言文本
				messagePhone: "", //留言电话
				temp_id: '',

				tipShow: false,
				top_tip: 1,

				img_index: 9,
				no_index: 8,
				y_index: 7,

				webSocketTask: '',
				isSpeak: 3

			}
		},

		onLoad(query) {
			if (query.q) {
				let scene = decodeURIComponent(query.q);
				let val = this.getUrlDataFN(scene);
				console.log(val, 5566)
				uni.setStorageSync('loginCode', val);
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				}
			} else if (query.scene) {
				let scene = decodeURIComponent(query.scene);

				this.temp_id = scene
				this.updateVisit(scene)
			}

			//语音播放初始化
			this.init()
		},

		onShow() {

			this.videoContext_no = uni.createVideoContext('noVideo')
			this.videoContext = uni.createVideoContext('myVideo')

			setTimeout(() => {
				// this.getTab()
				// this.getapplication();
				// this.getMessageList();
				// this.getOrderList();
				// this.putRealName()
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				console.log(userInfo, 5587)
				if (userInfo.role == 'guess') {
					this.headImg = global.baseImg + '/xcx/com/message_center/Frame%20427320149.png'
					this.isLogin = false
					// this.getTutor();
					
					this.isSpeak = 1
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;
					setTimeout(() => {
						this.videoContext_no.play()
					}, 1000)
					console.log('进来了')
				} else {
					this.getModelList()
					// this.getMe()
					this.isLogin = true
				}
			}, 1000)



			// let that = this;
			// uni.createSelectorQuery().select(".head_index").boundingClientRect(function(
			// 	res) { //定位到你要的class的位置

			// 	// console.log(res.height, 410)
			// 	that.keyHeight = res.height;
			// 	that.windowHeight = uni.getSystemInfoSync().windowHeight - that.keyHeight; //获取窗口可用高度
			// 	// that.topHeight = res.height + 40
			// }).exec()

		},

		onHide() {
			this.select_text = 0;
			this.current = 0;
		},

		// onPageScroll(e) {
		// 	console.log(e.scrollTop, 1423);
		// 	if (e.scrollTop > 600) {
		// 		this.isCreat = true
		// 	} else {
		// 		this.isCreat = false
		// 	}
		// },
		onHide() {
			// uni.closeSocket()
			// uni.onSocketClose(function(res) {
			// 	console.log('WebSocket 已关闭！');
			// });
		},

		onUnload() {
			// uni.closeSocket()
			// uni.onSocketClose(function(res) {
			// 	console.log('WebSocket 已关闭！');
			// });
			this.stop()
		},

		methods: {
			
			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});

				this.innerAudioContext.onEnded(() => {

					console.log('播放停止了')
					// this.innerAudioContext.stop()
					//关闭视频
					this.videoContext.stop() //静默视频停止
					this.videoContext_no.play() //静默视频停止
					this.noSpekLoad = true
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;

				})

				this.innerAudioContext.onStop((res) => {
					console.log(res,'出错了111');
				});
			},

			updateVisit(model_id) {
				let val = {
					'model_id': model_id
				}
				updateVisit(val).then(res => {
					if (res.code == 20000) {} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('生成失败');
				})
			},

			getInteract() {
				let val = {
					'model_id': this.infoSpeak.model_id,
					'question': '',
					'is_click': 1
				}
				getInteract(val).then(res => {
					if (res.code == 20000) {
						this.click_count++
						if (this.click_count == 1 && this.infoSpeak.share_desc) {
							this.interact = this.infoSpeak.share_desc
							// console.log('分享')
						} else if (this.click_count == 2 && this.infoSpeak.model_function) {
							this.interact = this.infoSpeak.model_function
							this.click_count = 0
							// console.log('model')
						} else if (this.click_count == 0 && this.infoSpeak.model_greetings) {
							this.interact = this.infoSpeak.model_greetings
							// console.log('greting')
						} else {
							this.interact = '你好我是数字分身，有什么问题可以向我提问'
							// console.log('自己提问')
						}

						if (this.interact) {
							this.innerAudioContext.stop();
							this.getRcordToken()
						} else {
							this.innerAudioContext.play();
							this.videoContext.play()
						}

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},

			play(url) {
				this.innerAudioContext.src = url;
				this.innerAudioContext.play();
			},

			//原生停止
			stop() {
				this.innerAudioContext.stop();
				//关闭视频
				this.videoContext.stop() //静默视频停止
				this.videoContext_no.play() //静默视频停止
				this.noSpekLoad = true
				this.img_index = 8;
				this.no_index = 9;
				this.y_index = 7;
				
			},
			// 获取token
			async getRcordToken() {
				await getToken().then(res => {
					if (res.code == 20000) {
						this.token = res.data.token
						this.speakSocket()
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},
			speakSocket() {
				//创建webSocket
				let that = this
				// console.log(this.token,3333)

				that.webSocketTask = uni.connectSocket({
					url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token=' + this.token,
					header: {
						'content-type': 'application/json'
					},
					success(res) {
						console.log('成功', res);
					},
				})
				// 监听WebSocket连接打开事件
				that.webSocketTask.onOpen((res) => {
					console.log("监听WebSocket连接打开事件", res)
					console.log(that.infoSpeak.model_greetings, 5548)
					let text_val = ''
					if (that.infoSpeak.model_greetings != '') {
						text_val = that.infoSpeak.model_greetings
					} else {
						text_val = '你好我是数字分身，有什么问题可以向我提问'
					}

					that.webSocketTask.send({
						data: JSON.stringify({
							"text": text_val,
							"voice": that.infoSpeak.audio_code,
							"action_type": "send",
						})
					});
					that.webSocketTask.send({
						data: JSON.stringify({
							"action_type": "stop",
						})
					});
				});

				// 接收websocket消息及处理
				that.webSocketTask.onMessage((res) => {
					console.log(res, 777)
					let type = typeof(res.data);
					if (type == 'string') {
						let info = JSON.parse(res.data);
						if (info) {
							let url = info.data;
							this.voice_url = global.baseImg + '/' + url
							// console.log(this.voice_url,5589)
							that.webSocketTask.close()
							that.webSocketTask.onClose(function(res) {
								console.log('WebSocket 已关闭！');
							});
							//互动执行
							if (this.is_click) {
								this.play(this.voice_url)
								this.videoContext.play()
								console.log('准备开始')
								this.is_click = false
								this.img_index = 8;
								this.no_index = 7;
								this.y_index = 9;
							}
						}

					}
				})
				// 监听WebSocket错误
				uni.onSocketError((res) => {
					console.info("监听WebSocket错误" + res)
				});

			},
			//截取url参数
			getUrlDataFN(urlStr) {
				// 定义一个空对象以储存数据
				const urlObj = {}
				// 检查url中是否携带数据
				if (urlStr.indexOf('?') === -1) return null
				// 找到 '?' 对应的下标
				const index = urlStr.indexOf('?') // index = 31
				// 截取 '?' 后的内容
				const dataStr = urlStr.substr(index + 1) // dataStr = a=1&b=2&c=&d=xxx&e
				// 通过 '&' 将字符串分割成数组
				const dataArr = dataStr.split('&') // ['a=1', 'b=2', 'c=', 'd=xxx', 'e']
				// 遍历字符串分割后的数组
				dataArr.forEach(str => {
					// 判断数组内的字符串是否有 '='
					if (str.indexOf('=') === -1) {
						// 如没有 '=' , 则将此字符串作为对象内键值对的键, 键值对的值为 undefined
						urlObj[str] = undefined // { e: undefined }
					} else {
						// 如果有 '='
						// 通过 '=' 将此字符串截取成两段字符串（不推荐使用 split 分割, 因为数据中可能携带多个 '=' ）
						const innerArrIndex = str.indexOf('=')
						const key = str.substring(0, innerArrIndex)
						const value = str.substr(innerArrIndex + 1)
						// 以截取后的两段字符串作为对象的键值对
						urlObj[key] = value // {a: '1', b: '2', c: '', d: 'xxx'}
					}
				})
				// 返回对象
				// console.log(urlObj)
				return urlObj
			},
			// 获取用户列表
			getInfo() {
				getUserInfo().then(res => {
					if (res.code == 20000) {
						this.userInfo = res.data;
						this.avatarUrl = global.baseImg + '/' + res.data.avatar_url
						this.level = res.data.d_level
						uni.setStorageSync('memberInfo', JSON.stringify(res.data));
						uni.setStorageSync("avatarUrl", res.data.avatar_url);
						uni.setStorageSync("level_expire_time", res.data.level_expire_time);
						if (this.userInfo.role != 'guess') {
							this.serveInfo()
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					// this.$api.msg('获取信息失败！')
				})
			},
			// 获取列表
			getModelList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = ''
				let that = this
				if (this.temp_id != '') {
					val = {
						'user_id': userInfo.user_id,
						'model_id': this.temp_id,
						'is_visitor': 1,
						'get_default': 0
					}
				} else {
					val = {
						'user_id': userInfo.user_id,
						'is_visitor': 0,
						'get_default': 1
					}
				}

				getModelList(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							this.isSpeak = 2
							this.infoSpeak = res.data[0]
							this.interact = this.infoSpeak.model_greetings
							// this.getRcordToken()
						} else {
							this.isSpeak = 1
							this.infoSpeak = ''
						}

						setTimeout(() => {
							// console.log('1秒执行')
							that.videoContext_no.play()
							this.img_index = 8;
							this.no_index = 9;
							this.y_index = 7;
						}, 1000)

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},

		

			// 跳转数字分身页面
			toDigital(index) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.showModal({
						title: '提示',
						content: '请登录后查看',
						confirmText: "前往登录",
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.setStorageSync("userInfo", '');
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}
						}
					});
					return
				}
				if (index == 0) {
					// 编辑数字人形象
					uni.navigateTo({
						url: '/childCont/digital/configuration_image'
					})
				} else if (index == 1) {
					// 数字人对话
					uni.navigateTo({
						url: '/childCont/digital/my'
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: '/childCont/digital/chat?temp_id=' + this.temp_id + '&chatInfo=' + JSON.stringify(this
							.infoSpeak)
					})

				} else if (index == 3) {
					// 数字人分享
					uni.navigateTo({
						url: '/childCont/digital/share_digital?model_img=' + this.infoSpeak.out_video_cover +
							'&model_id=' + this.infoSpeak.model_id + '&greet=' + this.infoSpeak.share_desc
					})
				} else {
					uni.navigateTo({
						url: '/childCont/digital/history_digital?model_id=' + this.infoSpeak.model_id
					})
				}

			},


			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},


			//回到顶部
			toTop() {
				uni.createSelectorQuery().select("#pag_top").boundingClientRect(res => { //最外层盒子的节点：类或者id
					console.log('进来了', res);
					uni.pageScrollTo({
						duration: 100, //过渡时间
						scrollTop: 100, //到达距离顶部的top值
					})
				}).exec()
			},

			playVideo() {
				this.videoContext_no.stop() //静默视频停止
				this.videoContext.play() //第一段视频开始播放
                this.img_index = 8;
                this.no_index = 7;
                this.y_index = 9;
				this.yLoad = true
				console.log('kaishi')
			},

			toPlayN() {
				console.log(this.noLoad,774)
				if (this.noLoad) {
					// console.log('播放第一段视频')
					this.noLoad = false
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;
				}
			},

			// 第一段视频暂停、播放
			playOne() {
				this.isone = !this.isone
				if (this.isone) {
					this.videoContext.pause()
				} else {
					this.videoContext.play()
				}
			},

			toPlayY() {
				console.log(this.yLoad,'动态2222')
				if (this.yLoad) {
					// console.log('播放第2段视频')
					this.yLoad = false
					// this.videoContext_no.stop()
					this.img_index = 8;
					this.no_index = 7;
					this.y_index = 9;

				}
			},

			//第一段视频播放完毕自动播放第二段视频
			oneEnd() {
				// console.log('结束了')
				this.videoContext.stop()
				this.videoContext_no.play() //静默视频停止
				this.noLoad = true
				this.img_index = 8;
				this.no_index = 9;
				this.y_index = 7;
			},


			//个人视频方法
			playSpeak() {
				this.getInteract()
				this.videoContext_no.stop() //静默视频停止
				// this.videoContext.play() //第一段视频开始播放
				this.ySpeakLoad = true
				this.is_click = true
				// console.log('播放第一段视频111')
			},

		

			speakOne() {
				this.getInteract()
				this.innerAudioContext.pause(); //点击关闭音频
				this.videoContext.pause() // 点击暂停音频
				this.is_click = true
			},

			//点击留言
			message() {
				this.messageShow = true;
				// console.log(this.messageShow)
			},

			messageSubmit() {
				if (this.messageValue == '') {
					return this.$api.msg('请输入留言内容')
				}
				if (this.messagePhone == '') {
					return this.$api.msg('请输入联系方式')
				}
				let info = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					'model_id': this.infoSpeak.model_id,
					'user_id': info.user_id,
					'content': this.messageValue,
					'user_mobile': this.messagePhone
				}
				creatMessage(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('留言成功');
						this.messageShow = false
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('留言失败');
				})
			},

			toPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},

			checkInfo(tip) {
				this.tipShow = true
				this.top_tip = tip
			},

			copyWebsite(val) {
				wx.setClipboardData({
					data: val, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})
			}

		}
	}
</script>
<style>
	page {
		background: #f6f8fB;
	}
</style>
<style lang="less" scoped>
	.a1,
	.b2 {
		height: 100%;

	}

	.container-fill {
		height: 100vh;
		overflow: hidden;
	}

	.scroll-fullpage {
		transition: all 0.8s;
		height: 100vh;
	}

	.digital {
		width: 100vw;
		position: relative;

		>image {
			width: 100%;
			height: 100%;
		}

		.top-nav {
			// padding: 20rpx 30rpx;
			align-items: center;
			border-radius: 4px;
			// background: rgba(0, 0, 0, 0.60);
			display: inline-block;
			position: absolute;
			left: 20rpx;
			top: 20rpx;
			z-index: 10;
			display: flex;

			>view {
				padding: 20rpx;
				background: rgba(0, 0, 0, 0.60);
			}

			>view {
				display: flex;
				flex-direction: column;
				justify-content: center;

				image {
					width: 32rpx;
					height: 32rpx;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}

				text {
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;
					/* 166.667% */
				}
			}
		}

		.right-nav {
			position: absolute;
			right: 18rpx;
			top: 50%;
			z-index: 10;
			transform: translate(0%, -50%);

			>view {
				margin-bottom: 16.5rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				image {
					position: relative;
					left: 50%;
					transform: translate(-50%);
					width: 54rpx;
					height: 54rpx;
				}

				text {
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;
					/* 166.667% */
					text-align: center;
				}
			}
		}

	}

	.home {
		min-height: 100vh;
		overflow: hidden;
	}

	.video_w {
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>