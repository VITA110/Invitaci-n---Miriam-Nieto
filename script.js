// // Esperar a que todo el documento esté cargado
// document.addEventListener('DOMContentLoaded', function() {
//     // Referencias a elementos
//     const whatsappBtn = document.getElementById('whatsapp-btn');
//     const emailBtn = document.getElementById('email-btn');
//     const confirmationPopup = document.getElementById('confirmation-popup');
//     const closeBtn = document.querySelector('.close-btn');
    
//     // Configuración de botones
//     const phoneNumber = '4921323711'; // Reemplazar con el número real
//     const emailAddress = 'confirmacion@evento.com'; // Reemplazar con el email real
//     const inviteeName = 'Dominica';
    
//     // Función para mostrar el popup de confirmación
//     function showConfirmation() {
//         confirmationPopup.style.display = 'flex';
//         setTimeout(() => {
//             confirmationPopup.querySelector('.popup-content').style.opacity = '1';
//         }, 10);
//     }
    
//     // Configurar botón de WhatsApp
//     whatsappBtn.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Mensaje predeterminado para WhatsApp
//         const message = `Hola, confirmo mi asistencia a la despedida de soltera de ${inviteeName}.`;
        
//         // Crear el enlace de WhatsApp con el mensaje
//         const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
//         // Guardar confirmación localmente
//         localStorage.setItem('rsvpConfirmed', 'true');
        
//         // Abrir WhatsApp en una nueva ventana
//         window.open(whatsappLink, '_blank');
        
//         // Mostrar confirmación
//         showConfirmation();
//     });
    
//     // Configurar botón de Email
//     emailBtn.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Asunto y cuerpo del correo
//         const subject = `Confirmación para Despedida de Soltera de ${inviteeName}`;
//         const body = `Hola, confirmo mi asistencia a la despedida de soltera de ${inviteeName}.`;
        
//         // Crear el enlace de correo
//         const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
//         // Guardar confirmación localmente
//         localStorage.setItem('rsvpConfirmed', 'true');
        
//         // Abrir el cliente de correo
//         window.location.href = mailtoLink;
        
//         // Mostrar confirmación
//         showConfirmation();
//     });
    
//     // Cerrar el popup
//     closeBtn.addEventListener('click', function() {
//         confirmationPopup.style.display = 'none';
//     });
    
//     // Cerrar popup al hacer clic fuera del contenido
//     window.addEventListener('click', function(event) {
//         if (event.target === confirmationPopup) {
//             confirmationPopup.style.display = 'none';
//         }
//     });
    
//     // Verificar si el usuario ya confirmó anteriormente
//     window.addEventListener('load', function() {
//         if (localStorage.getItem('rsvpConfirmed') === 'true') {
//             // El usuario ya ha confirmado previamente
//             const rsvpSection = document.querySelector('.rsvp-section');
//             if (rsvpSection) {
//                 rsvpSection.innerHTML = `
//                     <h3>¡Ya has confirmado tu asistencia!</h3>
//                     <p>Gracias por confirmar. Te esperamos en la celebración.</p>
//                 `;
//             }
//         }
//     });
    
//     // Animación al hacer scroll
//     function fadeInOnScroll() {
//         const elements = document.querySelectorAll('.event-type, .event-highlight, .event-honoree, .honoree-name, .date-container, .event-details, .organizers, .rsvp-section');
        
//         elements.forEach(element => {
//             const elementTop = element.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
            
//             if (elementTop < windowHeight - 50) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     }
    
//     // Configuración inicial de animación
//     document.querySelectorAll('.event-type, .event-highlight, .event-honoree, .honoree-name, .date-container, .event-details, .organizers, .rsvp-section').forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(20px)';
//         element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
//     });
    
//     // Escuchar el evento de scroll
//     window.addEventListener('scroll', fadeInOnScroll);
//     // Ejecutar una vez al cargar la página
//     fadeInOnScroll();
// });


// Agrega esto a tu archivo script.js o colócalo al final de tu HTML

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const mapToggle = document.getElementById('mapToggle');
    const mapContainer = document.getElementById('mapContainer');
    const closeMap = document.getElementById('closeMap');
    
    // Crear el overlay para el fondo oscuro
    const overlay = document.createElement('div');
    overlay.className = 'map-overlay';
    document.body.appendChild(overlay);
    
    // Función para mostrar el mapa
    function showMap() {
        mapContainer.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evita el scroll mientras el mapa está abierto
    }
    
    // Función para ocultar el mapa
    function hideMap() {
        mapContainer.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restaura el scroll
    }
    
    // Eventos
    mapToggle.addEventListener('click', showMap);
    closeMap.addEventListener('click', hideMap);
    overlay.addEventListener('click', hideMap); // También cierra haciendo clic fuera del mapa
});