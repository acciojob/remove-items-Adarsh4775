//your JS code here. If required.
function removeItem(){
	const color = document.getElementById("colorSelect");
	const presentColor = color.value;
	const tag = document.getElementByquerySelector("input");

	         if(color === presentColor)
			 {
				 console.log(tag);
			 }
          else
			 {
				 console.log("");
			 }
}
removeItem();