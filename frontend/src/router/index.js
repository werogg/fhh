import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import CreateCite from '../components/CreateCite'
import ConsultSpecialist from '../components/ConsultSpecialist'
import ConsultResults from '../components/ConsultResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/cite/',
      name: 'CreateCite',
      component: CreateCite
    },
    {
      path: '/consult/',
      name: 'ConsultSpecialist',
      component: ConsultSpecialist
    },
    {
      path: '/results/',
      name: 'ConsultResults',
      component: ConsultResults
    }
  ]
})
