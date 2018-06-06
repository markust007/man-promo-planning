<template>
  <div class="page animated fadeIn">
    <div class="content">

      <!-- Left Side -->
      <div class="left">
        <div class="text-holder">
          <h3>{{items.intro2.title}}</h3>
          <div v-html="items.intro2.text"></div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="right">
        <img src="media/textimg_4.png"/>
        <img class="host" src="media/host_1.png" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    location() {
      return this.$store.state.scormLMS.location
    },
    items() {
      return this.$store.state.items
    }
  },
  methods: {
  },
  mounted() {
    //JIRA LOCATION
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: Intro2");
  },
  components: {},
  props: []
};
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING
.page {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    display: flex;
    .left {
      width: 50%;
      margin-top: 55px;
      .text-holder {
        margin-right: 25px;
        margin-left: 50px;
        h3 {
          color: $header-primary;
        }
        div {
          line-height: 1.3;
          margin-top: -5px;
        }
      }
    }
    .right {
      width: 50%;
      img {
        position: absolute;
        top: 85px;
        right: 50px;
        -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
      }
      .host {
        top: 110px;
        right: 85px;
        width: 300px;
        -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
      }
    }
  }
}

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .page {
    .content {
      top: 0;
      .left {
        margin-top: 30px;
        .text-holder {
          margin-right: -85px;
          margin-left: 20px;
          div, ul {
            line-height: 1.05;
            margin-top: -5px;
          }
          p:first-of-type {
            margin-top: -15px;
          }
        }
      }
      .right {
        img {
          width: 200px;
          top: 65px;
          right: 20px;
        }
        .host {
          top: 80px;
          right: 35px;
          width: 165px;
        }
      }
    }
  }
}

</style>
