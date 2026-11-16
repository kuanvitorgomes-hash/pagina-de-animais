function mostrarCuriosidade(animal) {

    if (animal === "leao") {
        document.getElementById("leao").innerText =
            "Curiosidade: o leão é conhecido como o rei dos animais e vive principalmente em grupos.";
    }

    else if (animal === "lobo") {
        document.getElementById("lobo").innerText =
            "Curiosidade: os lobos são animais sociais e costumam viver em grupos chamados alcateias.";
    }

    else if (animal === "arara") {
        document.getElementById("arara").innerText =
            "Curiosidade: as araras possuem um bico muito forte e são conhecidas por suas cores vibrantes.";
    }
}