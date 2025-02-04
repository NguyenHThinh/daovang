<template>
    <section class="home-wellcome">
      <div class="home-wellcome--zzz">
        <div class="home-wellcome--hero wow fadeInLeft"></div>
        <div class="home-wellcome--owl wow fadeInRight"></div>
        <div class="home-wellcome--peg wow fadeInLeft"></div>
  
        <div class="home-wellcome--fire -top--left fadeInUp"></div>
        <div class="home-wellcome--fire -bottom--left fadeInUp"></div>
        <div class="home-wellcome--fire -top--right fadeInUp"></div>
        <div class="home-wellcome--fire -bottom--right fadeInUp"></div>
  
        <div class="home-wellcome--door-backup"></div>
      </div>
  
      <div class="el__logo">
        <img src="assets/img/home-wellcome-logo.png" alt="" />
        <p>{{ $t("common.openYourOwnEra") }}</p>
      </div>
  
      <a href="#" class="home-wellcome--play">{{ $t("common.playNow") }}</a>
  
      <a href="#home-about" class="home-wellcome--nextpage js-click-smooth"></a>
    </section>
  </template>
  
  <script lang="ts" setup></script>
  
  <style scoped>
  .home-wellcome {
    position: relative;
    background: url(assets/img/home-wellcome-bg-mb.jpg) no-repeat center;
    background-size: 100% 100%;
    padding: 63% 0;
    height: 100dvh;
  }
  .home-wellcome:after {
    content: "";
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(46, 24, 20, 0) 0%, #281514 100%);
  }
  .home-wellcome--play {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16%;
    width: 180px;
    height: 70px;
    background: url(assets/img/button.png) no-repeat center;
    background-size: contain;
    margin: auto;
    z-index: 10;
    transition: all 0.5s;
    font-family: Poppins;
    font-weight: bold;
    font-size: 18px;
    color: #321615;
    line-height: 68px;
    letter-spacing: -1px;
    text-align: center;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    text-transform: uppercase;
    -webkit-text-stroke: 1px #e16e25;
    -webkit-text-fill-color: #321615;
  }
  .home-wellcome--play:hover {
    transform: translateY(-2px);
  }
  .home-wellcome--nextpage {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    width: 44px;
    height: 34px;
    z-index: 10;
    background: url(assets/img/next-page.png) no-repeat center;
    background-size: contain;
    margin: auto;
    -webkit-animation-name: Mousex;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: Mouse;
    -moz-animation-duration: 1.5s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  @-webkit-keyframes Mousex {
    from {
      -webkit-transform: translate(0, 0px);
    }
    65% {
      -webkit-transform: translate(0, 15px);
    }
    to {
      -webkit-transform: translate(0, -0px);
    }
  }
  @-moz-keyframes Mouse {
    from {
      -moz-transform: translate(0, 0px);
    }
    65% {
      -moz-transform: translate(0, 15px);
    }
    to {
      -moz-transform: translate(0, -0px);
    }
  }
  .home-wellcome--icons {
    position: relative;
    z-index: -1;
    pointer-events: none;
  }
  .home-wellcome--owl {
    position: absolute;
    width: 8.5%;
    height: 6%;
    bottom: 30%;
    right: 12%;
    background: url(assets/img/owl.png) no-repeat center;
    background-size: contain;
  }
  .home-wellcome--peg {
    position: absolute;
    bottom: 4.7%;
    left: 4.3%;
    width: 7%;
    height: 12.3%;
    background: url(assets/img/peg.png) no-repeat center;
    background-size: contain;
  }
  .home-wellcome--hero {
    position: absolute;
    top: 54%;
    left: 0;
    width: 12%;
    height: 17%;
    background: url(assets/img/hero.png) no-repeat center;
    background-size: contain;
  }
  .home-wellcome--fire {
    position: absolute;
    bottom: -4%;
    left: 1%;
    width: 16.3%;
    height: 25%;
    background: url(assets/img/fire.gif) no-repeat center;
    background-size: contain;
  }
  .home-wellcome--fire.-top--left {
    width: 12.5%;
    height: 19.2%;
    bottom: 10%;
    left: 19%;
  }
  .home-wellcome--fire.-top--right {
    left: auto;
    width: 12.5%;
    height: 19.2%;
    bottom: 10%;
    right: 19%;
  }
  .home-wellcome--fire.-bottom--right {
    left: auto;
    right: 1%;
  }
  .home-wellcome--door {
    position: absolute;
    width: 31%;
    height: 53%;
    bottom: 17%;
    left: 0;
    right: 0;
    background: url(assets/img/door.png) no-repeat center;
    background-size: contain;
    margin: auto;
    z-index: 11;
  }
  .home-wellcome .el__logo {
    position: absolute;
    top: 27%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-family: Bungee;
    font-weight: bold;
    font-size: 16px;
    color: #1d1a1a;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    text-transform: uppercase;
    -webkit-text-stroke: 1px #1d1a1a;
    -webkit-text-fill-color: white;
  }
  .home-wellcome .el__logo img {
    max-width: 67%;
  }
  </style>
  