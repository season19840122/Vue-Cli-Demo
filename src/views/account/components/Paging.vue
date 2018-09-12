<template>
  <div class="paging-wrap">
    <paginate
      v-model="page"
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'上一页'"
      :next-text="'下一页'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :prev-class="'page-prev'"
      :next-class="'page-next'">
    </paginate>
  </div>
</template>

<script>
export default {
  name: 'paging',
  data () {
    return {
      page: 1
    }
  },
  methods: {
    clickCallback (page) {
      console.log(page)
      // $('.guess-wrap>ul').eq(pageNum-1).show().siblings('ul').hide();
    }
  }
}
</script>

<style lang="scss">
  .paging-wrap {
    text-align: center;
    .pagination {
      display: inline-block;
      font-size: 14px;
      margin-top: 30px;
      li {
        cursor: pointer;
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-right: 8px;
        background: #ffffff;
        color: #212537;
        @include br(1px);
      }
      .page-item {
        width: 40px;
        &.active {
          background: #ffd200;
        }
      }
      .page-prev, .page-next {
        width: 80px;
      }
      .disabled {
        color: #c4c8cc;
        cursor: not-allowed;
        a {
          cursor: not-allowed;
        }
      }
    }
  }
</style>
