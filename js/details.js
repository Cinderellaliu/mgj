//window onscroll
var stick=document.getElementById("stick");
var self=document.getElementById("self");
var navigation=document.getElementById("navigation");
var scrollTop=null;
window.onscroll=function(){
	scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
	stick.style.opacity=(scrollTop>=760)?"0.7":"0";
	self.style.bottom=(scrollTop>=760)?"116px":"51px";
	navigation.style.bottom=(scrollTop>=760)?"181px":"116px";
}
