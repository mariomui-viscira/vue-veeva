// require('./styles.scss');

document.addEventListener('DOMContentLoaded', () => {
  console.log('firstslide');
  const $h1 = document.createElement('h1');
  const $text = document.createTextNode('this is theddd the firstslide');
  $h1.appendChild($text);
  document.body.appendChild($h1);
});

console.log('i run vue here');
