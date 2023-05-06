<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div id="board" ref="board" style="width:500px;height:500px;"></div>
  </div>
</template>

<script>
import "@/public/wgo/wgo.min";
import "@/public/wgo/wgo.player.min";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initBoard();
  },
  methods: {
    initBoard() {
      this.board = new WGo.Board(this.$refs.board, {
        width: 500
      });
      board.addEventListener("click", function(x, y) {
        if (tool.value == "black") {
          board.addObject({
            x: x,
            y: y,
            c: WGo.B
          });
        } else if (tool.value == "white") {
          board.addObject({
            x: x,
            y: y,
            c: WGo.W
          });
        } else if (tool.value == "remove") {
          board.removeObjectsAt(x, y);
        } else {
          board.addObject({
            x: x,
            y: y,
            type: tool.value
          });
        }
      });
    }
  }
};
</script>
<style scoped></style>
