    
        // Crear estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Crear corazones flotantes
        const heartsContainer = document.getElementById('floatingHearts');
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 6000);
        }, 800);

        // Contador de días (cambia la fecha de inicio)
        const startDate = new Date('2025-09-21'); // CAMBIA ESTA FECHA
        function updateCounter() {
            const today = new Date();
            const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
            document.getElementById('dayCounter').textContent = diff;
        }
        updateCounter();

        // Frases románticas aleatorias
        const quotes = [
            "El amor no se mira, se siente, y aún más cuando ella está junto a ti",
            "Contigo, cada momento se convierte en un recuerdo perfecto",
            "Tu risa es mi melodía favorita",
            "En tus ojos encontré mi hogar",
            "Eres mi persona favorita en todo el universo"
        ];
        
        setInterval(() => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('randomQuote').textContent = `"${randomQuote}"`;
        }, 5000);

        // Mensajes secretos
const messages = {
    1: "¡Te quiero 7 trillones! 💖✨ No hay número que pueda medir lo que siento por ti",
    2: "Mi día favorito es cualquiera que pase contigo 🌟",
    3: "Admiro tu fuerza, tu alegría y cómo iluminas todo a tu alrededor ✨",
    4: "Nuestra canción es cualquiera que suene cuando estamos juntos 🎵",
    5: "Mi deseo es crear millones de recuerdos más a tu lado 💫",
    6: "¡Claro que sí! Siempre estoy aquí para ti 🥰💕",
    7: "¡Sorpresa! 🎉✨ Eres lo más especial de mi vida"
};

       function showMessage(num) {
    const modal = document.getElementById('messageModal');
    const text = document.getElementById('modalText');
    text.textContent = messages[num];
    modal.style.display = 'flex';
}
function closeModal() {
    const modal = document.getElementById('messageModal');
    modal.style.display = 'none';
}
        // Confeti
        function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.top = '-10px';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
    showMessage(7); // Mostrar mensaje de sorpresa
}
        // Control de música
// Control de música

const audio = document.getElementById('bgMusic');
let musicPlaying = false;

function toggleMusic() {
    const btn = document.getElementById('musicBtn');
    
    if (musicPlaying) {
        audio.pause();
        btn.textContent = '🔇';
        musicPlaying = false;
    } else {
        audio.play();
        btn.textContent = '🎵';
        musicPlaying = true;
    }
}
// Sistema de mensajes compartidos
// script.js

// Importar las librerías necesarias desde Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// 🔑 Configura con tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDNwIE4X9No1XNSdYetWHDeUJCkX5VT5Rs",
  authDomain: "para-dori-3dcd9.firebaseapp.com",
  databaseURL: "https://para-dori-3dcd9-default-rtdb.firebaseio.com",
  projectId: "para-dori-3dcd9",
  storageBucket: "para-dori-3dcd9.firebasestorage.app",
  messagingSenderId: "790705295029",
  appId: "1:790705295029:web:a4accf0735640deca6b8fc"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const mensajesRef = ref(db, "mensajes");

// 💌 VARIABLES GLOBALES
let currentPerson = "";

// 🧸 Abrir formulario
function openMessageForm() {
  document.getElementById("formModal").style.display = "flex";
  document.getElementById("personSelectStep").style.display = "block";
  document.getElementById("messageWriteStep").style.display = "none";
}

// ❌ Cerrar modal
function closeFormModal() {
  document.getElementById("formModal").style.display = "none";
  document.getElementById("messageInput").value = "";
  currentPerson = "";
}

// 🐻 Seleccionar persona
function selectPerson(person) {
  currentPerson = person;
  document.getElementById("personSelectStep").style.display = "none";
  document.getElementById("messageWriteStep").style.display = "block";
  document.getElementById("writerName").textContent = `Escribe como ${person} 💕`;
}

// 🔙 Volver atrás
function backToPersonSelect() {
  document.getElementById("personSelectStep").style.display = "block";
  document.getElementById("messageWriteStep").style.display = "none";
  document.getElementById("messageInput").value = "";
}

// Enviar mensaje
function submitMessage() {
  const messageText = document.getElementById("messageInput").value.trim();

  if (!messageText) {
    alert("Por favor escribe un mensaje 💕");
    return;
  }

  const timestamp = new Date().toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const newMessage = {
    author: currentPerson,
    text: messageText,
    date: timestamp
  };

  // Guardar mensaje en Firebase
  push(mensajesRef, newMessage);
  closeFormModal();
}

