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
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
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
