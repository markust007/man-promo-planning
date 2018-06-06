

<!-- COMPONENT: GLOBAL BACK BUTTON -->


<template>
    <a class="button-back" @click="backRouter" v-show="show">
      <img src="media/global/btn_back.png"/>
      <div class="button-title">{{items.globalButtons.backButton}}</div>
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
      },
      show() {
        //removes navigation when mobile overlay is active
        if(this.$mq==='mobilep') {
          return false
        }
        if(this.location !== 1) {
          return true
        }
      }
    },
    methods: {
      backRouter() {
        this.$store.commit('scormLMS/locationMinus');
      }
    },
    components: {},
    props: []
  }
</script>


<!-- DESKTOP & TABLET STYLING -->
<style scoped lang="scss">
.button-back {
  position: absolute;
  z-index: 999;
  bottom: 10px;
  left: 10px;
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
    right: 25px;
    font-size: 15px;
  }
}

// MOBILE APP STYLING
@media only screen and (max-width: 750px) {
  .button-back {
    width: 125px;
    bottom: 7px;
    left: 5px;
    .button-title {
      top: 4.5px;
      left: 48px;
      font-size: 16px;
    }
  }
}

</style>
