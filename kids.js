const product=[
    {
        id:1,
        image:'Images/kidgirl1.jpg',
        title:'Brushed-inside leggings',
        price:499,
        category:'girl'
    
    },
    {
        id:2,
        image:'Images/kidgirl2.jpg',
        title:'piece printed ',
        price:800,
        category:'girl'
    
    
    },
    {
        id:3,
        image:'Images/kidboy1.jpg',
        title:'relaxed Fit Chinos',
        price:900,
        category:'boy'
    },
{
    id:4,
    image:'Images/kidboy2.jpg',
    title:'pack cotton jersy',
    price:700,
    category:'boy'

},
{
    id:5,
    image:'Images/kidgirl3.jpg',
    title:'wide shirt',
    price:1100,
    category:'girl',


},
{
    id:6,
    image:'Images/kidboy3.jpg',
    title:'jeans',
    price:900,
    category:'boy'
},
{
    id:7,
    image:'Images/kidgirl4.jpg',
    title:'shirt',
    price:500,
    category:'girl'
},
{
    id:8,
    image:'Images/kidboy5.jpg',
    title:'shirt',
    price:500,
    category:'girl'
},
{
    id:9,
    image:'Images/kidboy4.jpg',
    title:'shirt',
    price:500,
    category:'shirt'
}
];
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>{
        var {image,title,price}=item;
        return(
            `<div class='box'>
            <div class='img-box'></div>
            <img class='images' src=${image}></img>
           
            <div class='bottom'>
            <p class='prodname'>${title}</p>
            <h2>${price}.0LE</h2>`+ 
            "<button onclick='addtocart("+(i++)+")'>add to cart<button>"+
            `</div>
            </div>`
        )

    }).join('')
   function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
   }
  function delElement(a){
    cart.splice(a,1);
    displaycart();
  }


    var cart=[];
    function displaycart(a){
        let j=0; total=0;
        document.getElementById("count").innerHTML=cart.length;

        if(cart.length==0){
            document.getElementById('cartItem').innerHTML="your cart is empty";
            document.getElementById("total").innerHTML= "LE"+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML= cart.map((items)=>
            {
                var{image,title,title,price}=items;
                total=total+price;
                document.getElementById("total").innerHTML="LE"+total+".00"
                return( `
                <div class='cart-item'>
                 <div class='row-img'>
                  <img class='rowimg' src=${image}>
                 </div>
                  <p style='font-size:22px;'>${title}</p>
                  <h2 style='font-size:18px;'>${price}.00LE<h2>`+
                  "<i class='bi bi-trash3-fill' onclick='delElement("+(j++)+")'></i></div>"

                );
            }).join(''); 
        }
    }

    function filterproduct(value){
        
        let buttons = document.querySelectorAll(".button-value");
        buttons.forEach((button)=>{
            if(value.toUppercase ==button.innerText.toUppercase){
                button.classList.add("activer");
            }
            else{
                button.classList.remove("activer");
            }
        });
          let elements = document.querySelectorAll(".card");
          elements.forEach((element)=>{
            if(value=="all"){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
          })



    }
    // window.onload=()=>{
    //     filterproduct("all");
    // };







