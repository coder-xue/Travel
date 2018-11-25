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
				<!-- store是由vuex创建的的,由于store被注入到了vue的根实例中,所以可以全局使用  在store/index.js中引入了vuex并创建了store -->
				<!-- {{this.$store.state.city}} -->
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
	
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'HomeHeader',
		computed: {
			//mapState 是指把vuex里state定义的数据映射到组件的computed中,名字叫city,调用该数据可以直接用this.city
			...mapState(['city'])
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
			min-width: 1.04rem;
			padding: 0 .1rem;
			float: rigth;
			text-align: center;
			.arrow-icon
				font-size: .24rem;
</style>