<template>
	<div>
		<div class="title">热卖推荐</div>
		<ul>
			<!-- border-bottom 为1px边框 -->
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				
				<img :src="item.imgUrl" alt="" class="item-img">
				
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		data() {
			return {
				recommendList: [{
					id: '0001',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1611/9e/2fbbff27f30cd302.jpg_r_390x260x90_5f6b7794.jpg',
					title: '大连圣亚海洋世界',
					desc: '浪漫大连首站,浪漫的海洋主题乐园' 
				},{
					id: '0002',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1611/9e/2fbbff27f30cd302.jpg_r_390x260x90_5f6b7794.jpg',
					title: '大连圣亚海洋世界',
					desc: '浪漫大连首站,浪漫的海洋主题乐园' 
				},{
					id: '0003',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1611/9e/2fbbff27f30cd302.jpg_r_390x260x90_5f6b7794.jpg',
					title: '大连圣亚海洋世界',
					desc: '浪漫大连首站,浪漫的海洋主题乐园' 
				},{
					id: '0004',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1611/9e/2fbbff27f30cd302.jpg_r_390x260x90_5f6b7794.jpg',
					title: '大连圣亚海洋世界',
					desc: '浪漫大连首站,浪漫的海洋主题乐园' 
				}],
			}
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