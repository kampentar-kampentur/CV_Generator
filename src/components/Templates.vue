<template>
  <div class="templates">
    <Resume ref="resume" :templateStyle="templateStyle" :key="templateStyle.js"/>

    <div class="templates-main">
      <div class="change-template-wrapper">
        <h2>Templates:</h2>
        <button
          v-for="(tamplate, key) in templates"
          :key="key"
          @click="changeTemplate(templates[key])"
          class="template-button"
          :class="{'changed-template': templates[key] === templateStyle}"
        >{{key}}</button>
      </div>
      <button @click="convertToPDF" class="main-editor-button">
        <font-awesome-icon :icon="['fas', 'file-download']"/>Download PDF
      </button>
    </div>
    <!-- <button @click="print">Print</button> -->
  </div>
</template>

<script>
import Resume from "./Resume.vue";
import styles from "../assets/cv-styles";
import html2pdf from "html2pdf.js";

export default {
  components: {
    Resume
  },
  data() {
    return {
      personalDate: this.$store.state.personalDate,
      templates: styles,
      templateStyle: styles.First,
      count: 1
    };
  },
  methods: {
    toPDF() {
      var element = document.getElementById("ready-cv");
      html2pdf(element);
    },
    convertToPDF: function() {
      let element = document.getElementById("ready-cv");
      let opt = {
        margin: 0,
        filename: this.personalDate.title,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 5 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        }
      };
      html2pdf()
        .set(opt)
        .from(element)
        .save();
    },
    changeTemplate(template) {
      this.templateStyle = template;
      this.count++;
    }
  }
};
</script>
