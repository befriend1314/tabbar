<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/" class="home">首页</router-link>
      <router-link to="/sort" class="sort">分类</router-link>
      <router-link to="/cart" class="cart">购物车</router-link>
      <router-link to="/user" class="user">我的</router-link>
    </div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 15px 0;
  background-color: #f2f2f2;
}

#nav a {
  position: relative;
  flex: 1;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a::before{
  content: '';
  display: block;
  margin: 0 auto;
  width: 25px;
  height: 25px;
  background-size: cover;
}
#nav .home::before{
  background-image: url("./assets/home.png");
}
#nav .sort::before{
  background-image: url("./assets/sort.png");
}
#nav .cart::before{
  background-image: url("./assets/cart.png");
}
#nav .user::before{
  background-image: url("./assets/user.png");
}

#nav a.router-link-exact-active {
  color: #e04006;
}
#nav a.router-link-exact-active::before{
  background-position: 0 81px;
}
</style>
