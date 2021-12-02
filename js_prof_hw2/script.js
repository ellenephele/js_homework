class GoodsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.fetchProducts();
    }
    
    fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeEnd',productObj.render())
        }
    }
    getSum() {
        let total = document.getElementById('cart-total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
        total.innerText = `Товаров в корзине на сумму: ${sum}`;
    }    
}


class ProductItem {
	constructor(product, img = ''){
		this.title = product.title;
		this.price = product.price;
		this.img = img;
		
	}
	
	render() {
		 return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Add to cart</button>
            </div>`
	}
}

let list = new GoodsList();
list.render();
list.getSum();
