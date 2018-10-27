<template>
  <div class="manage">
    <div class="manage-wrap" v-if="!records">
      <div class="manage-record">
        <div class="tab-wrap cf">
          <ul>
            <li :class="{ active: index == thisIndex }"
            v-for="(item, index) of tabs"
            :key="index"
            :index="index"
            @click="handleClick(index)">{{ item }}</li>
          </ul>
        </div>
        <div class="tbl-three">
          <div class="tbl-wrap">
            <table class="thead">
              <thead>
                <tr>
                  <th style="width: 25%;">订单信息</th>
                  <th style="width: 15%;">成交 / 订单数量</th>
                  <th style="width: 20%;">到账/ 成交 / 订单金额</th>
                  <th style="width: 15%;">到账账户</th>
                  <th style="width: 13%;">状态</th>
                  <th style="width: 12%;">操作</th>
                </tr>
              </thead>
            </table>
            <table
              v-for="(item, index) of details"
              :key="index"
              :index="index">
              <tbody>
                <tr>
                  <td colspan="3" :title="item.orderNumber">订单号：{{ item.orderNumber }}</td>
                  <td colspan="3" style="text-align: right; padding-right: 10px;" title="">{{ item.addTime }} {{ item.tranType }}</td>
                </tr>
                <tr>
                  <td style="width: 25%; color: #5a5b66;" title="">{{ item.gameName }}/{{ item.areaName }}/{{ item.serverName }}</td>
                  <td style="width: 15%;" title="">{{ item.goldRealCnt }}/{{ item.goldOrderCnt }}万金币</td>
                  <td style="width: 20%;" title="">{{ item.arrivePrice }}/{{ item.realPrice}}/{{ item.orderPrice}}元</td>
                  <td style="width: 15%;" title="">{{ item.accountNum }}  {{ item.accountName }}</td>
                  <td style="width: 13%;" title="" class="error" v-if="item.tranStatus === '提现失败'">
                    <a-tooltip placement="bottom" overlayClassName="tooltip">
                      <template slot="title">
                          <span>{{ item.remark || '原因不明' }}</span>
                      </template>
                      {{ item.tranStatus }}
                    </a-tooltip>
                  </td>
                  <td style="width: 13%;" title="" v-else>{{ item.tranStatus }}</td>
                  <td style="width: 12%;" v-if="item.tranStatus === '提现失败'">
                      <button class="btn-recycle" @click="handleWithdraw(index)">提现</button>
                  </td>
                  <td style="width: 12%;" v-else-if="item.tranStatus === '交易中'">
                    <router-link to="/deal">
                      <button class="btn-recycle">查看详情</button>
                    </router-link>
                  </td>
                  <td style="width: 12%;" v-else>
                    <router-link to="/">
                      <button class="btn-recycle">再次回收</button>
                    </router-link>
                  </td>
                </tr>
                <!-- <tr>
                  <td colspan="3" title="">订单号：1826301496995000001212</td>
                  <td colspan="3" style="text-align: right; padding-right: 10px;">2018-08-01 12：12 拍卖交易</td>
                </tr>
                <tr>
                  <td style="width: 25%; color: #5a5b66;" title="">地下城与勇士广东/广东1区</td>
                  <td style="width: 15%;" title="">0/18000万金币</td>
                  <td style="width: 20%;" title="">0/0/300.00元</td>
                  <td style="width: 15%;" title="">158******73  **雅</td>
                  <td style="width: 13%;" title="" :class="{ error: false }">交易取消</td>
                  <td style="width: 12%;"><button class="btn-recycle">再次回收</button></td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Paging />
    </div>
    <div class="no-record-wrap" v-else>
      <div class="no-record" >
        <span class="record"></span>
        <p class="info">暂无记录，快来回收金币吧！</p>
        <button class="btn-recycle">去回收</button>
      </div>
    </div>
  </div>
</template>

