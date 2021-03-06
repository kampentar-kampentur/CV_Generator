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
  CHANGE_SOCIAL,
  CHANGE_SKILLS,
  ADD_LANGUAGE,
  CHANGE_LANGUAGE,
  ADD_EDUCATION,
  CHANGE_EDUCATION_INFO,
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
          Twitter: 'yummyanime.club/catalog/item/propavshie-fei ',
          GitHub: 'yummyanime.club/catalog/item/propavshie-fei',
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
      skills: { text: '', visible: true },
      languages: { list: [{ language: 'aa', level: '11' }], visible: true },
      education: { list: [{ course: '', institution: '', information: '', data: { from: 2010, to: 2014 } }], visible: true }
    },
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
    [CHANGE_PHOTO](state, payload) {
      state.personalDate.personalInfo.photo = payload;
    },
    [CHANGE_SUMMARY](state, payload) {
      state.personalDate.summary.text = payload;
    },
    [ADD_COMPANY](state, payload) {
      state.personalDate.experience.companies.push(payload);
    },
    [CHANGE_EXPERIENCE_INFO](state, payload) {
      state.personalDate.experience.companies[payload.index][payload.key] = payload.value;
    },
    [CHANGE_DATE](state, payload) {
      state.personalDate.experience.companies[payload.index][payload.key][payload.yearOrMonth] = payload.value;
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
    [CHANGE_SOCIAL](state, payload) {
      state.personalDate.personalInfo.social[payload.key] = payload.value;
    },
    [CHANGE_SKILLS](state, payload) {
      state.personalDate.skills.text = payload;
    },
    [ADD_LANGUAGE](state, payload) {
      state.personalDate.languages.list.push(payload);
    },
    [CHANGE_LANGUAGE](state, payload) {
      state.personalDate.languages.list[payload.index][payload.key] = payload.value;
    },
    [ADD_EDUCATION](state, payload) {
      state.personalDate.education.list.push(payload);
    },
    [CHANGE_EDUCATION_INFO](state, payload) {
      state.personalDate.education.list[payload.index][payload.key] = payload.value;
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
    [CHANGE_SOCIAL](context, event) {
      let payload = { key: event.target.id, value: event.target.value }
      context.commit(CHANGE_SOCIAL, payload)
    },
    [CHANGE_SKILLS](context, event) {
      context.commit(CHANGE_SKILLS, event.target.value)
    },
    [ADD_LANGUAGE](context) {
      let newLanguage = {
        language: '',
        level: '',
      };
      context.commit(ADD_LANGUAGE, newLanguage)
    },
    [CHANGE_LANGUAGE](context, payload) {
      context.commit(CHANGE_LANGUAGE, payload)
    },
    [ADD_EDUCATION](context) {
      let newEducation = {
        course: '',
        institution: '',
        information: '',
        data: { from: 2010, to: 2014 }
      };
      context.commit(ADD_EDUCATION, newEducation)
    },
    [CHANGE_EDUCATION_INFO](context, payload) {
      context.commit(CHANGE_EDUCATION_INFO, payload)
    },
  },
  plugins: [createPersistedState()],
})
