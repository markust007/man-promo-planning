

<!-- COMPONENT: GLOBAL NEXT BUTTON -->


<template>
    <a class="button-next animated fadeIn" @click="click">
      <img src="media/global/btn_next.png"/>
      <div class="button-title">{{items.globalButtons.submitButton}}</div>
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
.button-next {
  position: absolute;
  z-index: 99;
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
    right: 31px;
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
