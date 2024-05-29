<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  message: '',
  image: null,
  youtubeUrl: ''
});

const submitForm = () => {
  console.log('Form submitted', form);
};

const onFileChange = (event) => {
  form.image = event.target.files[0];
};
</script>

<template>
  <div class="container mt-5">
    <br><br>
    <h2 style="text-align: center;">Cadastro de FAQs</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Título</label>
        <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Digite o título">
      </div>
      <div class="form-group">
        <label for="message">Descrição</label>
        <textarea class="form-control" id="message" v-model="form.message" rows="3" placeholder="Digite a descrição"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Imagem</label>
        <input type="file" class="form-control" id="image" @change="onFileChange">
      </div>
      <div class="form-group">
        <label for="youtubeUrl">URL do Youtube</label>
        <input type="text" class="form-control" id="youtubeUrl" v-model="form.youtubeUrl" placeholder="Digite a URL do Youtube">
      </div>
      <br>
      <button type="submit" class="btn btn-success">Criar Card</button>
    </form>
  </div>
</template>

<style>
.container {
  margin-top: 50px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-success:hover {
  background-color: #2e3a44;
  border-color: #2e3a44;
}
</style>
