

<!-- SECTION 1, PAGE 1 -->


<template>
  <div class="page animated fadeIn">
    <div class="content">

      <!-- Left Side -->
      <div class="left">
        <img src="media/templateimg_1.png"/>
      </div>

      <!-- Right Side -->
      <div class="right">
        <div class="text-holder">
          <h3>Inventory Operations</h3>
          <p>Have you ever wondered how the shelves get refilled at your local stores? Or why certain products are in-stock, even when demand is high? There are always snow shovels in Alaska, surfboards in California, and boots in Texas. How do businesses account for seasonality? How does a supplier in Florida work around the constraints of a retailer in Minnesota? How do products get to the right locations in the right amount at the right time for the right customers? These are complicated questions, and there are many factors involved in the answers.</p>
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
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: page1");
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
        p {
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
      }
      .right {
        margin-top: 20px;
        .text-holder {
          margin-right: 20px;
          margin-left: -85px;
          p {
            line-height: 1.05;
            margin-top: -15px;
          }
        }
      }
    }
  }
}

</style>
