<template>
	<div>
		<div class="title">热卖推荐</div>
		<ul>
			<!-- border-bottom 为1px边框 -->
			<!-- router-link标签默认地会转换成a标签,加上一个tag属性,就会使router-link标签转变成li标签 -->
			<!-- :to='{name:"Detail",params:{id:item.id}}' -->
			<router-link 
				:to='"/detail/" + item.id'
				tag="li" 
				class="item border-bottom" 
				v-for="item of list" 
				:key="item.id"
			>
				<img :src="item.imgUrl" alt="" class="item-img">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .3rem;
	.item
		overflow: hidden;
		height: 1.9rem;
		display: flex;
		.item-img
			width: 1.7rem;
			height: 1.7rem;
			padding: .1rem;
		.item-info
			flex: 1;
			padding: .1rem;
			min-width: 0;
			.item-title
				line-height: .54rem;
				font-size: .32rem;
				ellipsis();
			.item-desc
				line-height: .4rem;
				color: #ccc;
				ellipsis();
			.item-button
				line-height: .44rem;
				background: #ff9300;
				padding: 0 .2rem;
				border-radius: .06rem;
				margin-top: .16rem;
				color: #fff;
</style>