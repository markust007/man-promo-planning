<template>
  <section id="section1">

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
    <Intro1 v-if="location === 1"></Intro1>
    <Intro2 v-if="location === 2"></Intro2>
    <Intro3 v-if="location === 3"></Intro3>
    <Activity1 v-if="location === 4"></Activity1>
    <Middle v-if="location === 5"></Middle>
    <Activity2 v-if="location === 6"></Activity2>
    <Final v-if="location === 7"></Final>

  </section>
</template>


<script>
import Intro1 from './pages/Intro1.vue'
import Intro2 from './pages/Intro2.vue'
import Intro3 from './pages/Intro3.vue'
import Activity1 from './pages/Activity1.vue'
import Middle from './pages/Middle.vue'
import Activity2 from './pages/Activity2.vue'
import Final from './pages/Final.vue'

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
      Intro1, Intro2, Intro3, Activity1, Middle, Activity2, Final
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
