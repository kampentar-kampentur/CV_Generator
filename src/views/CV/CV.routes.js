import router from '@/router'
import CV from './CV'
import Personal from './category/Personal.vue'
import Summary from './category/Summary.vue'
import Experience from './category/Experience.vue'
import Templates from '@/components/Templates.vue'


export default function () {
  router.addRoutes([
    {
      path: '/cv',
      name: 'cv',
      component: CV,
      children: [
        {
          path: 'personal',
          name: 'cv-personal',
          component: Personal
        },
        {
          path: 'summary',
          name: 'cv-summary',
          component: Summary,
        },
        {
          path: 'experience',
          name: 'cv-experience',
          component: Experience,
        },
      ]
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates,
      children: [
        {
          path: 'print',
          name: 'print',
          component: Personal
        },
      ]
    }
  ])
}
