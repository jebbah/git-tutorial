var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Masterfull',
        product: 'Socks',
        selectedVariant:0,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {	variantId: 2234,
                variantColor: "green",
                variantImage: 'C:/JonnyVue/img/greensock.jpg',
                variantQuantity: 10
            },
            {	variantId: 2235,
                variantColor: "blue",
                variantImage: 'C:/JonnyVue/img/bluesock.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0,
        methods: {
            addToCart: function(){
                this.cart +=1
            },
            updateProduct: function(index){
                this.selectedVariant = index
                console.log(index)
            },        
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})