<template>
  <div class="vessel">
    <div class="backround" :style="{ height: tableHeight + 'px' }">
      <div class="titleBox">
        {{ title }}
        <el-tooltip effect="light" :content="subhead" placement="top">
          <i class="el-icon-question m-left-5"></i>
        </el-tooltip>
      </div>
      <div class="toptitle">
        <div
          v-for="item in columns"
          :key="item.prop"
          class="item"
          :style="{ minWidth: minWidthPercentage }"
        >
          {{ item.label }}
        </div>
      </div>
      <vue-seamless-scroll
        :data="list.data"
        :class-option="optionHover"
        class="seamless-warp"
        :style="{ height: calcHeight }"
      >
        <el-table
          :data="list.data"
          :show-header="status"
          :cell-style="{ background: 'revert' }"
        >
          <el-table-column
            v-for="col in columns"
            :prop="col.prop"
            :key="col.prop"
            :label="col.label"
          >
          </el-table-column>
        </el-table>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    optionHover() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    },
    minWidthPercentage() {
      const headerCount = this.columns.length;
      const minWidth = (100 / headerCount).toFixed(2);
      return `${minWidth}%`;
    },
    calcHeight() {
      const height = this.tableHeight - 22 - 28;
      return `${height}px`;
    }
  },
  props: {
    tableHeight: {
      default: 300,
      type: Number
    },
    title: {
      default: "信息一览",
      type: String
    },
    subhead: {
      default: "别看我只是一只羊，羊儿的聪明难以想象",
      type: String
    }
  },
  data() {
    return {
      status: false,
      columns: [
        {
          label: "日期",
          prop: "date"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "地址",
          prop: "add"
        },
        {
          label: "围棋水平等级",
          prop: "level"
        }
      ],
      list: {
        data: [
          {
            date: "2023-06-25",
            name: "测试数据1",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据2",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据3",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据4",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据5",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据6",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据7",
            level: "N1",
            add: "刘家窑校区"
          },
          {
            date: "2023-06-25",
            name: "测试数据8",
            level: "N1",
            add: "刘家窑校区"
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.vessel {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #000;
}
.m-left-5 {
  margin-left: 5px;
}
.titleBox {
  font-size: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 5px;
    height: 20px;
    margin: 0 8px;
    background: #4ba1ed;
    display: inline-block;
  }
}
.backround {
  width: 500px;
  margin: auto;
  background-image: url("https://dashboard.xiaogj.com/img/left.335aa05c.png");
  background-size: 100% 100%;
  padding: 0 10px;
}
/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  background-color: transparent;
}
/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
  color: white;
}

.seamless-warp {
  height: 270px;
  overflow: hidden;
}
/deep/.el-table .cell {
  text-align: center;
}
/deep/.toptitle {
  width: 100%;
  display: flex;
  //   background-color: gainsboro;
  //   border: 2px solid gainsboro;
  background-color: transparent;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  color: white;
  justify-content: space-around;
}
/deep/ .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
}
/deep/ .el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: transparent;
}
.item {
  //   width: 33.3%;
  //   border-right: 2px solid gainsboro;
  text-align: center;
}
</style>
