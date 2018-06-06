

<!-- SECTION 2, PAGE 1 -->


<template>
  <div class="page animated fadeIn">
    <div class="content">

      <!-- Left Side -->
      <div class="left">

        <!-- Whitebox & Text Holder -->
        <div class="whitebox">
          <div class="text-holder">
            <h3>{{items.section2.page3.title}}</h3>
            <p v-html="items.section2.page3.text"></p>
          </div>
        </div>

      </div>

      <!-- Right Side -->
      <div class="right">
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
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: page3");
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
      width: 60%;
      .whitebox {
        position: relative;
        background: rgba(255,255,255,0.95);
        text-align: left;
        margin-top: 90px;
        width: 100%;
        height: 315px;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
        .text-holder {
          position: absolute;
          top: 20px;
          left: 30px;
          width: 530px;
          h3 {
            color: #8C9100;
            margin-top: 0px;
            margin-bottom: 15px;
          }
          p {
            margin-top: -5px;
            font-size: 16px;
          }
        }
      }
    }
    .right {
      width: 40%;
    }
  }
}

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .page {
    .content {
      top: 0;
      .left {
        .whitebox {
          margin-top: 50px;
          width: 170%;
          height: 240px;
          .text-holder {
            width: 610px;
          }
        }
      }
      .right {
        // right side styling here
      }
    }
  }
}

</style>
