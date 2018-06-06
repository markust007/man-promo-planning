

<!-- COMPONENT: GLOBAL NEXT BUTTON -->


<template>
    <a class="button-next animated fadeIn" @click="nextRouter" v-show="show">
      <img src="media/global/btn_next.png"/>
      <div class="button-title">{{items.globalButtons.continueButton}}</div>
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
        if(this.location !== 4 && this.location !== 6 && this.location !== 7) {
          return true
        }
      }
    },
    methods: {
      nextRouter() {
        this.$store.commit('scormLMS/locationPlus');
      }
    },
    components: {},
    props: []
  }
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING
.button-next {
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
    right: 21px;
    font-size: 15px;
  }
}

// MOBILE APP STYLING
@media only screen and (max-width: 750px) {
  .button-next {
    width: 125px;
    bottom: 7px;
    right: 7px;
    .button-title {
      top: 4.5px;
      right: 30px;
      font-size: 16px;
    }
  }
}

</style>
