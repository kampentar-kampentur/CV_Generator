<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'university']" />
      </div>
      <span>Education</span>
    </header>
    <main class="section-content">
      <div
        class="education"
        v-for="(institution, index) in personalDate.education.list"
        :key="index"
      >
        <h2>Education #{{index + 1}}</h2>
        <div class="main-editor-input third">
          <label>
            Course
            <input
              type="text"
              :value="institution.course"
              @change="onEducInfo({index, key: 'course', value: $event.target.value})"
            />
          </label>
        </div>
        <div class="main-editor-input third">
          <label>
            Institution
            <input
              type="text"
              :value="institution.institution"
              @change="onEducInfo({index, key: 'institution', value: $event.target.value})"
            />
          </label>
        </div>
        <div class="main-editor-input third">
          <h3>Date:</h3>
          <div class="main-editor-input half">
            <label>
              Year From
              <input
                type="number"
                min="1900"
                :max="new Date().getFullYear()"
                step="1"
                :value="institution.data.from"
                @change="onDate({index, key: 'dateFrom', yearOrMonth: 'year', value: $event.target.value})"
              />
            </label>
          </div>
          <div class="main-editor-input half">
            <label>
              Year to
              <input
                type="number"
                min="1900"
                :max="new Date().getFullYear()"
                step="1"
                :value="institution.data.to"
                @change="onDate({index, key: 'dateFrom', yearOrMonth: 'year', value: $event.target.value})"
              />
            </label>
          </div>
        </div>
        <div class="main-editor-input">
          <label>
            Additional Information
            <textarea
              name="information"
              rows="10"
              :value="institution.information"
              @change="onEducInfo({index, key: 'information', value: $event.target.value})"
            ></textarea>
          </label>
        </div>
      </div>
      <button class="main-editor-button add-section" @click="addEducation">
        <font-awesome-icon icon="plus-circle" />Add Company
      </button>
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import {
  ADD_EDUCATION,
  CHANGE_EDUCATION_INFO,
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
      addEducation: ADD_EDUCATION,
      onEducInfo: CHANGE_EDUCATION_INFO,
      onDate: CHANGE_DATE
    })
  }
};
</script>
