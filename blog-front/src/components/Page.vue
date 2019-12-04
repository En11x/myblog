<template>
  <div class='pages'>
      <ol class='page-navigator'>
          <li class='prev' v-show="currentPage !== 1" @click="changePage('prev')">
              <span>上一页</span>
          </li>
          <li v-show="currentPage !== 1" @click="changePage(1)">
              <span :class="{'active':currentPage==1}">1</span>
          </li>
          <li v-show="Math.abs(currentPage - 1)>1">
              <em>..</em>
          </li>
          <li class='current-page'>
              <span class="active">{{currentPage}}</span>
          </li>
          <li v-show="Math.abs(currentPage - Math.ceil(total/pageSize))>1"><em >..</em></li>
          <li v-show="currentPage !== Math.ceil(total/pageSize)" @click="changePage(Math.ceil(total/pageSize))">
              <span>{{Math.ceil(total/pageSize)}}</span>
          </li>
          <li class='next' v-show="currentPage !== Math.ceil(total/pageSize) " @click="changePage('next')">
              <span>下一页</span>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
    name:'Page',
    data(){
        return{
            currentPage:2,
            total:13,
            pageSize:4,  //没页展示4条
        }
    },
    methods:{
        //改变当前页
        changePage(type){
            if(type == 'prev'){
                //上一页
                this.currentPage --
            }else if(type == 'next'){
                //下一页
                this.currentPage++
            }else{
                this.currentPage = type
            }
        },
    }

}
</script>

<style lang='less' scoped>
.pages{
    width: 100%;
    height: 100%;
    
    .page-navigator{
        overflow: hidden;
        li{
            float: left;
            display: inline-block;
            margin: 0 5px;
            height: 24px;
            line-height: 24px;
            transition: all .3s;
            span{
                cursor: pointer;
                &:hover{
                    color: #000;
                    border-bottom: 1px solid #000;
                }
                &.active{
                    border-bottom: 1px solid #000;
                }
            }
        }
    }
}
</style>