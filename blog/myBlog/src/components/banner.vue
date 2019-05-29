<template>
  <div class="banner banner-wrapper"
       id="banner">
    <ul class="img-list">
      <li class="show"><img src="../assets/1.jpg" /></li>
      <li><img src="../assets/2.jpg" /></li>
      <li><img src="../assets/3.jpg" /></li>
      <li><img src="../assets/4.jpg" /></li>
      <li><img src="../assets/5.jpg" /></li>
      <li><img src="../assets/6.jpg" /></li>
    </ul>
    <ul class="img-box">
      <!-- <li class="on">
        <div class="front"></div>
        <div class="bottom"></div>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="back"></div>
      </li> -->
    </ul>
    <div class="prev">&lt;</div>
    <div class="next">&gt;</div>
    <ul class="btn">
      <li class="on"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
class Banner {
  constructor(el) {
    this.oWrap = document.getElementById(el)
    this.oImgList = this.oWrap.querySelector('.img-list')
    this.aLiItem = this.oImgList.getElementsByTagName('li')
    this.oImgBox = this.oWrap.querySelector('.img-box')
    this.oPrev = this.oWrap.querySelector('.prev')
    this.oNext = this.oWrap.querySelector('.next')
    this.aBtn = this.oWrap.getElementsByClassName('btn')[0].getElementsByTagName('li')
    this.oCss = document.getElementById('css')
    this.countLi = 8 * 5
    this.arrSide = ['up', 'down', 'left', 'right']
    this.last = 0
    this.arrLi = []
    this.imgArr = []
    this.t = new Date()
    this.timer = 0
  }
  init () {
    this.imgArr = Array.from(this.oImgList.getElementsByTagName('img')).map((item) => {
      return item.src
    })
    // 生成li正方体
    for (let i = 0; i < this.countLi; i++) {
      let oLi = document.createElement('li')
      let [x, y] = [i % 8, Math.floor(i / 8)]
      oLi.style.animationDelay = `${i * 15}ms`
      oLi.innerHTML = `<div class="front"></div>
                    <div class="bottom"></div>
                    <div class="top"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                    <div class="back"></div>`
      this.oImgBox.appendChild(oLi)
      this.arrLi.push(oLi)
      let aDiv = oLi.getElementsByTagName('div')
      for (let j = 0; j < aDiv.length; j++) {
        aDiv[j].style.backgroundPosition = `${-x * 0.8}rem ${-y * 0.8}rem`
      }
    }
  }
  turn (index) {
    if (new Date() - this.t < 2000) return
    this.t = new Date()
    //     this.oCss.innerHTML = `.banner .img-box li .front{
    //   background-image: url("${this.imgArr[this.last]}");
    // }
    // .banner .img-box li div+div{
    //   background-image: url("${this.imgArr[index]}");
    // }`
    this.aLiItem[this.last].classList.remove('show')
    this.oImgList.classList.add('hide')
    this.aBtn[this.last].classList.remove('on')
    this.aBtn[index].classList.add('on')
    for (let i = 0; i < this.countLi; i++) {
      let side = this.arrSide[Math.floor(Math.random() * 4)]
      this.arrLi[i].side = side
      this.arrLi[i].classList.add(side)
    }
    this.last = index
    setTimeout(() => {
      this.aLiItem[index].classList.add('show')
      this.oImgList.classList.remove('hide')
      //     this.oCss.innerHTML = `.banner .img-box li div{
      //   background-image: url("${this.imgArr[index]}");
      // }`
      for (let i = 0; i < this.countLi; i++) {
        this.arrLi[i].classList.remove(this.arrLi[i].side)
      }
    }, 2000)
  }
  regEvent () {
    let _this = this
    this.oPrev.onclick = function () {
      let i = (_this.last - 1) < 0 ? 5 : _this.last - 1
      _this.turn(i)
    }
    this.oNext.onclick = function () {
      let i = (_this.last + 1) % 6
      _this.turn(i)
    }
    this.oWrap.onmouseenter = function () {
      clearTimeout(_this.timer)
    }
    this.oWrap.onmouseleave = function () {
      _this.timer = setTimeout(_this.rander.bind(_this), 3000)
    }
    for (let i = 0; i < this.aBtn.length; i++) {
      this.aBtn[i].onclick = this.turn.bind(this, i)
    }
  }
  rander () {
    let i = (this.last + 1) % 6
    this.turn(i)
    this.timer = setTimeout(this.rander.bind(this), 4000)
  }
  start () {
    this.init()
    this.regEvent()
    this.timer = setTimeout(this.rander.bind(this), 5000)
  }
}
export default {
  name: 'banner',
  data () {
    return {
      banner: {}
    }
  },
  mounted () {
    this.banner = new Banner('banner')
    this.banner.start()
  }
}
</script>
<style scoped>
@charset "UTF-8";

.banner-wrapper {
  /*margin-top: 1.1rem;*/
  float: left;
  width: 6.4rem;
  height: 4rem;
}

.banner {
  position: relative;
  transform: translateZ(0);
  z-index: 2;
  overflow: hidden;
}

.banner div {
  position: absolute;
}

.banner > div:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

.banner .prev,
.banner .next {
  display: none;
  top: 1.75rem;
  width: 0.3rem;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.28rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  cursor: pointer;
}

.banner:hover .prev,
.banner:hover .next {
  display: block;
}

.banner .prev {
  left: 0.05rem;
}

.banner .next {
  right: 0.05rem;
}

.banner .btn {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 3;
}

