<template>

</template>

<script>

import router from "@/router";
import store from "../store";
import {defineComponent} from "vue";

export default defineComponent({
  name: "levitationBall",
  computed: {
    store() {
      return store
    }
  },
  methods: {
    router() {
      return router
    }
  },
  setup() {


    return {

    };
  },
});
</script>

<style scoped>

</style>
