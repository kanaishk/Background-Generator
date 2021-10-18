var css = document.querySelector(".css");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.65)';
    }
    throw new Error('Bad Hex');
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ hexToRgbA(color1.value) 
	+ ", " 
	+ hexToRgbA(color2.value) 
	+ ")";

	css.textContent = body.style.background + ";";

    body.style.background = body.style.background + ", url(\"bg.jpg\") no-repeat center center fixed";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);