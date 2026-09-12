/* =========================================
   CAMBIAR TEMA
========================================= */

function toggleTheme() {

    const body =
        document.body;

    const button =
        document.getElementById(
            "theme-toggle"
        );


    body.classList.toggle(
        "dark-theme"
    );


    const oscuro =
        body.classList.contains(
            "dark-theme"
        );


    if (oscuro) {

        button.textContent = "☀️";

        localStorage.setItem(
            "tema",
            "oscuro"
        );

    }

    else {

        button.textContent = "🌙";

        localStorage.setItem(
            "tema",
            "claro"
        );

    }

}


/* =========================================
   RECUPERAR TEMA
========================================= */

function cargarTema() {

    const tema =
        localStorage.getItem(
            "tema"
        );


    const button =
        document.getElementById(
            "theme-toggle"
        );


    if (tema === "oscuro") {

        document.body.classList.add(
            "dark-theme"
        );


        if (button) {

            button.textContent = "☀️";

        }

    }

    else {

        if (button) {

            button.textContent = "🌙";

        }

    }

}


document.addEventListener(
    "DOMContentLoaded",
    cargarTema
);