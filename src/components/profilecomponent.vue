
    <template>
  <div class="container">
    <router-link to="/navcomponent" class="btn btn-primary" @click="authstore.login()" v-if="authstore.isAuthenticated==true">log in</router-link>
    <div v-else>
      <router-link to="/" class="btn btn-danger" @click="authstore.logout()">log out</router-link>
      <h1>welcome {{ authstore.user.name }}</h1>
    </div>
  </div>
  <router-view></router-view>
</template>

 
  
<script>
import {useAuthStore} from "@/stores/login"
export default {
  name:"profilecomponent",
    data(){
        return{
        authstore:useAuthStore()
        }
    }
}
</script>

<style>

</style>