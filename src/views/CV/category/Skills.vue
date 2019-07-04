<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'cogs']" />
      </div>
      <span>Skills</span>
    </header>
    <main class="section-content">
      <div class="main-editor-input">
        <label for="skills">Skills</label>
        <textarea
          name="skills"
          id="skills"
          rows="5"
          :value="personalDate.skills.text"
          @change="onSkills"
        ></textarea>
      </div>
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { CHANGE_SKILLS } from "@/store/const";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate
    };
  },
  methods: {
    ...mapActions({
      onSkills: CHANGE_SKILLS
    })
  }
};
</script>
