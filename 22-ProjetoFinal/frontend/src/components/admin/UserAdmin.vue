<template>
    <div class="user-admin">
        <h1>Componente Usuários</h1>
        <!-- <EasyDataTable
            :headers="headers"
            :items="items"
        /> -->
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
            headers: [],
            items: []
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
                console.log(this.users)
                console.log(typeof (this.users))
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