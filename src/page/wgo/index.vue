<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <el-row>
      <el-col :span="8" :offset="3">
        <el-descriptions title="对弈信息" :column="1" border>
          <el-descriptions-item label="行棋人" v-if="player.kifuReader">
            {{ player.kifuReader.game.turn > 0 ? "黑棋" : "白棋" }}
          </el-descriptions-item>
          <el-descriptions-item label="当前手数" v-if="player.kifuReader">
            {{ player.kifuReader.path.m }}
          </el-descriptions-item>
          <el-descriptions-item label="操作">
            <el-button type="primary" size="mini" @click="clear">
              清空
            </el-button>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="11" :offset="2">
        <div
          id="board"
          ref="board"
          @click="hum_move($event)"
          @mousemove="mouse_move($event)"
          @mouseout="mouse_out"
        ></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "@/public/wgo/wgo.min";
import "@/public/wgo/wgo.player.min";
import tool from "@/utils/tool";
export default {
  components: {},
  data() {
    return {
      last_mark: {},
      player: {}
    };
  },
  mounted() {
    this.initBoard({ sgf: "(;SZ[19])" });
  },
  methods: {
    initBoard(response) {
      // 创建棋盘
      let elem = document.getElementById("board");
      this.player = new WGo.BasicPlayer(elem, {
        sgf: response["sgf"],
        layout: {
          left: "",
          bottom: ""
        },
        enableWheel: false,
        markLastMove: true,
        board: {
          section: {
            top: -0.5,
            right: -0.5,
            bottom: -0.5,
            left: -0.5
          }
        }
      });
      this.player.board.removeEventListener("click", this.player.board._click);
      this.player.board.removeEventListener(
        "click",
        this.player.board._ev_click
      );
      this.player.board.addCustomObject(this.coordinates);
    },
    hum_move(event) {
      let coordinates = tool.ToObtainCoordinate(event, this.player);
      // 获取点击的x y
      let x = coordinates.x;
      let y = coordinates.y;
      if (this.player.kifuReader.game.isValid(x, y)) {
        // 判断落子轮次和谁先手
        this.normal_move(x, y);
      }
    },
    normal_move(x, y) {
      let c = this.player.kifuReader.game.turn;
      this.player.kifuReader.node.appendChild(
        new WGo.KNode({
          move: {
            x: x,
            y: y,
            c: this.player.kifuReader.game.turn
          }
        })
      );
      this.player.next(this.player.kifuReader.node.children.length - 1);
      this.get_captured();
    },
    get_captured() {
      this.player1_captured = this.player.kifuReader.game.getCaptureCount(
        WGo.B
      );
      this.player2_captured = this.player.kifuReader.game.getCaptureCount(
        WGo.W
      );
    },
    mouse_move(e) {
      // 鼠标在棋盘范围内移动
      this.last_mark = tool.MouseMove(
        e,
        this.player,
        this.last_mark,
        this.player.kifuReader.game.turn
      );
    },
    mouse_out() {
      // 鼠标移出棋盘
      tool.MouseOut(this.player, this.last_mark);
    },
    clear() {
      this.initBoard({ sgf: "(;SZ[19])" });
    }
  }
};
</script>
<style scoped>
#board {
  width: 500px;
  height: 500px;
  background: #ffc47c;
  border: 10px solid #ffffff;
  box-shadow: 0 10px 0 0 #edf5f7;
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}
</style>
