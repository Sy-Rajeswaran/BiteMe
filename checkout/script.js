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