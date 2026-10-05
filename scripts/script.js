document.getElementById('ano').textContent = new Date().getFullYear();
 
const words = ["interfaces rápidas", "APIs sólidas", "código legível", "produtos que funcionam"];
const el = document.getElementById('maquina-de-escrever');
let wordIndex = 0, charIndex = 0, deleting = false;
 
function type() {
  const current = words[wordIndex];
  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1400); return; }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();
 
// gera numeros de linha de fundo, estilo editor de codigo
const lineWrap = document.querySelector('.numeros-linha');
const total = Math.ceil(document.body.scrollHeight / 24) + 20;
for (let i = 1; i <= total; i++) {
  const s = document.createElement('span');
  s.textContent = i;
  lineWrap.appendChild(s);
}
 