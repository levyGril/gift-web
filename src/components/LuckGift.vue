<template>
    <div>
        <!--<header-nav></header-nav>-->
      <div class="waterfall">
        <div class="item" v-for="item in gifts">
          <div class="item-content">
            <img src="../assets/gift.png" width="" alt="礼物">
            <span>{{item.title}}/{{item.count}}</span>
            <br>
            <span>{{item.notes}}</span>
          </div>
        </div>
      </div>
      <el-button type="primary" icon="el-icon-success" @click="centerDialogVisible = true">开始抽奖</el-button>

      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
      </el-dialog>
    </div>
</template>
<style>
.waterfall{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
}
.item{
   width:160px;
   height:100px;
　　box-sizing: border-box;
　　break-inside: avoid;
　　padding: 10px;
   margin:10px;
   background-color:#fff;
}
.item-content{
　　display: flex;
　　flex-direction: column;
　　justify-content: center;
　　align-items: center;
　　padding: 10px;
　　height: auto;
　　font-size: 20px;
　　color: #686868;
　　box-sizing: border-box;
　　border: 1px solid #ccc;
}
</style>
<script>
    import { mapGetters } from 'vuex'
    const fetchInitialData = ({store})=>{
        return store.dispatch('getGiftList')
    }
    export default{
        asyncData: fetchInitialData,
        data(){
            return{
              centerDialogVisible: false,
              categories:[{
                "name": "华为P10",
                "note": "华为 P10 Plus 全网通 4G 手机 双卡双待-6G+128G-玫瑰金",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }, {
                "name": "笔记本",
                "note": "纪念品",
                "count": 8,
                "pic":"gift1.png"
              }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              , {
                  "name": "笔记本",
                  "note": "纪念品",
                  "count": 8,
                  "pic":"gift1.png"
                }
              ]
            }
        },
        components: {
            //HeaderNav,
        },
       computed: {
         ...mapGetters({
            gifts:'getGiftList'
        })
       },
       mounted(){
        fetchInitialData({store:this.$store})
       },
    }
</script>
