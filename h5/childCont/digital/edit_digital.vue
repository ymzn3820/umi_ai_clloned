<template>
	<!-- 创建数字分身 -->
	<view class="main">
		<view class="my" @click="toPage()">
			我的分身
		</view>
		<!-- 图片上传区域 -->
		<view class="main-upload">
			<view class="main-upload-box" :style="{border:image != ''?'0px':''}" @click="uploadImg(3)">
				<block v-if="image == ''">
					<u-icon name="plus" color="#666" size="32"></u-icon>
					<text>请上传照片</text>
				</block>
				<image v-else style="height: 450rpx;" mode="heightFix" :src="getImgUrl(image)"></image>
			</view>
			<view class="main-upload-btn" @click="uploadImg(3)">上传照片</view>
			<view class="main-upload-tips">上传的照片需要包含人脸</view>
		</view>
		<!-- 注意事项 -->
		<view class="tips">
			<view class="tips-top">
				<view class="line"></view>
				<text>注意事项</text>
				<view class="line"></view>
			</view>
			<view class="tips-content">
				<view class="tips-content-box" v-for="(item,index) in tipsData" :key="index">
					<image :src="item.img"></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<!-- <view class="tips">
			<view class="tips-top">
				<view class="line" style="width: 32%"></view>
				<text>克隆自己的声音</text>
				<view class="line" style="width: 32%"></view>
			</view>
			
			<view class="tips_copy" @click="toClone">
				<view class="copy_l">
					<text class="copy_text">购买声音克隆服务，定制专属你的声音</text>
				</view>
				<view class="copy_r">￥299</view>
			</view>
		</view> -->
		<!-- 选择声音 -->
		<view class="audio">
			<view class="audio-title">
				<view>
					<view class="line-title"></view>
					<text>选择声音</text>
				</view>
				<view v-if="boyUrl != ''" @click="play(boyUrl)">试听</view>
			</view>
			<!-- 选择声音 -->
			<view class="audio-check">
				<view class="audio-check-box">
					<view @click="openSelect">
						<text>{{ boyValue }}</text>
						<u-icon name="arrow-down" color="#666" size="18"></u-icon>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 声音选择器 -->
		<u-picker :show="boyShow" ref="uPicker" :columns="boyList" v-model="boyIndex" :defaultIndex="[0,0]" keyName="voice_name" @cancel="boyShow = false" @confirm="boySubmit" @change="changeHandler"></u-picker>
		
		<!-- 表单内容 -->
		<view class="form">
			<view class="form-tips">温馨提示：完善下方信息，聊天会更加有趣哦</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身名称</text>
				</view>
				<u--input placeholder="请输入数字分身名称" border="surround" maxlength="10" v-model="user_name"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身类型</text>
				</view>
				<u--input placeholder="如销售,客服,律师等" border="surround" maxlength="30" v-model="user_type"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">联系电话</text>
				</view>
				<u--input placeholder="请输入联系方式" border="surround" maxlength="30" v-model="user_phone"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">微信</text>
				</view>
				<view class="qs_img">
					<view v-if="wxImg != ''"  @click="uploadImg(1)">
						<img class="up_img" :src="getImgUrl(wxImg)" alt="" />
						<!-- <img class="del_img" :src="delImg" alt="" @click.stop="wxImg.splice(index,1)" /> -->
					</view>
					<img class="up_img" src="@/static/user/upload.png" mode="aspectFit" @click="uploadImg(1)" v-else/>
				</view>
				<view class="img_text">上传微信二维码</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">微信群</text>
				</view>
				<view class="qs_img">
					<view v-if="qsImg != ''" @click="uploadImg(2)">
						<img class="up_img" :src="getImgUrl(qsImg)" alt="" />
						<!-- <img class="del_img" :src="delImg" alt="" @click="qsImg.splice(index,1)" /> -->
					</view>
					<img class="up_img" src="@/static/user/upload.png" mode="aspectFit" @click="uploadImg(2)" v-else />
				</view>
				<view class="img_text">上传微信群二维码</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">宣传地址</text>
				</view>
				<u--input placeholder="请输入你的宣传地址" border="surround" maxlength="30" v-model="user_address"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分享描述语</text>
				</view>
				<u-textarea v-model="share_desc" placeholder="默认:快来探索数字化的我"
					maxlength="25" count></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">招呼语</text>
				</view>
				<u-textarea v-model="greeting" placeholder="默认:您好,我是您的数字分身有什么问题可以随时问我"
					maxlength="-1"></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身设定</text>
				</view>
				<u-textarea v-model="user_greet" placeholder="您好,我是您的数字分身有什么问题可以随时问我"
					maxlength="-1"></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">个性化标签</text>
				</view>
				<view class='surround'>
					<view class="u-page__tag-item" v-for="(tip, index1) in tagList" :key="index1">
						<u-tag :text="tip" size="mini" plain closable @close="delTag(index1)"></u-tag>
					</view>
					<view class="u-page__tag-item">
						<u-tag text="添加" size="mini" icon="plus" plain @click="addTag()"></u-tag>
					</view>
				</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">知识库</text>
				</view>
				<u-textarea v-model="zs_value" placeholder="这里的内容,仅供数字分身使用,分身将有限使用这里的知识回答问题,您填写的越丰富,分身就越智能"
					maxlength="-1"></u-textarea>
			</view>
			
		</view>
		<!-- 公司信息 -->
		<view class="company">
			<!-- 标题 -->
			<view class="company-title">
				<text>提示：如果是设定为工作分身，请完善以下信息</text>
				<!-- <text>保存</text> -->
			</view>
			<!-- 主内容 -->
			<view class="company-content">
				<view class="company-box">
					<view class="company_left">公司名称</view>
					<view class="company_right">
						<u--input placeholder="请输入分身的公司名称" border="surround" maxlength="30" v-model="company_name"></u--input>
					</view>
				</view>
				<view class="company-box">
					<view class="company_left">职位</view>
					<view class="company_right">
						<u--input placeholder="请输入分身的职位" border="surround" maxlength="30" v-model="job"></u--input>
					</view>
				</view>
				<view class="company-box">
					<view class="company_left">公司产品</view>
					<view class="company_right">
						<u--input placeholder="请输入分身要介绍的产品信息" border="surround" maxlength="30" v-model="product"></u--input>
					</view>
				</view>
				<view style="color:red; font-size: 26rpx;">若有多个产品请用英文逗号隔开</view>
			</view>
		</view>
		<!-- 确定按钮 -->
		<view class="submit" @click="submit()">保存全部</view>
		
		<!-- 添加标签 -->
		<u-modal :show="tagShow" @cancel="closeTag" confirmText="添加" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="confirmTag">
			<view class="key_cont" style="">
				<view class="title">添加标签</view>
				<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="tagName"
					maxlength="10" aceholder="请输入标签" type="text"></u-input>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getSpeechVoice
	} from '@/apis/user.js'
	import {
		editModel
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				// 注意事项数据
				tipsData: [{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320021.png',
						text: '光线充足',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320022.png',
						text: '周围安静',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320025.png',
						text: '面部无遮挡',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320023.png',
						text: '声音清晰',
					},
				],
				
				tagList: [],
				tagShow: false,
				tagName: '',
				
				//男生选择器
				boyValue: '选择男声',
				boyIndex: '',
				boyEngine: '',
				boyUrl: '',
				boyCode:'',
				boyShow: false,
				boyList: [
					[{'voice_name': '男声'}, {'voice_name': '女声'}]
				],
				boyListData: [],
				image:"",
				
				user_name: '',
				user_type: '',
				user_phone: '',
				wxImg: '',
				qsImg: '',
				user_address: '',
				share_desc: '',
				greeting: '',
				user_greet: '',
				zs_value: '',
				company_name: '',
				job: '',
				product: '',
				
				innerAudioContext: null,
				playShow: false,
				picImg: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				
				info: ''
				
				
			}
		},
		onLoad(option) {
			if(option.info) {
				this.info = JSON.parse(option.info)
				console.log(this.info, 8879)
				this.user_name = this.info.model_name;
				this.image = this.info.face_image
				this.boyValue = this.info.audio_name
				this.boyIndex = this.info.audio_id
				this.boyEngine = this.info.engine_code
				this.boyUrl = this.info.audio_url
				this.boyCode = this.info.audio_code
				this.user_type = this.info.model_type
				this.user_phone= this.info.user_mobile
				this.wxImg= this.info.wechat_code
				this.qsImg= this.info.group_code
				this.user_address= this.info.model_website
				this.share_desc= this.info.share_desc
				this.greeting= this.info.model_greetings
				this.user_greet= this.info.model_function
				this.zs_value= this.info.model_kb
				this.company_name= this.info.model_company_name
				this.job= this.info.model_position
				this.tagList = this.info.tags
				this.product = this.info.model_company_prod
				// if(this.info.model_company_prod.length > 0) {
				// 	this.product = this.info.model_company_prod.join(',')
				// } else { 
				// 	this.product = ''
				// }
			}
			
		   //语音播放初始化
		   this.init()
		},
		onShow() {
		    this.getmanVoice()
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
					this.innerAudioContext.stop()
					this.playShow = false
				})
			},
			play(url) {
				this.playShow = true;
				this.innerAudioContext.src = global.baseImg + '/'+url;
				this.innerAudioContext.play();
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},
			
			// 获取男生音色
			getmanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 1
				}
				this.boyList = [
					[{'voice_name': '男声'}, {'voice_name': '女声'}]
				]
				this.boyListData = []
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.boyList.push(res.data)
						this.boyListData.push(res.data)
						this.getwomanVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 获取女生音色
			getwomanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 2
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.boyListData.push(res.data)
						this.getmyVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 获取我的音色
			getmyVoice(code) {
				let val = {
					'engine_code': '1000010006',
					'voice_type': 2,
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						if(res.data) {
							this.boyList[0].unshift({'voice_name': '我的声音'})
							this.boyListData.unshift(res.data)
							this.boyList.pop()
							this.boyList.push(res.data)
							// this.boyValue = '选择我的声音'
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 跳转我的页面
			toPage(){
				uni.navigateTo({
					url: '/childCont/digital/my'
				})
			},
			
			openSelect() {
				this.boyShow = true
			},
			submit(){
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let product_arr = []
				if(this.product != '') {
					product_arr = this.product.split(',')
				} else {
					this.product = []
				}
				let val = {
					'user_id': userInfo.user_id,
					'token': userInfo.token,
					'model_id': this.info.model_id,
					'face_image': this.image,
					'audio_id': this.boyIndex,
					'audio_name': this.boyValue,
					'audio_url': this.boyUrl,
					'audio_code': this.boyCode,
					'engine_code': this.boyEngine,
					'base_model_id': this.info.base_model_id,
					'base_model_url': this.info.base_model_url,
					'base_model_url_speak': this.info.base_model_url_speak,
					'similarity': this.info.similarity,
					'model_name': this.user_name,
					'user_mobile': this.user_phone,
					'wechat_code': this.wxImg,
					'group_code': this.qsImg,
					'share_desc': this.share_desc,
					'model_greetings': this.greeting,
					'model_kb': this.zs_value,
					'model_type': this.user_type,
					'model_function': this.user_greet,
					'model_company_name': this.company_name,
					'model_position': this.job,
					'model_company_prod': product_arr,
					'tags': this.tagList,
					'model_website': this.user_address
				}
				uni.showLoading({
					title: '上传中，请稍后',
					mask: true
				});
				editModel(val).then(res => {
					if (res.code == 20000) {
						//成功跳转中转页面
						uni.hideLoading()
						uni.navigateTo({
							url: '/childCont/digital/status_digital?edit=2'
						})
					} else {
						uni.hideLoading()
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					uni.hideLoading()
					this.$api.msg('修改失败！')
				})
				
			},
			// 上传图片
			uploadImg(tip) {
				let that = this;
				uni.chooseMedia({
					count: 1,
					mediaType: ['image'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success(res) {
						uni.showLoading({
							title: '上传中'
						});
						console.log(res.tempFiles)
						const tempFilePaths = res.tempFiles[0].tempFilePath;
						const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
						uni.uploadFile({
							url: global.loginUrl + '/api/user/oss_upload',
							filePath: tempFilePaths,
							name: 'image',
							formData: {
								"image": tempFilePaths,
								"oss_dir": 'static',
								"cate": 'problem_picture'
							},
							success: (uploadFileRes) => {
								let imgData = JSON.parse(uploadFileRes.data)
								if (imgData.code == 20000) {
									let url = imgData.data.new_url
									if(tip == 1) {
										that.wxImg = url
									} else if(tip == 2) {
										that.qsImg = url
									} else {
										that.image = url;
									}
								}
								uni.hideLoading()
							},
						});
					}
				})
			},
			
			myConfirm(e) {
				this.myShow = false
			},
			closeTag() {
				this.tagName = ''
				this.tagShow = false
			},
			//删除标签
			delTag(index) {
				this.tagList.splice(index, 1)
				this.$forceUpdate()
			},
			addTag(index) {
				this.tagIndex = index;
				this.tagShow = true
			},
			confirmTag() {
				if (this.tagName.trim() == '') {
					this.$api.msg('请输入标签名称')
					return
				}

				let data = this.tagName

				this.tagList.push(data)
				this.tagShow = false;
				this.tagName = '';
				console.log(this.tagList, 666)
			},
			
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			
			//男生选择
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.boyListData[index])
				}
			},
			
			boySubmit(e) {
				console.log(e,8854)
				this.boyIndex = e.value[1].voice_code;
				this.boyEngine = e.value[1].engine_code;
				this.boyUrl = e.value[1].speech_url;
				this.boyValue = e.value[1].voice_name;
				this.boyCode =  e.value[1].voice;
				this.boyShow = false;
				console.log(this.boyUrl, 3325)
			},
			
			toClone() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				uni.navigateTo({
					url: '/childCont/clone/voice_clone'
				})
			},
			
			toH5Link() {
			
				uni.showModal({
					title: '提示',
					content: '使用该功能需实名认证，点击确定进行实名',
					success(res) {
						if (res.confirm) {
							// uni.navigateTo({
							// 	url: '/childPage/news/h5Link',
							// })
							let val = {
								"path": "/pages/chat/chat_history", //#  跳转路径，为空跳首页
								"query": "", //# 想要携带的query参数
								"env_version": "" //# 跳转的版本默认release线上
							}
			
							getRealNameAuthentication(val).then(res => {
								if (res.code == 20000) {
									let href = encodeURIComponent(res.data.openlink)
									uni.setStorageSync('href', href)
									let data = {
										// "success_url": href,
										// "failed_url": href,
										// "is_xcx": 1
									}
									realNameAuthentication(data).then(res => {
										if (res.code == 20000) {
											// console.log(45610);
											uni.setStorageSync('namelink', res.data.verify_token)
											uni.navigateTo({
												url: '/childPage/news/h5Link',
											})
										}
									}).catch(err => {
										this.$api.msg('跳转失败')
									})
			
								}
							}).catch(err => {
								this.$api.msg('跳转失败')
							})
						}
					}
				})
			
			
			},
		}
	}
