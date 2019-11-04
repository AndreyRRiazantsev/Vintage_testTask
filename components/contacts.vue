<template>
  <div fluid class="wrapper">
    <p class="label">Contacts</p>
    <div class="flex">
      <div>
        <p class="sub_label"><a class="link">GMS</a> Headquarters</p>
        <div class="flex">
          <ul class="list">
            <li>Global Message Services Ukraine LLC</li>
            <li>Bundesstrasse 5 | 3rd Floor</li>
            <li>6300 Zug</li>
            <li>Switzerland</li>
            <li class="li_link"><a class="link sub_link">+41 41 544 62 00</a></li>
          </ul>
          <ul class="list">
            <li class="ant_list">Email</li>
            <li><a class="ant_link">INFO@GMS-WORLDWIDE.COM</a></li>
            <li class="ant_list">Send message</li>
            <li><a class="ant_link">VIBER US</a></li>
            <li class="ant_list">Send form</li>
            <li><a class="ant_link">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p class="sub_label">Technical support <a class="link">24/7</a></p>
        <p class="text_info">
          GMS understands that it can be hard to follow all new technologies. 
          We regularly provide for all our clients educational trainings to make your operator`s business earn more and better 
          though our best practices.
        </p>
        <a class="link sub_link">+41 41 544 62 00</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.label {
  font-size: 75px;
  color: #333333;
  font-family: "SuisseIntl-Light";
  margin-bottom: 50px;

  @media (max-width: 425px) {
    font-size: 55px
  }
}

.sub_label {
  font-size: 51px;
  font-family: "SuisseIntl-Light";
  margin-bottom: 43px;

  @media (max-width: 425px) {
    font-size: 31px
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
      width: 100%;
    }

  }

  & > div:nth-child(2) {
    width: 40%;

    @media (max-width: 425px) {
      width: 100%;
    }
  }
}

.text_info {
  font-size: 23px;
  font-family: "SuisseIntl-Light";
  text-align: left;
  margin-bottom: 37px;

  @media (max-width: 425px) {
    font-size: 13px;
  }
}

.sub_link {
  font-size: 39px;

  @media (max-width: 425px) {
    font-size: 29px;
  }
}

.li_link {
  margin-top: 40px;
}

.list:first-child {
  margin-right: 37px;
}

.list {
  padding: 0px;
  
  & > li {
    list-style: none;
    font-family: 'SuisseIntl-SemiBold';
    margin-bottom: 16px;
  }

  & > .ant_list {
    font-family: "SuisseIntl-Light";
  }

  & > .ant_link {
    font-size: 17px;
    font-family: 'SuisseIntl-SemiBold';
    margin-bottom: 16px;
  }

  & > a {
    font-size: 39px;
  }
}

.list_link {
  font-size: 17px;
}
</style>