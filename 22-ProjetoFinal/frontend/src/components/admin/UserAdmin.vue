<template>
    <div class="user-admin">
        <h1>Componente Usuários</h1>
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

</style>