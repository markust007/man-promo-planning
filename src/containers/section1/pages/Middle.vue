<template>
  <div class="page animated fadeIn">
    <div class="content">

      <!-- Left Side -->
      <div class="left">
        <img src="media/textimg_3.png"/>
        <img class="host" src="media/host_1.png" />
      </div>

      <!-- Right Side -->
      <div class="right">
        <div class="text-holder">
          <h3>{{items.middle.title}}</h3>
          <div v-html="items.middle.text"></div>
        </div>
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
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: Middle");
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
    display: flex;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    .left {
      width: 50%;
      img {
        position: absolute;
        top: 85px;
        left: 50px;
        -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
      }
      .host {
        top: 110px;
        left: 85px;
        width: 300px;
        -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
      }
    }
    .right {
      width: 50%;
      margin-top: 55px;
      .text-holder {
        margin-right: 50px;
        margin-left: 25px;
        h3 {
          color: $header-primary;
        }
        div {
          line-height: 1.3;
          margin-top: -5px;
        }
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
        img {
          width: 200px;
          top: 65px;
          left: 20px;
        }
        .host {
          top: 80px;
          left: 35px;
          width: 165px;
        }
      }
      .right {
        margin-top: 20px;
        .text-holder {
          margin-right: 20px;
          margin-left: -85px;
          div {
            line-height: 1;
            margin-top: -20px;
            font-size: 0.85rem;
          }
        }
      }
    }
  }
}

</style>
