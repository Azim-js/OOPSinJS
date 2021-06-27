// class creation
class Product{
    // title="Default";
    // imgUrl;
    // description;
    // price;

    //adding a method a default constructor

    constructor(title,imgUrl,price,description){
        this.title=title;
        this.imgUrl=imgUrl;
        this.price=price;
        this.description=description;
    }
}

//object acsess by new keyword

console.log(new Product());

const productList={
    products:[
        // INSTANCE of CLASS use OF OOPS

        new Product(
            'Pillow',
            "https://secure.img1-fg.wfcdn.com/im/06073366/compr-r85/1145/114540090/interlude-luxurious-square-cotton-pillow-cover-and-insert.jpg",
            699,
            "SOFT AND CUSHY"
        ),
        new Product(
            'Chair',
            "https://www.happybeds.co.uk/media/catalog/category/Sloane_Roomset_1.jpg",
            5000,
            "ART LOOK"
        ),
        new Product(
            'Recliner',
            "https://www.royaloakindia.com/uploads/ROYIND-royaloak-bently-recliner-1s-0125.webp",
            4000,
            'SOFT AND NICE'
        ),
        new Product(
            'Table',
            "https://images.custommade.com/VYwO6zsw1GyxVoQjL-HKQGeuVSU=/custommade-photosets/50a42c24c588a71_img_0974.JPG",
            8000,
            'Classy'
        )



        // {
        //     title:'Pillow',
        //     imgUrl:"https://secure.img1-fg.wfcdn.com/im/06073366/compr-r85/1145/114540090/interlude-luxurious-square-cotton-pillow-cover-and-insert.jpg",
        //     price:699,
        //     decription:"SOFT AND CUSHY"
        // },
        // {
        //     title:'Chair',
        //     imgUrl:"https://www.happybeds.co.uk/media/catalog/category/Sloane_Roomset_1.jpg",
        //     price:5000,
        //     decription:"ART LOOK"
        // },

        // // adding one more object
        // {
        //     title:'Recliner',
        //     imgUrl:"https://www.royaloakindia.com/uploads/ROYIND-royaloak-bently-recliner-1s-0125.webp",
        //     price:4000,
        //     description:'SOFT AND NICE'
        // }
    
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
                    <p>${prod.description}</p>
                    <button>Add to Cart </button>
                </div>     
            </div>
            `;
            prodList.append(prodEl);
        }

        renderHook.append(prodList);

    }

};

productList.render();