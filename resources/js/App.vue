<template>
  <div>
    <Navbar :app="this" class="mb-2" />
    <spinner v-if="loading"></spinner>
    <div v-else-if="initiated">
      <router-view :app="this" />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar,
  },
  data() {
    return {
      user: null,
      loading: false,
      initiated: false,
      req: axios.create({
        baseUrl: "{{ URL::to(" / ") }}",
      }),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      this.req.get("auth/init").then((response) => {
        this.user = response.data.user;
        (this.loading = false), (this.initiated = true);
      });
    },
  },
};
</script>
<style scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
body {
  margin: 0;
  padding: 0;
}
</style>
