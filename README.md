# tabbar

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 封装一个简单的菜单组件

##### 可以根据需求配置图标和颜色

```
<tab-item path="" activeColor="">
  <img slot="item-icon" src="" alt="">
  <img slot="item-icon-ac" src="" alt="">
  <div slot="item-test"></div>
</tab-item>

```

activeColor:字体颜色 
item-icon:未选中图标 
item-icon-ac:选中时图标 
item-test:文本


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
