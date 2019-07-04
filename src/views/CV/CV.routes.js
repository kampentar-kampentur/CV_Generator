import router from '@/router'
import CV from './CV'
import Personal from './category/Personal.vue'
import Summary from './category/Summary.vue'
import Experience from './category/Experience.vue'
import Skills from './category/Skills.vue'
import Languages from './category/Languages.vue'
import Education from './category/Education.vue'
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
        {
          path: 'skills',
          name: 'cv-skills',
          component: Skills,
        },
        {
          path: 'languages',
          name: 'cv-languages',
          component: Languages,
        },
        {
          path: 'education',
          name: 'cv-education',
          component: Education,
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
