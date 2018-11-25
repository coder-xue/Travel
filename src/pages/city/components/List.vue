<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<!-- <div class="button">{{this.$store.state.city}}</div> -->
						<div class="button">{{this.currentCity}}</div>
					</div>	
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div 
						class="button-wrapper" 
						v-for="item of hot" 
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						<div class="button">{{item.name}}</div>
					</div>	
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item, key) of cities" 
				:key="key"
				:ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'  //第三方插件
	import { mapState, mapMutations } from 'vuex'

	export default {
		name: 'CityList',
		mounted() {
			// this.scroll会到data里先去寻找，找不到会去别的地方搜索
			this.scroll = new BScroll(this.$refs.wrapper);
		},
		computed: {
			//把vuex里state定义的公共数据city映射到组件的计算属性中，映射名叫currentCity;在其他地方使用这个数据的时候，可以直接用this.currentCity
			...mapState({
				currentCity: 'city'
			})
		},
		methods: {
			handleCityClick(city) {
				//也可以直接利用commit去调用mutations方法里定义的changeCity方法
				// this.$store.commit('changeCity',city);

				this.changeCity(city);

				//this.$store是vuex创建的全局仓库,然后用disaptch方法去触发 actions里定义的changeCity方法，并传入参数city  (store/index.js)
				// this.$store.dispatch('changeCity',city);

				//跳转到首页
				this.$router.push('/');
			},

			//把vuex里的mutation里定义的方法映射到该组件里名字叫changeCity方法中,调用mutation里的方法就可以直接用this.changeCity()
			...mapMutations(['changeCity'])
		},
		props: {
			cities: Object,
			hot: Array,
			letter: String
		},
		watch: {
			letter(letter) {
				if(letter){
					const element = this.$refs[letter][0];
					
					//better-scroll提供的方法
					this.scroll.scrollToElement(element); 
				}
				
			}
		}
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc;
		&:after
			border-color: #ccc;
	.border-bottom
		&:before
			border-color: #ccc;
	.list
		overflow:hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		.title
			line-height: .54rem;
			background: #eee;
			padding-left: .2rem;
			color: #666;
			font-size: .26rem;
		.button-list
			overflow: hidden;
			padding: .1rem .6rem .1rem .1rem;
			.button-wrapper
				float: left;
				width: 33.33%;
				.button
					margin: .1rem;
					text-align: center;
					padding: .1rem 0;
					border: .02rem solid #ccc;
					border-radius: .06rem;
		.item-list
			.item
				line-height: .76rem;
				padding-left: .2rem;
</style>