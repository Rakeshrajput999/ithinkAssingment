    <script setup>
    import { computed } from 'vue';
    import store from '../stores/formStore';
    
    
    const storedData = computed(() => store.state.storedData);
    </script>
<template>
  <div class="table-container">
    <table class="main-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in storedData" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </table>
    <div style="padding: 30px; text-align: end; "> <RouterLink to="/">Go back</RouterLink></div>
  </div>
</template>
<style scoped>
 th, td {
  border: 1px solid;

}
.table-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-table{
  padding: 30px;
  width: 100%;
  
}
</style>

