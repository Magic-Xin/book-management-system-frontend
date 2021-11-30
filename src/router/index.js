import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Login2 from '../components/Login2'
import Manager from '../components/Manager/Manager'
import Student from '../components/Student/Student'
import Searchbook from '../components/Student/Searchbook'
import Returnbook from '../components/Student/Returnbook'
import Borrowbook from '../components/Student/Borrowbook'
import BookFound from '../components/Student/BookFound'
import Bookmissed from '../components/Student/Bookmissed'
import Hfooter from'../components/Hfooter'
import Bookregister from '../components/Student/Bookregister'
import Bookdetails from '../components/Student/Bookdetails'
import Deletebook from '../components/Manager/Deletebook'
import Entrybook from '../components/Manager/Entrybook'
import Updatebook from '../components/Manager/Updatebook'
import Entryuser from '../components/Manager/Entryuser'
import Updateuser from '../components/Manager/Updateuser'

Vue.use(VueRouter)

//配置
const router = new VueRouter({
  routes:[{
    path:'/',redirect:'/Home'

  },
    {
      path:'/Home',
      component:Home,

    },
    {
      path:'/Login',
      component:Login,

    },
    {
      path:'/Login2',
      component:Login2,

    },
    {
      path:'/Manager',
      component:Manager,
      children:[
        {
          path:'/Entrybook',
          component:Entrybook,
        },
        {
          path:'/Updatebook',
          component:Updatebook,
        },
        {
          path:'/Deletebook',
          component:Deletebook,
        },
        {
          path:'/Entryuser',
          component:Entryuser,
        },
        {
          path:'/Updateuser',
          component:Updateuser,
        },

      ]

    },
    {
      path:'/Student',
      component:Student,
      children:[
        {
          path:'/Searchbook',
          component:Searchbook,
          children:[
            {
              path:'/BookFound',
              component:BookFound
            },
            {
              path:'/Bookmissed',
              component:Bookmissed
            },
            {
              path:'/Bookregister',
              component:Bookregister
            },
            {
              path:'/Bookdetails',
              component:Bookdetails
            }
          ]
        },
        {
          path:'/Returnbook',
          component:Returnbook
        },
        {
          path:'/Borrowbook',
          component:Borrowbook
        },
      ]
    },
    {
      path:'/Hfooter',
      component:Hfooter

    },

   ]
})
//导出
export default router
