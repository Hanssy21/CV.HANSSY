/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.10
        }

    );


sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* =========================================
   MENSAJE DE BIENVENIDA
========================================= */

console.log(
    "🚀 Bienvenido al portafolio de Hanssy Leonardy Royero Diaz"
);
