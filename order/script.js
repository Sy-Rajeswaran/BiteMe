function changePage() {
    let total="total";
    var currentTotal =parseFloat(document.querySelector("#"+total).firstChild.data);
    if(currentTotal == 0.00){
        alert("Your Order is Empty")
    }
    else{
        location.replace("http://127.0.0.1:5500/checkout/")
    }
    
    
}

function Home(){
    location.replace("http://127.0.0.1:5500/welcome/")
}

function back(){
    location.replace("http://127.0.0.1:5500/menu/")
}

function increment(foodType){
    let foodName;
    let Price;
    let total= "total";
    if (foodType==='ribs'){
        foodName = "ribs";
        Price= "priceRibs";
        
    } else {
        foodName = "burger";
        Price= "priceBurg";
    }
    var currentTotal =parseFloat(document.querySelector("#"+total).firstChild.data);
    var currentQuantity = parseInt(document.querySelector("#"+foodName).firstChild.data); 
    document.querySelector("#"+foodName).firstChild.data = currentQuantity+1;
    

    if(Price=="priceRibs"){
        var currentPriceRibs = parseFloat(document.querySelector("#"+Price).firstChild.data);
        document.querySelector("#"+Price).firstChild.data = (currentPriceRibs+ 11.95).toFixed(2);
        document.querySelector("#"+total).firstChild.data = (currentTotal+ 11.95).toFixed(2);
    }if(Price== "priceBurg"){
        var currentPriceBurgs = parseFloat(document.querySelector("#"+Price).firstChild.data);
        document.querySelector("#"+Price).firstChild.data = (currentPriceBurgs+ 3.99).toFixed(2)
        document.querySelector("#"+total).firstChild.data = (currentTotal+ 3.99).toFixed(2);
    }


    
}

function decrement(foodType){
    let foodName;
    let Price;
    let total="total";
    if (foodType==='ribs'){
        foodName = "ribs";
        Price= "priceRibs";
        var currentPriceRibs = parseFloat(document.querySelector("#"+Price).firstChild.data);
    } else {
        foodName = "burger";
        Price= "priceBurg";
        var currentPriceBurgs = parseFloat(document.querySelector("#"+Price).firstChild.data);
    }
    var currentTotal =parseFloat(document.querySelector("#"+total).firstChild.data);
    var currentQuantity = parseInt(document.querySelector("#"+foodName).firstChild.data);
    
    if(currentQuantity > 0){
        document.querySelector("#"+foodName).firstChild.data = currentQuantity-1;
    }
    if(Price=="priceRibs" && currentQuantity > 0 && currentPriceRibs>0.00 && currentTotal>0.00){
        
        document.querySelector("#"+Price).firstChild.data = (currentPriceRibs -11.95).toFixed(2);
        document.querySelector("#"+total).firstChild.data = (currentTotal- 11.95).toFixed(2);

    }if(Price== "priceBurg" && currentQuantity > 0 && currentPriceBurgs>0.00 && currentTotal>0.00){
        document.querySelector("#"+Price).firstChild.data = (currentPriceBurgs -3.99).toFixed(2)
        document.querySelector("#"+total).firstChild.data = (currentTotal- 3.99).toFixed(2);
    }
}