function isStringEmpty(str) {
  return (!str || str.trim() === "");
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/TYSON-Alii/Assets/main/data.csv')
        .then(response => response.text())
        .then(data => {
            alert('Welcome! dear adventurer.');
            const gallery = document.getElementById('gallery');
            
            const rows = data.split('\n').slice(1); // İlk satırı (başlık) geç

            rows.forEach(row => {
                if (isStringEmpty(row)) {
                 
                 return;
                } 
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
  Swal.fire({
  title: "Welcome! dear Adventurer.",
  position:"top",
  width: 350,
  confirmButtonColor: "#00000030",
  padding: "3em",
  color: "#ffffff",
  background: `
  #1c112b
   url(https://raw.githubusercontent.com/TYSON-Alii/Assets/0fd42afec5b4dcdef4dde44188891786ff3bc441/fallstar.gif)
  no-repeat`,
  });
});