// Slot  de Mensajes
function loadMessages() {
  const wall = document.getElementById("messagesWall");

 onValue(mensajesRef, (snapshot) => {
  const data = snapshot.val();
  const wall = document.getElementById("messagesWall");

  if (!data) {
    wall.innerHTML = '<p style="color: #999; font-style: italic;">Aún no hay mensajes. ¡Sé el primero en escribir! 💕</p>';
    return;
  }

  // ✅ Orden correcto: los más antiguos primero
  const messages = Object.values(data).sort((a, b) => new Date(a.date) - new Date(b.date));

  wall.innerHTML = messages.map(msg => `
    <div class="message-card">
      <div class="message-author ${msg.author.toLowerCase()}">${msg.author} 💕</div>
      <div class="message-text">${msg.text}</div>
      <div class="message-date">${msg.date}</div>
    </div>
  `).join('');

  // ✅ Bajar el scroll automáticamente al último mensaje
  wall.scrollTop = wall.scrollHeight;

}, (error) => {
  console.error("Error loading messages:", error);
});

}

// 🪄 Iniciar cuando cargue la página
document.addEventListener("DOMContentLoaded", loadMessages);
// 🔓 Hacer funciones accesibles desde HTML
window.openMessageForm = openMessageForm;
window.closeFormModal = closeFormModal;
window.selectPerson = selectPerson;
window.backToPersonSelect = backToPersonSelect;
window.submitMessage = submitMessage;
window.showMessage = showMessage;
window.closeModal = closeModal;
window.createConfetti = createConfetti;
window.toggleMusic = toggleMusic;
// SUBIR IMAGENES

// ======= CONFIG =======
const cloudName = "dp8s3loak";
const uploadPreset = "imagenes_uploads";

// ======= ESTADO =======
const galleryItems = []; // { public_id, resource_type, original_filename, ... }
// Set con public_id ocultos (solo visual)
const hiddenIds = new Set(JSON.parse(localStorage.getItem("hiddenIds") || "[]"));
// tamaño miniaturas
let thumbSize = parseInt(localStorage.getItem("thumbSize") || "220", 10);

// ======= SELECTORES =======
const $fileInput = document.getElementById("fileInput");
const $uploadBtn = document.getElementById("uploadBtn");
const $status = document.getElementById("status");
const $gallery = document.getElementById("gallery");

// crea slider si no existe en tu HTML
let $sizeSlider = document.getElementById("sizeSlider");
if (!$sizeSlider) {
  $sizeSlider = document.createElement("input");
  $sizeSlider.type = "range";
  $sizeSlider.min = "120";
  $sizeSlider.max = "420";
  $sizeSlider.value = String(thumbSize);
  $sizeSlider.id = "sizeSlider";
  $sizeSlider.style.margin = "12px 0";
  // lo insertamos antes de la galería (ajústalo a tu layout)
  ($gallery?.parentElement || document.body).insertBefore($sizeSlider, $gallery);
}

// ======= HELPERS URL =======
const cldBase = (rt = "image") => `https://res.cloudinary.com/${cloudName}/${rt}/upload`;
const viewUrl = (publicId, rt) => `${cldBase(rt)}/f_auto,q_auto,c_fill,w_800/${publicId}`;
const downloadUrl = (publicId, rt, filename = "archivo") => {
  const ext = rt === "video" ? ".mp4" : ".jpg";
  return `${cldBase(rt)}/fl_attachment:${encodeURIComponent(filename + ext)}/${publicId}`;
};

// ======= SUBIDA =======
async function uploadToCloudinary(file) {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", uploadPreset);
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  const res = await fetch(endpoint, { method: "POST", body: form });
  if (!res.ok) throw new Error("Error subiendo a Cloudinary");
  return res.json();
}

// ======= PERSISTENCIA =======
function saveGallery() {
  try { localStorage.setItem("galleryItems", JSON.stringify(galleryItems)); } catch {}
}
function saveHidden() {
  try { localStorage.setItem("hiddenIds", JSON.stringify([...hiddenIds])); } catch {}
}
function saveThumbSize() {
  try { localStorage.setItem("thumbSize", String(thumbSize)); } catch {}
}
function restoreGallery() {
  const cached = localStorage.getItem("galleryItems");
  if (!cached) return;
  try {
    const parsed = JSON.parse(cached);
    if (Array.isArray(parsed)) galleryItems.splice(0, galleryItems.length, ...parsed);
  } catch {}
}

