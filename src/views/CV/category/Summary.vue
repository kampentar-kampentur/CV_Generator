<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'feather-alt']"/>
      </div>
      <span>Summary</span>
    </header>
    <main class="section-content">
      <div class="main-editor-input">
        <label for="address">Summary(optional)</label>
        <textarea
          name="address"
          id="address"
          rows="5"
          :value="personalDate.summary.text"
          @change="onSummary"
        ></textarea>
      </div>
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { CHANGE_SUMMARY } from "@/store/const";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate
    };
  },
  methods: {
    ...mapActions({
      onSummary: CHANGE_SUMMARY
    })
  }
};
</script>
