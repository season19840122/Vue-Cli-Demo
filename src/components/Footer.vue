<template>
  <div class="footer-wrap">
    <div class="footer">
      <p class="link">
        <a href="http://map.swjoy.com" target="_blank">网站地图</a>|<a href="http://www.300113.com/" target="_blank">关于顺网</a>|<a href="https://www.swjoy.com" target="_blank">了解顺网游戏</a>|<a href="http://www.swjoy.com/cooperation.html" target="_blank">商务合作</a>|<a href="http://www.swjoy.com/copyright.html" target="_blank">著作权保护声明</a>|<a href="http://www.swjoy.com/policy.html" target="_blank">隐私策略</a>|<a href="http://www.swjoy.com/licence.html" target="_blank">网络文化经营许可证 浙网文[2016]0134-34</a>
      </p>
      <p class="txt">版权所有 2005-2018 杭州顺网科技股份有限公司 保留所有权利  <a href="http://www.swjoy.com/icp.html" target="_blank">浙B2-20090265 </a></p>
      <p class="txt">客服电话：400-8851678</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer-wrap {
    height: 190px;
    background: #000000;
    .footer {
      font-size: 12px;
      padding-top: 50px;
      color: #a5a5a5;
      @include center;
      text-align: center;
      a {
        padding: 0 5px;
        color: #a5a5a5;
        text-decoration: none;
      }
      .link {
        margin-bottom: 10px;
      }
      .txt {
        margin-bottom: 10px;
      }
    }
  }
</style>
