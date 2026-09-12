document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarEjercicios();

        actualizarTimer();


        const borgRange =
            document.getElementById(
                "borg-range"
            );


        const borgValue =
            document.getElementById(
                "borg-value"
            );


        if (borgRange) {

            borgRange.addEventListener(
                "input",
                () => {

                    borgValue.textContent =
                        borgRange.value;

                }
            );

        }


        const molestia =
            document.getElementById(
                "eval-molestia"
            );


        const warning =
            document.getElementById(
                "warning-alert"
            );


        if (molestia) {

            molestia.addEventListener(
                "change",
                () => {

                    if (
                        molestia.value !==
                        "ninguna"
                    ) {

                        warning.classList.remove(
                            "hidden"
                        );

                    }

                    else {

                        warning.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        }

    }
);


function guardarHistorial() {

    const esfuerzo =
        document.getElementById(
            "borg-range"
        ).value;


    const molestia =
        document.getElementById(
            "eval-molestia"
        ).value;


    const evaluacion = {

        esfuerzo: esfuerzo,

        molestia: molestia,

        fecha:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "ultimaEvaluacion",
        JSON.stringify(evaluacion)
    );


    alert(
        "Evaluación guardada correctamente."
    );

}