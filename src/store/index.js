import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PROFESSION,
  CHANGE_ADDRESS,
  CHANGE_PHONE,
  CHANGE_SUMMARY,
  CHANGE_PHOTO,
  ADD_COMPANY,
  CHANGE_EXPERIENCE_INFO,
  CHANGE_DATE,
  ADD_CV_SECTION,
  REMOVE_CV_SECTION,
  CHANGE_TITLE,
} from './const'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalDate: {
      title: 'CV-title',
      personalInfo: {
        photo: '',
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        phone: '',
        social: {
          twitter: 'yummyanime.club/catalog/item/propavshie-fei ',
          github: 'yummyanime.club/catalog/item/propavshie-fei',
        },
        visible: true,
      },
      summary: { text: '', visible: true },
      experience: {
        companies: [
          {
            position: '',
            company: '',
            dateFrom: { year: '2016', month: '1' },
            dateTo: { year: '2016', month: '1' },
            experience: '',
          },
        ],
        visible: false
      },
    },
    selectedTemplate: 'green',
    templates: ['red', 'green']
  },
  mutations: {
    [CHANGE_FIRST_NAME](state, payload) {
      state.personalDate.personalInfo.firstName = payload;
    },
    [CHANGE_LAST_NAME](state, payload) {
      state.personalDate.personalInfo.lastName = payload;
    },
    [CHANGE_PROFESSION](state, payload) {
      state.personalDate.personalInfo.profession = payload;
    },
    [CHANGE_ADDRESS](state, payload) {
      state.personalDate.personalInfo.address = payload;
    },
    [CHANGE_PHONE](state, payload) {
      state.personalDate.personalInfo.phone = payload;
    },
    [CHANGE_SUMMARY](state, payload) {
      state.personalDate.summary.text = payload;
    },
    [CHANGE_PHOTO](state, payload) {
      state.personalDate.personalInfo.photo = payload;
    },
    [ADD_COMPANY](state, payload) {
      state.personalDate.experience.companies.push(payload);
    },
    [CHANGE_EXPERIENCE_INFO](state, payload) {
      state.personalDate.experience.companies[payload.index][payload.key] = payload.value;
    },
    [CHANGE_DATE](state, payload) {
      state.personalDate.experience.companies[payload.index][payload.key][payload.key] = payload.value;
    },
    [ADD_CV_SECTION](state, payload) {
      state.personalDate[payload].visible = true;
    },
    [REMOVE_CV_SECTION](state, payload) {
      state.personalDate[payload].visible = false;
    },
    [CHANGE_TITLE](state, payload) {
      state.personalDate.title = payload;
    },
  },
  actions: {
    [CHANGE_FIRST_NAME](context, event) {
      context.commit(CHANGE_FIRST_NAME, event.target.value)
    },
    [CHANGE_LAST_NAME](context, event) {
      context.commit(CHANGE_LAST_NAME, event.target.value)
    },
    [CHANGE_PROFESSION](context, event) {
      context.commit(CHANGE_PROFESSION, event.target.value)
    },
    [CHANGE_ADDRESS](context, event) {
      context.commit(CHANGE_ADDRESS, event.target.value)
    },
    [CHANGE_PHONE](context, event) {
      context.commit(CHANGE_PHONE, event.target.value)
    },
    [CHANGE_PHOTO](context, file) {
      context.commit(CHANGE_PHOTO, file)
    },
    [CHANGE_SUMMARY](context, event) {
      context.commit(CHANGE_SUMMARY, event.target.value)
    },
    [ADD_COMPANY](context) {
      let newCompany = {
        position: '',
        company: '',
        dateFrom: { year: '2016', month: '1' },
        dateTo: { year: '2016', month: '1' },
        experience: '',
      };
      context.commit(ADD_COMPANY, newCompany)
    },
    [CHANGE_EXPERIENCE_INFO](context, payload) {
      context.commit(CHANGE_EXPERIENCE_INFO, payload)
    },
    [CHANGE_DATE](context, payload) {
      context.commit(CHANGE_DATE, payload)
    },
    [ADD_CV_SECTION](context, key) {
      context.commit(ADD_CV_SECTION, key)
    },
    [REMOVE_CV_SECTION](context, key) {
      context.commit(REMOVE_CV_SECTION, key)
    },
    [CHANGE_TITLE](context, value) {
      context.commit(CHANGE_TITLE, value)
    },
  },
  plugins: [createPersistedState()],
})
