<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'language']" />
      </div>
      <span>Languages</span>
    </header>
    <main class="section-content">
      <div
        class="main-editor-input"
        v-for="(language, index) in personalDate.languages.list"
        :key="index"
      >
        <label>
          Language
          <input
            type="text"
            :value="personalDate.languages.list[index].language"
            @change="onLanguage({index, key: 'language', value: $event.target.value})"
          />
        </label>
        <label>
          Level
          <input
            type="text"
            :value="personalDate.languages.list[index].level"
            @change="onLanguage({index, key: 'level', value: $event.target.value})"
          />
        </label>
      </div>
      <button class="main-editor-button add-section" @click="addLanguage">
        <font-awesome-icon icon="plus-circle" />Add Language
      </button>
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { ADD_LANGUAGE, CHANGE_LANGUAGE } from "@/store/const";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate
    };
  },
  methods: {
    ...mapActions({
      addLanguage: ADD_LANGUAGE,
      onLanguage: CHANGE_LANGUAGE
    })
  }
};
</script>
