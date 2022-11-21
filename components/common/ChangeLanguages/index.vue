<template>
  <div class="languages-option">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="select-flag">
          <img
            class="flag"
            :src="
              language === 'vi' ? '/images/vietnam.png' : '/images/england.png'
            "
            alt=""
          />
          <v-icon small>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list class="flag-option">
        <v-list-item class="flag-item" @click="handleChangeLanguage('vi')">
          <img class="flag" src="/images/vietnam.png" alt="" />
          <span class="language">VIE</span>
        </v-list-item>
        <v-list-item class="flag-item" @click="handleChangeLanguage('en')">
          <img class="flag" src="/images/england.png" alt="" />
          <span class="language">ENG</span>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "vi",
    };
  },
  methods: {
    handleChangeLanguage(lang) {
      this.$i18n.setLocale(lang);
      this.language = lang;
      console.log(lang);
    },
  },
};
</script>

<style>
.languages-option {
  position: relative;
  /* z-index: 9; */
}
.select-flag {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
}
.flag {
  width: 34px;
  border-radius: 4px;
  margin-right: 4px;
}
.flag-option {
  margin-top: 50px;
  background-color: #444 !important;
  border-radius: 6px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.flag-item {
  cursor: pointer !important;
  display: flex;
  align-items: center;
  gap: 4px;
}
.flag-item:hover {
  background-color: #666;
}
.language {
  font-size: 0.8rem;
}
</style>
