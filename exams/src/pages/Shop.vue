<template>
  <div class>
    <Header></Header>
    <section class="container">
      <router-view></router-view>
      <van-overlay :show="this.$store.state.show" @click="hides">
        <div class="wrapper" @click.stop>
          <div class="block" >
            <img :src="this.$store.state.car.pic" alt />
            <h3>{{this.$store.state.car.title}}</h3>
            <h4>
              <b>
                <span class="pri">￥{{this.$store.state.car.price}}</span>
                <s class="opri">￥{{this.$store.state.car.old_price}}</s>
              </b>
            </h4>
            <h5>
               <van-button type="danger" @click="cuts">-</van-button>
               <input type="text" v-model="this.$store.state.car.num" style="width:0.4rem" >
               <van-button type="danger" @click="ads">+</van-button>
            </h5>
            <van-button style="width:100%" type="danger" @click.stop="adds">加入购物车</van-button>
          </div>
        </div>
      </van-overlay>
    </section>
    <Footer></Footer>
    <div id="to-top-btn" @click="goTops">⬆</div>
  </div>
</template>

<script>
// import vueToTop from "vue-totop";
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "",
  data() {
    return {
      show: this.$store.state.show,
      cars:{}
    };
  },
  props: [],
  components: {
    Header,
    Footer
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.cars=this.$store.state.car
  },
  created() {},
  methods: {
    goTops() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    scrollToTop() {
      let topBtn = document.getElementById("to-top-btn");
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 40) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    },
    hides(){
       this.$store.commit("hides");
    },
    adds(){
      let v=this.$store.state.car
      console.log('商品名称'+v.title+''+'商品价格'+v.price+''+'商品数量'+v.num)
      this.$store.commit("hides");
    },
    //数量加
    ads(){
      this.$store.commit('ads')
    },
    //数量减
    cuts(){
      this.$store.commit('cuts')
    },
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.container {
  height: 10rem;
  background: #f7f7f7;
  padding: 0 0.2rem;
  padding-top: 3.2rem;
  box-sizing: border-box;
}
#to-top-btn {
  width: 1.3rem;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #ccc;
  position: fixed;
  right: 0.06rem;
  bottom: 2rem;
  display: none;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img{
    width: 2rem;
    height: 2rem;
    display: block;
    margin: 0 auto;
  }
  h3,h4,h5{
    width: 100%;
    text-align: center;
    margin: 0.2rem auto;
  }
}

.block {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  position: absolute;
  bottom: 0.8rem;
  left: 0;
}
</style>