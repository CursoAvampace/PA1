/* ---------------- GLOBAL ---------------- */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #fef4e8, #e3f6ff);
  color: #333;
  margin: 0;
  padding: 0;
}

/* ---------------- CABECERA CON EFECTO 3D MEJORADO ---------------- */
.header {
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee); /* Colores suaves 3D */
  text-align: center;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateX(8deg); /* Mayor efecto 3D */
  transform-style: preserve-3d;
}

.header .logo {
  font-size: 26px;
  font-weight: bold;
  color: white;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
}

/* ---------------- SECCIÓN DE CASOS ---------------- */
.cases {
  padding: 40px 20px;
  background: linear-gradient(135deg, #e0f7fa, #f1f8e9);
  text-align: center;
  /* Eliminamos el display flex aquí para evitar conflictos con el contenedor interno */
}

/* Contenedor de casos, alineación vertical y expandido */
#cases-container {
  display: flex;
  flex-direction: column;  /* Alinea verticalmente */
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: auto;
}

/* Estilo de cada caso, expandido para ocupar casi todo el ancho */
.case {
  background: white;
  padding: 20px;
  width: 95%;
  /* Eliminamos max-width para que se expanda en pantallas grandes */
  min-height: 550px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ---------------- ESTILO PARA VIDEOS ---------------- */
.case iframe {
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 10px;
  flex-grow: 1;
}

/* ---------------- SECCIÓN DE PREGUNTAS FRECUENTES ---------------- */
.faq {
  padding: 40px 20px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
}

.faq h2 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

.faq-item {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.faq-item:hover {
  transform: scale(1.03);
}

/* ---------------- HERO & TÍTULO ---------------- */
.hero {
  padding: 60px 20px;
  background: linear-gradient(135deg, #fff, #e6f7ff);
  text-align: center;
}

#hero-title {
  color: #222;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}

/* ---------------- RESPONSIVE ---------------- */
@media (max-width: 768px) {
  .hero h2 {
    font-size: 28px;
  }

  .case {
    width: 95%;
    min-height: auto;
  }
}
