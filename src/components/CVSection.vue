<template>
  <li class="cv-section">
    <router-link :to="section.to">
      <span>
        <font-awesome-icon :icon="section.icon" />
        {{section.text}}
      </span>
    </router-link>
    <div class="cv-sections-buttons">
      <button
        class="destroy-cv-section-button sidebar-button"
        @click="removeCVSection(sectionKey)"
        v-if="section.key !== 'personalInfo'"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import { REMOVE_CV_SECTION } from "@/store/const";

export default {
  components: {},
  props: {
    section: {
      required: true,
      type: Object
    },
    sectionKey: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions({
      removeCVSection: REMOVE_CV_SECTION
    })
  }
};
</script>
