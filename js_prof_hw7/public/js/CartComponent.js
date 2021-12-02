Vue.component('cart', {
    data(){
        return {
            imgCart: 'https://via.placeholder.com/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            show: false,
        }
    },
    mounted(){
        this.$parent.getJson('/api/getCart')
            .then(data => {
                for(let item of data.contents){
                    item.imgPath = `img/small${item.id_product}.png`;
                    this.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(product){
            let change = this.cartItems.find(el => el.id_product === product.id_product);
            if(change){
                this.$parent.putJson(`/api/putProduct/${change.id_product}`, {quantity: 1});
                change.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/postProduct', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            let change = this.cartItems.find(el => el.id_product === item.id_product);
            this.$parent.deleteJson(`/api/deleteProduct/${change.id_product}`)
                .then(data => {
                    if(data.result === 1) {
                        this.cartItems = data.cartItems.contents
                        console.log(this.cartItems)
                    }
                })
        },
    },
    template: `
    <div>
        <button class="btn-cart" type="button" @click="show = !show">Shopping Cart</button>
            <div class="cart-block" v-show="show">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="item.imgPath"
                @remove="remove">
                </cart-item>
            </div>
    </div>
    `
})

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
    <div class="cart-item">
        <img :src="img" alt="Some img">
        <div class="cart-text">
            <h3>{{ cartItem.product_name }}</h3>
            <p>{{ cartItem.price }}$</p>
            <p>Quantity {{ cartItem.quantity }}</p>
        </div>
        <button class="del-btn" @click="$parent.remove(cartItem)">&times;</button>
    </div>
    `
})
