
<template>
     <div class="contant row  gy-5 ">
      <div v-for="book in books" :key="book.id" class="card col-lg-6 col-sm-4 ">
        <img :src="book.image" class="card-img-top" alt="card img">
        <div class="card-body">
          <h5 class="card-title"> author : {{book.author}}</h5>
          <h5 class="card-title">category:{{book.category}}</h5>
          <h5 class="card-title">pages : {{book.pages}}</h5>
          <h5 class="card-title">price : {{book.price}}</h5>
          <button  class="btn btn-primary" :disabled="book.flag==false" @click="addtowish(book)">to wishlist</button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "products",
  data() {
    return {
      books: [],
      table:[]
    };
  },
  created() {
    fetch("http://localhost:3000/books")
      .then(response => {
        if (!response.ok) {
          throw new Error("not okay response");
        }
        return response.json();
      })
      .then(data => {
        this.books = data;
        console.log(this.books)
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      }),
      fetch("http://localhost:3001/table")
    .then(response => {
        if (!response.ok) {
            throw new Error("not okay response");
        }
        return response.json();
    })
    .then(data => {
        this.table = data;
        console.log(this.table);
    })
    .catch(error => {
        console.error("Error fetching books:", error);
    });

  },
  methods :{
  addtowish(book) {
    book.flag = false;
    if (this.isDuplicateItem(book.id)) {
        console.log("Item with the same ID already exists in the wishlist.");
        return;
    }
    fetch("http://localhost:3001/table", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ book }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to add to wishlist");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Item added to wishlist:", data);
    })
    .catch((error) => {
        console.error("Error adding to wishlist:", error);
    });
},
isDuplicateItem(itemId) {
  console.log(this.table)
    return this.table.some((item) => item.book.id === itemId );
}
  }
}
  


</script>

<style  scoped>
  img{
    height: 200px;
  }
</style>

