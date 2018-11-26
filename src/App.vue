<!-- 根组件 -->

<template>
  <div id="app">
	<!-- 把路由加载过的内容保存在内存中,当再次加载路由的时候,不会去重新渲染,不会去重新执行钩子函数,直接从内存中去拿到对应的内容,提高了性能 -->

	<!-- 加上了exclude的组件表示不会被缓存,当再次进入该组件时,该组件的钩子函数依然会执行,会重新去渲染该页面 -->
    <keep-alive exclude="Detail">
	    <!-- 显示的是当前路由地址所对应的内容 -->
	    <router-view/>
	</keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
