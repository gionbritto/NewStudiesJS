<template>
  <div>
    <div class="d-flex justify-content-center">
      <button @click="selectedComponent = 'One'" class="p-2 m-2 btn btn-primary">One</button>
      <button @click="selectedComponent = 'Two'" class="p-2 m-2 btn btn-primary">Two</button>
      <button @click="selectedComponent = 'Three'" class="p-2 m-2 btn btn-primary">Three</button>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import One from "../components/OneComponent";
import Two from "../components/TwoComponent";
import Three from "../components/ThreeComponent";
export default {
  components: { One, Two, Three },
  data() {
    return {
      selectedComponent: "One"
    };
  },
  deactivated() {
    console.log("Deactivated!");
  },

  activated() {
    console.log("Activated!");
  }
};
</script>

<style>
</style>