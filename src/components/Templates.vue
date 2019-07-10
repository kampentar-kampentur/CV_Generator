<template>
  <div class="templates">
    <router-view />
    <div class="templates-main">
      <div class="change-template-wrapper">
        <h2>Templates:</h2>
        <router-link
          v-for="(tamplate, key) in templates"
          :key="key"
          class="template-button"
          :to="{name: tamplate.path}"
        >{{tamplate.name}}</router-link>
      </div>
      <button @click="convertToPDF" class="main-editor-button">
        <div class="icon"><font-awesome-icon :icon="['fas', 'file-download']" /></div>Download PDF
      </button>
      <router-link
          class="main-editor-button"
          :to="{name: 'cv-personal'}"
        ><div class="icon"><font-awesome-icon :icon="['fas', 'user'] "/></div>Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate,
      templates: [
        { name: "First", path: "first-template" },
        { name: "Second", path: "second-template" }
      ],
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
    }
  }
};
</script>
