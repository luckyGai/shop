<template>
  <div>
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词">
      <template #action>
        <div @click="sear">搜索</div>
      </template>
    </van-search>
    <div>历史记录
      <ol>
        <li v-for="(item, index) in historys" :key="index">
          {{item}}
        </li>
      </ol>
    </div>
    <ul>
      <li v-for="(item,index) in search_list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
      list: [],
      historys:[]
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios({
      url: "/static/json/list.json"
    }).then(res => {
      console.log(res);
      this.list = res.result;
    });
  },
  created() {
    let his= JSON.parse(localStorage.getItem('his')) 
    if(his){
      this.historys=his
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/shop/home");
    },
    //添加历史记录
    sear() {
      if(this.value==''){
        return
      }
      this.historys.unshift(this.value);
      if(this.historys.length>5){
        this.historys.pop()
      }
      localStorage.setItem("his",JSON.stringify(this.historys))
    }
  },
  watch: {},
  computed: {
    search_list() {
     
      let data=this.list.filter((item)=>{
         if(this.value==''){
        return""
      }
        if(item.title.indexOf(this.value)!=-1){
          return item
        }
      })
      return data
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  li {
    line-height: 0.6rem;
    height: 0.6rem;
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>