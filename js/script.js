function calcularMedia() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;


    if (nota1 === "" || nota2 === "" || nota3 === "") {
        alert("Por favor, preencha todas as notas antes de calcular!");
        return;
    }


    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("media").textContent = media.toFixed(2);
}

function abrirAba(url) {
    window.open(url, "_blank");
}

const linkedin = document.getElementById("linkedin");
const twitter = document.getElementById("twitter");
const github = document.getElementById("github");

if (linkedin) {
    linkedin.addEventListener("click", function () {
        abrirAba("https://www.linkedin.com/in/aguiarwork/");
    });
}

if (twitter) {
    twitter.addEventListener("click", function () {
        abrirAba("https://x.com/AguiarWork");
    });
}

if (github) {
    github.addEventListener("click", function () {
        abrirAba("https://github.com/Aguiar-Work");
    });
}