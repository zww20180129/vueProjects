<template>
    <div>
        <div class="back-add">
            <div class="threeImg">
                <div class="Containt">
                    <ul :style="{'left':calleft + 'px'}">
                        <li v-for="(item,index) in superurl" :key="index">
                            <img :src="item.img">
                        </li>
                    </ul>
                    <div class="iconright" @click="youhua">
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        superurl: [
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7e6835087ef3d806000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7516fa081aab2b06000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7e6835087ef3d806000338-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg'
          },
          {
            url: '',
            img: 'https://img.mukewang.com/szimg/5c7516fa081aab2b06000338-360-202.jpg'
          }
        ],
        calleft: 0
      }
    },

    methods: {
      //点击按钮右移
      youhua() {
        this.calleft += 340
        if (this.calleft > 0) {
          this.calleft = -1020
        }
      }
    }
  }
</script>

<style scoped>
    /*超链接图片*/

    #divAdd {
        background-color: #ededed;
        width: 1000px;
        margin: 0px auto;
    }

    .divAdd-con {
        margin: 0px auto;
        width: 1000px;
        overflow: auto;
        padding: 30px 0px;
    }

    .divAdd-con img {
        float: left;
    }

    .indexrt {
        margin: 0px 40px;
    }

    .divAddleft img {
        float: left;
        margin-bottom: 7px;
    }

    .divAddleft {
        float: left;
        display: inline;
        width: 370px;
    }

    .divAddrt {
        float: right;
        display: inline;
        margin-top: 7px;
    }

    .back-add {
        background-color: #ededed;
    }

    .divAdd-con img {
        border: none;
    }

    a:focus,
    a:hover {
        color: #23527c;
    }

    .threeImg {
        height: 158px;
        background: #ededed;
        border-bottom: 3px solid #4679b2;
        min-width: 1000px;
    }

    .threeImg .Containt ul {
        margin: 0 auto;
        width: 2400px;
        position: absolute;
        left: 0px;
        cursor: pointer;
        height: 100%;
    }

    .threeImg .Containt ul li {
        width: 300px;
        margin-right: 40px;
        margin-top: 10px;
        float: left;
    }

    .threeImg .Containt ul li img {
        height: 128px;
        width: 100%;
    }

    .Containt {
        position: relative;
        width: 1000px;
        height: 130px;
        overflow: hidden;
        margin: 0 auto;
    }

    .iconleft {
        position: absolute;
        width: 20px;
        height: 80px;
        top: 10px;
        z-index: 99999;
        padding-top: 48px;
        background-color: #ddd;
        vertical-align: middle;
    }

    .iconright {
        position: relative;
        left: 978px;
        top: 70px;
        background-color: #ddd;
        /*position: absolute;*/
        width: 20px;
        height: 80px;
        top: 10px;
        z-index: 99999;
        padding-top: 48px;
        background-color: #ddd;
        vertical-align: middle;
    }
</style>