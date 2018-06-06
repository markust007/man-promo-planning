

<!-- SECTION 2 -->


<template>
  <section id="section2">

    <!-- Portrait Modal -->
    <transition
      name="modal"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
        <div class="portrait-modal" v-show="$mq === 'mobilep' || $mq === 'tabletp'">
          <div class="mainbox">
            <p v-html="this.$store.state.items.portraitAlert"></p>
            <p><i class="fas fa-2x fa-redo"></i></p>
          </div>
        </div>
    </transition>

    <!-- Pages -->
    <Page3 v-if="location === 3"></Page3>
    <Conclusion v-if="location === 4"></Conclusion>

  </section>
</template>


<script>
import Page3 from './pages/3-page3.vue'
import Conclusion from './pages/4-conclusion.vue'

  export default {
    data() {
      return {
      }
    },
    computed: {
      location () {
        return this.$store.state.scormLMS.location
      }
    },
    methods: {
    },
    mounted() {
    },
    components: {
      Page3, Conclusion
    },
    props: []
  }
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING

//MOBILE APP STYLING
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
      background-color: #eeeeee;
      filter: drop-shadow(3px 3px 3px #000000);
      -webkit-filter: drop-shadow(3px 3px 3px #000000);
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
