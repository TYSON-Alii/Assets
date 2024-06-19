document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/TYSON-Alii/Assets/1c5643def1d926da9b911d95d20e2b66496a9e1c/data.csv')
        .then(response => response.text())
        .then(data => {
            const gallery = document.getElementById('gallery');
            const rows = data.split('\n').slice(1); // İlk satırı (başlık) geç

            rows.forEach(row => {
                const [imageUrl, description, link] = row.split(',');

                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                const anchor = document.createElement('a');
                anchor.href = link;
                anchor.target = '_blank';

                const img = document.createElement('img');
                img.src = imageUrl.trim();
                img.alt = description.trim();

                const p = document.createElement('p');
                p.textContent = description.trim();

                anchor.appendChild(img);
                anchor.appendChild(p);
                galleryItem.appendChild(anchor);
                gallery.appendChild(galleryItem);
            })
   })   .catch(error => {
        console.error('Veri alımı sırasında hata oluştu:', error);
        alert(error);
        }); 
});