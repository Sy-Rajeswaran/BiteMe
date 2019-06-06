function Home(){
    location.replace("http://127.0.0.1:5500/welcome/")
}
function back(){
    location.replace("http://127.0.0.1:5500/order/OrderList.html")
}

function Feedback(){
    if(document.forms["payment"]["street_name"].value == "" || document.forms["payment"]["postal_code"].value == "" || 
    document.forms["payment"]["card_holder"].value == "" || document.forms["payment"]["card_number"].value == "" || 
    document.forms["payment"]["expiry_date"].value == "" || document.forms["payment"]["cvc"].value == "" ){
        alert("Missing Input!!")
    }
    else{
        alert("Order is Confirmed")
        location.replace("http://127.0.0.1:5500/welcome/")

    }
    
}
let itemArray=[];
let total=0;


$( document ).ready(function() {
    if (localStorage.getItem("itemArray") != null) {
        itemArray = JSON.parse(localStorage.getItem("itemArray")); //set itemArray value
    }
    if (localStorage.getItem("total") != null) {
        total = parseFloat(localStorage.getItem("total")); //set total value
    }        
    console.log(itemArray);
    console.log(total);

    //add items to HTML
    for (let i = 0; i < itemArray.length; i++) {
        $('.orders span').append("<li>" + itemArray[i].name + " ($" + itemArray[i].price.toFixed(2) + ") X " + itemArray[i].count + "</li>");
    }

    //add total to HTML
    $('.totals span').append("$" + total.toFixed(2));
    
});