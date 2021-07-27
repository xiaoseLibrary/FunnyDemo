<template>
    <div class="canvas" @click="drawPic">
        <canvas id="canvas" :width="w" :height="h"></canvas>
    </div>
</template>
<script>
const RANDOM_ARR = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
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
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    // "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
// const
export default {
    name: "SIdentify",
    props: {
        // 验证码字符串长度
        code_num: {
            type: Number,
            default: 4
        },
        // 干扰线数量
        line_num: {
            type: Number,
            default: 10
        },
        // 干扰点数量
        dot_num: {
            type: Number,
            default: 20
        },
        // 验证码字号最小值
        fontSizeMin: {
            type: Number,
            default: 20
        },
        // 验证码字号最大值
        fontSizeMax: {
            type: Number,
            default: 40
        },
        // 背景色rgb最小值
        backgroundColorMin: {
            type: Number,
            default: 180
        },
        // 背景色rgb最大值
        backgroundColorMax: {
            type: Number,
            default: 240
        },
        // 验证码文字色rgb最小值
        colorMin: {
            type: Number,
            default: 50
        },
        // 验证码文字色rgb最大值
        colorMax: {
            type: Number,
            default: 160
        },
        // 干扰线颜色rgb最小值
        lineColorMin: {
            type: Number,
            default: 40
        },
        // 干扰线颜色rgb最大值
        lineColorMax: {
            type: Number,
            default: 180
        },
        // 干扰点颜色rgb最小值
        dotColorMin: {
            type: Number,
            default: 0
        },
        // 干扰点颜色rgb最大值
        dotColorMax: {
            type: Number,
            default: 255
        },
        // 画布宽度
        w: {
            type: Number,
            default: 112
        },
        // 画布高度
        h: {
            type: Number,
            default: 40
        }
        /* computed: {
            type: Boolean,
            default: true
        } */
    },
    data() {
        return {
            identifyCode: ""
        };
    },
    methods: {
        randomWord(randomFlag = false, min = this.code_num, max) {
            let arr = [];
            let range = min;
            // 随机产生
            if (randomFlag) {
                range = Math.round(Math.random() * (max - min)) + min;
            }
            for (let i = 0; i < range; i++) {
                let pos = Math.round(Math.random() * (RANDOM_ARR.length - 1));
                arr.push(RANDOM_ARR[pos]);
            }
            return arr;
        },
        /* randomComputedWord() {
            let arr = ["+", "-", "*", "/"];
            let fuhao = arr[Math.round(Math.random() * (arr.length - 1) + 1)];
            let num_arr = [];
            for (let i = 0; i < 2; i++) {
                num_arr.push(Math.floor(Math.random() * 99));
            }
            let json = {
                "+": +num_arr[0] + +num_arr[1],
                "-": +num_arr[0] - +num_arr[1],
                "*": +num_arr[0] * +num_arr[1],
                "/": +num_arr[0] / +num_arr[1]
            };
            return [[num_arr[0], fuhao, num_arr[1], "="], json[fuhao]];
        }, */
        // 生成一个随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        // 生成一个随机的颜色
        randomColor(min, max) {
            let r = this.randomNum(min, max);
            let g = this.randomNum(min, max);
            let b = this.randomNum(min, max);
            return `rgb(${r},${g},${b})`;
        },
        drawPic() {
            // if (!this.computed) {
            this.identifyCode = this.randomWord();
            this.$emit("update-code", this.identifyCode.join("").toLowerCase());
            // } else {
            //     this.identifyCode = this.randomComputedWord()[0];
            //     console.log(this.randomComputedWord()[1]);
            //     this.$emit("update-code", this.randomComputedWord()[1]);
            // }
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            ctx.textBaseline = "bottom";
            // 绘制背景
            ctx.fillStyle = this.randomColor(
                this.backgroundColorMin,
                this.backgroundColorMax
            );
            ctx.fillRect(0, 0, this.w, this.h);
            // 绘制文字
            for (let i = 0; i < this.identifyCode.length; i++) {
                this.drawText(ctx, this.identifyCode[i], i);
            }
            this.drawLine(ctx);
            this.drawDot(ctx);
        },
        drawText(ctx, txt, i) {
            ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
            ctx.font = `bold ${this.randomNum(
                this.fontSizeMin,
                this.fontSizeMax
            )}px SimHei`;
            let x = (i + 1) * (this.w / (this.identifyCode.length + 1));
            let y = this.randomNum(this.fontSizeMax, this.h - 5);
            let deg = this.randomNum(-30, 30);
            // 修改坐标原点和旋转角度
            ctx.translate(x, y);
            ctx.rotate((deg * Math.PI) / 270);
            ctx.fillText(txt, 0, 0);
            // 恢复坐标原点和旋转角度
            ctx.rotate((-deg * Math.PI) / 270);
            ctx.translate(-x, -y);
        },
        drawLine(ctx) {
            // 绘制干扰线
            for (let i = 0; i < this.line_num; i++) {
                ctx.strokeStyle = this.randomColor(
                    this.lineColorMin,
                    this.lineColorMax
                );
                ctx.beginPath();
                ctx.moveTo(
                    this.randomNum(0, this.w),
                    this.randomNum(0, this.h)
                );
                ctx.lineTo(
                    this.randomNum(0, this.w),
                    this.randomNum(0, this.h)
                );
                ctx.stroke();
            }
        },
        drawDot(ctx) {
            // 绘制干扰点
            for (let i = 0; i < this.dot_num; i++) {
                ctx.fillStyle = this.randomColor(
                    this.dotColorMin,
                    this.dotColorMax
                );
                ctx.beginPath();
                ctx.arc(
                    this.randomNum(0, this.w),
                    this.randomNum(0, this.h),
                    1,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
            }
        }
    },
    mounted() {
        this.drawPic();
    }
};
</script>
<style>
.canvas {
    cursor: pointer;
    user-select: none;
}
</style>
