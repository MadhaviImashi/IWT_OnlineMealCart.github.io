function resetProfile(){
	alert("Are you sure you want to reset profile details? ")
}


var removeFavButtons = document.getElementsByClassName('favButton')
for(var x= 0; x < removeFavButtons.length; x++){
	var button = removeFavButtons[x]
	button.addEventListener('click', removeFromFavorites)
}

function removeFromFavorites(event){
	alert("Meal removed from your FAVORITES List!");//display a message saying meal is removed from favorites

	var clickedButton = event.target;
	clickedButton.parentElement.remove()
}