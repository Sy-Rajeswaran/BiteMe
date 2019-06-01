function changePage(){
    location.replace("http://127.0.0.1:5500/order/OrderList.html")
}

function increment(foodType){
    let foodName;
    if (foodType==='ribs'){
        foodName = "ribs";
    } else {
        foodName = "burger";
    }
    var currentQuantity = parseInt(document.querySelector("#"+foodName).firstChild.data); 
    document.querySelector("#"+foodName).firstChild.data = currentQuantity+1;
}

function decrement(foodType){
    let foodName;
    if (foodType==='ribs'){
        foodName = "ribs";
    } else {
        foodName = "burger";
    }
    var currentQuantity = parseInt(document.querySelector("#"+foodName).firstChild.data);
    if(currentQuantity > 0){
        document.querySelector("#"+foodName).firstChild.data = currentQuantity-1;
    }
}

function Home(){
    location.replace("http://127.0.0.1:5500/welcome/")
}
function back(){
    location.replace("http://127.0.0.1:5500/restaurants/ListOfRestaurants.html")
}