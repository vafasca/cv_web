const refrescarPagina = () => {
    location.reload();
    localStorage.clear();
}
const cambiarColor = (id, color) => {
    var obtenerColor = document.getElementById(color).value;// color
    document.getElementById(id).style.background = obtenerColor;
    document.getElementById("footer").style.color = "white";
}
const cambiarColor2 = (id, color) => {
    var obtenerColor = document.getElementById(color).value;// color
    document.getElementById(id).style.background = obtenerColor;
    if (obtenerColor == "black") {
        document.getElementById("titulo_estudios").style.color = "white";
        document.getElementById("parrafo_estudios").style.color = "white";
        document.getElementById("parrafo_estudios2").style.color = "white";
        document.getElementById("sub_estudios").style.color = "white";
        document.getElementById("sub_estudios2").style.color = "white";
        document.getElementById("estudio1").style.color = "white";
        document.getElementById("estudio2").style.color = "white";
    }
}
const cambiarColor3 = (id, color) => {
    var obtenerColor = document.getElementById(color).value;
    document.getElementById(id).style.background = obtenerColor;
    if (obtenerColor == "black") {
        document.getElementById("titulo_info").style, color = "white";
        document.getElementById("parrafo_info").style.color = "white";
        document.getElementById("titulo_info").style.color = "white";
        document.getElementById("sub_info").style.color = "white";
    }
}
const cambiarColor4 = (id, color) => {
    var obtenerColor = document.getElementById(color).value;
    document.getElementById(id).style.background = obtenerColor;
    document.getElementById("exp1").style.color = "white";
    document.getElementById("exp2").style.color = "white";
    document.getElementById("exp3").style.color = "white";
    document.getElementById("exp4").style.color = "white";
    document.getElementById("titulo_lab").style.color = "white";
    document.getElementById("exp_laboral1").style.color = "white";
    document.getElementById("exp_laboral2").style.color = "white";
    document.getElementById("exp_laboral3").style.color = "white";
    document.getElementById("exp_laboral4").style.color = "white";
}
const cambiarColor5 = (id, color) => {
    var obtenerColor = document.getElementById(color).value;
    document.getElementById(id).style.background = obtenerColor;
    document.getElementById("ref1").style.color = "white";
    document.getElementById("ref2").style.color = "white";
    document.getElementById("ref3").style.color = "white";
    document.getElementById("titulo_ref").style.color = "white";
    document.getElementById("ref_personal1").style.color = "white";
    document.getElementById("ref_personal2").style.color = "white";
    document.getElementById("ref_personal3").style.color = "white";
}
const cambiarColor6 = (id, color) => {
    var obtenerColor = document.getElementById(color).value;
    document.getElementById(id).style.background = obtenerColor;
    document.getElementById("ref_fam1").style.color = "white";
    document.getElementById("ref_fam2").style.color = "white";
    document.getElementById("ref_fam3").style.color = "white";
    document.getElementById("titulo_fam").style.color = "white";
    document.getElementById("titulo_fam").style.color = "white";
    document.getElementById("titulo_fam").style.color = "white";
    document.getElementById("ref_familiar1").style.color = "white";
    document.getElementById("ref_familiar2").style.color = "white";
    document.getElementById("ref_familiar3").style.color = "white";
}

const acordeon = () => {
    var acordeo = document.getElementsByClassName("acordeon");
    for (var index = 0; index < acordeo.length; index++) {// posicion al escuchar el click 
        acordeo[index].addEventListener("click", function () {
            var exp = this.nextElementSibling;
            if (exp.style.display === "block") {
                exp.style.display = "none";
            } else {
                exp.style.display = "block";
            }
        });

    }
}