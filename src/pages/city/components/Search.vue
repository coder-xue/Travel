<template>
	<div>
		<div class="search">
			<input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li 
					class="search-item border-bottom" 
					v-for="item of list"
					:key="item.id"
					@click="handleCityClick(item.name)"
					>{{item.name}}
				</li>
			</ul>
			<ul>
				<li class="search-item border-bottom"  v-show="hasNoData">没有找到数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll';
	import {mapMutations} from 'vuex';

	export default {
		name: 'CitySearch',
		data() {
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData() {
				return !this.list.length;
			} 
		},
		props: {
			cities: Object
		},
		watch: {
			keyword() {
				if(this.timer) {
					clearTimeout(this.timer);
				}
				if(!this.keyword) {
					this.list = [];
					return;
				}
				this.timer = setTimeout(() => {
					const result = [];
					for(let i in this.cities) {
						this.cities[i].forEach((value,index) => {
							if(value.spell.indexOf(this.keyword) > -1 
								|| value.name.indexOf(this.keyword) > -1) {
								result.push(value);
							}
						})
					}
				this.list = result;
				},100);
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.search); //增加滚动效果
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
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .72rem;
		padding: 0 .1rem;
		background: $bgColor
		.search-input
			width: 100%;
			height: .62rem;
			box-sizing: border-box;
			padding: 0 .1rem;
			line-height: .62rem;
			text-align: center;
			border-radius: .06rem;
			color: #666;
	.search-content
		background: #eee;
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		.search-item
			line-height: .62rem;
			padding-left: .2rem;
			color: #666;
			background: #fff;
</style>