<script>
import Paging from './Paging'
export default {
  name: 'manage',
  components: {
    Paging
  },
  data () {
    return {
      records: null,
      tabs: ['近一周', '近一月', '全部'],
      thisIndex: 0
    }
  },
  computed: {
    details () {
      return this.$store.state.details
    }
  },
  methods: {
    handleClick (index) {
      this.thisIndex = index
      if (index === 0) {
        this.handleGetOrders(7)
      } else if (index === 1) {
        this.handleGetOrders(30)
      } else {
        this.handleGetOrders()
      }
    },
    handleGetOrders (selectTime) {
      if (selectTime) {
        axios.orderManager({
          selectTime: selectTime,
          page: 1,
          rows: 5
        }).then(res => {
          if (res) {
            if (res.success) {
              // 订单数据
              this.$store.commit('handleDetails', res.data.rows)
              // 分页
              let pageObj = {}
              pageObj['total'] = res.data.total
              pageObj['selectTime'] = selectTime
              this.$store.commit('handlePage', pageObj)
            }
          }
        })
      } else {
        axios.orderManager({
          page: 1,
          rows: 5
        }).then(res => {
          if (res) {
            if (res.success) {
              // 订单数据
              this.$store.commit('handleDetails', res.data.rows)
              // 分页
              let pageObj = {}
              pageObj['total'] = res.data.total
              this.$store.commit('handlePage', pageObj)
            }
          }
        })
      }
    },
    handleWithdraw (index) {
      this.$store.commit('handleWithdraw', this.details[index])
      this.$store.commit('handleModal', 'withdraw')
    },
    init () {
      this.handleGetOrders(7)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .tootip {
    background:#fff;
    color:#fff;
  }
  .manage {
    width: 980px;
    float: right;
    .manage-wrap {
      overflow: hidden;
      .manage-record {
        height: 700px;
        background: #ffffff;
        @include bs;
        font-size: 14px;
        .tab-wrap {
          height: 65px;
          border-bottom: 1px solid #e8e9eb;
          ul {
            li {
              cursor: pointer;
              float: left;
              padding: 0 5px;
              margin-left: 35px;
              height: 64px;
              line-height: 62px;
              color: #212537;
              font-size: 16px;
              &.active {
                border-bottom: 2px solid #ffd200;
              }
            }
          }
        }
        .tbl-three {
          .tbl-wrap {
            padding: 15px 19px;
            table {
              width: 100%;
              // table-layout: fixed;
              border: 1px solid #e8e9eb;
              tr {
                &:nth-of-type(odd){
                  td {
                    border-top: 1px solid #e8e9eb;
                    background: #f5f5f5;
                    height: 36px;
                  }
                }
                &:nth-of-type(even){
                  td {
                    border-bottom: 1px solid #e8e9eb;
                    height: 70px;
                  }
                }
                th, td {
                  text-indent: 10px;
                  font-weight: normal;
                  font-size: 12px;
                  text-align: left;
                  color: #8d8e99;
                  @include eps;
                  .btn-recycle {
                    width: 64px;
                    height: 24px;
                    line-height: 22px;
                    background: #f8f8f8;
                    border: 1px solid #cecfd9;
                    color: #212537;
                    @include br(1px);
                  }
                  &.error {
                    color: #ff5436;
                    text-decoration: underline;
                  }
                }
                th {
                  font-size: 14px;
                  border: 1px solid #fff;
                  height: 42px;
                  color: #5a5b66;
                }
              }
            }
          }
        }
      }
    }
    .no-record-wrap {
      height: 700px;
      background: #ffffff;
      .no-record {
        padding-top: 130px;
        width: 210px;
        margin: 0 auto;
        text-align: center;
        .record {
          background: url(~images/sprite-recycle.png) no-repeat 0 -307px;
          width: 165px;
          height: 108px;
          display: inline-block;
          margin-bottom: 33px;
        }
        .info {
          color: #212537;
          font-size: 16px;
          margin-bottom: 50px;
        }
        .btn-recycle {
          width: 210px;
          height: 50px;
          line-height: 50px;
          background: #ffd200;
          font-size: 16px;
          font-weight: bold;
          @include br(1px);
        }
      }
    }
  }
</style>
