<template>
  <main id="main-editor">
    <header class="head-main-editor">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'user']"/>
      </div>
      <span>Personal</span>
    </header>
    <main class="section-content">
      <div class="main-editor-input third">
        <label for="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          :value="personalDate.personalInfo.firstName"
          @change="onFirstName"
        >
      </div>
      <div class="main-editor-input third">
        <label for="last-name">Last name</label>
        <input
          type="text"
          id="last-name"
          :value="personalDate.personalInfo.lastName"
          @change="onLastName"
        >
      </div>

      <div class="main-editor-input third">
        <span>Add Photo</span>
        <label for="add-photo" class="main-editor-button">
          <font-awesome-icon icon="camera"/>
        </label>
        <input
          type="file"
          @change="changePhoto"
          accept="image/*"
          name="add-photo"
          id="add-photo"
          class="hidden"
        >
      </div>
      <div class="main-editor-input profession">
        <label for="profession">Profession</label>
        <input
          type="text"
          id="profession"
          :value="personalDate.personalInfo.profession"
          @change="onPrfession"
        >
      </div>
      <div class="main-editor-input">
        <label for="address">Address</label>
        <textarea
          name="address"
          id="address"
          :value="personalDate.personalInfo.address"
          @change="onAddress"
        ></textarea>
      </div>
      <div class="main-editor-input profession third">
        <label for="phone">Phone</label>
        <input
          type="number"
          id="phone"
          :value="personalDate.personalInfo.phone"
          @change="onPhone"
          class="hide-spin"
        >
      </div>
      <div class="main-editor-input profession third">
        <label for="twitter">Twitter</label>
        <input type="text" id="twitter">
      </div>
      <div class="main-editor-input profession third">
        <label for="facebook">FaceBook</label>
        <input type="text" id="facebook">
      </div>
      <!-- <button class="main-editor-button add-section">
        <font-awesome-icon icon="plus-circle"/>Add Section
      </button>-->
    </main>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PROFESSION,
  CHANGE_ADDRESS,
  CHANGE_PHONE,
  CHANGE_PHOTO
} from "@/store/const";

export default {
  data() {
    return {
      personalDate: this.$store.state.personalDate,
      visibleAddSocialModal: true,
      social: {
        twitter: {
          label: "Twitter"
        }
      },
      visibleSocial: []
    };
  },
  methods: {
    ...mapActions({
      onFirstName: CHANGE_FIRST_NAME,
      onLastName: CHANGE_LAST_NAME,
      onPrfession: CHANGE_PROFESSION,
      onAddress: CHANGE_ADDRESS,
      onPhone: CHANGE_PHONE,
      onPhoto: CHANGE_PHOTO
    }),
    addSocial(key) {
      this.visibleSocial.push({ ...this.social[key], name: key });
    },
    changePhoto(e) {
      let file = e.target.files[0];
      let vm = this;
      let reader = new FileReader();
      reader.onloadend = () => {
        vm.onPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
