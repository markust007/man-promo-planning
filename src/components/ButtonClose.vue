

<!-- COMPONENT: GLOBAL CLOSE BUTTON -->


<template>
    <a class="button-close animated fadeIn" @click="click">
      <img src="media/global/btn_close.png"/>
      <div class="button-title">{{items.globalButtons.closeButton}}</div>
    </a>
</template>


<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      location () {
        return this.$store.state.scormLMS.location
      },
      items() {
        return this.$store.state.items
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    },
    components: {},
    props: []
  }
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING
.button-close {
  position: absolute;
  z-index: 999;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-filter: drop-shadow(1.5px 1.5px 1px #222 );
  filter: drop-shadow(1.5px 1.5px 1px #222);
  img {
    width: inherit;
  }
  .button-title {
    position: absolute;
    bottom: 2px;
    right: 17px;
    font-size: 15px;
  }
}

// MOBILE APP STYLING
@media only screen and (max-width: 750px) {
  .button-close {
    bottom: 7px;
    right: 7px;
    .button-title {
      top: 4.5px;
      right: 18px;
      font-size: 13px;
    }
  }
}

</style>
