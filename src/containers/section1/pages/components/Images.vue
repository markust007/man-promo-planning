<template>
    <div class="images">
      <div class="promos">
        <img src="media/promo_level1.png" />
        <img src="media/promo_level2.png" v-show="promoId >= 2" />
        <img src="media/promo_level3.png" v-show="promoId >= 4" />
        <img src="media/promo_level4.png" v-show="promoId >= 5" />
        <img src="media/promo_level5.png" v-show="promoId == 6" />
      </div>

      <div class="where">
        <img :src="'media/' + items.activity2.gauges[2].images[whereId]" />
      </div>

      <div class="many">
        <img :src="'media/' + items.activity2.gauges[3].images[manyId]" />
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

  },
  components: {},
  props: ['promoId', 'whereId', 'manyId']
};
</script>


<style scoped lang="scss">
.images {
  .promos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: auto;
      &:first-child {
        top: 60%;
        left: 29%;
        z-index: 1;
      }
      &:nth-child(2) {
        top: 61%;
        left: 78%;
        z-index: 1;
      }
      &:nth-child(3) {
        top: 29%;
        left: 64%;
        z-index: 1;
      }
      &:nth-child(4) {
        top: 30%;
        left: 25%;
      }
      &:last-child {
        top: 38%;
        left: 70%;
        z-index: 1;
      }
    }
  }
  .where {
    position: absolute;
    left: 27%;
    bottom: 25%;
    img {
      height: auto;
    }
  }
  .many {
    position: absolute;
    bottom: 22%;
    right: 24%;
    img {
      height: auto;
    }
  }
}
// DESKTOP & TABLET STYLING

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .images {
    .promos {
      img {
        &:first-child {
          top: 52%;
          left: 28%;
          z-index: 1;
          width: 65px;
        }
        &:nth-child(2) {
          top: 55%;
          left: 78%;
          z-index: 1;
          width: 85px;
        }
        &:nth-child(3) {
          top: 10%;
          left: 64%;
          z-index: 1;
          width: 85px;
        }
        &:nth-child(4) {
          top: 10%;
          left: 25%;
        }
        &:last-child {
          top: 25%;
          left: 72%;
          z-index: 1;
          width: 85px;
        }
      }
    }
    .where {
      left: 26%;
      bottom: 29%;
      img {
        height: 125px;
      }
    }
    .many {
      bottom: 22%;
      right: 24%;
      img {
        height: 65px;
      }
    }
  }
}

</style>
