

const productList={
    products:[
        {
            title:'Pillow',
            imgUrl:"https://secure.img1-fg.wfcdn.com/im/06073366/compr-r85/1145/114540090/interlude-luxurious-square-cotton-pillow-cover-and-insert.jpg",
            price:699,
            decription:"SOFT AND CUSHY"
        },
        {
            title:'Chair',
            imgUrl:"https://www.ulcdn.net/images/products/45465/product/contour_chair_and_ottoman_replica_patchwork_replace_LP.jpg?1569471148",
            price:5000,
            decription:"ART LOOK"
        },
    
    ],
    render(){
        const renderHook=document.getElementById("app");
        
        const prodList=document.createElement("ul");

        prodList.className="product-list";

        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className="product-item";
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imgUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>RS ${prod.price}</h3>
                    <p>${prod.decription}</p>
                    <button>Add to Cart </button>
                </div>     
            </div>
            `;
            prodList.append(prodEl);
        }

        renderHook.append(prodList);

    }

};

productList.render()