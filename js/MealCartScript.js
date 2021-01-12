if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', readyJs())//javascript code will run after loading the html document completely
}
else{
	readyJs();//else means the page has already loaded
}

function readyJs(){

	/*var removeMealButtons = document.getElementsByClassName("removeButton")//to get the all the different elements in the cart page which have this class name stored in this variable
	//to add an event listner to this button first need to loop throught all the elements(remove buttons)
	for(var x = 0; x < removeMealButtons.length; x++){
		var button = removeMealButtons[x]  
		button.addEventListener('click', removeMealFromCart)
	}

	//as same as how we add eventListener once the remove button is clicked, we should update cart total each time once quantity is changed 
	var quantityInputs = document.getElementsByClassName('mealQuantityInput')
	for(var x = 0; x < quantityInputs.length; x++){
		var input = quantityInputs[x]
		input.addEventListener('change', quantityChanged)
	}*/

	var addToCartButtons = document.getElementsByClassName('addToCart')
	for(var x = 0; x < addToCartButtons.length; x++){
		var button = addToCartButtons[x]
		button.addEventListener('click', addToCartClicked)
	}

	var checkoutButton = document.getElementById('checkout')
	checkoutButton.addEventListener('click', checkoutClicked)

}

function addToCartClicked(event){
	var button = event.target
	var mealItem = button.parentElement.parentElement//to access the parent element to which the clicked item belongs to
	var mealName = mealItem.getElementsByClassName('mealNameBig')[0].innerText//mealName is assigned to a new variable
	var mealPrice = mealItem.getElementsByClassName('mealPriceBig')[0].innerText
	var mealImageSrc = mealItem.getElementsByClassName('mealImageBig')[0].src
	AddMealToCart(mealName, mealPrice, mealImageSrc);
}

function AddMealToCart(name,price,src){
	//from this function we need to add these details as another cartRow in side the cartItems section of cart.html
	var newCartRow = document.createElement('div')//now a div tag is created but not yet added to cartItems in cart.html
	newCartRow.classList.add('cartRow')//in order to get the styles for the items adding to cart, we should give the classes of the cartRow to this newCartRow as well
	var cartItemsSection = document.getElementsByClassName('cartItems')[0]//to add meals, we should first find the cartItems section in cart.html by calling its className
	
	//before adding a new item to the cart we should check weather the meal type has already added to the cart by comparing the clicked mealName(name) with the mealNames in cartItems
	var cartItemNames = cartItemsSection.getElementsByClassName('mealName')//to chck, first those mealnames should be taken to a new array
	for(var x = 0; x < cartItemNames.length; x++){
		if(cartItemNames[x].innerText == name){
			alert(" your have already added this meal to the cart!\n If you need more from this meal, please change the quantity")
			return//to go out from this whole function without continuing the rest to add that meal which has already added
		}
	}
	//if the meal is not yet added, after running the for loop for all the items in the cart,it will continue to execute the below code
	var newCartRowContent = `
			<div class="cartItem cartColumn">
				<img class="mealImage" src="${src}" >
				<span class="mealName">${name}</span>
			</div><!--cartItem cartColumn-->

			<span class="cartPrice cartColumn"> ${price}</span>

			<div class="cartQuantity cartColumn">
				<input class="mealQuantityInput" type="number" name="quantity" value="1">
				<button class="removeButton">DELETE</button>
			</div><!--cartQuantity cartColumn-->`
	newCartRow.innerHTML = newCartRowContent//to write the content of the row inside the newCartRowContent
	cartItemsSection.append(newCartRow)//to add this new cart row to the very end of cartItems section
	updateCartTotal()//once an item add,update total at the same time
	//to activate remove button of added item, add an eventListener as below
	var newRemoveBtn = newCartRow.getElementsByClassName('removeButton')[0]
	newRemoveBtn.addEventListener('click', removeMealFromCart)
	//as same as removing, cart total should be updated once the quantity of the added item is changed
	newCartRow.getElementsByClassName('mealQuantityInput')[0].addEventListener('change',quantityChanged)
}

function removeMealFromCart(event){
	var clickedButton = event.target;//event.target gives the element which was clicked(event)
	clickedButton.parentElement.parentElement.remove()//parentElement is used to access the parent element of that clicked button
	updateCartTotal()
}

function quantityChanged(event){
	//if customer erase the value in the quantity input box or if customer gives a negative no or 0 as the quantity, 
	//we should correct it gy giving a default value 1 as the quantity. 
	var input = event.target// the input element to which the exact quantity change occured is caughted by this step
	if (isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateCartTotal()//each time when the quantity is changed, the cart total should also be changed
}


//function to update cart total
function updateCartTotal(){
		var cartItemContainer = document.getElementsByClassName("cartItems")[0]/*from this we get the elements which are of this className to a new variable
		here we put [0] because normally this getElementsByClassName function always returns
		an array of elements. but here we have only one cartItems element. so to access this cartItems element we should give the right index of it which is [0]*/
		var cartRows = cartItemContainer.getElementsByClassName('cartRow')/*as there are few no of cartRow elements here the whole array of elements which have cartRow classname in the cartItemsContainer var are getting 
		stored to this cartRows variable. so to access each cartRow loop is needed*/
		var total = 0;
		for(x = 0; x < cartRows.length; x++){
			var cartRow = cartRows[x]
			//to calc total, first we should access the elements where price and quantity are belongs to 
			var priceElement = cartRow.getElementsByClassName('cartPrice')[0]
			var quantityElement = cartRow.getElementsByClassName('mealQuantityInput')[0]
			//now from these elements lets get the real information inside of these elements
			var price = parseFloat(priceElement.innerText.replace('RS:',''))
			//from the above replace function we can remove that RS: string and replace with nothing. so that we can have the pure value of price
			//but it is a text/string . but for calculations we need to have price as a float value. so to convert a string to float we use parseFloat function
			var quantity = quantityElement.value;//give the input value of quanti
			//now to find the total of all the meals available in the cart, we should add the total of this item(x) to the total of previous items
			total = total + (price * quantity)
		}
		document.getElementById('total').innerText = "RS: " + total + ".00";
}

function checkoutClicked(){
	alert('Your meal order is ready for purchase!')
	var cartItemContainer = document.getElementsByClassName('cartItems')[0]
	while(cartItemContainer.hasChildNodes()){//the loop will execute until there is a child item(cart row) and once the cart becomes empty loop will break
		cartItemContainer.removeChild(cartItemContainer.firstChild)//this will remove every very first item in the cart
	}
	updateCartTotal()//once the cart becomes empty the total price should also be updated.

	/*other method is as below
	var cartRows = cartItemContainer.getElementsByClassName('cartRow')
	for(x = 0; x < cartRows.length; x++){
		cartRows[x].parentElement.remove()	
	}
	document.getElementById('total').innerText = "RS: 00.00";
	*/
}
