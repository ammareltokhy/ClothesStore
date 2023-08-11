

function shareListHideShow(actionId){
    var divs = document.getElementsByClassName("share-list");
    for(var i=0;i<divs.length;i++) {
        if(divs[i].id == actionId){
            if(divs[i].style.display === "inline-block"){
                divs[i].style.display = "none";
            }else{
                divs[i].style.display = "inline-block";
            }
        }
        else
            divs[i].style.display = "none";
    }
}
//------------------------------




  
  
  
  
    //   <div class='box row'>
    //   <div class='img-box col-3'></div>
    //   <img class='images ' src=${image}></img>
    //   </div>
    //   <div class='bottom'>
    //   <p>${title}</p>
    //   <h2>${price}</h2>`+ 
    //   "<button  onclick='addtocart("+(i++)+")'>add to cart<button>"+
    //   `</div>
    //   </div>
  