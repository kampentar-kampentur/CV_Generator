<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"/>
            <button class="close-modal-button sidebar-button" @click="close">
              <font-awesome-icon icon="times"/>
            </button>
          </div>

          <div class="modal-body">
            <slot name="body"/>
          </div>

          <!-- <div class="modal-footer">
            <slot name="footer">default footer</slot>
          </div>-->
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  methods: {
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>
