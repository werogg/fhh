const app = new Vue({
    el: '#app',
    data: {
        title: 'Clinica Sant Gervasi',
        treatments: 'Tratamientos',
        tr1: 'Tratamiento para la depresión',
        tr2: 'Tratamiento para la ansiedad',
        tr3: 'Tratamiento para ataques de pánico',
        tr4: 'Tratamiento para TDAH',
        tr5: 'Tratamiento para el insomnio',
        cite: 'Reservar cita',
        specialist: 'Consultar especialista',
        results: 'Consultar resultados',
        copy: '© 2021 Clínica sant gervasi'
    }
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}