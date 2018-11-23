<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
	
</template>

<script>
	export default {
		name: 'HomeHeader',
		props: {
			city: String
		}
	}
</script>

<style lang="stylus" scoped>
	/* 在css文件中引入样式文件前面需要加~ */
	@import '~styles/varibles.styl'
	.header
		display: flex;
		line-height: .86rem;
		background: $bgColor;
		color: #fff;
		.header-input
			flex: 1;
			background: #fff;
			border-radius: .1rem;
			height: .64rem;
			padding-left: .2rem;
			line-height .64rem;
			margin-top: .12rem;
			margin-left: .2rem;
			color: #ccc;
		.header-left
			width: .64rem;
			float: left;
			.back-icon
				text-align: center;
				font-size: .4rem;
		.header-right
			color: #fff;
			width: 1.24rem;
			float: rigth;
			text-align: center;
			.arrow-icon
				font-size: .24rem;
</style>