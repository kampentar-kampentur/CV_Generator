<template>
  <div class="cv-page">
    <SidebarEditor @openModal="showModal = true" :cvsections="vizibleCVSections"/>
    <router-view/>
    <Modal v-if="showModal" @closeModal="showModal = false">
      <h3 slot="header">Add Section</h3>
      <button
        class="modal-add-cv-section-button"
        :class="{'added-cv-section' : $store.state.personalDate[key].visible}"
        slot="body"
        v-for="(section, key) in cvsections"
        :key="key"
        @click="addCVSection(key)"
      >
        <font-awesome-icon :icon="section.icon"/>
        {{section.text}}
      </button>
    </Modal>
  </div>
</template>

<script>
import SidebarEditor from "@/components/SidebarEditor.vue";
import Modal from "@/components/Modal.vue";
import { mapActions } from "vuex";
import { ADD_CV_SECTION, REMOVE_CV_SECTION } from "@/store/const";

export default {
  components: {
    SidebarEditor,
    Modal
  },
  data() {
    return {
      showModal: false,
      personalDate: this.$store.state.personalDate,
      cvsections: {
        personalInfo: {
          icon: ["fas", "user"],
          text: "Personal Info",
          to: { name: "cv-personal" },
          key: "personalInfo",
          visible: this.$store.state.personalDate.personalInfo.visible
        },
        summary: {
          icon: ["fas", "feather-alt"],
          text: "Summary",
          to: {
            name: "cv-summary"
          },
          key: "summary",
          visible: this.$store.state.personalDate.summary.visible
        },
        experience: {
          icon: ["fas", "briefcase"],
          text: "Experience",
          to: {
            name: "cv-experience"
          },
          key: "experience",
          visible: this.$store.state.personalDate.experience.visible
        }
      }
    };
  },
  methods: {
    ...mapActions({
      addCVSection: ADD_CV_SECTION,
      removeCVSection: REMOVE_CV_SECTION
    })
  },
  computed: {
    vizibleCVSections() {
      let visible = {};
      for (let key in this.cvsections) {
        if (this.personalDate[key].visible) {
          visible[key] = this.cvsections[key];
        }
      }
      return visible;
    },
    costil() {
      return this.cvsections;
    }
  }
};
</script>
