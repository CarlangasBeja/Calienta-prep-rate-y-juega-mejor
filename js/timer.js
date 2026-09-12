const ejerciciosTimer = [

    {
        nombre: "Circunducción de Tobillos",
        duracion: 30
    },

    {
        nombre: "Flexo-Extensión y Rotación de Cadera",
        duracion: 45
    },

    {
        nombre: "Trote Progresivo + Laterales",
        duracion: 60
    },

    {
        nombre: "Skipping Alto + Talones al Glúteo",
        duracion: 45
    },

    {
        nombre: "Balances de Pierna",
        duracion: 45
    },

    {
        nombre: "Zancadas Dinámicas con Giro",
        duracion: 60
    },

    {
        nombre: "Salto Monopodal",
        duracion: 45
    },

    {
        nombre: "Aceleraciones y Frenados",
        duracion: 60
    },

    {
        nombre: "Pases a Un Toque",
        duracion: 60
    },

    {
        nombre: "Rondo de Reacción Rápida",
        duracion: 90
    }

];


let ejercicioActual = 0;

let tiempoRestante =
    ejerciciosTimer[0].duracion;

let timerActivo = false;

let intervalo = null;


function actualizarTimer() {

    const ejercicio =
        ejerciciosTimer[ejercicioActual];


    document.getElementById(
        "timer-exercise"
    ).textContent = ejercicio.nombre;


    const minutos =
        Math.floor(tiempoRestante / 60);

    const segundos =
        tiempoRestante % 60;


    document.getElementById(
        "timer-display"
    ).textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;


    const porcentaje =
        ((ejercicio.duracion - tiempoRestante)
        / ejercicio.duracion) * 100;


    document.getElementById(
        "timer-progress-bar"
    ).style.width =
        `${porcentaje}%`;

}


function toggleTimer() {

    if (timerActivo) {

        clearInterval(intervalo);

        timerActivo = false;

        document.getElementById(
            "timer-toggle"
        ).textContent = "▶ Continuar";

        return;

    }


    timerActivo = true;


    document.getElementById(
        "timer-toggle"
    ).textContent = "⏸ Pausar";


    intervalo = setInterval(() => {

        tiempoRestante--;

        actualizarTimer();


        if (tiempoRestante <= 0) {

            siguienteEjercicio();

        }

    }, 1000);

}


function siguienteEjercicio() {

    ejercicioActual++;


    if (
        ejercicioActual >=
        ejerciciosTimer.length
    ) {

        ejercicioActual = 0;

        clearInterval(intervalo);

        timerActivo = false;

        alert(
            "¡Rutina completada! ⚽"
        );

    }


    tiempoRestante =
        ejerciciosTimer[
            ejercicioActual
        ].duracion;


    actualizarTimer();

}


function reiniciarTimer() {

    clearInterval(intervalo);

    timerActivo = false;

    ejercicioActual = 0;

    tiempoRestante =
        ejerciciosTimer[0].duracion;


    document.getElementById(
        "timer-toggle"
    ).textContent = "▶ Iniciar";


    actualizarTimer();

}