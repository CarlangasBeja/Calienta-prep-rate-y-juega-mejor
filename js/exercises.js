/* =========================================
   CARGAR EJERCICIOS
========================================= */

async function cargarEjercicios() {

    try {

        /*
         * Primero intentamos cargar
         * el archivo JSON.
         *
         * Esto funciona cuando el proyecto
         * está ejecutándose mediante un servidor.
         */

        const respuesta =
            await fetch("data/ejercicios.json");


        if (!respuesta.ok) {

            throw new Error(
                "No se pudo acceder al archivo JSON"
            );

        }


        const ejercicios =
            await respuesta.json();


        mostrarEjercicios(ejercicios);

    }

    catch (error) {

        console.warn(
            "No se pudo cargar ejercicios.json.",
            error
        );


        /*
         * RESPALDO
         *
         * Si el navegador bloquea fetch()
         * porque index.html fue abierto
         * directamente, utilizamos estos datos.
         */

        const ejerciciosRespaldo = [

            {
                "fase": "Fase 1",
                "nombre": "Circunducción de Tobillos",
                "tag": "Movilidad articular",
                "objetivo": "Activar la movilidad de la articulación del tobillo.",
                "dosificacion": "30 segundos por pierna.",
                "tecnica": "Realizar movimientos circulares controlados con el tobillo, manteniendo estabilidad.",
                "musculos": "Movilidad articular del tobillo y musculatura estabilizadora.",
                "prevencion": "Realizar movimientos progresivos sin movimientos bruscos."
            },

            {
                "fase": "Fase 1",
                "nombre": "Flexo-Extensión y Rotación de Cadera",
                "tag": "Movilidad de cadera",
                "objetivo": "Preparar la movilidad de la cadera y activar la musculatura estabilizadora.",
                "dosificacion": "10 repeticiones por pierna.",
                "tecnica": "Realizar flexión, extensión y rotación de forma controlada.",
                "musculos": "Psoas, glúteo medio y musculatura aductora.",
                "prevencion": "Mantener una postura controlada."
            },

            {
                "fase": "Fase 2",
                "nombre": "Trote Progresivo + Desplazamientos Laterales",
                "tag": "Activación cardiovascular",
                "objetivo": "Elevar progresivamente la temperatura corporal.",
                "dosificacion": "3 minutos.",
                "tecnica": "Comenzar con trote suave y aumentar progresivamente la intensidad.",
                "musculos": "Piernas, glúteos y musculatura estabilizadora.",
                "prevencion": "Incrementar la intensidad progresivamente."
            },

            {
                "fase": "Fase 2",
                "nombre": "Skipping Bajo/Alto + Talones al Glúteo",
                "tag": "Activación dinámica",
                "objetivo": "Activar la musculatura de las piernas.",
                "dosificacion": "2 series de aproximadamente 15 metros.",
                "tecnica": "Alternar skipping bajo, skipping alto y talones al glúteo.",
                "musculos": "Isquiotibiales, recto femoral y musculatura de la pierna.",
                "prevencion": "Mantener movimientos coordinados y progresivos."
            },

            {
                "fase": "Fase 3",
                "nombre": "Balances de Pierna Anteroposterior y Lateral",
                "tag": "Movilidad dinámica",
                "objetivo": "Mejorar la movilidad dinámica de la cadera.",
                "dosificacion": "10 balanceos por dirección y pierna.",
                "tecnica": "Realizar balanceos controlados hacia delante, atrás y lateralmente.",
                "musculos": "Cadera, glúteos, aductores e isquiotibiales.",
                "prevencion": "Usar amplitudes progresivas y controladas."
            },

            {
                "fase": "Fase 3",
                "nombre": "Zancadas Dinámicas con Rotación de Tronco",
                "tag": "Movilidad y estabilidad",
                "objetivo": "Integrar movilidad de cadera, estabilidad y rotación.",
                "dosificacion": "8 zancadas alternadas.",
                "tecnica": "Realizar una zancada acompañada de una rotación controlada.",
                "musculos": "Glúteos, cuádriceps, isquiotibiales y tronco.",
                "prevencion": "Mantener la rodilla alineada."
            },

            {
                "fase": "Fase 4",
                "nombre": "Salto Monopodal con Fijación de Caída",
                "tag": "Control neuromuscular",
                "objetivo": "Practicar control y estabilidad durante la recepción.",
                "dosificacion": "6 repeticiones por pierna.",
                "tecnica": "Realizar un salto controlado y estabilizar la recepción.",
                "musculos": "Glúteos, cuádriceps, isquiotibiales y estabilizadores.",
                "prevencion": "Priorizar el control de la recepción."
            },

            {
                "fase": "Fase 4",
                "nombre": "Aceleraciones Breves y Desaceleración",
                "tag": "Velocidad y control",
                "objetivo": "Preparar al cuerpo para aceleraciones y frenadas.",
                "dosificacion": "4 repeticiones.",
                "tecnica": "Acelerar durante una distancia corta y reducir progresivamente.",
                "musculos": "Glúteos, cuádriceps, isquiotibiales y pantorrillas.",
                "prevencion": "Realizar las frenadas progresivamente."
            },

            {
                "fase": "Fase 5",
                "nombre": "Pases a Un Toque + Pared Técnica",
                "tag": "Activación técnica",
                "objetivo": "Integrar la preparación física con gestos técnicos.",
                "dosificacion": "2 minutos por parejas.",
                "tecnica": "Realizar pases controlados a un toque.",
                "musculos": "Piernas y musculatura estabilizadora.",
                "prevencion": "Mantener una intensidad progresiva."
            },

            {
                "fase": "Fase 5",
                "nombre": "Rondo de Reacción Rápida y Toma de Decisiones",
                "tag": "Activación específica",
                "objetivo": "Preparar la atención, reacción y toma de decisiones.",
                "dosificacion": "4 minutos.",
                "tecnica": "Realizar pases rápidos y tomar decisiones con hasta dos contactos.",
                "musculos": "Piernas y musculatura estabilizadora.",
                "prevencion": "Mantener el espacio organizado y una intensidad adecuada."
            }

        ];


        mostrarEjercicios(
            ejerciciosRespaldo
        );

    }

}


