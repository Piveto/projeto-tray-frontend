<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  id: '',
  login: '',
  password: ''
});

const administrators = ref([
  { id: 1, name: 'Admin1', email: 'admin1@gmail.com' },
  { id: 2, name: 'Admin2', email: 'admin2@gmail.com' },
  { id: 3, name: 'Admin3', email: 'admin3@gmail.com' }
]);

const submitForm = () => {
  console.log('Form submitted', form);
};

const deleteAdmin = (id) => {
  const index = administrators.value.findIndex(admin => admin.id === id);
  if (index !== -1) {
    administrators.value.splice(index, 1);
  }
};

const selectedAdminId = ref(null);

const confirmDelete = () => {
  if (selectedAdminId.value !== null) {
    deleteAdmin(selectedAdminId.value);
    selectedAdminId.value = null;
  }
};
</script>

<template>
  <br><br>
  <div class="container mt-5">
    <h2>Cadastro de Administrador</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="id">ID do usuário</label>
        <input type="text" class="form-control" id="id" v-model="form.id" placeholder="Digite o ID">
      </div>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" v-model="form.name" placeholder="Digite o Nome">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="login" v-model="form.login" placeholder="Digite o Email">
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Digite a senha">
      </div>
      <br>
      <div class="d-flex flex-column flex-sm-row">
        <button type="submit" class="btn btn-success mb-2 mb-sm-0">Cadastrar Administrador</button>
        <button type="button" class="btn btn-danger ms-sm-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Excluir Administrador</button>
      </div>
    </form>
  </div>

  <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Excluir Administrador</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Selecione o administrador que deseja excluir:</p>
          <ul class="list-group">
            <li v-for="admin in administrators" :key="admin.id" class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ admin.name }} ({{ admin.email }})</span>
              <button class="btn btn-outline-danger btn-sm" @click="selectedAdminId = admin.id">Excluir</button>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger" @click="confirmDelete" data-bs-dismiss="modal">Confirmar Exclusão</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-success {
  background-color: #38414a;
  border-color: #38414a;
}

.btn-success:hover {
  background-color: #2e3a44;
  border-color: #2e3a44;
}

.btn-danger {
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:hover {
  background-color: #c9302c;
  border-color: #c12e2a;
}
</style>
