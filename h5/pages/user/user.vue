<template>
	<view style="background: linear-gradient(261deg, #F2F0FB 0%, #F1F9FE 52.84%, #F9FCFF 100%);">
		<view class="user_login">
			<view class="user_login_any">
				<view class="user_login_msg">
					<image class="user_login_icon" :src="avatarUrl" mode="" @click="addInfo"></image>
					<view v-if="userInfo.role == 'guess'" @click="goToLogin">
						<view class="nickname">
							登录/注册
						</view>
						<view class="tokens">
							登录后即可体验更多服务 >
						</view>
					</view>
					<view class="user_title" v-else>
						<view class="nickname">
							{{ userInfo.nick_name }}
						</view>
						<view class="tokens">
							{{ userInfo.mobile }}
						</view>
					</view>
				</view>
				<view class="user_set" @click="checkSet">
					<image class="user_set_icon" :src="setImg"></image>
					<view class="user_set_text">设置</view>
				</view>
			</view>
		</view>
		


		<!-- 营销资产 -->
		<!-- <view class="company_info" :style="companyInfoImg">
			<view class="cont_user">
				<view class="cont_ul">
					<view class="user_icon" style="margin-bottom: 20upx;">
						<view class="icon_list">
							<image class="icon_img" :src='infoImg' />
							<text class="icon_title">企业信息</text>
						</view>

						<view class="icon_list">
							<image class="icon_img" :src='productImg' />
							<text class="icon_title">产品信息</text>
						</view>

						<view class="icon_list">
							<image class="icon_img" :src='newsImg' />
							<text class="icon_title">资讯信息</text>
						</view>

						<view class="icon_list">
							<image class="icon_img" :src='knowImg' />
							<text class="icon_title">知识库</text>
						</view>

					</view>

					<view class="chat_text">
						<view class="text_cont">
							<text class="text_l"></text>
							<text class="text_r">公司名称</text>
						</view>
						<u--input placeholder="请输入公司名称" border="surround" maxlength="50"
							v-model="companyName"></u--input>
					</view>

					<view class="chat_text">
						<view class="text_cont">
							<text class="text_l"></text>
							<text class="text_r">联系电话</text>
						</view>
						<u--input placeholder="请输入联系电话" border="surround" maxlength="20" v-model="phone"></u--input>
					</view>

					<view class="chat_text">
						<view class="text_cont">
							<text class="text_l"></text>
							<text class="text_r">职位</text>
						</view>
						<u--input placeholder="请输入职位" border="surround" maxlength="20" v-model="job"></u--input>
					</view>

					<view class="chat_btn" style="margin-top: 20upx;" @click="goCompany">进入体验</view>
				</view>
			</view>

		</view> -->
		<view style="height: 230rpx;width: 100%;"></view>
		<!-- 卡密兑换 -->
		<u-modal :show="show" @cancel="closeKey" confirmText="兑换" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="changeKey">
			<view class="key_cont" style="">
				<view class="title">卡密兑换</view>
				<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="cardName"
					placeholder="请输入兑换码" type="text"></u-input>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getProductList,
		getUserInfo
	} from '@/apis/chat.js'
	import {
		cardChange,
		getQrCode,
		getCompanyList,
		OperatorStatistics
	} from '@/apis/user.js'
	import Title from "@/pages/title/index.vue"
	export default {
		data() {
			return {
				// nick_name: '微信用户'
				userInfo: {
					role: ""
				},
				cardName: '',
				isClick: true,
				show: false,
				avatarUrl: '',
				userInfo: JSON.parse(uni.getStorageSync('userInfo')),
				headPic1: global.baseImg + '/xcx/com/message_center/user充值中心.png',
				headPic2: global.baseImg + '/xcx/com/message_center/user卡密兑换.png',
				headPic3: global.baseImg + '/xcx/com/message_center/user我要分销.png',

				payImg: global.baseImg + '/xcx/com/message_center/充值.png',


				rightImg: global.baseImg + '/xcx/com/message_center/%E6%9B%B4%E5%A4%9A.png',
				backImg: global.baseImg + '/xcx/com/message_center/%E5%88%86%E9%94%80.png',
				backImg2: global.baseImg + '/xcx/com/message_center/%E4%BC%9A%E5%91%98.png',

				shareImg: global.baseImg + '/xcx/5996afad-f926-4f65-b0e7-edda0649642c.jpg',
				memberImg: global.baseImg + '/xcx/4e20e4ad-b3e6-4c2c-bc9f-82a58ba63714.jpg',
				countImg: global.baseImg + '/xcx/ca60327f-3a7d-44ee-906c-5f193dab9a7e.jpg',
				fxImg: global.baseImg + '/xcx/com/message_center/usergift.png',

				orderImg: global.baseImg + '/xcx/0fbfb940-6e78-4e77-951f-8bb33839406b.jpg',
				roleImg: global.baseImg + '/xcx/com/message_center/user创作中心.png',
				companyImg: global.baseImg + '/xcx/59bb082c-9d28-41cb-aa5b-c787b259cfcb.jpg',
				keyImg: global.baseImg + '/xcx/5e65b669-7914-4e18-ad3d-40c96fc3a5e4.jpg',
				openImg: global.baseImg + '/xcx/8940eb96-25e1-43d8-9dbe-5bff09523c1e.jpg',
				facImg: global.baseImg + '/xcx/com/message_center/user服务商.png',

				historyImg: global.baseImg + '/xcx/b31cf730-b4ed-4471-9504-66bc8e862182.jpg',
				bussImg: global.baseImg + '/xcx/2f504e0c-ca6c-4932-ad6b-5117cb2e37bd.jpg',
				adImg: global.baseImg + '/xcx/3fd32c44-523b-44db-a943-6e3954861339.jpg',
				qsImg: global.baseImg + '/xcx/92c00dde-1e07-4e6f-b9d0-b6930683da7c.jpg',
				versionImg: global.baseImg + '/xcx/08c60d00-5eb8-4453-ad08-5be4e63b914d.jpg',
				setImg: global.baseImg + '/xcx/bd44ea1b-5cce-49e9-962a-9ba82fb5d11d.jpg',

				infoImg: global.baseImg + '/xcx/a18146ee-df32-4ecd-94d4-779dc78e47ab.jpg',
				productImg: global.baseImg + '/xcx/0f78ff2c-ef4e-44a7-9874-8ed66533f18c.jpg',
				newsImg: global.baseImg + '/xcx/086158e9-d48d-4e7d-80d5-98b10d68837d.jpg',
				knowImg: global.baseImg + '/xcx/6322b018-c738-42dd-82ab-c68dcb699e72.jpg',
				companyInfoImg: 'background-image: url("' + global.baseImg +
					'/xcx/86a3d5f4-1184-4a31-8012-85fa8ce84d0a.jpg")',

				vipback: global.baseImg + '/xcx/e72c490f-ed32-4b8c-aa18-159eae09a0f8.jpg',
				vipStart: global.baseImg + '/xcx/cfee4f80-fd59-4f33-8933-be9f73b8723d.jpg',
				chatImg: global.baseImg + '/xcx/com/message_center/user微信.png',
				miniproImg: global.baseImg + '/xcx/com/message_center/小程序.png',
				h5Img: global.baseImg + '/xcx/com/message_center/h5.png',
				pcImg: global.baseImg + '/xcx/com/message_center/pc 1.png',

				companyName: '',
				phone: '',
				job: '',
				isCompany: false,
				isLevel: null,
				level: 0
			}
		},
		components: {
			Title
		},
		onLoad() {

		},
		onShow() {
			this.getInfo()
			this.getQrCode()
			this.getCompanyList()
			this.serveInfo()
		},
		methods: {

			// 获取二维码
			getQrCode() {
				let val = {
					"q_type": "1"
				}
				getQrCode(val).then(res => {
					if (res.code == 20000) {
						uni.setStorageSync('qrCode', res.data);
					} else {
						// this.$api.msg(res.msg);
					}
				}).catch(err => {
					// this.$api.msg('获取信息失败');
				})
			},

			// 获取团队列表列表
			getCompanyList() {

				getCompanyList().then(res => {
					if (res.code == 20000) {
						if (res.data != null) {
							if (res.data.length > 0) {
								this.isCompany = true
							}
						}

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取团队信息失败');
				})
			},
			// 购买会员
			goToLogin() {
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			buyVip() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/pages/user/vip/vip',
					})
				}


			},

			myInvite() {
				this.$api.msg('正在开发中')
			},

			myShare() {
				uni.navigateTo({
					url: '/childPage/distribution/share',
				})
			},

			myDistribution() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/distribution/distribution',
					})
				}

			},

			// 商务合作
			cooperate() {
				uni.navigateTo({
					url: '/pages/user/cooperate/cooperate',
				})
			},
			// 服务商
			facilitator() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					console.log(this.isLevel, 8888)
					if (this.userInfo.d_level!=3) {
						uni.navigateTo({
							url: '/childPage/facilitator/signin?level=' + this.level,
						})
					} else {
						uni.navigateTo({
							url: '/childPage/facilitator/service',
						})
					}
				}

			},

			// 打开历史对话
			goChat() {
				uni.navigateTo({
					url: '/pages/user/history/main_history',
				})
			},

			//查看剩余次数
			checkCount() {
				uni.navigateTo({
					url: '/pages/user/count/count',
				})
			},
			//公告通知
			checkNotice() {
				uni.navigateTo({
					url: '/pages/notice/notice',
				})
			},
			//问题反馈
			checkQuest() {
				uni.navigateTo({
					url: '/childPage/answer/answer',
				})
			},

			// 查看版本
			checkVersion() {
				uni.navigateTo({
					url: '/childPage/version/version',
				})
			},
			// 我的订单
			myOrder() {
				uni.navigateTo({
					url: '/pages/user/order/order',
				})
			},

			//创建中心
			myRole() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/role/role',
					})
				}
			},

			//最近打开
			myOpen() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/open/open',
					})
				}
			},

			//企业定制版
			myCompany() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					if (this.isCompany) {
						uni.navigateTo({
							url: '/childCont/company/company_list',
						})
					} else {
						uni.navigateTo({
							url: '/childCont/company/know_list',
						})
					}
				}
			},

			//卡密兑换
			openKey() {
				this.show = true
			},

			checkSet() {
				uni.navigateTo({
					url: '/pages/user/set/set',
				})
			},

			closeKey() {
				this.cardName = ''
				this.show = false
			},

			changeKey() {
				if (this.cardName == '') {
					this.$api.msg('卡密不能为空');
					return
				}

				if (this.isClick == false) {
					return false;
				}
				this.isClick = false;

				let val = {
					'activate_code': this.cardName,
					'user_id': this.userInfo.user_id
				}

				cardChange(val).then(res => {
					if (res.code == 20000) {
						uni.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 1500
						})
						this.cardName = '';
						this.show = false;
						this.isClick = true;
						this.getInfo()
					} else {
						this.isClick = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('兑换失败');
				})
			},

			// 获取用户列表
			getInfo() {
				getUserInfo().then(res => {
						console.log(res, 320)
					if (res.code == 20000) {
						this.userInfo = res.data;
						this.avatarUrl = global.baseImg + '/' + res.data.avatar_url
						uni.setStorageSync('memberInfo', JSON.stringify(res.data));
						uni.setStorageSync("avatarUrl", res.data.avatar_url);
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					console.log(err, 320)
					this.$api.msg('获取信息失败！')
				})
			},
			serveInfo() {
				let guess = this.userInfo.role
				if (!guess) {
					OperatorStatistics().then(res => {
						if (res.code == 20000) {
							// console.log(res.data, 320)
							this.isLevel = res.data.status;
						} else {
							this.$api.msg(res.msg)
						}
					}).catch(err => {
						this.$api.msg('获取信息失败！')
					})
				}

			},
			// 修改头像
			addInfo() {

				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/pages/user/info/info',
					})
				}
			},
			myLink() {
				window.location.href = "https://mp.weixin.qq.com/s/13GVWgKQKoNIiifMcyImCg";
			},

			goCompany() {
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/company/add_info?companyName=' + this.companyName + '&phone=' + this
							.phone + '&job=' + this.job,
					})
				}

			}

		}
	}
