<template>
  <div class="helpers">
    <div class="buttons">
      <div class="buttons-bkgd"></div>
      <button v-for="(item, index) in items.activity2.helpers" @click="select(index)"><img :src="'media/' + item.image" /></button>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="help" v-show="show">
        <div class="modal-box">
          <img class="bkgd" src="media/promo_chatbox.png" />
          <img class="person" :src="'media/' + items.activity2.helpers[id].image" />
          <img class="close" src="media/promo_chat_xbutton.png" @click="close" />
          <h3>{{items.activity2.helpers[id].helper}}</h3>
          <p class="text">{{items.activity2.helpersText}}</p>
          <div class="content">
            <div class="left">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated zoomIn"
              >
                <div class="box" v-show="answer" :key="altId">
                  <p>{{items.activity2.helpers[id].alts[altId].answer}}</p>
                </div>
              </transition>
            </div>
            <div class="right">
              <button v-for="(item, index) in items.activity2.helpers[id].alts" @click="altSelect(index)">{{item.question}}</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: 0,
      altId: 0,
      answer: false,
      show: false
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
    select(num) {
      this.id = num
      this.show = true
    },
    altSelect(num) {
      this.altId = num
      this.answer = true
    },
    close() {
      this.altId = 0
      this.answer = false
      this.show = false
      setTimeout(() => {
        this.id = 0
      }, 1000);
    }
  },
  mounted() {

  },
  components: {},
  props: []
};
</script>


<style scoped lang="scss">
.helpers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .buttons {
    position: absolute;
    top: 12%;
    right: 5%;
    z-index: 101;
    .buttons-bkgd {
      position: absolute;
      width: 680px;
      height: 40px;
      top: 27%;
      right: -12%;
      background: white;
      z-index: -1;
      border-radius: 5px;
      background: #fefefe;
      background: -moz-linear-gradient(top, #fefefe 0%, #e2e2e2 100%);
      background: -webkit-linear-gradient(top, #fefefe 0%,#e2e2e2 100%);
      background: linear-gradient(to bottom, #fefefe 0%,#e2e2e2 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#e2e2e2',GradientType=0 );
      -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
      -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
      box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
    }
    button {
      margin: 0 12px;
      img {
        width: auto;
      }
    }
  }
  .help {
    position: absolute;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    .modal-box {
      margin: 15% auto 0;
      position: relative;
      width: 750px;
      height: 307px;
      .bkgd {
        position: absolute;
        z-index: -1;
      }
      .person {
        position: absolute;
        top: -15px;
        left: -30px;
      }
      .close {
        position: absolute;
        right: 2px;
        top: 7px;
        cursor: pointer;
      }
      h3 {
        margin: 0;
        padding: 6px 90px;
        color: $header-primary;
      }
      .text {
        margin: 0;
        padding: 5px 90px;
      }
      .content {
        display: flex;
        .left {
          width: 50%;
          padding: 25px 10px 0;
          .box {
            position: relative;
            width: 94%;
            background: white;
            border-radius: 8px;
            padding: 15px;
            &:before {
              content: "";
              position: absolute;
              top: -15px;
              left: 15%;
              width: 0;
              height: 0;
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-bottom: 15px solid white;
            }
            p {
              margin: 0;
              font-size: 1.05rem;
              line-height: 1.2;
            }
          }
        }
        .right {
          width: 50%;
          padding: 10px;
          button {
            width: 100%;
            height: 62px;
            background: #C6C980;
            margin: 5px 0;
            text-align: left;
            padding: 10px;
            font-size: 1.15rem;
            font-weight: 600;
            -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
            box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);
          }
        }
      }
    }
  }
}
// DESKTOP & TABLET STYLING

//MOBILE STYLING
@media only screen and (max-width: 750px) {
  .helpers {
    .buttons {
      top: 1%;
      right: 1%;
      .buttons-bkgd {
        width: 360px;
        height: 25px;
        top: 27%;
        right: -12%;
      }
      button {
        margin: 0;
        img {
          width: 65px;
        }
      }
    }
    .help {
      .modal-box {
        margin: 2% auto 0;
        width: 100%;
        height: 307px;
        .person {
          top: -20px;
          left: -30px;
        }
        .text {
          padding: 10px 90px 0;
        }
        .content {
          display: flex;
          .left {
            .box {
              padding: 10px;
              p {
                font-size: 0.85rem;
              }
            }
          }
          .right {
            button {
              font-size: 0.85rem;
            }
          }
        }
      }
    }
  }
}

</style>
