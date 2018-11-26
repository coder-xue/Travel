<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">
					{{sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe632;{{this.bannerImgs.length}}
					</span>
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="bannerImgs" 
				v-show="showGallary"
				@close="handleGallaryClose"
			></common-gallary>
		</fade-animation>
	</div>

</template>

<script>
	import CommonGallary from 'common/gallary/Gallary.vue';
	import FadeAnimation from 'common/fade/FadeAnimation.vue';
	export default {
		name: 'DetailBanner',
		components: {
			CommonGallary,
			FadeAnimation
		},
		props: {
			sightName: String,
			bannerImg: String,
			bannerImgs: Array
		},
		data() {
			return {
				showGallary: false,
				imgs: ['https://imgs.qunarzz.com/p/tts4/1810/2e/b86d2cb51b389a02.jpg_r_390x260x90_f2c1cd79.jpg',
						'https://imgs.qunarzz.com/p/tts7/1810/69/c0dbae5ef5feac02.jpg_r_390x260x90_fafedbbe.jpg'
					]
			}
		},
		methods: {
			handleBannerClick() {
				this.showGallary = true;
			},
			handleGallaryClose() {
				this.showGallary = false;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		/*防止页面抖动*/
		height: 0;
		overflow: hidden;
		padding-bottom: 55%;
		position: relative;
		.banner-img
			width: 100%;
		.banner-info
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			line-height: .6rem;
			color: #fff;
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				flex: 1;
				font-size: .32rem;
				padding: 0 .2rem;
			.banner-number
				padding: 0 .4rem;
				height: .32rem;
				line-height: .32rem;
				border-radius: .2rem;
				margin-top: .14rem;
				font-size: .24rem;
				background: rgba(0, 0, 0, .8);
				font-size: .24rem;
				.banner-icon
					font-size: .24rem;
</style>