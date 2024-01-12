import Header from './components/header/header.js';
import Hero from './components/hero/hero.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';

// const html = `<div>${studentName}</div>`
const html = `
  ${Header()}
  ${Hero()}
  ${Main()}
  ${Footer()}
  `
  const root = document.getElementById('App');
  root.innerHTML = html;
