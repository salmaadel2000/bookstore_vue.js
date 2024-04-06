<template>
  <div class="row" >
     <h2 class="text-danger m-auto col-12 text-center" v-if="tables.length === 0">
       no books here !!!!!!!
     </h2>
     <table class="table" v-else>
       <thead>
         <tr>
           <th scope="col">id</th>
           <th scope="col">author</th>
           <th scope="col">category</th>
           <th scope="col">pages</th>
           <th scope="col">price</th>
           <th scope="col">Actions</th> 
         </tr>
       </thead>
       <tbody>
         <tr v-for="table in tables" :key="table.id">
           <td>{{ table.book.id }}</td>
           <td>{{ table.book.author }}</td>
           <td>{{ table.book.category }}</td>
           <td>{{ table.book.pages }}</td>
           <td>{{ table.book.price }}</td>
           <td>
             <button class="btn btn-danger" @click="lossItem(table)">-</button>
           </td>
         </tr>
         <tr>
          <td>total price</td>
          <td>{{ totalprice() }}</td>
         </tr>
       </tbody>
     </table>
   </div>
</template>

<script>


export default {
name: "wishlist",
data() {
 return {
   tables: [],
   isvisible: false,
 }
},
created() {
    fetch("http://localhost:3001/table")
      .then(response => {
        if (!response.ok) {
          throw new Error("not okay response");
        }
        return response.json();
      })
      .then(data => {
        this.tables = data;
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  },
methods: {
 lossItem(item) {
  let index = this.tables.findIndex(table => table === item);
   if (index !== -1) {
     this.tables.splice(index, 1);
   }
   fetch(`http://localhost:3001/table/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
     
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      const index = this.tables.findIndex(table => table.id === item.id);
      if (index !== -1) {
        this.tables.splice(index, 1);
      }
    })
    .catch(error => {
      console.error("Error deleting item:", error);
    });
 },
 totalprice(){
  let totalprice = 0;
          for (let i = 0; i < this.tables.length; i++) {
            totalprice += totalprice + this.tables[i].book.price;
          }
          return totalprice;
 }
}
}
</script>

<style>
</style>
