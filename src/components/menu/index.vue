<template>
  <div class="menu">
    <div class="top-menu">
      <ul class="center-list">
        <li
          v-for="(item,index) in topMenu"
          :key="index"
        >
          <img
            :src="item.icon"
            alt=""
          >
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="menu-left">
      <div class="one">
        <ul class="one-first">
          <li
            class="one-first-li"
            v-for="(item,index) in leftMenu"
            :key="index"
            @click="showList(index)"
            :class="firstIndex==index?'active':''"
          >
            <span>{{item.name}}</span>
            <ul
              class="one-second"
              v-if="item.seconds&&item.seconds.length>0&&firstIndex==index"
            >
              <li
                class="one-second-li"
                v-for="(two,ind) in item.seconds"
                :key="ind"
                @click="showListTwo(ind)"
                :class="secondIndex==ind?'active':''"
              >{{two.name}}
                <img src="img/menu/down.png" />
                <ul
                  class="one-third"
                  v-if="two.list&&two.list.length>0&&secondIndex==ind"
                >
                  <li class="one-third-li" v-for="(three,indt) in two.list" :key="indt" @click.stop="showListThree(indt)"
                   :class="thirdIndex==indt?'active':''">
                    {{three.name}}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      firstIndex: 0,
      secondIndex: 0,
      thirdIndex: 0,
      topMenu: [
        { name: '首页', icon: 'img/menu/top_menu1.png' },
        { name: '基金', icon: 'img/menu/top_menu2.png' },
        { name: '股票', icon: 'img/menu/top_menu3.png' },
        { name: '数据', icon: 'img/menu/top_menu4.png' },
        { name: '量化', icon: 'img/menu/top_menu5.png' },
        { name: '风控', icon: 'img/menu/top_menu6.png' },
        { name: '归因', icon: 'img/menu/top_menu7.png' },
        { name: '客服', icon: 'img/menu/top_menu8.png' },
      ],
      leftMenu: [
        {
          name: '深度安全',
          seconds: [
            {
              name: '获取股票数据',
              list: [
                { name: '获取股票概况', url: '/1' },
                { name: '获取单支股票数据', url: '/2' },
                { name: '获取所有股票数据', url: '/3' },
                { name: '判断股票是否是ST', url: '/4' },
                { name: '获取股票的融资融券信息', url: '/5' },
                { name: '股票分类信息', url: '/6' },
                { name: '获取指数成分股', url: '/7' },
                { name: '获取行业、概念成分股', url: '/8' },
                { name: '查询股票所属行业', url: '/9' },
                { name: '获取行情数据', url: '/10' },
                { name: '历史行情数据', url: '/12' },
                { name: '当前单位时间的行情数据', url: '/13' },
                { name: 'tick行情', url: '/14' },
              ]
            },
            {
              name: '获取融资融券标的列表',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
            {
              name: '获取龙虎榜数据',
              list: [
                { name: '龙虎榜概况', url: '/1' },
                { name: '龙虎榜数据', url: '/2' },
              ]
            }
          ]
        },
        {
          name: '指标/因子集',
          seconds: [
            {
              name: '获取融资融券标的列表1',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据1',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据1',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            }
          ]
        },
        {
          name: '产品/经理',
          seconds: [
            {
              name: '获取融资融券标的列表2',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据2',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据2',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '研究报告',
          seconds: [
            {
              name: '获取融资融券标的列表3',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据3',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据3',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '风险监控',
          seconds: [
            {
              name: '获取融资融券标的列表4',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据4',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据4',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '可视化分析',
          seconds: [
            {
              name: '获取融资融券标的列表5',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据5',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据5',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '报告智能生成',
          seconds: [
            {
              name: '获取融资融券标的列表6',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据6',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据6',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '信息检索',
          seconds: [
            {
              name: '获取融资融券标的列表7',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据7',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据7',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '知识库',
          seconds: [
            {
              name: '获取融资融券标的列表8',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据8',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据8',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        },
        {
          name: '用户DIY相关',
          seconds: [
            {
              name: '获取融资融券标的列表9',
              list: [
                { name: '获取融资融券标的概况', url: '/1' },
                { name: '获取融资的列表', url: '/2' },
                { name: '获取融券的列表', url: '/3' },
              ]
            },
            {
              name: '获取融资融券汇总数据9',
              list: [
                { name: '获取融资融券汇总概况', url: '/1' },
                { name: '融资融券汇总', url: '/2' },
              ]
            },
            {
              name: '获取股票资金流向数据9',
              list: [
                { name: '股票资金流向概况', url: '/1' },
                { name: '股票资金流向数据', url: '/2' },
              ]
            },
          ]
        }
      ]
    }
  },
  methods: {
    showList (ev) {
      this.firstIndex = ev;
    },
    showListTwo (ev) {
      if(this.secondIndex == ev){
        this.secondIndex=null; 
      }else{
        this.secondIndex = ev
        this.thirdIndex = 0;
      };
    },
    showListThree (ev) {
      this.thirdIndex = ev;
    },
  }
};
</script>

<style>
@import "../../styles/menu.scss";
</style>
