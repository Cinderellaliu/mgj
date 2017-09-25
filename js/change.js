//picture change
var curIndex=0;
var timeInterval=4000;
var arr=new Array();
arr[0]="top-picture.png";
arr[1]="top-picture2.png";
arr[2]="top-picture3.png";
arr[3]="top-picture4.png";
arr[4]="top-picture5.png";
setInterval(changeImg,timeInterval);
function changeImg(){
	var showpicture=document.getElementById("showpicture");
	if(curIndex==arr.length-1){
		curIndex=0;
	}else{
		curIndex+=1;
	}
	showpicture.src="img/"+arr[curIndex];
}
