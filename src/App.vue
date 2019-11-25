<template>
  <div id="app">
   
      <router-view/>
    
  </div>
</template>

<style>
  .root-enter{
    transform: translateX(100%)
  }
  .root-leave-to{
    transform: translateX(0)
  }
  .root-enter-active, .root-leave-active {
  transition: all .2s linear;
}
</style>
