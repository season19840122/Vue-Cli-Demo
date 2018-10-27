<template>
  <div class="paging-wrap">
    <!-- <paginate
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
    </paginate> -->
    <a-pagination
    :defaultCurrent="1"
    :pageSize="5"
    :total="page.total"
    :itemRender="itemRender"
    @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'paging',
  data () {
    return {
      // page: 1
      // pageSizeOptions: ['10', '20', '30', '40', '50'],
      // current: 1,
      pageSize: 5
    }
  },
  computed: {
    page () {
      return this.$store.state.page
    }
  },
  methods: {
    // clickCallback (page) {
    //   console.log(page)
    // },
    itemRender (current, type, originalElement) {
      if (type === 'prev') {
        return <a class="pagePrev">上一页</a>
      } else if (type === 'next') {
        return <a class="pageNext">下一页</a>
      }
      return originalElement
    },
    handleGetOrders (currentPage) {
      let obj = {}
      if (this.page.selectTime) {
        obj = {
          selectTime: this.page.selectTime,
          page: currentPage,
          rows: 5
        }
      } else {
        obj = {
          page: currentPage,
          rows: 5
        }
      }
      axios.orderManager(obj)
        .then(res => {
          if (res) {
            if (res.success) {
            // 订单数据
              this.orders = res.data.rows
              // 分页
              let pageObj = {}
              pageObj['total'] = res.data.total
              this.$store.commit('handlePage', pageObj)
            }
          }
        })
    },
    onChange (currentPage) {
      // console.log('Page: ', currentPage)
      this.handleGetOrders(currentPage)
    }
  }
}
</script>

<style lang="scss">
  .paging-wrap {
    text-align: center;
    margin-top: 30px;
    // .page-prev, .page-next {
    //   border: 1px solid #d9d9d9;
    //   background-color: #fff;
    // }
    // .pagination {
    //   display: inline-block;
    //   font-size: 14px;
    //   margin-top: 30px;
    //   li {
    //     cursor: pointer;
    //     float: left;
    //     height: 40px;
    //     line-height: 40px;
    //     text-align: center;
    //     margin-right: 8px;
    //     background: #ffffff;
    //     color: #212537;
    //     @include br(1px);
    //   }
    //   .page-item {
    //     width: 40px;
    //     &.active {
    //       background: #ffd200;
    //     }
    //   }
    //   .page-prev, .page-next {
    //     width: 80px;
    //   }
    //   .disabled {
    //     color: #c4c8cc;
    //     cursor: not-allowed;
    //     a {
    //       cursor: not-allowed;
    //     }
    //   }
    // }
  }
</style>
