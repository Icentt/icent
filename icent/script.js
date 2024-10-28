document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burgerButton');
    const popupMenu = document.getElementById('popupMenu');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');


    popupMenu.style.display = 'none';
    overlay.style.display = 'none';


    burgerButton.addEventListener('click', function() {
        popupMenu.style.display = 'block'; 
        void popupMenu.offsetWidth; 
        popupMenu.classList.add('active'); 
        overlay.style.display = 'block'; 
        setTimeout(() => {
            overlay.style.opacity = '1'; 
        }, 0); 
    });


    function closePopup() {
        popupMenu.classList.remove('active'); 
        overlay.style.opacity = '0'; 
        setTimeout(() => {
            popupMenu.style.display = 'none'; 
            overlay.style.display = 'none'; 
        }, 300); 
    }

    closeButton.addEventListener('click', closePopup);


    document.addEventListener('click', function(event) {
        if (!burgerButton.contains(event.target) && !popupMenu.contains(event.target)) {
            closePopup();
        }
    });
});
