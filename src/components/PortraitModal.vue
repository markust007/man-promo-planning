

<!-- COMPONENT: PORTRAIT MODAL -->
<!-- called in App.vue -->


<template>

  <!-- Portrait Modal Main -->
  <transition name="modal" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="portrait-modal">
        <div class="mainbox">
          <p v-html="this.$store.state.items.standards.portraitAlert"></p>
          <p><i class="fas fa-2x fa-redo"></i></p>
        </div>
      </div>
  </transition>

</template>


<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      items() {
        return this.$store.state.items
      }
    },
    methods: {},
    components: {},
    props: []
  }
</script>


<style scoped lang="scss">

// MOBILE APP STYLING
@media only screen and (max-width: 750px) {
  .portrait-modal {
    position: absolute;
    z-index: 1500;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    display: flex;
    background-color: rgba(50, 50, 50, .99);
    .mainbox {
      width: 90vw;
      height: 250px;
      margin: 5vw;
      border-radius: 4px;
      text-align: center;
      background-color: #eee;
      filter: drop-shadow(3px 3px 3px #000);
      -webkit-filter: drop-shadow(3px 3px 3px #000);
      p:first-of-type {
        width: 90%;
        margin: auto;
        margin-top: 20px;
        font-size: 1.25em;
      }
      p:nth-of-type(2) {
        margin-top: 20px;
      }
    }
  }
}

</style>
