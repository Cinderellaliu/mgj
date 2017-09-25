//count-down
function time(){
	var nowtime = document.getElementById("nowtime");
	var mydate = new Date();
	nowtime.innerHTML = mydate.getHours();
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var m =59- mydate.getMinutes();
	var s =59 - mydate.getSeconds();
	function add(a){
		if(a < 10){
			return "0"+a;
		}else{
			return a;
		}
	}
	minutes.innerHTML = add(m);
	seconds.innerHTML = add(s);
}
setInterval(time,1000);
