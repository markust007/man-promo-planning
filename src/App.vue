<template>
  <div id="app" v-if="items && config">
    <!-- JIRA - REMOVE FOR GOLD -->
    <Jira v-if="config.jira"></Jira>

    <!-- HEADER -->
    <img class="topbar" src="media/global/topbar.png"/>
    <img class="main-logo" src="media/global/logo.png"/>

    <!-- CONTAINERS -->
    <Section1></Section1>

    <!-- COMPONENTS -->
    <ButtonBack></ButtonBack>
    <ButtonNext></ButtonNext>

  </div>
</template>


<script>
/////////////////////IMPORTS/////////////////////////
/////////////////////////////////////////////////////
import store from './store/index'

import Section1 from './containers/section1/Container.vue'
import ButtonNext from './components/ButtonNext.vue'
import ButtonBack from './components/ButtonBack.vue'
import Jira from './components/Jira.vue'

import {polyfill} from "mobile-drag-drop";
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

/////////////////////VARIABLES & MISC/////////////////////
/////////////////////////////////////////////////////////

polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

export default {
  name: 'app',
  store,
  data () {
    return {
      loader: true
    }
  },
  computed: {
    location () {
      return this.$store.state.scormLMS.location
    },
    menu () {
      return this.$store.state.menu.menu
    },
    items() {
      return this.$store.state.items
    },
    config() {
      return this.$store.state.config
    }
  },
  methods: {
  },
  mounted() {
    this.loader = false;
    document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
    //scorm
    this.$store.commit('scormLMS/scormInit');
  },
  components: {
    Jira, ButtonBack, ButtonNext, Section1
  }
}
</script>


<style scoped lang='scss'>

// DESKTOP & TABLET STYLING
#app {
  .topbar {
    position: absolute;
    z-index: 990;
  }
  .main-logo {
    z-index: 998;
    position: absolute;
    top: 10px;
    left: 30px;
    width: 200px;
  }
}

//MOBILE APP STYLING
@media only screen and (max-width: 750px) {
  #app {
    height: 343px;
    width: 659px;
    overflow: hidden;
    .topbar {
      margin-top: -55px;
      display: none;
    }
    .main-logo {
      display: none;
    }
  }
}

//PORTRAIT MODE STYLING (for the portrait modal)
@media (orientation: portrait) {
  #app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
}

</style>
