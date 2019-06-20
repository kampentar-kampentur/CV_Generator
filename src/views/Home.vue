<template>
  <div id="cv-generator">
    <SidebarEditor/>
    <MainEditor/>
  </div>
</template>

<script>
import SidebarEditor from "../components/SidebarEditor.vue";
import MainEditor from "../components/MainEditor.vue";

export default {
  name: "Home",
  components: {
    SidebarEditor,
    MainEditor
  }
};
</script>
