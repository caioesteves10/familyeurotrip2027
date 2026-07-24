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

export const PIN_HASH = {};

export const ADMIN_HASH = "";