.banner .btn li {
  margin-left: 0.03rem;
  width: 0.08rem;
  height: 0.08rem;
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.5);
  -moz-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
}

.banner .btn .on,
.banner .btn li:hover {
  background-color: rgba(255, 0, 0, 0.5);
}

.banner .img-list {
  z-index: 1;
}

.banner .img-list,
.banner .img-list li,
.banner .img-list li img,
.banner .img-box {
  position: absolute;
  left: 0;
  top: 0;
  width: inherit;
  height: inherit;
}

.banner .img-list li {
  opacity: 0;
}

.banner .hide {
  opacity: 0 !important;
}

.banner .show {
  opacity: 1 !important;
}

.banner .img-box {
  -webkit-perspective: 8rem;
  -moz-perspective: 8rem;
  perspective: 8rem;
}

.banner .img-box,
.banner .img-box * {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.banner .img-box li {
  float: left;
  -webkit-transform-origin: center center -0.4rem;
  -moz-transform-origin: center center -0.4rem;
  transform-origin: center center -0.4rem;
  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.banner .img-box li,
.banner .img-box li div {
  width: 0.8rem;
  height: 0.8rem;
}

.banner .img-box li div {
  top: 0;
  left: 0;
  -moz-background-size: 6.4rem 4rem;
  background-size: 6.4rem 4rem;
  background-repeat: no-repeat;
}

.banner .img-box li .bottom {
  top: 0.8rem;
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  transform-origin: top center;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.banner .img-box li .top {
  top: -0.8rem;
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  transform-origin: bottom center;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
}

.banner .img-box li .left {
  left: -0.8rem;
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  transform-origin: right center;
  -webkit-transform: rotateY(-90deg);
  -moz-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
}

.banner .img-box li .right {
  left: 0.8rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotateY(90deg);
  -moz-transform: rotateY(90deg);
  transform: rotateY(90deg);
}

.banner .img-box li .back {
  -webkit-transform: translateZ(-0.8rem);
  -moz-transform: translateZ(-0.8rem);
  transform: translateZ(-0.8rem);
}

.banner .img-box .up {
  -webkit-animation-name: turn-top;
  -moz-animation-name: turn-top;
  animation-name: turn-top;
}

.banner .img-box .down {
  -webkit-animation-name: turn-bottom;
  -moz-animation-name: turn-bottom;
  animation-name: turn-bottom;
}

.banner .img-box .left {
  -webkit-animation-name: turn-left;
  -moz-animation-name: turn-left;
  animation-name: turn-left;
}

.banner .img-box .right {
  -webkit-animation-name: turn-right;
  -moz-animation-name: turn-right;
  animation-name: turn-right;
}

@-webkit-keyframes turn-bottom {
  0% {
    -webkit-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(90deg);
    transform: scale(1) rotateX(90deg);
  }
}

@-moz-keyframes turn-bottom {
  0% {
    -moz-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -moz-transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
  }

  100% {
    -moz-transform: scale(1) rotateX(90deg);
    transform: scale(1) rotateX(90deg);
  }
}

@keyframes turn-bottom {
  0% {
    -webkit-transform: scale(1) rotateX(0deg);
    -moz-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
    -moz-transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(90deg);
    -moz-transform: scale(1) rotateX(90deg);
    transform: scale(1) rotateX(90deg);
  }
}

@-webkit-keyframes turn-right {
  0% {
    -webkit-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateY(-90deg);
    transform: scale(1) rotateY(-90deg);
  }
}

@-moz-keyframes turn-right {
  0% {
    -moz-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -moz-transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
  }

  100% {
    -moz-transform: scale(1) rotateY(-90deg);
    transform: scale(1) rotateY(-90deg);
  }
}

@keyframes turn-right {
  0% {
    -webkit-transform: scale(1) rotateY(0deg);
    -moz-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
    -moz-transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(-90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateY(-90deg);
    -moz-transform: scale(1) rotateY(-90deg);
    transform: scale(1) rotateY(-90deg);
  }
}

@-webkit-keyframes turn-left {
  0% {
    -webkit-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateY(90deg);
    transform: scale(1) rotateY(90deg);
  }
}

@-moz-keyframes turn-left {
  0% {
    -moz-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -moz-transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
  }

  100% {
    -moz-transform: scale(1) rotateY(90deg);
    transform: scale(1) rotateY(90deg);
  }
}

@keyframes turn-left {
  0% {
    -webkit-transform: scale(1) rotateY(0deg);
    -moz-transform: scale(1) rotateY(0deg);
    transform: scale(1) rotateY(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
    -moz-transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
    transform: scale(0.8) translatez(0.6rem) rotateY(90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateY(90deg);
    -moz-transform: scale(1) rotateY(90deg);
    transform: scale(1) rotateY(90deg);
  }
}

@-webkit-keyframes turn-top {
  0% {
    -webkit-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(-90deg);
    transform: scale(1) rotateX(-90deg);
  }
}

@-moz-keyframes turn-top {
  0% {
    -moz-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -moz-transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
  }

  100% {
    -moz-transform: scale(1) rotateX(-90deg);
    transform: scale(1) rotateX(-90deg);
  }
}

@keyframes turn-top {
  0% {
    -webkit-transform: scale(1) rotateX(0deg);
    -moz-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
  }

  15% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  75% {
    -webkit-transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
    -moz-transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
    transform: scale(0.8) translatez(0.6rem) rotateX(-90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(-90deg);
    -moz-transform: scale(1) rotateX(-90deg);
    transform: scale(1) rotateX(-90deg);
  }
}
</style>
