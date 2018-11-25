<template>
	<div>
		<router-link 
			tag="div" 
			to="/" 
			class="header-abs"
			v-show="showAbs"
		>
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link tag="div" to="/">
				<div class="iconfont header-fixex-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailHeader',
		data() {
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll() {
				const top = document.documentElement.scrollTop;
				// 头部的渐隐渐现效果
				if(top > 60) {
					let opacity = top / 140;
					opacity = opacity > 1 ? 1 : opacity;
					this.opacityStyle = { opacity }
					this.showAbs = false;
				} else {
					this.showAbs = true;
				}
			}
		},
		activated() {
			window.addEventListener('scroll',this.handleScroll);
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header-abs
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: .8rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		border-radius: .4rem;
		background: rgba(0, 0, 0, .8);
		.header-abs-back
			color: #fff;
			fontsize: .4rem;
	.header-fixed
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: .86rem;
		line-height: .86rem;
		text-align: center;
		color: #fff;
		background: $bgColor;
		font-size: .32rem;
		.header-fixex-back
			position: absolute;
			top: 0;
			left: 0;
			font-size: .4rem;
			text-align: center;
			width: .64rem;
			color: #fff;
</style>