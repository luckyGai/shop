import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/pages/Shop'
import Search from '@/pages/Search'
Vue.use(Router)

// 二级路由
import Home from '@/pages/Home/Home'
import Computer from '@/pages/Home/Computer'
import Women from "@/pages/Home/Women"
import Sports from "@/pages/Home/Sports"
import Phone from "@/pages/Home/Phone"
import Beaut from "@/pages/Home/Beaut"
import Box from "@/pages/Home/Box"
import Wshooes from "@/pages/Home/Wshooes"
import Car from "@/pages/Home/Car"
import Beer from "@/pages/Home/Beer"

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
      ,
      children: [
        // 主页
        {
          path: "home",
          name: 'Home',
          component: Home,
        },
        // 电脑办公
        {
          path: "computer",
          name: 'Computer',
          component: Computer,

        },
        // 女装内衣
        {
          path: "women",
          name: 'Women',
          component: Women,

        },
        // 运动户外
        {
          path: "sports",
          name: 'Sports',
          component: Sports,

        },
        // 手机数码
        {
          path: "phone",
          name: 'Phone',
          component: Phone,

        },
        // 化妆品
        {
          path: "beaut",
          name: 'Beaut',
          component: Beaut,

        },

        // 箱包
        {
          path: "box",
          name: 'Box',
          component: Box,

        },
        // 女鞋
        {
          path: "wshooes",
          name: 'Wshooes',
          component: Wshooes,

        },
        // 汽车用品
        {
          path: "car",
          name: 'Car',
          component: Car,

        },
        // 酒水饮料
        {
          path: "beer",
          name: 'Beer',
          component: Beer,

        },
      ],
      redirect: "/shop/home"
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