</script>

<style scoped lang="less">
	
	.qs_img {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		// margin: 20upx;
		flex-wrap: wrap;
	
		// border-top: 1upx solid #E8E9EB;
		.up_img {
			width: 120rpx;
			height: 120rpx;
			padding: 10rpx;
		}
	
		.del_img {
			position: absolute;
			top: 0;
			right: 0;
			width: 36upx;
			height: 36upx;
		}
	}
	.img_text {
		color: #9A9A9A;
		font-size: 24upx;
		font-style: normal;
		font-weight: 400;
	}
	.chat_text {
		width: 100%;
		padding: 20upx 0;
	
		/deep/.u-textarea {
			padding: 18upx;
			min-height: 100upx;
			max-height: 150upx;
			overflow-y: auto;
		}
	
		.text_cont {
			display: flex;
			align-items: center;
			margin-bottom: 10upx;
			width: 100%;
	
			.text_l {
				color: #FF0101;
				font-size: 22upx;
				font-style: normal;
				font-weight: 400;
				line-height: 26upx;
				margin-right: 5upx;
			}
		}
	
		.text_conts {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10upx;
			width: 100%;
	
	
		}
	
		.text_r {
			color: #000;
			text-align: center;
			font-size: 28upx;
			font-style: normal;
			font-weight: 530;
			line-height: 26upx;
			margin-bottom: 10rpx;
		}
	
		.right_img {
			width: 24upx;
			height: 24upx;
			margin-right: 25upx;
		}
	
		.lists {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 20upx;
			background: #fff;
			border-radius: 8upx;
			border: 0.5px solid #dadbde;
			// margin-bottom: 25upx;
	
			.txt {
				font-size: 26upx;
				margin-left: 20upx;
				flex: 1;
			}
	
		}
	}
	.main {
		width: 100%;
		padding: 0px 64rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
		position: relative;
		.my{
			width: 100rpx;
			height: 100rpx;
			text-align: center;
			border-radius: 50%;
			background: rgb(239, 239, 239);
			color: rgb(154, 154, 154);
			font-size: 26rpx;
			padding: 10rpx;
			position: absolute;
			top: 10rpx;
			left: 20rpx;
		}
		.line-title {
			width: 3px;
			height: 18px;
			background: #1F64FF;
			margin-right: 18rpx;
		}

		.main-upload {
			width: 450rpx;
			border-radius: 8px;
			background: #F6F8FB;
			position: relative;
			left: 50%;
			transform: translate(-50%);

			.main-upload-box {
				width: 450rpx;
				height: 450rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border: 1px dashed #D1D3D6;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				text {
					color: #666;
					font-size: 14px;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					margin-top: 18rpx;
					/* 21px */
				}
			}

			.main-upload-btn {
				width: 100%;
				padding: 10rpx;
				box-sizing: border-box;
				text-align: center;
				border-radius: 8rpx;
				border: 1px solid rgb(31, 100, 255);
				margin-top: 30rpx;
				margin-bottom: 16rpx;
				color: rgb(31, 100, 255);
			}

			.main-upload-tips {
				width: 100%;
				color: #999;
				font-size: 26rpx;
			}
		}

		.tips {
			margin-top: 40rpx;
			width: 100%;

			.tips-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.line {
					width: 37%;
					height: 1px;
					background: linear-gradient(270deg, #D9D9D9 108.88%, rgba(217, 217, 217, 0.00) 0%);
				}

				text {
					color: #2D2D2D;
					font-size: 13px;
					font-style: normal;
					font-weight: 500;
					line-height: 150%;
					/* 19.5px */
				}
			}
			
			.tips_copy {
				width: calc(100% - 20upx);
				border-radius: 8upx;
				border: 1upx solid #999;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20upx 10upx;
				margin-top: 20upx;
				.copy_l{
					display: flex;
					align-items: center;
					.copy_text {
						font-size: 26upx;
						color: #333;
						// padding-left: 10upx;
					}
				}
				.copy_r {
					font-size: 28upx;
					color: #f56c6c;
				}
			}

			.tips-content {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 30rpx;

				.tips-content-box {
					display: flex;
					flex-direction: column;
					margin-top: 24rpx;

					image {
						width: 62rpx;
						height: 62rpx;
						margin-bottom: 24rpx;
						position: relative;
						left: 50%;
						transform: translate(-50%);
					}

					text {
						color: #000;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 150%;
						/* 18px */
					}
				}
			}
		}

		.audio {
			width: 100%;
			margin-top: 60rpx;

			.audio-title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				>view:first-child {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				>view:last-child {
					color: #1F64FF;
				}
			}

			.audio-check {
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.audio-check-box {
					width: 100%;

					>view {
						padding: 10rpx 20rpx;
						border-radius: 16rpx;
						border: 1px solid #999;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 35rpx;
						margin-bottom: 20rpx;
					}
				}

				>view:nth-child(even) {
					display: flex;
					justify-content: flex-end;
				}

			}
		}

		.tag {
			width: 100%;
			padding: 20upx 0;
			margin-top: 30rpx;

			.text_cont {
				display: flex;
				align-items: center;
				margin-bottom: 10upx;
				width: 100%;

				.text_l {
					color: #FF0101;
					font-size: 22upx;
					font-style: normal;
					font-weight: 400;
					line-height: 26upx;
					margin-right: 5upx;
				}
			}

			.text_r {
				color: #333;
				text-align: center;
				font-size: 24upx;
				font-style: normal;
				font-weight: 530;
				line-height: 26upx;
			}
		}

		.surround {
			border-radius: 16rx;
			border: 2rpx solid #D7D9DF;
			padding: 24rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
		}

		.u-page__tag-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 0 10upx 0 0;
		}

		.form{
			width: 100%;
			.form-tips{
				color: #999;
				margin-bottom: 16rpx;
			}
		}
		.company{
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 8rpx;
			background: rgb(239, 239, 239);
			.company-title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text:first-child{
					font-size: 22rpx;
				}
				text:last-child{
					padding: 5rpx 10rpx;
					border: 1px solid #1F64FF;
					color: #1F64FF;
					border-radius: 8rpx;
				}
			}
			.company-content{
				width: 100%;
				margin-top: 30rpx;
				.company-box{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 20rpx;
					.company_left{
						width: 25%;
						text-align: right;
					}
					.company_right{
						width: 70%;
					}
				}
				.company-box:last-child{
					margin: 0px;
				}
			}
		}
		.submit {
			margin: 60rpx 0rpx;
			width: 90%;
			padding: 15rpx 0rpx;
			box-sizing: border-box;
			position: relative;
			left: 50%;
			transform: translate(-50%);
			background: #1F64FF;
			color: #FFF;
			text-align: center;
			border-radius: 12rpx;
		}
	}
	.pop_voice {
		padding: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.pop_img {
			width: 300upx;
			height: 300upx;
		}
		.pop_stop {
			color: #fff;
			font-size: 30upx;
			font-weight: 400;
			line-height: 150%;
			width: 70%;
			background: #1F64FF;
			padding: 15upx 0upx;
			border-radius: 8upx;
			margin-top: 30upx;
			text-align: center;
		}
	}
</style>