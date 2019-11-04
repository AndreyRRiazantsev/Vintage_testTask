<template>
  <div class="map">
    <div class="flex">
      <div class="info_map">
        <p>Our Offices</p>
        <div class="map_controllers">
          <p class="map_links" @click="active = i" :class="{ activeColor: active === i }" v-for="(item,i) in items" :key="i">{{ item.label }}</p>
        </div>
        <p class="map_label">Global Message Services Ukraine LLC</p>
        <ul class="sub_info">
          <li>{{ items[active].label }},Stepan Bandera, 33</li>
          <li>02066</li>
          <li>Ukraine</li>
        </ul>
      </div>
      <div>
        <mapMarker class="mb_map" :pos="items[active].src"/>
      </div>
    </div>
  </div>
</template>
<script>
import mapMarker from './mapMarker'
export default {
  data () {
    return {
      active: 0,
      items: [
        { label: 'KYIV', src: { lat: 50.454375, lng: 30.544534 } },
        { label: 'NEW YORK', src: { lat: 40.697355, lng: -74.013331 } },
        { label: 'GUANGZHOU', src: { lat: 23.124103, lng: 113.264277 } },
        { label: 'BARCELONA', src: { lat: 41.381961, lng: 2.172819 } }
      ]
    }
  },
  components: {
    mapMarker
  }
}
</script>
<style lang="scss" scoped>
.map {
  background-color: #262626;
  height: auto;
  position: relative;
}

.flex {
  display: flex;
  height: 100%;
  flex-direction: row;
  @media (max-width: 425px) {
    flex-direction: column;
  }
  & > div {
    width: 50%;

    @media (max-width: 425px) {
     width: 100%;
    }
  }
}

.mb_map {
  @media (max-width: 425px) {
   height: 500px;
  }
}

.info_map {
  padding-top: 101px;
  padding-left: 61px;
  margin-bottom: 157px;

  @media (max-width: 425px) {
    padding-top: 50.5px;
    padding-left: 31px;
    margin-bottom: 77px;
  }
  & > p {
    font-size: 51px;
    font-family: "SuisseIntl-Light";
    color: #FFFFFF;
    text-align: left;
    margin-bottom: 49px;

    @media (max-width: 425px) {
      font-size: 31px;
    }
  }
}

.map_controllers {
  display: flex;
  flex-direction: row;
  margin-bottom: 53px;

  @media (max-width: 425px) {
    margin-bottom: 22.5px
  }
}

.sub_info {
  list-style: none;
  color: #FFFFFF;
  padding: 0px;
  & > li {
    font-family: "SuisseIntl-Light";
    font-size: 11px;
  }
}

.map_links {
  cursor: pointer;
  font-size: 12px;
  margin-right: 30px;
  font-family: "SuisseIntl-SemiBold";
  color: #FFFFFF;

  @media (max-width: 425px) {
    font-size: 10px;
  }
}

.map_label {
  font-size: 39px !important;
  margin-bottom: 36px !important;

  @media (max-width: 425px) {
    font-size: 28.5px !important;
  }
}
</style>