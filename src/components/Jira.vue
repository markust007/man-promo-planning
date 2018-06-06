
<!-- COMPONENT: JIRA FEEDBACK COLLECTOR -->

<template>
    <button class="jira" @click="launchCollector">Feedback</button>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {
    userLocation () {
      return this.$store.state.scormLMS.userLocation
    }
  },
  methods: {
    launchCollector() {
      const location = this.userLocation.replace('#', '%23');
      const summary = location;
      const collectorURL = 'collector.html' + '?location=' + location + '&summary=' + summary;
      const windowName = "_blank";
      const windowSpecs = "height=727px, width=820px, location=0, menubar=0, scrollbars=0, status=0, titlebar=0, toolbar=0";
      window.open(collectorURL, windowName, windowSpecs);
    }
  }
}

</script>

<style scoped lang="scss">
.jira {
  position: fixed;
  z-index: 999;
  top: 10px;
  bottom: auto;
  left: 0;
  padding: .4rem .75rem;
  border: 0px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 0px solid #666666;
  color: #ffffff;
  background-color: #000000;
  font-size: 1rem;
  cursor: pointer;
}
</style>
