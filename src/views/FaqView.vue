<script setup>
import { ref } from 'vue';

const cards = ref([
  { 
    title: 'FAQ Card 1', 
    description: 'Descrição do FAQ 1', 
    image: 'https://via.placeholder.com/150x150' 
  },
  { 
    title: 'FAQ Card 2', 
    description: 'Descrição do FAQ 2', 
    image: 'https://via.placeholder.com/150x150' 
  },
  { 
    title: 'FAQ Card 3', 
    description: 'Descrição do FAQ 3', 
    image: 'https://via.placeholder.com/150x150' 
  },
  { 
    title: 'FAQ Card 4', 
    description: 'Descrição do FAQ 4', 
    image: 'https://via.placeholder.com/150x150' 
  },
  { 
    title: 'FAQ Card 5', 
    description: 'Descrição do FAQ 5', 
    image: 'https://via.placeholder.com/150x150' 
  },
  {
    title: 'FAQ Card 6', 
    description: 'Descrição do FAQ 6', 
    image: 'https://via.placeholder.com/150x150' 
  },
  {
    title: 'FAQ Card 7', 
    description: 'Descrição do FAQ 7', 
    image: 'https://via.placeholder.com/150x150' 
  },
  {
    title: 'FAQ Card 8', 
    description: 'Descrição do FAQ 8', 
    image: 'https://via.placeholder.com/150x150' 
  }
]);

const handleSubmit = (card) => {
  console.log('Submitted:', card);
};

const handleDelete = (index) => {
  cards.value.splice(index, 1);
};
</script>

<template>
  <div class="container my-4 pt-5">
    <h2 class="text-center mb-4">Listagem de FAQs</h2>
    <div class="row">
      <div v-for="(card, index) in cards" :key="index" class="col-md-3 mb-4">
        <div class="card">
          <img :src="card.image" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <button class="btn btn-success me-2" @click="handleSubmit(card)">Sobre</button>
            <button class="btn btn-danger" @click="handleDelete(index)">Remover</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 600px) {
  .bg-img {
    width: 100%;
  }
}

.btn-success {
  background-color: #2e3a44;
  border-color: #2e3a44;
}

.container {
  padding-top: 80px;
}
</style>
