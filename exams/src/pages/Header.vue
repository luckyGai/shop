<template>
  <div class="header">
    <header>
      <h4>
        <b>lativ城衣</b>
        <van-icon name="weapp-nav" />
      </h4>
      <van-search @click="goSearch" shape="round" background="#fff" placeholder="请输入搜索关键词" />
      <nav>
        <van-tabs @click="onClick">
          <van-tab v-for="(item, index) in navList" :key="index" :name="index" :title="item.title"></van-tab>
        </van-tabs>
      </nav>
      <ul id="sorts">
        <li>综合</li>
        <li>销量</li>
        <li>新品</li>
        <li>
          价格
          <van-icon name="arrow-up" @click="sorts()" />
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      navList: []
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios({
      url: "/static/json/fenlei.json"
    }).then(res => {
      console.log(res);
      this.navList = res.result;
    });
  },
  created() {},
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
    onClick(name) {
      console.log(name);
      if (name == 0) {
        this.$router.push("/shop/computer");
      } else if (name == 1) {
        this.$router.push("/shop/women");
      } else if (name == 2) {
        this.$router.push("/shop/Sports");
      } else if (name == 3) {
        this.$router.push("/shop/phone");
      } else if (name == 4) {
        this.$router.push("/shop/beaut");
      } else if (name == 5) {
        this.$router.push("/shop/box");
      } else if (name == 6) {
        this.$router.push("/shop/wshooes");
      } else if (name == 7) {
        this.$router.push("/shop/car");
      } else if (name == 8) {
        this.$router.push("/shop/beer");
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  h4 {
    height: 0.78rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
}

#sorts {
  width: 426px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: 0.2rem 0;
  li {
    width: 1.4rem;
    text-align: center;
  }
}
</style>