    
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

// ✅ Importar módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// 🔑 Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNwIE4X9No1XNSdYetWHDeUJCkX5VT5Rs",
  authDomain: "para-dori-3dcd9.firebaseapp.com",
  databaseURL: "https://para-dori-3dcd9-default-rtdb.firebaseio.com",
  projectId: "para-dori-3dcd9",
  storageBucket: "para-dori-3dcd9.appspot.com", // ✅ corregido
  messagingSenderId: "790705295029",
  appId: "1:790705295029:web:a4accf0735640deca6b8fc"
};

// 🚀 Inicializar Firebase
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

// ✉️ Enviar mensaje
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

  // 🩵 Guardar mensaje en Firebase
  push(mensajesRef, newMessage)
    .then(() => {
      closeFormModal();
    })
    .catch((error) => {
      console.error("Error al guardar el mensaje:", error);
      alert("Error al guardar el mensaje. Intenta de nuevo.");
    });
}

// 💬 Cargar mensajes
function loadMessages() {
  const wall = document.getElementById("messagesWall");

  onValue(
    mensajesRef,
    (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        wall.innerHTML =
          '<p style="color: #999; font-style: italic;">Aún no hay mensajes. ¡Sé el primero en escribir! 💕</p>';
        return;
      }

      const messages = Object.values(data).sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      wall.innerHTML = messages
        .map(
          (msg) => `
        <div class="message-card">
          <div class="message-author ${msg.author.toLowerCase()}">${msg.author} 💕</div>
          <div class="message-text">${msg.text}</div>
          <div class="message-date">${msg.date}</div>
        </div>
      `
        )
        .join("");
    },
    (error) => {
      console.error("Error loading messages:", error);
    }
  );
}

// 🪄 Iniciar cuando cargue la página
document.addEventListener("DOMContentLoaded", loadMessages);
