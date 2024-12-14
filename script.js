// Función para abrir el enlace de DescoApp
function openDescoApp() {
    window.open('https://descoapp.com', '_blank');
}

// Añadiendo accesibilidad con teclado
document.getElementById('shareContainer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        openDescoApp();
    }
});
