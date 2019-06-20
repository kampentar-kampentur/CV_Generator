<template>
  <aside class="sidebar-editor">
    <div class="sidebar-content">
      <div class="sidebar-head">
        <button
          class="sidebar-button"
          v-if="!isChaingeTitle"
          @click="editTitle"
        >{{personalDate.title}}</button>
        <input
          type="text"
          v-else
          ref="editTitle"
          :value="personalDate.title"
          @keyup.enter="onTitle"
          @blur="onTitle"
        >
        <button class="sidebar-button">language</button>
      </div>
      <div class="cv-sections">
        <ul>
          <CVSection
            v-for="(section, key) in cvsections"
            :key="key"
            :section="section"
            :sectionKey="key"
          />
        </ul>
        <button class="add-section sidebar-button" @click="addSection">Add New Section</button>
      </div>
    </div>
    <div class="sidebar-footer">
      <router-link :to="{name: 'templates'}" class="submit-button">submit</router-link>
    </div>
  </aside>
</template>

<script>
import CVSection from "./CVSection.vue";
import { mapActions } from "vuex";
import { CHANGE_TITLE } from "@/store/const";

export default {
  components: {
    CVSection
  },
  props: {
    cvsections: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isChaingeTitle: false,
      personalDate: this.$store.state.personalDate
    };
  },
  methods: {
    ...mapActions({
      chaingeTitle: CHANGE_TITLE
    }),
    addSection() {
      this.$emit("openModal");
    },
    editTitle() {
      this.isChaingeTitle = true;
    },
    onTitle(e) {
      if (!this.isChaingeTitle || e.target.value === "") return;
      this.chaingeTitle(e.target.value);
      this.isChaingeTitle = false;
    }
  }
};
</script>
