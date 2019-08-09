import VueRouter from 'vue-router' //引入 路由组件
//导入对应的组件
import HomeContainer from './companies/tabbar/Homec.vue'
import MemberContainer from './companies/tabbar/Member.vue'
import AboutContainer from './companies/tabbar/About.vue'
import ShopcarContainer from './companies/tabbar/Shopcarc.vue'
import LoginContainer from './companies/tabbar/Loginc.vue'
import Register from './companies/logins/Register.vue'
import NewsList from './companies/news/NewsList.vue'
import NewsInfo from './companies/news/NewsInfo.vue'
import PhotoList from './companies/photos/PhotoList.vue'
import PhotoInfo from './companies/photos/PhotoInfo.vue'
import GoodsList from './companies/goods/GoodsList.vue'
import GoodsInfo from './companies/goods/GoodsInfo.vue'
import GoodsDesc from './companies/goods/GoodsDesc.vue'
import GoodsComment from './companies/goods/GoodsComment.vue'


var router = new VueRouter({
    routes: [ //配置路由规则
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/home/newslist',
            component: NewsList
        },
        {
            path: '/home/newsinfo/:id',
            component: NewsInfo
        },
        {
            path: '/about',
            component: AboutContainer
        },
        {
            path: '/shopcar',
            component: ShopcarContainer
        },
        {
            path: '/member',
            component: MemberContainer,
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            component: LoginContainer
        },
        {
            path: '/logon/register',
            component: Register
        },
        {
            path: '/home/photolist',
            component: PhotoList
        },
        {
            path: '/home/PhotoInfo/:id',
            component: PhotoInfo
        },
        {
            path: '/home/GoodsList',
            component: GoodsList
        },
        {
            path: '/home/goodsinfo/:id',
            component: GoodsInfo
        },
        {
            path: '/home/goodsdesc/:id',
            component: GoodsDesc,
            name: 'goodsdesc'
        },
        {
            path: '/home/goodscomment/:id',
            component: GoodsComment,
            name: 'goodscomment'
        },






    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类 默认的类叫做 router-link-active
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        //用户点击博客链接 用户未登录 需要登录判断
        //准备跳转登录页面
        if (sessionStorage.getItem('user')) {
            //用户已经登录 放行
            next()
        } else {
            next({
                path: '/login' //进入登录页面
            })
        }
    } else {
        next() //不跳用next会卡住
    }
});


export default router //把路由对象暴露出去