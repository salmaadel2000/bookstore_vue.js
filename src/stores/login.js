
import { defineStore } from 'pinia';
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: true,
    user: {
        name:"salma"
    }, 
  }),
  actions: {
    login() {
        this.isAuthenticated = false;
    },
    logout() {
      this.isAuthenticated = true;
      this.user = {};
    },
  },
});
