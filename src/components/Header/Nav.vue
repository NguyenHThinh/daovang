<template>
  <header class="header">
    <div class="header__wrap">
      <nav class="main__nav text-end">
        <ul class="el__menu">
          <li class="menu-item">
            <NuxtLink active-class="active" href="/">Home</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink active-class="active" href="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
      <h1 class="logo">
        <NuxtLink href="/">
          <img width="217" height="63" src="assets/img/logo.png" alt="Logo" />
        </NuxtLink>
      </h1>
      <nav class="main__nav text-start">
        <ul class="el__menu">
          <li class="menu-item">
            <NuxtLink active-class="active" href="/maps">MAPS</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink href="/#home-marketplace">MARKETPLACE</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
