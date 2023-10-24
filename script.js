//your JS code here. If required.
function removeItem(){
	const color = document.getElementById("colorSelect");
	const presentColor = color.value;
	const tag = document.getElementByTagName("input");

	         if(color === presentColor)
			 {
				 tag();
			 }

}
removeItem();