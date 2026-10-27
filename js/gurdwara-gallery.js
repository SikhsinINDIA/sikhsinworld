/* Gurdwara photo gallery and lightbox – same behaviour as the Gurdwara pages on sikhsinindia.com.
   The gallery auto-advances, and stops as soon as the visitor picks a photo themselves. */
const thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
const mainImg = document.getElementById('galleryMain');
let current = 0;
let timer = mainImg && thumbs.length > 1 ? setInterval(() => showSlide((current + 1) % thumbs.length), 3000) : null;
function showSlide(i) {
  current = i;
  mainImg.src = thumbs[i].src;
  mainImg.alt = thumbs[i].alt;
  thumbs.forEach((t, n) => t.classList.toggle('active', n === i));
}
function selectSlide(i) {
  clearInterval(timer);   // visitor is in control now
  showSlide(i);
}
function openLightbox(src, name) {
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = name || '';
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
function downloadCurrentImage() {
  const src = document.getElementById('lightbox-img').src;
  const a = document.createElement('a');
  a.href = src;
  a.download = src.split('/').pop() || 'gurudwara-image.jpg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const lightbox = document.getElementById('lightbox');
if (lightbox) lightbox.addEventListener('click', function (e) { if (e.target === this) closeLightbox(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
