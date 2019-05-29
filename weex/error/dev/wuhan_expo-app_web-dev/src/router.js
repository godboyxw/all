/* global Vue */
import Router from 'vue-router'
import Home from '@/components/Home'
import Conduct from '@/components/Conduct'
import Display from '@/components/Display'
import Service from '@/components/Service'
import Exhibition from '@/components/home/Exhibition'
import ExhibitionDetail from '@/components/home/ExhibitionDetail'
import Detail from '@/components/home/detail/Detail'
import Rent from '@/components/home/Rent'
import Sale from '@/components/home/rent/Sale'
import Cart from '@/components/home/rent/Cart'
import Confirm from '@/components/home/rent/Confirm'
import Pay from '@/components/home/rent/Pay'
import Feedback from '@/components/home/Feedback'
import Order from '@/components/home/order'
import Water from '@/components/home/Water'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/conduct',
      name: 'Conduct',
      component: Conduct
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition
    },
    {
      path: '/exhibition/detail',
      name: 'ExhibitionDetail',
      component: ExhibitionDetail
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/water',
      name: 'Water',
      component: Water
    }
  ]
})
