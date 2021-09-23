var i;
var faqItem = document.getElementsByClassName("faq-item");

for(i = 0; i < faqItem.length; i ++) {

  	//Loop though all the faq items
	faqItem[i].firstElementChild.addEventListener( "click", function(){
		
		var content = this.nextElementSibling;
		
		this.classList.toggle("active");
		
		if( content.style.display === "block" ) {
			content.style.display = "none";
		} else {
			content.style.display = "block"; 
		} 
	}); 
}
