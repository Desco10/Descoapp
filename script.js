// Función para abrir la URL de DescoApp
function openDescoApp() {
    window.open('https://descoapp.com', '_blank');
}

// Accesibilidad: permitir redirección con Enter
document.getElementById('shareContainer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        openDescoApp();
    }
});
