function generarRecomendacion() {

    const tipo =
        document.getElementById("diag-tipo").value;

    const tiempo =
        document.getElementById("diag-tiempo").value;

    const clima =
        document.getElementById("diag-clima").value;

    const superficie =
        document.getElementById("diag-superficie").value;


    let rutina = "completa";

    if (tiempo === "10") {

        rutina = "express";

    }

    else if (clima === "frio") {

        rutina = "frio";

    }


    let mensaje = "";

    if (tipo === "partido") {

        mensaje =
            "Se recomienda una preparación progresiva antes del partido.";

    }

    else if (tipo === "entrenamiento") {

        mensaje =
            "Se recomienda una rutina completa para preparar la sesión.";

    }

    else {

        mensaje =
            "Se recomienda una rutina breve debido al tiempo disponible.";

    }


    const superficieTexto =
        superficie === "sintetico"
            ? "césped sintético"
            : superficie === "natural"
                ? "césped natural"
                : "futsal";


    const climaTexto =
        clima === "frio"
            ? "condiciones frías"
            : clima === "calor"
                ? "condiciones de calor"
                : "condiciones normales";


    const resultado =
        document.getElementById("diagnostic-result");


    resultado.innerHTML = `

        <h3>⚡ Recomendación</h3>

        <p>
            ${mensaje}
        </p>

        <p>
            <strong>Tiempo:</strong>
            ${tiempo} minutos
        </p>

        <p>
            <strong>Superficie:</strong>
            ${superficieTexto}
        </p>

        <p>
            <strong>Clima:</strong>
            ${climaTexto}
        </p>

        <button
            class="btn btn-primary"
            onclick="seleccionarRutina('${rutina}')">

            ▶ Iniciar rutina

        </button>

    `;


    resultado.classList.remove("hidden");

}


function seleccionarRutina(nombre) {

    localStorage.setItem(
        "rutinaSeleccionada",
        nombre
    );


    irAModoCampo();

    reiniciarTimer();

}