// ======= RENDER =======
function renderItem(info) {
  const { public_id, resource_type, original_filename } = info;
  const niceName = original_filename || public_id.split("/").pop();

  const $wrap = document.createElement("div");
  $wrap.className = "item";
  $wrap.style.setProperty("--thumb", `${thumbSize}px`);
  if (hiddenIds.has(public_id)) $wrap.classList.add("is-hidden"); // clase opcional

  // Media
  let $media;
  if (resource_type === "video") {
    $media = document.createElement("video");
    $media.src = viewUrl(public_id, "video");
    $media.controls = true;
    $media.playsInline = true;
    $media.preload = "metadata";
  } else {
    $media = document.createElement("img");
    $media.src = viewUrl(public_id, "image");
    $media.alt = niceName;
    $media.loading = "lazy";
  }
  $media.className = "item__media";

  // Cuerpo/acciones
  const $body = document.createElement("div");
  $body.className = "item__body";

  const $view = document.createElement("a");
  $view.href = viewUrl(public_id, resource_type);
  $view.target = "_blank";
  $view.rel = "noopener";
  $view.textContent = "Ver";

  const $download = document.createElement("a");
  $download.href = downloadUrl(public_id, resource_type, niceName);


  // Botón ocultar/mostrar (solo visual)
  const $toggle = document.createElement("button");
  $toggle.type = "button";
  const applyLabel = () => $toggle.textContent = hiddenIds.has(public_id) ? "Mostrar" : "Ocultar";
  applyLabel();
  $toggle.addEventListener("click", () => {
    if (hiddenIds.has(public_id)) hiddenIds.delete(public_id);
    else hiddenIds.add(public_id);
    saveHidden();
    renderGallery(); // re-render para aplicar filtro
  });

  $body.append($view, $download, $toggle);
  $wrap.append($media, $body);
  return $wrap;
}

function renderGallery() {
  // aplicamos tamaño global
  document.documentElement.style.setProperty("--thumb", `${thumbSize}px`);

  $gallery.innerHTML = "";
  for (const item of galleryItems) {
    // si está oculto, no lo pintamos (eliminación visual)
    if (hiddenIds.has(item.public_id)) continue;
    $gallery.prepend(renderItem(item));
  }
}

// ======= EVENTOS =======
document.addEventListener("DOMContentLoaded", () => {
  restoreGallery();
  renderGallery();
});

$sizeSlider.addEventListener("input", (e) => {
  thumbSize = parseInt(e.target.value, 10);
  saveThumbSize();
  renderGallery();
});

$uploadBtn.addEventListener("click", async () => {
  const files = Array.from($fileInput.files || []);
  if (!files.length) {
    $status.textContent = "Elige uno o más archivos.";
    return;
  }

  $uploadBtn.disabled = true;
  $status.textContent = "Subiendo...";

  try {
    for (const f of files) {
      const info = await uploadToCloudinary(f);

      const exists = galleryItems.some(it => it.public_id === info.public_id);
      if (!exists) {
        galleryItems.push({
          public_id: info.public_id,
          resource_type: info.resource_type,
          original_filename: info.original_filename
        });
      }

      saveGallery();
    }
    renderGallery();
    $status.textContent = "¡Listo!";
  } catch (err) {
    console.error(err);
    $status.textContent = "Error en la subida.";
  } finally {
    $uploadBtn.disabled = false;
  }
});
// 🎯 FUNCIONES ADICIONALES - NO SE MODIFICAN LAS TUYAS

// 💾 Guardar mensajes en localStorage (NUEVA)
function saveMessagesToLocalStorage() {
  const wall = document.getElementById('messagesWall');
  const messages = [];
  
  wall.querySelectorAll('.message-card').forEach(card => {
    messages.push({
      author: card.querySelector('.message-card-author').textContent,
      text: card.querySelector('.message-card-text').textContent,
      date: card.querySelector('.message-card-date').textContent
    });
  });
  
  try {
    localStorage.setItem('doriMessages', JSON.stringify(messages));
  } catch (e) {
    console.log('No se pudo guardar en localStorage');
  }
}

