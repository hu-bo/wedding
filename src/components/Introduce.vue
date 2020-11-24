<template>
    <div class="introduce">
       <div class="item" v-for="(item, index) in list" :key="index">
           <image class="img"   lazy-load="true" :src="item.src" @tap="toDetail(item.src)" />
           <p class="name" >{{item.name}} </p>
       </div>
       <div v-if="detail" class="detail">
           <image class="detail-img"  lazy-load="true" :src="src"/>
           <button @tap="toLogin">开始制作</button>
       </div>
       <div v-if="login" class="login">
           <div class="from-item">
                <span>账号</span><input type="text" placeholder="请输入您的账号" v-model="username" maxlength="10">
            </div>
            
            <div class="from-item">
                <span>密码</span><input type="text" placeholder="请输入您的密码" v-model="password" maxlength="10">
            </div>
            
            <div>  </div>
           <button @tap="goLogin" :loading="loading">登录(目前只支持内测账号)</button>
       </div>
    </div>
</template>
<script>
import tools from 'common/js/h_tools'

export default {
  name: 'Introduce',
  data () {
    return {
      list: [],
      src: '',
      detail: false,
      login: false,
      username: '',
      password: '',
      loading: false
    }
  },
  onLoad () {
    console.log(111)
    this.getDevList()
  },
  methods: {
    getDevList () {
      const db = wx.cloud.database()
      const album = db.collection('dev_list')
      album.get().then(res => {
        if (!Array.isArray(res.data) || res.data.length === 0) {
          return
        }
        console.log(this.list)
        this.list = res.data
      })
    },
    toDetail (src) {
      this.detail = true
      this.src = src
    },
    toLogin () {
      this.detail = false
      this.login = true
    },
    goLogin () {
      if (!this.username || !this.password) {
        tools.showToast('表单填写不完整')
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
        tools.showToast('账号或密码错误')
      }, 3000)
    }
  }
}
</script>

<style lang="stylus">
.introduce
    .item
        display inline-block
        margin-left 20px
    .img
        width 156px
        height 280px
    .name
        color #333
        padding 10px 0 16px
    .detail,.login
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        z-index 20
        background-color #ffffff
    .detail-img
        width 100%
        height 100%
    .detail
        button
            position fixed
            left 34%
            bottom  10px
            background-color blue
            color #ffffff
            padding 0px 30px
    .login
        .from-item
            margin-bottom 60px
            input
                margin-top 20px
                border 1px solid #E0E0E0
                padding 30px 10px
</style>