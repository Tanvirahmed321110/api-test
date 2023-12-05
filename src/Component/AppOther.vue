<template>
  <div>
    <h3>This is Other page</h3>
    <div class="product-wraper">
      <div :class="productDynamic">
        <h3>Product Create</h3>
        <form action="#">
          <input v-model="productData.productName" type="text" placeholder="*Product Name">
          <input v-model="productData.ImageUrl" type="text" placeholder="*Image Url">
          <input v-model="productData.Datiles" type="text" placeholder="*Datiles">
          <input v-model="productData.quintity" type="number" placeholder="*Quintity">
          <input type="submit" value="Send">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      productData:{
          productName: '',
          ImageUrl: '',
          Datiles: '',
          quintity: 0
        }
    }
  },
  computed:{
    productDynamic(){
      return{
        'login-form' : true,
        'product-form' : true,
      }
    }
  }
}
</script>

<style>
  .product-form{
    text-align: center;
    background: rgb(255, 255, 255) !important;
    box-shadow: 0 0  10px 5px rgba(0 0 0 /5%);
    width: 800px;
  }
  .product-form form input{
    margin:24px auto !important;
    border:1px solid rgba(218, 112, 214, 0.514);
    width:460px;
  }
  .product-form h3{
    width:460px;
    text-align: left;
    font-weight: 500;
    margin: 0 auto;
  }
</style>