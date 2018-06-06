<template>
  <div class="page animated fadeIn activity1" style="background-image:url('media/background_striped.png')">
    <Modal :modal="modal" :modalTitle="items.activity1.modalTitle" :modalText="items.activity1.modalText"></Modal>
    <div class="left">
      <img src="media/sidebar.png" />
      <h3>{{items.activity1.title}}</h3>
      <p>{{items.activity1.text}}</p>
    </div>
    <div class="right">
      <div class="textbox">
        <img src="media/sweater_textbox.png" />
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn"
        >
          <p :key="id">{{items.activity1.categories[id].text}}</p>
        </transition>
      </div>
      <img class="image-slider" src="media/sweater_imagebanner.png" :style="{top: imagePlace[id].top + 'px', left: imagePlace[id].left + 'px'}" />
      <div class="buttons">
        <button v-for="(item, index) in items.activity1.categories" @click="select(index)">{{item.title}}</button>
      </div>
      <img class="sweater" src="media/sliderSweater.png" :style="{left: sweaterPlace[id] + 'px'}" />
      <img class="timeline" src="media/sweater_slider.png" />
    </div>
    <Button-next v-show="cont"></Button-next>
  </div>
</template>


<script>
import Modal from './components/Modal.vue'
import ButtonNext from '../../../components/ButtonNext.vue'
export default {
  data() {
    return {
      id: 0,
      cont: false,
      modal: {
        style: {
          width: '498px',
          height: '232px'
        },
        image: "sweater_intromodal.png"
      }
    };
  },
  watch: {
    id() {
      if(this.id == 4) {
        this.cont = true
      }
    }
  },
  computed: {
    location() {
      return this.$store.state.scormLMS.location
    },
    items() {
      return this.$store.state.items
    },
    sweaterPlace() {
      if(window.screen.width > 767) {
        return [335, 455, 575, 695, 815]
      } else {
        return [190, 280, 370, 460, 550]
      }
    },
    imagePlace() {
      if(window.screen.width > 767) {
        return [{'top': 25, 'left': 350}, {'top': 45, 'left':-150}, {'top': 60, 'left':-675}, {'top': 75, 'left':-1175}, {'top': 95, 'left':-1675}]
      } else {
        return [{'top': 40, 'left': 215}, {'top': 40, 'left':-10}, {'top': 40, 'left':-285}, {'top': 40, 'left':-560}, {'top': 40, 'left':-815}]
      }
    }
  },
  methods: {
    select(num) {
      this.id = num
    }
  },
  mounted() {
    //JIRA LOCATION
    this.$store.commit("scormLMS/changeUserLocation", "IOPromotionPlanning: Activity1");
  },
  components: {Modal, ButtonNext},
  props: []
};
</script>


<style scoped lang="scss">

// DESKTOP & TABLET STYLING
.page {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 0 34px;
  .left {
    position: absolute;
    top: 0;
    left: -40px;
    height: 100%;
    z-index: 99;
    img {
      position: absolute;
      height: 100%;
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
    }
  }
  .right {
    .textbox {
      position: absolute;
      top: 15%;
      left: 32%;
      z-index: 98;
      -webkit-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.75);
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.75);
      p {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 6px 10px;
        font-family: 'Patrick Hand SC', cursive;
        font-size: 1.35rem;
        line-height: 1.1;
      }
    }
    .image-slider {
      position: absolute;
      transition: all .3s;
    }
    .buttons {
      position: absolute;
      top: 475px;
      left: 315px;
      button {
        background: $header-primary;
        width: 100px;
        height: 38px;
        padding: 0;
        margin: 0 10px;
        vertical-align: top;
        border: 2px solid darken($header-primary, 10%);
        border-radius: 10px;
      }
    }
    .sweater {
      position: absolute;
      top: 515px;
      transition: all .3s;
      z-index: 2;
    }
    .timeline {
      position: absolute;
      top: 530px;
      left: 350px;
    }
  }
}

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .page {
    background-position: 0 0;
    .left {
      left: 0;
      img {
        top: -4px;
        height: 105%
      }
      h3 {
        top: 20%;
        left: 10px;
        width: 130px;
      }
      p {
        top: 38%;
        left: 10px;
        width: 130px;
      }
    }
    .right {
      .textbox {
        top: 2%;
        left: 25%;
        width: 70%;
        img {
          width: 100%;
        }
        p {
          font-size: 1rem;
          line-height: 1.1;
        }
      }
      .image-slider {
        position: absolute;
        transition: all .3s;
        height: 250px;
      }
      .buttons {
        top: 240px;
        left: 175px;
        button {
          width: 80px;
          height: 30px;
          margin: 0 5px;
          font-size: 0.7rem;
        }
      }
      .sweater {
        top: 275px;
        width: 60px;
      }
      .timeline {
        position: absolute;
        top: 290px;
        left: 200px;
        width: 400px;
      }
    }
  }
}

</style>