// 📂 Cargar mensajes desde localStorage (NUEVA)
function loadMessagesFromLocalStorage() {
  try {
    const stored = localStorage.getItem('doriMessages');
    if (stored) {
      const messages = JSON.parse(stored);
      const wall = document.getElementById('messagesWall');
      
      const emptyMsg = wall.querySelector('p');
      if (emptyMsg) emptyMsg.remove();
      
      messages.forEach(msg => {
        const card = document.createElement('div');
        card.className = 'message-card';
        card.innerHTML = `
          <div class="message-card-author">${msg.author}</div>
          <div class="message-card-text">${msg.text}</div>
          <div class="message-card-date">${msg.date}</div>
        `;
        wall.appendChild(card);
      });
    }
  } catch (e) {
    console.log('No se pudo cargar mensajes');
  }
}

// 📝 Hook para guardar al enviar mensaje (NUEVA)
const originalSubmitMessage = submitMessage;
window.submitMessage = function() {
  originalSubmitMessage.apply(this, arguments);
  setTimeout(() => saveMessagesToLocalStorage(), 100);
}

// 🎊 Efecto de confetti mejorado (ADICIONAL)
function addConfettiEffect() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes confetti-fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// 🌟 Crear estrellas con efecto de parpadeo suave (MEJORA)
function enhanceStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.style.animationDelay = (Math.random() * 3) + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';
  });
}

// 💓 Mejorar corazones flotantes (MEJORA)
function enhanceFloatingHearts() {
  const heartsContainer = document.getElementById('floatingHearts');
  if (heartsContainer.children.length > 20) {
    heartsContainer.innerHTML = '';
  }
}

// 🔔 Notificación visual cuando se envía mensaje (NUEVA)
function showMessageNotification() {
  const notification = document.createElement('div');
  notification.textContent = '✅ ¡Mensaje enviado con amor! 💕';
  notification.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #ff6b9d, #c06c84);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    z-index: 999;
    animation: slideUp 0.4s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Hook en submitMessage para mostrar notificación (NUEVA)
const originalClose = closeFormModal;
window.closeFormModal = function() {
  originalClose.apply(this, arguments);
  if (document.getElementById('messageWriteStep').style.display === 'none') {
    showMessageNotification();
  }
}

// 🎵 Mejora en el control de música (ADICIONAL)
function enhanceMusicControl() {
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic = document.getElementById('bgMusic');
  
  bgMusic.addEventListener('play', () => {
    musicBtn.style.opacity = '1';
  });
  
  bgMusic.addEventListener('pause', () => {
    musicBtn.style.opacity = '0.6';
  });
}

// 🖼️ Visor expandido mejorado de galería (NUEVA)
function enhanceGalleryViewer() {
  const gallery = document.getElementById('gallery');
  
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
      const viewer = document.createElement('div');
      viewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
      `;
      
      const media = e.target.cloneNode(true);
      media.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
      `;
      
      if (media.tagName === 'VIDEO') {
        media.controls = true;
      }
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '✕';
      closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 2001;
      `;
      
      closeBtn.addEventListener('click', () => viewer.remove());
      viewer.addEventListener('click', (e) => {
        if (e.target === viewer) viewer.remove();
      });
      
      viewer.appendChild(media);
      viewer.appendChild(closeBtn);
      document.body.appendChild(viewer);
    }
  });
}

// 📱 Detectar si es móvil (NUEVA)
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ⌨️ Atajos de teclado (NUEVA)
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // ESC para cerrar modales
    if (e.key === 'Escape') {
      document.getElementById('messageModal').style.display = 'none';
      document.getElementById('formModal').style.display = 'none';
    }
    
    // M para toggle música
    if (e.ctrlKey && e.key === 'm') {
      e.preventDefault();
      toggleMusic();
    }
  });
}

// 🚀 Inicialización de mejoras (NUEVA)
function initializeEnhancements() {
  addConfettiEffect();
  enhanceStars();
  enhanceMusicControl();
  enhanceGalleryViewer();
  setupKeyboardShortcuts();
  loadMessagesFromLocalStorage();
  
  if (isMobileDevice()) {
    document.body.style.fontSize = '16px'; // Prevenir zoom en móvil
  }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Esperar un poco para que se carguen las funciones originales
  setTimeout(initializeEnhancements, 500);
});