/* =========================================
   MOSTRAR EJERCICIOS
========================================= */

function mostrarEjercicios(ejercicios) {

    const container =
        document.getElementById(
            "exercise-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    ejercicios.forEach(
        (ejercicio, index) => {

            const card =
                document.createElement("article");


            card.className =
                "exercise-card";


            card.innerHTML = `

                <div
                    class="exercise-header"
                    onclick="toggleAccordion(${index})">

                    <div class="exercise-number">

                        ${index + 1}

                    </div>


                    <div>

                        <h3>
                            ${ejercicio.nombre}
                        </h3>

                        <p>
                            ${ejercicio.tag}
                        </p>

                    </div>

                </div>


                <div
                    id="exercise-${index}"
                    class="exercise-body">

                    <div class="exercise-detail">

                        <strong>
                            🎯 Objetivo
                        </strong>

                        <p>
                            ${ejercicio.objetivo}
                        </p>

                    </div>


                    <div class="exercise-detail">

                        <strong>
                            ⏱️ Dosificación
                        </strong>

                        <p>
                            ${ejercicio.dosificacion}
                        </p>

                    </div>


                    <div class="exercise-detail">

                        <strong>
                            🏃 Técnica
                        </strong>

                        <p>
                            ${ejercicio.tecnica}
                        </p>

                    </div>


                    <div class="exercise-detail">

                        <strong>
                            💪 Músculos
                        </strong>

                        <p>
                            ${ejercicio.musculos}
                        </p>

                    </div>


                    <div class="exercise-detail">

                        <strong>
                            🛡️ Prevención
                        </strong>

                        <p>
                            ${ejercicio.prevencion}
                        </p>

                    </div>

                </div>

            `;


            container.appendChild(card);

        }
    );

}


/* =========================================
   ACORDEÓN
========================================= */

function toggleAccordion(index) {

    const body =
        document.getElementById(
            `exercise-${index}`
        );


    if (body) {

        body.classList.toggle("open");

    }

}