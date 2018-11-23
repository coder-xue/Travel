<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <!-- swiper-slide 有多少个轮播图就有多少个 -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl">
		    </swiper-slide>
		    
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    
	  	</swiper>
  	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination', // 分页器
					loop: true,   //无缝滚动
					autoplay: 2000, //自动轮播
					autoplayDisableOnInteraction: false
				},
				swiperList: [{
					id: '0001',
					imgUrl: 'https://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg'
				},{
					id: '0002',
					imgUrl: 'https://img1.qunarzz.com/vc/a4/36/26/07c5904b545d66b3abe72e9dfa.jpg'
				},{
					id: '0003',
					imgUrl: 'https://img1.qunarzz.com/vc/2f/8e/51/cb4d31b360c836f7d1bbe83c13.jpg'
				},{
					id: '0004',
					imgUrl: 'https://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped="">
	/*scoped 表示只修饰当前组件的class，不会对其他的组件造成影响*/

	/*样式穿透，表示只要wrapper这个类名下出现了该类名，就让该类名的颜色变成白色，这样就不会受scoped的影响了*/

	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff;
	.wrapper
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 31.25%;  /*设置高度为宽度的31.25% */
		background: #eee;
		.swiper-img
			width: 100%;
</style>
