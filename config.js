/* =====================================================
   CONFIGURACOES DO APP DA VIAGEM
   Este e o UNICO arquivo que voce edita.
   Quando receber um index.html novo, so troque o index.html
   e deixe este arquivo aqui do jeito que esta.
   ===================================================== */


/* 1) FIREBASE ---------------------------------------------------
   Onde achar: console.firebase.google.com -> engrenagem no topo do
   menu da esquerda -> Configuracoes do projeto -> aba Geral ->
   role ate o fim -> Seus apps -> App da Web.
   Copie SO o conteudo entre as chaves { } e cole abaixo.
   A apiKey sempre comeca com AIza.                              */

export const firebaseConfig = {
  apiKey: "AIzaSyC0RJcXiE7pSZozHMHvA88-7PrJKg2qpmM",
  authDomain: "familyeurotrip2027.firebaseapp.com",
  projectId: "familyeurotrip2027",
  storageBucket: "familyeurotrip2027.firebasestorage.app",
  messagingSenderId: "969485059887",
  appId: "1:969485059887:web:ffcf19de40fd29eba7c3da"
};


/* 2) APP CHECK --------------------------------------------------
   Deixe "" enquanto nao configurar o reCAPTCHA v3.              */

export const APPCHECK_KEY = "";


/* 3) SENHAS -----------------------------------------------------
   Gere no arquivo gerar-senhas.html e cole o resultado aqui.
   Enquanto as duas linhas abaixo ficarem vazias, valem as senhas
   de teste: Caio 1010, Be 2020, Ronaldo 3030, Shirlei 4040,
   e admin 2027.                                                 */

export const PIN_HASH = {
  "Caio":"pbkdf2$150000$501db24f8d6dbf0d25036f1955e032f6$56f066aa03b3d34d40387d30c995d60ce7bdc0f3fea270039c4a2dc3a00248cc",
  "Bê":"pbkdf2$150000$30fbfb00bb2aa20207e171da7d0210d2$d0a78e434b338302a0cf5b2b9c2e7a1e0a67ff8881d2be8ced01056c1a40ee39",
  "Ronaldo":"pbkdf2$150000$2d03c58a744fbe6d6f2505959300e474$3e5f9eedbfb97a05005cf7487cabe3d254364d701c82b160e16f50f92bbc1019",
  "Shirlei":"pbkdf2$150000$8bcb08419ddf2bca71bf262940b40854$3c294f7ba08837d8ea8e29601cbff034148b8d794e1a301e77a80bf110d1a942"
};

export const ADMIN_HASH = "pbkdf2$150000$8e9c909954f51a1a0d7b27649672ab67$25b729b18f80ba6ec7829492e3c847e72e140e38932504fc1a729918c76c0a43";
