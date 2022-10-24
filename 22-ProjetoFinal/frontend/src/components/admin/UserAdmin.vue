<template>
    <div class="user-admin">
        <h1>Componente Usuários</h1>
        <form>
            <input id="user-id" type="hidden" v-model="user.id">
            <div class="form-group">
                <div class="form-name-email">
                    <div class="form-name">
                        <label class="name-label" for="user-name">Nome:</label>
                        <input id="user-name" type="text" v-model="user.name" placeholder="digite o nome do usuário..." required>
                    </div>
                    <div class="form-email">
                        <label class="name-label" for="user-email">E-mail:</label>
                        <input id="user-email" type="email" v-model="user.email" placeholder="digite o e-mail do usuário..." required>
                    </div>
                </div>

                <div class="form-senha">
                    <div class="form-password">
                        <label class="name-label" for="user-password">Senha:</label>
                        <input id="user-password" type="password" v-model="user.password" placeholder="digite a senha do usuário..." required>
                    </div>
                    <div class="form-confirm-password">
                        <label class="name-label" for="user-confirm-password">Confirmação de Senha:</label>
                        <input id="user-confirm-password" type="password" v-model="user.confirmPassword" placeholder="confirme a senha do usuário..." required>
                    </div>
                </div>
            </div>
            <div class="form-admin">
                <input type="checkbox" id="user-admin" v-model="user.admin">
                <label for="user-admin">Administrador?</label>
            </div>
            <div class="form-button">
                <button v-if="mode ==='save'" @click="save">Salvar</button>
                <button>Excluir</button>
            </div>
        </form>
        <EasyDataTable
            buttons-pagination
            :headers="headers"
            :items="users"
            :rows-per-page="5"
            :rows-items="[5, 10, 20]"
            alternating
        />
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            headers: [
                {text: 'Código', value: 'id', sortable:'true'},
                {text: 'Nome', value: 'name', sortable:'true'},
                {text: 'E-mail', value: 'email', sortable:'true'},
                {text: 'Administrador', value: 'admin', sortable:'true'},
                {text: 'Ações', value: 'actions'},
            ],
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {
        this.loadUsers()
    }
}
</script>

<style>
    .form-group {
        display: flex;
        column-gap: 1rem;
    }

    .form-name-email {
        flex: 1;
    }

    .form-senha {
        flex: 1;
    }

    .form-group .name-label {
        display: block;
        margin-bottom: 0.25rem;
    }

    .form-group input {
        padding: 5px 0 5px 5px;
        margin-bottom: 1rem;
        width: 98%;
    }

    .form-admin {
        margin-bottom: 10px;
    }


</style>