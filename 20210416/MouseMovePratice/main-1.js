let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[2];

function mouseIn(){
    thisH1.innerHTML = "你進來了喔 要不要先出去一下";
}
function mouseOut(){
    thisH1.innerHTML = "阿你人咧";
}

function mouseMove(e){
    thisP.innerHTML = "你在晃喔。 位置:"+e.clientX+","+e.clientY;
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);