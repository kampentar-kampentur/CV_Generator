<template>
  <div id="ready-cv" :class="templateStyle.class" class="ready-cv">
    <template v-if="templateStyle.css">
      <link rel="stylesheet" :href="templateStyle.css">
    </template>

    <header class="resume-header clearfix">
      <span
        class="fullName"
      >{{personalDate.personalInfo.firstName}} {{personalDate.personalInfo.lastName}}</span>
      <span class="profession">{{personalDate.personalInfo.profession}}</span>
      <!-- <img :src="photo" v-if="photo" class="photo"> -->
    </header>
    <main class="resume-main">
      <span class="summary" v-if="personalDate.summary.visible">{{personalDate.summary.text}}</span>
      <div class="experience" v-if="personalDate.experience.visible">
        <h2>Experience</h2>
        <div
          class="company"
          v-for="(company, index) in personalDate.experience.companies"
          :key="index"
        >
          <div class="work-period">
            <span>{{company.dateFrom.month}}/{{company.dateFrom.year}} - {{company.dateTo.month}}/{{company.dateTo.year}}</span>
          </div>
          <div class="experience-info">
            <span class="position">{{company.position}}</span>
            <span class="company-name">{{company.company}}</span>
            <span class="experience">{{company.experience}}</span>
          </div>
        </div>
      </div>
    </main>
    <aside class="resume-aside">
      <div class="personalInfo" v-if="personalDate.personalInfo.visible">
        <h2>Personal Info</h2>
        <span class="address">
          <h3>Address:</h3>
          {{personalDate.personalInfo.address}}
        </span>
        <span class="phone">Number Phone: {{personalDate.personalInfo.phone}}</span>
        <div class="socials">
          <span
            class="social"
            :class="key"
            v-for="(social, key) of personalDate.personalInfo.social"
            :key="key"
          >{{key + ': ' +social}}</span>
        </div>
      </div>
    </aside>
    <div id="scripts"></div>
  </div>
</template>

<style>
@import url("../assets/cv-styles/index.css");
</style>


<script>
export default {
  props: ["templateStyle"],
  data() {
    return {
      personalDate: this.$store.state.personalDate,
      photo: this.$store.state.personalDate.personalInfo.photo
    };
  },
  mounted() {
    if (this.templateStyle.js) {
      let t = document.getElementById("scripts");
      let script = document.createElement("script");
      script.src = this.templateStyle.js;
      t.appendChild(script);
    }
  }
};
</script>
