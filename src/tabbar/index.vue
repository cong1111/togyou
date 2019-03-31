<template>
  <div id="footer">
    <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path" :key="index" >
     
          <i class="iconfont" v-html="item.icon"></i>
        
          <p>{{item.title}}</p>
       
    </router-link>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/homepage",
          icon: "&#xe60c;"
        },
        {
          title: "分类",
          path: "/classifivation",
          icon: "&#xe609;"
        },
        {
          title: "拼团",
          path: "/assemble",
          icon: "&#xe60f;"
        },
        {
          title: "购物车",
          path: "/shoppingcart",
          icon: "&#xe619;"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe66e;"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$color: #fff;
#footer {
  width: 100%;
  height: 0.98rem;
//   background: red;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
  i {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 0.4rem;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #70707c;
    //   margin-bottom : .1rem;
    margin-top: 0.1rem;
    font-weight: 600;
  }

  p {
    width: 100%;
    height: 100%;
    font-size: 0.25rem;
    color: #70707c;
    text-align: center;
  }
  
}
#footer>.router-link-exact--active{
      color : red;
  }
</style>