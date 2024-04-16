<template>
  <router-view />
</template>
<style lang="scss">
@font-face {
  font-family: "Luckiest Guy";
  src: url('../public/font/LuckiestGuy-Regular.ttf')
}

@media screen and (min-width: 920px) {
  body {
    background-color: #EBEBEB;

    main {
      width: 900px;
      height: 600px;
      margin: 100px auto;
      background-color: white;
      position: relative;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 920px) {
  body {
    background-color: #EBEBEB;

    main {
      width: 500px;
      height: 800px;
      margin: 50px auto;
      background-color: white;
      position: relative;
    }
  }
}
</style>
