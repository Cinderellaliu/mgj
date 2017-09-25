//call div 
window.onscroll=function(){
	var g=document.getElementById("graphic");
	scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
	if(scrollTop>=1160){
		g.style.position="fixed";
		g.style.left=0+"px";
		g.style.top=0+"px";
	}else{
		g.style.position="relative";
	}
}