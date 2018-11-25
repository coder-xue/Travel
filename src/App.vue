<!-- 根组件 -->

<template>
  <div id="app">
	<!-- 把路由加载过的内容保存在内存中,当再次加载路由的时候,不会去重新渲染,不会去重新执行钩子函数,直接从内存中去拿到对应的内容,提高了性能 -->
    <keep-alive>
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
