<template>
  <div id="ready-cv" :class="templateStyle.class" class="ready-cv">
    <template v-if="templateStyle.css">
      <link rel="stylesheet" :href="templateStyle.css" />
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
        <div class="address-wrapper" v-show="personalDate.personalInfo.address">
          <h3>Address:</h3>
          <span class="address">{{personalDate.personalInfo.address}}</span>
        </div>
        <div class="phone">
          <h3>Phone:</h3>
          {{personalDate.personalInfo.phone}}
        </div>
        <div
          class="social"
          :class="key"
          v-for="(social, key) of personalDate.personalInfo.social"
          :key="key"
        >
          <h3>{{key + ': '}}</h3>
          <a :href="social">{{social}}</a>
        </div>
      </div>
      <div class="skills" v-if="personalDate.skills.visible">
        <h2>Skills</h2>
        <span>{{personalDate.skills.text}}</span>
      </div>
      <div class="languages" v-if="personalDate.languages.visible">
        <h2>Languages</h2>
        <div
          v-for="(language, index) in personalDate.languages.list"
          :key="index"
        >{{personalDate.languages.list[index].language}} - {{personalDate.languages.list[index].level}}</div>
      </div>
      <div class="experience" v-if="personalDate.education.visible">
        <h2>Education</h2>
        <div
          class="institution"
          v-for="(institution, index) in personalDate.education.list"
          :key="index"
        >
          <div class="study-period">
            <span>{{institution.data.from}} - {{institution.data.to}}</span>
          </div>
          <div class="experience-info">
            <span class="course">{{institution.course}}</span>
            <span class="institution-name">{{institution.institution}}</span>
            <span class="information">{{institution.information}}</span>
          </div>
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
