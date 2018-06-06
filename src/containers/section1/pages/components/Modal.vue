<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="modal" v-show="show">
      <div class="modal-box" :style="modal.style">
        <img :src="'media/' + modal.image" :style="modal.style" />
        <h3>{{modalTitle}}</h3>
        <p v-html="modalText"></p>
        <Close @click="close"></Close>
      </div>
    </div>
  </transition>
</template>


<script>
import Close from '../../../../components/ButtonClose.vue'
export default {
  data() {
    return {
      show: true
    };
  },
  computed: {
    location() {
      return this.$store.state.scormLMS.location
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    }
  },
  mounted() {

  },
  components: {Close},
  props: ['modal', 'modalTitle', 'modalText']
};
</script>


<style scoped lang="scss">
.modal {
  position: absolute;
  z-index: 102;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  .modal-box {
    margin: 20% auto 0;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    h3 {
      padding: 5px 20px;
      margin-bottom: 10px;
      color: $header-primary;
    }
    p {
      padding: 0 20px;
      margin: 0;
      color: white;
    }
  }
}
// DESKTOP & TABLET STYLING

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .modal {
    .modal-box {
      margin: 4.5% auto 0;
    }
  }
}

</style>
