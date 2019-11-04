<template>
  <div class="contacts_layout">
    <p class="label">Contact Us</p>
    <div class="flex">
      <div>
        <form class="form">
          <label class="field a-field a-field_a1">
            <input class="field__input a-field__input" v-model="name" pattern=".{3,}" placeholder="Andrey" required>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Name</span>
            </span>
          </label>
          <label class="field a-field a-field_a1">
            <input class="field__input a-field__input" v-mask="'+380(##)###-##-##'" v-model="phone" type="tel" placeholder="+380" required>
            <span class="a-field__label-wrap">
              <span class="a-field__label" style="color: white;">Phone</span>
            </span>
          </label>
          <label class="field a-field a-field_a1">
            <input class="field__input a-field__input" type="email" v-model="email" placeholder="test@mail.com" required>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Email</span>
            </span>
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
      phone: null,
      email: '',
      checkbox: false
    }
  },
  methods: {
    Submit () {
      if (this.checkbox && this.name > 3) {
        let data = {
          name: this.name,
          phone: this.phone,
          email: this.email
        }
        this.$axios.$post('http://httpbin.org/post', { data: data })
          .then(res => {
            alert(res.data)
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contacts_layout {
  background-image: url('~static/pattern.png');
  padding: 101px 87px 60px 101px;

  @media (max-width: 425px) {
    padding: 50.5px 43.5px 30px 50.5px;
  }
}

.label {
  font-family: "SuisseIntl-Light";
  color: #FFFFFF;
  font-size: 51px;
  margin-bottom: 51px;

  @media (max-width: 425px) {
    font-size: 25.5px;
  }
}

.flex {
  display: flex;
  flex-direction: row;
  @media (max-width: 425px) {
    flex-direction: column;
  }
  & > div:first-child {
    width: 60%;

    @media (max-width: 425px) {
      width: 100%
    }
  }

  & > div:nth-child(2) {
    width: 40%;
    @media (max-width: 425px) {
      width: 100%;
    }
  }
}

.form {
  width: 90%;
  @media (max-width: 425px) {
    width: 100%;
  }
}

.info_cotactUs {
  font-size: 27px;
  text-align: left;

  @media (max-width: 425px) {
    font-size: 13.5px;
  }
}

.checkbox_block {
  display: flex;
  align-items: center;
  margin-bottom: 47px;
  & > span {
    margin-left: 15px;
    font-size: 27px;

    @media (max-width: 425px) {
      font-size: 13.5px;
    }
  }
}

.btn_submit {
  padding: 39px 90px;
  background-color: #262626;
  color: #FFFFFF;
  font-size: 11px;
  font-family: "SuisseIntl-SemiBold";
  @media (max-width: 425px) {
    margin-bottom: 15px;
    padding: 28px 45px;
  }
}

.disabled {
  background-color: #262626;
  opacity: 0.6;
  cursor: auto;
  pointer-events: none;
}


.field{
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, black);
}

.field__input{ 
  background-color: transparent;
  border-radius: 0;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: 1em;
}

.field__input:focus::-webkit-input-placeholder{
  color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder{
  color: var(--uiFieldPlaceholderColor);
  opacity: 1;
}

.a-field{
  display: inline-block;
}

.a-field__input{ 
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.a-field__input:focus{
  outline: none;
}

.a-field{
  --uiFieldHeight: var(--fieldHeight, 40px);  
  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
  --uiFieldBorderColor: var(--fieldBorderColor);

  --uiFieldFontSize: var(--fieldFontSize, 22px);
  --uiFieldHintFontSize: var(--fieldHintFontSize, 22px);

  --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
  --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px); 
  @media (max-width: 425px) {
    --uiFieldFontSize: var(--fieldFontSize, 16px);
    --uiFieldHintFontSize: var(--fieldHintFontSize, 16px);
  }
  position: relative;
  box-sizing: border-box;
  font-size: var(--uiFieldFontSize);
  width: 80%;
  margin-bottom: 50px;
  border-bottom: 1px solid black;

  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 25px;
  }
}

.a-field__input{
  height: var(--uiFieldHeight);
  padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);  
}

.a-field__input::-webkit-input-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.a-field__input::-moz-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.a-field__input:not(:placeholder-shown) ~ .a-field__label-wrap .a-field__label{
  opacity: 0;
  bottom: var(--uiFieldPaddingBottom);
}

.a-field__input:focus::-webkit-input-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.a-field__input:focus::-moz-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.a-field__label-wrap{
  box-sizing: border-box;
  width: 100%;
  height: var(--uiFieldHeight);	

  pointer-events: none;
  cursor: text;

  position: absolute;
  bottom: 0;
  left: 0;
}

.a-field__label{
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  bottom: calc(50% - .5em);

  line-height: 1;
  font-size: var(--uiFieldHintFontSize);
  pointer-events: none;
  transition: bottom .2s cubic-bezier(0.9,-0.15, 0.1, 1.15), opacity .2s ease-out;
  will-change: bottom, opacity;
}

.a-field__input:focus ~ .a-field__label-wrap .a-field__label{
  opacity: 1;
  bottom: var(--uiFieldHeight);
  color: white;
  font-size: 13px;
}

.a-field_a1 .a-field__input{
  transition: border-color .2s ease-out;
  will-change: border-color;
}

.a-field_a1 .a-field__input:focus{
  border-color: var(--fieldBorderColorActive);
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