<template>
  <!-- <img src="../assets/oasis.png" alt=""> -->
  <div class="container-md">
    <div class="p-4 p-md-5 mb-4 text-white oasisbg">
        <div class="col-md-6 px-0 ma180">
          <h1 class="display-4 fst-italic fontp">Oasis</h1>
          <p class="lead my-3 fontp">绿洲乐队是1991年成立于曼彻斯特的英国摇滚乐团。乐团旧名“The Rain”，由利亚姆·加拉格、保罗·亚瑟斯、保罗·麦克盖根与东尼·麦卡罗组成，利亚姆的哥哥诺尔·加拉格也随后入团。截至2009年6月，绿洲乐队在全球范围内共坐拥超过七千万的专辑销售量。</p>
        </div>
    </div>
    <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <img  :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3" >
              <h5 class="card-title">{{column.title}}</h5>
              <p class="card-text text-left">{{column.description}}</p>
              <router-link :to="{name: 'post', params: {id: column.id}}" class="btn btn-outline-primary">进入专栏</router-link>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface DetailProps{
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<DetailProps[]>,
      required: true
    }
  }
})
</script>

<style>
.row{
  color: black;
}
.oasisbg{
  background-image: url(../assets/oasis.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.fontp{
  font-weight: 900;
  text-shadow: 0 0 5px #070000, 0 0 5px #000000;
}
.ma180{
 margin-top: 230px;
}
</style>
