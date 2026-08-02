function showMessage(){

alert("✅ Flood Detection System is Operating Normally.");

}

let level = 40;

function increaseWater(){

if(level<100){

level+=10;

document.getElementById("water").style.width=level+"%";

document.getElementById("levelText").innerHTML="Current Level : "+level+"%";

if(level>=80){

alert("🚨 Warning! High Water Level Detected.");

}

}

}
