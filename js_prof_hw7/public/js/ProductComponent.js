Vue.component('products',{
    data () {
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/getProducts')
            .then(data => {
                for(let item of data){
                    item.imgPath = `img/${item.id_product}.png`;
                    this.products.push(item);
                    this.filtered.push(item);
                }
            });
    },
    template: `
    <div class="products">
        <product v-for="item of filtered" 
            :key="item.id_product" 
            :img ="item.imgPath" 
            :product="item"></product>
    </div>
    `
})

Vue.component('product',{
    props: ['product', 'img'],
    template: `
    <div class="product-item">
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{product.product_name}}</h3>
            <p>{{product.price}}$</p>
            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Add to cart</button>
        </div>
    </div>
    `
})
