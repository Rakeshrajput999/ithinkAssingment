<script setup>
import { computed, onMounted, reactive } from 'vue';
import store from '../stores/formStore';
import { useRouter } from 'vue-router';


const router = useRouter()
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  address: ''
});
const isFormInvalid = computed(() => {
  return !formData.name || !formData.phone || !formData.email || !formData.address;
});

const handleSubmit = () => {
  if (!isFormInvalid.value) {
    store.commit('saveData', formData);
    router.push({ name: 'store-table' })
    
  }
};

onMounted(()=>{
  formData.name = '';
  formData.phone = '';
  formData.email = '';
  formData.address = '';

})
</script>

<template>
  
  
  <div class="main-form">
    <h1>User Form</h1>
    <form @submit.prevent="handleSubmit" class="form-container" >

      <div class="form-input-section">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-input-section">

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="formData.phone" required>
      </div>
      <div class="form-input-section">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-input-section">

        <label for="address">Address:</label>
        <input type="text" id="address" v-model="formData.address" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
.main-form
{
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.form-container{
  font-size: 1.5rem;
 display: flex;
 flex-direction: column;
 gap: 20px;

}
.form-input-section{
  display: flex ;
 justify-content:space-between;

}
button{
  background-color: orange;
  border: solid orangered 2px;
  padding: 5px;
  
}
</style>
