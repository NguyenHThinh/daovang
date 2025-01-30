<template>
  <div class="">
    <header class="header_mb">
      <div class="header__wrap">
        <div class="header__menu__btn menu__mobile" @click="handleShowModal">
          <img src="/assets/img/ic_menu.png" width="30" height="24" alt="" />
        </div>
        <h1 class="logo">
          <NuxtLink href="/">
            <NuxtImg
              width="154"
              height="45"
              src="/images/logo-mb.png"
              alt="Logo"
            />
          </NuxtLink>
        </h1>
      </div>
    </header>
    <nav
      id="menu__mobile"
      class="nav__mobile"
      :class="[isShowModal ? 'show__nav' : '']"
    >
      <div class="menu__mobile--close" @click="handleCloseModal">
        <img src="assets/img/ic_close.png" width="28" height="28" alt="" />
      </div>

      <div>
        <div class="logo">
          <a href="index.html">
            <NuxtImg
              width="154"
              height="45"
              src="/images/logo-mb.png"
              alt="Logo"
            />
          </a>
        </div>

        <ul class="el__menu">
          <li class="menu-item">
            <NuxtLink active-class="active" href="/">Home</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink active-class="active" href="/about">About</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink active-class="active" href="/maps">MAPS</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink href="/#home-marketplace">MARKETPLACE</NuxtLink>
          </li>
        </ul>

        <div class="footer__socical">
          <p>JOIN OUR COMMUNITY</p>
          <ul>
            <li>
              <a href="" class="footer__socical--twitter" target="_blank"></a>
            </li>
            <li>
              <a href="" class="footer__socical--telegram" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const isShowModal = ref(false);

const handleShowModal = () => {
  isShowModal.value = true;
};
const handleCloseModal = () => {
  isShowModal.value = false;
};
</script>

<style scoped>
nav#menu__mobile.show__nav {
  left: 0;
  opacity: 1;
}
header.header_mb {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  -webkit-animation: showLogo 1s ease-in-out forwards;
  -moz-animation: showLogo 1s ease-in-out forwards;
  animation: showLogo 1s ease-in-out forwards;
}
@keyframes showLogo {
  0% {
    opacity: 0;
    top: -10px;
  }
  33% {
    opacity: 0;
    top: -10px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
header.header_mb .header__wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(assets/img/menu-bg-mb.png) no-repeat center;
  background-size: 100% 100%;
  background-position: top;
}
header.header_mb .logo {
  margin-top: 10px;
  margin-bottom: 0;
  padding-bottom: 12px;
}
header.header_mb img {
  max-height: 45px;
}
.header__menu__btn {
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
}

.nav__mobile {
  font-family: "Bungee", cursive;
  z-index: 9;
  background: url(assets/img/menu-bg2-mb.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #603913;
  text-align: center;
  padding-top: 30px;
}
.nav__mobile:after {
  content: "";
  display: table;
  clear: both;
}
.nav__mobile .sc__wrap {
  position: relative;
  z-index: 9999;
  width: 100%;
}
.nav__mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav__mobile ul.el__menu {
  padding: 0px 0;
  margin-bottom: 20px;
}
.nav__mobile ul.el__menu:after {
  content: "";
  display: table;
  clear: both;
}
.nav__mobile ul.el__menu > li {
  position: relative;
  display: block;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 50px;
}
.nav__mobile ul.el__menu > li > a {
  display: inline-block;
  position: relative;
  color: #fffae9;
  line-height: 19px;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 22px;
  text-shadow: -2px 0 0px #1d1a1a, 0 2px 0px #1d1a1a, 2px 0 0px #1d1a1a,
    0 -2px 0px #1d1a1a;
  border: 1px solid transparent;
}
.nav__mobile ul.el__menu > li:hover > a,
.nav__mobile ul.el__menu > li > a.active {
  background-color: #723715;
  border-radius: 8px;
  border: 1px solid #ffcb36;
  box-shadow: inset 0px 0px 4px #ffc300;
  transition: all 0.5s;
}
.nav__mobile ul.el__menu > li > a.active::before,
.nav__mobile ul.el__menu > li > a.active::after,
.nav__mobile ul.el__menu > li:hover > a::before,
.nav__mobile ul.el__menu > li:hover > a::after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #ffcb36;
  position: absolute;
  top: calc(50% - 2.5px);
  left: -3px;
  border-radius: 1px;
  transform: rotate(45deg);
}
.nav__mobile ul.el__menu > li > a.active::after,
.nav__mobile ul.el__menu > li:hover > a::after {
  content: "";
  left: auto;
  right: -3px;
}

/*Menu custom*/
.menu__mobile--close {
  position: absolute;
  top: 30px;
  left: 30px;
}
nav#menu__mobile {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  z-index: 9999;
}
nav#menu__mobile.active {
  left: 0;
  opacity: 1;
}
nav#menu__mobile .sub-menu {
  display: none;
}
.nav__mobile .logo {
  margin-bottom: 60px;
}
.nav__mobile .footer__socical {
  background: #6f3413;
  margin: 0 35px;
  border-radius: 24px;
  padding-top: 15px;
}
</style>
