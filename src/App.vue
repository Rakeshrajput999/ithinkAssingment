<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container" >
    <div class="child-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-container{
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.child-container{
  width: 60vw;
  height: 60vh;
  background-color: blanchedalmond;
  border: solid blanchedalmond 2px;
  border-radius:5%;
}
</style>
