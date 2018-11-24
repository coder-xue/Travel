<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@click="handleLetterClick"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
			
		},
		data() {
			return {
				touchStatus: false,
				timer: null
			}
		},
		computed: {
			letters() {
				const letters = [];
				for(let i in this.cities) {
					letters.push(i);
				}
				return letters; //返回的是字母列表的数组 ['A', 'B', 'C' ...]
			}
		},
		methods: {
			handleLetterClick(e) {
				this.$emit('change',e.target.innerText);
			},
			handleTouchStart() {
				this.touchStatus = true;
			},
			handleTouchMove(e) {
				if(this.touchStatus) {
					if(this.timer) {
						clearTimeout(this.timer);
					}

					this.timer = setTimeout(() => {
						
						//字母A元素 
						const letter_A = this.$refs['A'][0];

						//A字母距离其父元素的高度
						// const startY = letter_A.offsetTop;

						//字母A元素对于视窗的位置和自身宽高的集合
						const bounding_A = letter_A.getBoundingClientRect();
						
						//手指触摸的位置信息,这里获取到的是高度
						const touchY = e.touches[0].clientY;
						
						//获取到元素所在的下标
						const index = Math.floor((touchY - bounding_A.top) / bounding_A.height);
						
						if(index >= 0 && index < this.letters.length){
							this.$emit('change',this.letters[index]);
						}

					},16);
					
				}
			},
			handleTouchEnd() {
				this.touchStatus = false;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		right:0;
		top: 1.58rem;
		bottom: 0;
		width: .4rem;
		.item
			text-align: center;
			line-height: .4rem;
			color: $bgColor;
</style>