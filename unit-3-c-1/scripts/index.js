//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",myFunction);

var productArr= JSON.parse(localStorage.getItem("products")) || [];

function myFunction() {
            event.preventDefault();
            console.log("inside function")

            var type=document.querySelector("#type").value;
            var desc=document.querySelector("#desc").value;
            var price=document.querySelector("#price").value;
            var image=document.querySelector("#image").value;

            var prodObj={
                        itemType:type,
                        itemDesc:desc,
                        itemPrice:price,
                        itemImage:image,
            };

            productArr.push(prodObj);

            localStorage.setItem("products",JSON.stringify(productArr));
            
}
