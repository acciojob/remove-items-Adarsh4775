//your JS code here. If required.
function removeItem(){
	const colorSelect = document.getElementById("colorSelect");
	const button = document.querySelector("input[type='button']");

	        button.addEventListener("click", function(){

				const selectedOption = colorSelect.options[colorSelect.selectedIndex];

				if(selectedOption)
				{
					colorSelect.remove(colorSelect.selectedIndex);
				}
			});
}
removeItem();