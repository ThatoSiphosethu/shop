<template>
  <div class="home">
    <ProductDescriptionDrawer
    :product="product"
    :active="active.product_drawer"
    v-on:close-product-drawer="closeProductDrawer"
    />

    <div class="product-cards-container">
      <ProductSummaryCard
      v-for="product in items"
      :key="product.Id"
      :product="product"
      v-on:view-product="viewProduct($event)"/>

    </div>

  <v-footer
      light
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'

export default {
  name: 'Home',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer
  },
  data () {

    return {
      items: items,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    }
  }
}
</script>

<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
