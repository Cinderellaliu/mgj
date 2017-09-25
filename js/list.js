//call div 
window.onscroll=function(){
	var b=document.getElementById("boutique");
	scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
	if(scrollTop>=487){
		b.style.position="fixed";
		b.style.left=0+"px";
		b.style.top=0+"px";
	}else{
		b.style.position="relative";
	}
}