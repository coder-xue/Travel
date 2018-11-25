<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide
					v-for="(item, index) of imgs"
					:key="index"
			    >
			    	<img class="gallary-img" :src="item">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
		  	</swiper>
  		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonGallary',
		data() {
			return {
				swiperOptions: {
					pagination: '.swiper-pagination', //分页器
					paginationType: 'fraction', //分页器类型
					observeParents: true, //dom结构发生变化时,会自我刷新,可以解决宽度计算问题
					observer: true //同上
				}
			}
		},
		props: {
			imgs: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			handleGallaryClick() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow: inherit;
	.container
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 99;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: #000;
		.wrapper
			width:100%;
			height: 0;
			padding-bottom: 100%;
			.gallary-img
				width: 100%;
			.swiper-pagination
				color: #fff;
				bottom: -1rem;
</style>