</script>

<style lang="less" scoped>
	page {
		// background: #f6f8fb;
		background: linear-gradient(261deg, #F2F0FB 0%, #F1F9FE 52.84%, #F9FCFF 100%);
	}

	.user-section {
		width: 100%;
		height: 516upx;
	}

	.bg_img {
		width: 100%;
		height: 516upx;
	}

	.user_login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0upx 32upx;
	}

	.user_login_title {
		font-style: normal;
		font-weight: 500;
		font-size: 34upx;
		line-height: 48upx;
		padding-bottom: 40upx;
		color: #000;
	}

	.user_login_any {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 0;
	}

	.user_login_msg {
		/* width: 444upx; */
		height: 142upx;
		display: flex;
		align-items: center;
	}

	.user_title {
		margin-left: 24upx;
	}

	.nickname {
		width: 180upx;
		font-style: normal;
		font-weight: 500;
		font-size: 36upx;
		line-height: 50upx;
		color: #333333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 32upx;
	}

	.tokens {
		font-style: normal;
		font-weight: 400;
		font-size: 28upx;
		line-height: 40upx;
		color: #969699;
		margin-left: 32upx;
	}

	.user_login_icon {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}

	.user_set {
		text-align: center;

		.user_set_icon {
			width: 48upx;
			height: 48upx;
		}

		.user_set_text {
			color: #000;
			font-size: 26rpx;
		}
	}

	.cont_head {
		padding: 0 32rpx;
		margin-top: 39rpx;
		display: flex;
		margin-bottom: 24rpx;

		.cont_l {
			width: 260rpx;
			height: 198rpx;
			border-radius: 26rpx;
			background: #FFF;
			margin-right: 22rpx;

			.l_up {
				color: #1F64FF;
				font-size: 30rpx;
				font-weight: 500;
				margin: 44rpx 0 24rpx 24rpx
			}

			.l_dowm {
				color: #000;
				font-size: 26rpx;
				margin-left: 24rpx;
			}
		}

		.cont_r {
			padding: 32rpx 36rpx;
			width: 472rpx;
			border-radius: 16rpx;
			background: #FFF;
			display: flex;
			justify-content: space-between;

			.r_item {
				text-align: center;

				.r_pic {
					width: 80rpx;
					height: 80rpx;
				}

				.r_text {
					color: #000;
					font-size: 26rpx;
				}
			}
		}
	}

	.user_vip {
		width: 100%;
		height: 100upx;
		margin: 20upx 0 20upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 28upx;
		background: #F4D398;
		border-radius: 16upx;
		color: aliceblue;
	}

	.user_vip_left {
		display: flex;
		align-items: center;

	}

	.key_cont {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		/* padding: 0upx 0 0 0; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-weight: 500;
		font-size: 32upx;
		line-height: 48upx;
		color: #333;
		margin-bottom: 32upx;
	}

	.user_link {
		width: 100%;
		margin-bottom: 15upx;


		.link_cont {

			.cont {
				width: 100%;
				// padding: 30upx 25upx;
				display: flex;
				align-items: center;

				.box {
					width: 348upx;
					height: 128upx;
					position: relative;
				}

				.link_img {
					width: 100%;
					height: 100%;

				}

				.cont_l {
					width: 100%;
					display: flex;
					flex-direction: column;
					padding: 26upx 24upx;
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					width: 100%;

					.l_top {
						display: flex;
						align-items: center;
						flex-direction: row;

						.top_text {
							font-size: 28upx;
							font-weight: 520;
							color: #333;
							padding-right: 15upx;
						}

						.right_img {
							width: 24upx;
							height: 24upx;
						}
					}

					.l_btn {
						color: #AD9245;
						font-size: 22upx;
						font-weight: 400;
						padding-top: 15upx;
					}
				}
			}
		}
	}

	.cont_user {
		padding: 0upx 32upx;
		margin-bottom: 16upx;

		.cont_ul {
			padding: 22upx;
			background: #fff;
			border-radius: 14upx;

			.user_tit {
				color: #333;
				font-size: 30upx;
				font-style: normal;
				font-weight: 520;
				line-height: 150%;
				// margin-bottom: 15upx;
			}

			.user_icon {
				display: flex;
				// justify-content: space-around;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;

				.icon_list {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 20upx 0 10upx 0;
					width: 25%;

					.icon_img {
						width: 48upx;
						height: 48upx;
					}

					.icon_title {
						color: #333;
						font-size: 24upx;
						font-style: normal;
						font-weight: 400;
						line-height: 36upx;
						margin-top: 12upx;
					}
				}
			}
		}

	}

	.company_info {
		width: 100%;
		height: 800upx;
		background-size: 100% 100%;
		padding-top: 200upx;

		.chat_text {
			width: 100%;
			padding: 20upx 0;

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

				.text_r {
					color: #333;
					text-align: center;
					font-size: 24upx;
					font-style: normal;
					font-weight: 530;
					line-height: 26upx;
				}
			}
		}

		.chat_btn {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #1F64FF;
			border-radius: 12upx;
			line-height: 90upx;
			font-style: normal;
			font-weight: 500;
			font-size: 34upx;
			color: #fff;
		}

		.chat_btn:active {
			opacity: 0.5;
		}
	}

	.head {
		width: 100%;
		height: 120upx;
		// padding: 20upx 24upx;
		position: relative;
		margin-bottom: 25upx;

		.head_img {
			width: 100%;
			height: 120upx;
		}

		.head_cont {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 45upx;
			left: 30upx;

			.cont_top {
				display: flex;
				align-items: flex-end;

				.cont_img {
					width: 32upx;
					height: 26upx;
					margin-right: 10upx;
				}

				.top_text {
					color: #FDD995;
					font-size: 30upx;
					font-style: normal;
					font-weight: 500;
					line-height: 30upx;
				}
			}

			.head_desc {
				display: flex;
				align-items: flex-end;

				.desc_right {
					color: #F9EECB;
					font-size: 22upx;
					font-style: normal;
					font-weight: 500;
					line-height: 45upx;
				}
			}
		}

		.right_cont {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 170upx;
			height: 60upx;
			border-radius: 50upx;
			background: linear-gradient(136deg, #FDEABF 0%, #FDD892 100%);
			position: absolute;
			top: 30upx;
			right: 30upx;

			.cont_text {
				color: #754A1D;
				font-size: 26upx;
				font-style: normal;
				font-weight: 500;
				line-height: 32upx;
			}

			.right_img {
				width: 28upx;
				height: 28upx;
				margin-left: 10upx;
			}
		}
	}
</style>