document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua elemen yang diperlukan
    const imageContainers = document.querySelectorAll('.image-container');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const closeBtn = document.querySelector('.close-btn');

    // Menambahkan event listener untuk setiap container gambar
    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            showPopup(container);
        });
    });

    // Fungsi untuk menampilkan popup
    function showPopup(container) {
        // Mengambil data dari container yang diklik
        const imageData = container.querySelector('.image-data');
        const title = imageData.querySelector('h3').textContent;
        const description = imageData.querySelector('p').textContent;

        // Mengisi konten popup
        popupTitle.textContent = title;
        popupDescription.textContent = description;

        // Menampilkan popup dan overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Event listeners untuk menutup popup
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);

    // Menutup dengan tombol ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
});