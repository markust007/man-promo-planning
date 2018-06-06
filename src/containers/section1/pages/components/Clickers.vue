<template>
    <div class="clicker" :class="{disabled: !clicks}">
      <img class="up" src="media/promo_arrowup.png" :class="{disabled: index + 1 == size}" @click="$emit('up')" />
      <div class="box">
        <p class="head">{{head}}</p>
        <p class="unit">{{value}}</p>
      </div>
      <img class="down" src="media/promo_arrowdown.png" @click="$emit('down')" :class="{disabled: index == 0}" />
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
    }
  },
  methods: {
  },
  mounted() {

  },
  components: {},
  props: ['head', 'value', 'index', 'size', 'clicks']
};
</script>


<style scoped lang="scss">
// DESKTOP & TABLET STYLING
.clicker {
  text-align: center;
  position: absolute;
  top: 75%;
  z-index: 2;
  &.disabled {
    filter: brightness(50%);
    pointer-events: none;
    cursor: default;
  }
  img {
    display: block;
    margin: 0 auto;
    width: auto;
  }
  .box {
    background: white;
    width: 115px;
    padding: 1px 5px 5px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.8);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.8);
    .head {
      margin: 0;
      font-size: 0.85rem;
      font-weight: 800;
    }
    .unit {
      background: black;
      color: #FEFF99;
      margin: 0;
      padding: 5px 0;
      font-size: 0.85rem;
      font-weight: 600;
    }
  }
  .up, .down {
    cursor: pointer;
    &.disabled {
      filter: brightness(50%);
      pointer-events: none;
      cursor: default;
    }
  }
}
//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .clicker {
    top: 71%;
    img {
      display: block;
      margin: 0 auto;
      width: 40px;
    }
    .box {
      width: 85px;
      .head {
        font-size: 0.75rem;
      }
      .unit {
        padding: 3px 0;
        font-size: 0.65rem;
      }
    }
  }
}

</style>
