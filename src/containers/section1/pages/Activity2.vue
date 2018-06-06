<template>
  <div class="page animated fadeIn" :style="{ backgroundImage: 'url(media/' + items.activity2.gauges[1].images[whenId] + ')' }">
    <Images :promoId="promoId" :whereId="whereId" :manyId="manyId"></Images>
    <Modal :modal="modal" :modalTitle="items.activity2.modalTitle" :modalText="items.activity2.modalText"></Modal>
    <div class="left">
      <img src="media/sidebar.png" />
      <h3>{{items.activity2.title}}</h3>
      <p>{{items.activity2.text}}</p>
    </div>
    <div class="right">

      <Helpers></Helpers>

      <Clickers :head="items.activity2.gauges[0].title" :value="items.activity2.gauges[0].values[promoId]" :index="promoId" :size="items.activity2.gauges[0].values.length" @up="promoId += 1" @down="promoId -= 1" :style="{left: this.size > 767 ? 32 + '%' : 23 + '%'}" :clicks="clicks[0]"></Clickers>

      <Clickers :head="items.activity2.gauges[1].title" :value="items.activity2.gauges[1].values[whenId]" :index="whenId" :size="items.activity2.gauges[1].values.length" @up="whenId += 1" @down="whenId -= 1" :style="{left: this.size > 767 ? 47 + '%' : 38 + '%'}" :clicks="clicks[1]"></Clickers>

      <Clickers :head="items.activity2.gauges[2].title" :value="items.activity2.gauges[2].values[whereId]" :index="whereId" :size="items.activity2.gauges[2].values.length" @up="whereId += 1" @down="whereId -= 1" :style="{left: this.size > 767 ? 62 + '%' : 53 + '%'}" :clicks="clicks[2]"></Clickers>

      <Clickers :head="items.activity2.gauges[3].title" :value="items.activity2.gauges[3].values[manyId]" :index="manyId" :size="items.activity2.gauges[3].values.length" @up="manyId += 1" @down="manyId -= 1" :style="{left: this.size > 767 ? 77 + '%' : 68 + '%'}" :clicks="clicks[3]"></Clickers>

      <div class="arrows">
        <img src="media/promo_checkmark.png" v-for="(item, index) in items.activity2.gauges" v-show="arrows[index]"/>
      </div>

    </div>

    <Modal :modal="modal" :modalTitle="'Feedback'" :modalText="items.activity2.gauges[id].feedback[whichId]" v-show="feedback" ref="feedback" @close="feedClose"></Modal>

    <Button-next v-show="cont"></Button-next>
    <Button-submit @click="submit" v-show="!cont"></Button-submit>
  </div>
</template>


<script>
import Modal from './components/Modal.vue'
import Helpers from './components/Helpers.vue'
import Clickers from './components/Clickers.vue'
import Images from './components/Images.vue'
import ButtonNext from '../../../components/ButtonNext.vue'
import ButtonSubmit from '../../../components/ButtonSubmit.vue'
export default {
  data() {
    return {
      id: 0,
      cont: false,
      clicks: [true, false, false, false],
      arrows: [false, false, false, false],
      head: 'Promo',
      value: '60',
      promoId: 0,
      whenId: 0,
      whereId: 0,
      manyId: 0,
      feedback: false,
      size: window.screen.width,
      modal: {
        style: {
          width: '630px',
          height: '282px'
        },
        image: "promo_intromodal.png"
      }
    };
  },
  computed: {
    location() {
      return this.$store.state.scormLMS.location
    },
    items() {
      return this.$store.state.items
    },
    whichId() {
      if(this.id === 0) {
        return this.promoId
      } else if(this.id === 1) {
        return this.whenId
      } else if(this.id === 2) {
        return this.whereId
      } else {
        return this.manyId
      }
    }
  },
  methods: {
    select(num) {
      this.id = num
    },
    submit() {
      this.feedback = true
      this.$refs.feedback.show = true
    },
    feedClose() {
      if(this.id === 0) {
        if(this.promoId === 2 || this.promoId === 3) {
          this.clicks.splice(0, 1, false)
          this.clicks.splice(1, 1, true)
          this.arrows.splice(0, 1, true)
          setTimeout(() => {
            this.id += 1
          }, 1000);
        }
      } else if(this.id === 1) {
        if(this.whenId === 1 || this.whenId === 2) {
          this.clicks.splice(1, 1, false)
          this.clicks.splice(2, 1, true)
          this.arrows.splice(1, 1, true)
          setTimeout(() => {
            this.id += 1
          }, 1000);
        }
      } else if(this.id === 2) {
        if(this.whereId === 1) {
          this.clicks.splice(2, 1, false)
          this.clicks.splice(3, 1, true)
          this.arrows.splice(2, 1, true)
          setTimeout(() => {
            this.id += 1
          }, 1000);
        }
      } else {
        if(this.manyId === 1) {
          this.clicks.splice(3, 1, false)
          this.arrows.splice(3, 1, true)
          this.cont = true
        }
      }
      this.$forceUpdate()
    }
  },
  mounted() {
    //JIRA LOCATION
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: Activity2");
  },
  components: {Modal, Helpers, ButtonNext, ButtonSubmit, Clickers, Images},
  props: []
};
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING
.page {
  width: 100%;
  height: 100%;
  background-size: auto;
  background-position: 0 0;
  .left {
    position: absolute;
    top: 0;
    left: -40px;
    height: 100%;
    z-index: 99;
    img {
      position: absolute;
      height: 100%;
      top: 0;
    }
    h3 {
      position: absolute;
      top: 25%;
      left: 70px;
      width: 165px;
      color: white;
    }
    p {
      position: absolute;
      top: 38%;
      left: 70px;
      width: 165px;
      color: white;
      font-size: 1rem;
    }
  }
  .right {
    .arrows {
      position: absolute;
      top: 82.5%;
      left: 42.5%;
      z-index: 3;
      img {
        margin-right: 114px;
        width: auto;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .page {
    background-size: cover;
    background-position: 0 -65px;
    .left {
      left: 0;
      img {
        height: 105%;
        top: -5px;
      }
      h3 {
        top: -2%;
        left: 8px;
        width: 140px;
      }
      p {
        top: 16%;
        left: 8px;
        width: 130px;
        font-size: 0.85rem;
      }
    }
    .right {
      .arrows {
        position: absolute;
        top: 77%;
        left: 35%;
        z-index: 3;
        img {
          margin-right: 75px;
          width: 25px;
        }
      }
    }
  }
}

</style>
