function changePage() {

    localStorage.setItem('items', JSON.stringify(itemArray));
    location.replace("http://127.0.0.1:5500/checkout/")
    
    
    
}

function Home(){
    location.replace("http://127.0.0.1:5500/welcome/")
}

function back(){
    localStorage.setItem('items', JSON.stringify(itemArray));
    location.replace("http://127.0.0.1:5500/menu/")
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