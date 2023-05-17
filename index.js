var btnlength = document.querySelectorAll(".band").length;
for (let i = 0; i < btnlength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var inside = this.innerHTML;
        sur(inside);
        Animate(inside);
       
    });

}

document.addEventListener("keypress",function(e){
     var insideKey = e.key
     sur(insideKey);
     Animate(insideKey);
});


function sur(currkey){

    switch (currkey) {
        case "s":
            var sa = new Audio("Sounds/s1.wav");
            sa.play();
            break;

        case "r":
            var re = new Audio("Sounds/s2.wav");
            re.play();
            break;

        case "g":
            var ga = new Audio("Sounds/s3.wav");
            ga.play();
            break;

        case "m":
            var ma = new Audio("Sounds/s4.wav");
            ma.play();
            break;

        case "p":
            var pa = new Audio("Sounds/s5.wav");
            pa.play();
            break;

        case "d":
            var dha = new Audio("Sounds/s6.wav");
            dha.play();
            break;

        case "n":
            var ni = new Audio("Sounds/s7.wav");
            ni.play();
            break;

        default: console.log("error found! in " + inside)
    }
}

function Animate(currentkey){

    var addcls = document.querySelector("."+currentkey);
    addcls.classList.add("onpress");

    setTimeout(function(){
        addcls.classList.remove("onpress");
    },500);
}