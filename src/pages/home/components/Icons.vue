<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
					<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
 
<script>
export default {
	name: 'HomeIcons',
	data () {
		return  {
			swiperOption: {
				autoplay: false
				
			},
			iconList: [
				{ id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景色门票' },
				{ id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png', desc: '文化古迹' },
				{ id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png', desc: '演出' },
				{ id: '0004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '一日游' },
				{ id: '0005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '兴汉胜景' },
				{ id: '0006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园' },
				{ id: '0007', imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png', desc: '打卡圣地' },
				{ id: '0008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png', desc: '兵马俑' },
				{ id: '0009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', desc: '亲子游' },
				{ id: '00010', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', desc: '全部玩乐' }
			]
		}
	},
	computed: {
		pages () {
			const pages = []
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index/8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages    //pages是个二维数组,有多少项表示有多少页
		}
	}
}
</script>
 
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .icons >>> .swiper-container
    height: auto;
    paddding-bottom: 50%;
  .icons
  	  margin-top: .1rem;
	  .icon
	    position: relative;
	    overflow: hidden;
	    float: left;
	    width: 25%;
	    height: 0;
	    padding-top: 25%;
	    .icon-img
	      position: absolute;
	      top: 0;
	      left: 0;
	      right: 0;
	      bottom: .44rem;
	      box-sizing : border-box;
	      padding: .1rem;
	      .icon-img-content
	        height: 100%;
	        display: block;
	        margin: 0 auto;
	    .icon-desc
	      position: absolute;
	      left: 0;
	      right: 0;
	      bottom: 0;
	      height: .44rem;
	      line-height: .44rem;
	      text-align: center;
	      color: $darkTextColor;
	      ellipsis()
</style>