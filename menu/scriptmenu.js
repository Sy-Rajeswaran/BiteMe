
var burger= {name:"Triple Cheese Burger", price:3.99, count:0, id:"burger"};
document.getElementById("burgerName").innerHTML= burger.name;
document.getElementById("burgersPrice").innerHTML="$"+burger.price;

var ribs= {name:"Ribs and Fries Combo", price:11.95,count:0, id:"ribs"};
  document.getElementById("ribsName").innerHTML= ribs.name;
  document.getElementById("ribsPrice").innerHTML= "$"+ribs.price;

let  itemArray = [];

$( document ).ready(function() {
  if (localStorage.getItem("itemArray") != null) {
      itemArray = JSON.parse(localStorage.getItem("itemArray")); //set itemArray value
  }
  console.log(itemArray);

  //add quantities to HTML
  for (let i = 0; i < itemArray.length; i++) {
      $('.' + itemArray[i].id + '.amount').html(itemArray[i].count); //update quantity seen
  }
  
});


function increment(foodType){

  for(var i in itemArray){
    if(itemArray[i].name== foodType.name){
      itemArray[i].count++; //increase count
      $('.' + foodType.id + '.amount').html(itemArray[i].count);
      localStorage.setItem('itemArray', JSON.stringify(itemArray));
      console.log(itemArray);
      return;
    }

  }
  itemArray.push(foodType);
  itemArray[itemArray.length-1].count++;
  $('.' + foodType.id + '.amount').html(itemArray[itemArray.length-1].count);
  localStorage.setItem('itemArray', JSON.stringify(itemArray));
  console.log(itemArray);

}
    

    


function decrement(foodType){
  for(var i in itemArray){
    if(itemArray[i].name== foodType.name){
      itemArray[i].count--; // decrease the item count
      $('.' + foodType.id + '.amount').html(itemArray[i].count);
      if(itemArray[i].count== 0){
        itemArray.splice(i,1);//splice method used to remove array from the cart

      }
      localStorage.setItem('itemArray', JSON.stringify(itemArray));
      console.log(itemArray);
      return;
    }
  }

}

function subTotal(){
  var subttotal=0;
  for(var i in itemArray){
    subttotal+=(itemArray[i].price * itemArray[i].count);
  }
  console.log("Total Price: " + subttotal);
  return subttotal;
}
  


function Home(){
    location.replace("http://127.0.0.1:5500/welcome/")
}
function back(){
    location.replace("http://127.0.0.1:5500/restaurants/ListOfRestaurants.html")
}

function changePage(){
  let total = subTotal()
  if(total == 0){
    alert("Please add items to the cart");

  }
  else{
    localStorage.setItem('itemArray', JSON.stringify(itemArray));
    localStorage.setItem('total', total);
    location.replace("http://127.0.0.1:5500/order/OrderList.html");

  }

}


