function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  function convert_sgf_to_xy(sgf) {
    let xyInt = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t"
    ];
    let turn = sgf.split(";")[1].split("[")[0] === "W" ? -1 : 1;
    let xyStr = sgf
      .split(";")[1]
      .split("[")[1]
      .split("]")[0];
    let x = xyInt.indexOf(xyStr[0]);
    let y = xyInt.indexOf(xyStr[1]);
    return { turn: turn, x: x, y: y };
  }
  function convert_xy_to_sgf(x, y, turn) {
    let cow = "abcdefghijklmnopqrst";
    if (turn === 1) {
      return `;B[${cow[x]}${cow[y]}]`;
    } else {
      return `;W[${cow[x]}${cow[y]}]`;
    }
  }
  function move_to_last(player) {
    // 将前端棋盘移动到最后一步
    let p = WGo.clone(player.kifuReader.path);
    p.m += 1000;
    player.goTo(p);
  }
  function move_to_first(player) {
    let p = WGo.clone(player.kifuReader.path);
    p.m -= 1000;
    player.goTo(p);
  }
  function to_obtain_coordinate(event, player) {
    // 捕捉落子的x y 坐标
    let board = player.board;
    let x, y;
    x = event.offsetX * board.pixelRatio;
    y = event.offsetY * board.pixelRatio;
    x -= board.left;
    x /= board.fieldWidth;
    x = Math.round(x);
    y -= board.top;
    y /= board.fieldHeight;
    y = Math.round(y);
    return {
      x: x >= board.size ? -1 : x,
      y: y >= board.size ? -1 : y
    };
  }
  function mouse_move(event, player, last_mark, c) {
    // 鼠标在棋盘范围内移动
    if (last_mark !== "") {
      player.board.removeObject(last_mark);
    }
    // 只有当前是人类落子时 才添加半透明棋子
    let coordinates = to_obtain_coordinate(event, player);
    let x = coordinates.x;
    let y = coordinates.y;
    if (player.kifuReader.game.isValid(x, y)) {
      last_mark = {
        type: "outline",
        x: x,
        y: y,
        c: c == '' || (typeof c == 'undefined') ? player.kifuReader.game.turn : c
      };
      player.board.addObject(last_mark);
      return last_mark;
    } else {
      return "";
    }
  }
  function mouse_out(player, last_mark) {
    // 鼠标移出棋盘
    if (last_mark !== "") {
      player.board.removeObject(last_mark);
    }
  }
  function get_abc(index) {
    let cow = "ABCDEFGHIJKLMNOPQRST";
    return cow[index];
  }
  function random_color() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ",0.8)";
  }
  function close_page() {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
      //close IE
      if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
        window.opener = null;
        window.close();
      } else {
        window.open("", "_top");
        window.top.close();
      }
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {
      //close firefox
      window.close();
    } else {
      //close chrome;It is effective when it is only one.
      window.opener = null;
      window.open("", "_self");
      window.close();
    }
  }
  export default {
    Sleep(time) {
      return sleep(time);
    },
    ConvertSgfToXY(sgf) {
      return convert_sgf_to_xy(sgf);
    },
    ConvertXYtoSgf(x, y, turn) {
      return convert_xy_to_sgf(x, y, turn);
    },
    MoveToLast(player) {
      return move_to_last(player);
    },
    MoveToFirst(player) {
      return move_to_first(player);
    },
    ToObtainCoordinate(event, player) {
      return to_obtain_coordinate(event, player);
    },
    MouseMove(event, player, last_mark,c) {
      return mouse_move(event, player, last_mark,c);
    },
    MouseOut(player, last_mark) {
      return mouse_out(player, last_mark);
    },
    GetAbc(index) {
      return get_abc(index);
    },
    RandomColor() {
      return random_color();
    },
    ClosePage() {
      return close_page();
    }
  };
  