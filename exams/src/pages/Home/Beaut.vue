<template>
  <div class>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul>
          <li v-for="(item, index) in newList" :key="index">
            <img :src="item.pic" alt />
            <h3>{{item.title}}</h3>
            <h4>
              <b>
                <span class="pri">￥{{item.price}}</span>
                <s class="opri">￥{{item.old_price}}</s>
              </b>
              <van-icon name="cart-o" @click="add(item)" size="22" />
            </h4>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios({
      url: "/static/json/list.json"
    }).then(res => {
      res.result.map((item)=>{
        return item.num=1
      })
     console.log(res.result)
      this.list = res.result;
    });
  },
  created() {},
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = this.list;
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.concat(this.list);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    //添加到购物车
    add(v) {
      console.log(v);
      v.num
      this.$store.commit("shows",v);
    }
  },
  watch: {},
  computed: {
    newList() {
      return this.list.filter(item => {
        return item.cid == "59f1e47e9bfd8f3bd030eed5";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 48%;
    height: 5rem;
    background: #fff;
    margin-bottom: 0.2rem;
    h3 {
      min-height: 0.8rem;
      font-size: 0.26rem;
      color: #555;
      font-weight: normal;
      margin-top: 0.2rem;
    }
    h4 {
      display: flex;
      justify-content: space-between;
      .pri {
        color: #a00000;
      }
      .opri {
        color: #777;
        font-weight: normal;
      }
    }
    img {
      width: 3.4rem;
      height: 3.4rem;
      display: block;
      margin: 0 auto;
    }
  }
}

</style>