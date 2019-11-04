<template>
  <div class="contacts_layout">
    <p class="label">Contact Us</p>
    <div class="flex">
      <div>
        <form class="form">
          <label for="inp" class="inp">
            <input type="text" v-model="name" pattern="^[a-Z]{1,30}$" name="name" required id="inp" placeholder="Name">
            <span class="label"></span>
          </label>
           <label for="inp" class="inp">
            <input type="tel" v-model="phone" v-mask="'+38(###)#######'" pattern="^?:\+3)?8?(0\d{9})$" name="phone" required id="inp" placeholder="Phone">
            <span class="label"></span>
          </label>
           <label for="inp" class="inp">
            <input type="text" v-model="email" min="3"
             pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
             required id="inp" name="email" placeholder="Email">
            <span class="label"></span>
          </label>
          <div class="checkbox_block">
            <input v-model="checkbox" type="checkbox" id="cbx" style="display: none;">
            <label for="cbx" class="check">
              <svg width="20px" height="20px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
            <span>I agree the processing of personal data</span>
          </div>
          <button @click="Submit" class="btn_submit" :class="{ disabled: this.checkbox === false }">GET IN TOUCH</button>
        </form>
      </div>
      <div>
        <p class="info_cotactUs">Please tell us more about your request and give us info about your company and country</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective)
export default {
  data () {
    return {
      name: '',
      phone: 0,
      email: '',
      checkbox: false
    }
  },
  methods: {
    Submit () {
      if (this.checkbox) {
        
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contacts_layout {
  background-image: url('~static/pattern.png');
  padding-top: 101px;
  padding-bottom: 101px;
  padding-left: 60px;
  padding-left: 87px;
}

.label {
  font-family: "SuisseIntl-Light";
  color: #FFFFFF;
  font-size: 51px;
  margin-bottom: 51px;
}

.flex {
  display: flex;
  flex-direction: row;

  & > div:first-child {
    width: 60%;
  }

  & > div:nth-child(2) {
    width: 40%;
  }
}

.form {
  width: 90%;
}

.info_cotactUs {
  font-size: 27px;
  text-align: left;
}

.checkbox_block {
  display: flex;
  align-items: center;
  margin-bottom: 47px;
  & > span {
    margin-left: 15px;
    font-size: 27px;
  }
}

.btn_submit {
  padding: 39px 90px;
  background-color: #262626;
  color: #FFFFFF;
  font-size: 11px;
  font-family: "SuisseIntl-SemiBold";
}

.disabled {
  background-color: 262626;
  opacity: 0.6;
  cursor: auto;
  pointer-events: none;
}

.inp {
  position: relative;
  width: 100%;
  //transform: rotateX(45deg) rotateY(-10deg) rotate(25deg) scale(2)
  .label {
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 27px;
    color: #040707;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all .2s ease;
  }
  input {
    -webkit-appearance: none;
    margin-bottom: 40px;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 27px;
    font-weight: 500;
    padding-bottom: 25px;
    border-bottom: 2px solid #040707;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all .15s ease;
    &:hover {
      background: rgba(#223254,.03);
    }
    &:not(:placeholder-shown)
      + span {
        color: black !important;
        transform: translateY(-26px) scale(.75);
      }
    &:focus {
      outline: none;
    }
      + span {
        color: #0077FF;
        transform: translateY(-26px) scale(.75);
      }
        + .border {
            transform: scaleX(1);
        }
  }
}


.check {
  cursor: pointer;
  position: relative;
  width: auto;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0,0,0);
  &:before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    border-radius: 50%;
    background: rgba(#223254,.03);
    opacity: 0;
    transition: opacity .2s ease;
  }
  svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #C8CCD4;
    stroke-width: 1.5;
    transform: translate3d(0,0,0);
    transition: all .2s ease;
    path {
      stroke-dasharray: 60;
      stroke-dashoffset: 0;
    }
    polyline {
      stroke-dasharray: 22;
      stroke-dashoffset: 66;
    }
  }
  &:hover 
    &:before {
      opacity: 1;
    svg {
        stroke: black;
      }
    }
}

#cbx:checked + .check {
  svg {
    stroke: black;
    path {
      stroke-dashoffset: 60;
      transition: all .3s linear;
    }
    polyline {
      stroke-dashoffset: 42;
      transition: all .2s linear;
      transition-delay: .15s;
    }
  }
}
</style>