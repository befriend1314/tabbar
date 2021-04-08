<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-item path="/home" activeColor="#0f0">
        <img slot="item-icon" src="./assets/tabbar/home.svg" alt="">
        <img slot="item-icon-ac" src="./assets/tabbar/home_active.svg" alt="">
        <div slot="item-test">首页</div>
      </tab-item>
      <tab-item path="/sort">
        <img slot="item-icon" src="./assets/tabbar/sort.svg" alt="">
        <img slot="item-icon-ac" src="./assets/tabbar/sort_active.svg" alt="">
        <div slot="item-test">分类</div>
      </tab-item>
      <tab-item path="/cart">
        <img slot="item-icon" src="./assets/tabbar/cart.svg" alt="">
        <img slot="item-icon-ac" src="./assets/tabbar/cart_active.svg" alt="">
        <div slot="item-test">购物车</div>
      </tab-item>
      <tab-item path="/user">
        <img slot="item-icon" src="./assets/tabbar/user.svg" alt="">
        <img slot="item-icon-ac" src="./assets/tabbar/user_active.svg" alt="">
        <div slot="item-test">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import TabItem from "./components/TabBar/TabItem";
export default {
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
