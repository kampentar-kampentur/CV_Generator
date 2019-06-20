<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'briefcase']"/>
      </div>
      <span>Experience</span>
    </header>
    <main class="section-content">
      <div
        class="company"
        v-for="(company, index) in personalDate.experience.companies"
        :key="index"
      >
        <h2>Company #{{index + 1}}</h2>
        <div class="main-editor-input third">
          <label>
            Position
            <input
              type="text"
              :value="company.position"
              @change="onExpInfo({index, key: 'position', value: $event.target.value})"
            >
          </label>
        </div>
        <div class="main-editor-input third">
          <label>
            Company, Department
            <input
              type="text"
              :value="company.company"
              @change="onExpInfo({index, key: 'company', value: $event.target.value})"
            >
          </label>
        </div>
        <div class="main-editor-input third">
          <h3>Date from:</h3>
          <div class="main-editor-input half">
            <label>
              Year
              <input
                type="number"
                min="1900"
                :max="new Date().getFullYear()"
                step="1"
                :value="company.dateFrom.year"
              >
            </label>
          </div>
          <div class="main-editor-input half">
            <label>
              Month
              <input
                type="number"
                min="1"
                max="12"
                step="1"
                :value="company.dateFrom.month"
                @change="onDate({index, key: 'dateFrom', key2: month, value: $event.target.value})"
              >
            </label>
          </div>
          <h3>Date to:</h3>
          <div class="main-editor-input half">
            <label for="month-to">
              Year
              <input
                type="number"
                :min="new Date().getFullYear()"
                max="2099"
                step="1"
                :value="company.dateTo.year"
              >
            </label>
          </div>
          <div class="main-editor-input half">
            <label for="year-to">
              Month
              <input type="number" min="1" max="12" step="1" :value="company.dateTo.month">
            </label>
          </div>
        </div>
        <div class="main-editor-input">
          <label>
            Experience
            <textarea
              name="address"
              rows="10"
              :value="company.experience"
              @change="onExpInfo({index, key: 'experience', value: $event.target.value})"
            ></textarea>
          </label>
        </div>
      </div>
      <button class="main-editor-button add-section" @click="addCompany">
        <font-awesome-icon icon="plus-circle"/>Add Company
      </button>
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import {
  ADD_COMPANY,
  CHANGE_EXPERIENCE_INFO,
  CHANGE_DATE
} from "@/store/const";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate
    };
  },
  methods: {
    ...mapActions({
      addCompany: ADD_COMPANY,
      onExpInfo: CHANGE_EXPERIENCE_INFO,
      onDate: CHANGE_DATE
    })
  }
};
</script>
