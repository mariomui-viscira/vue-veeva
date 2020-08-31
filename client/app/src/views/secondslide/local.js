// import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('secondslide');
  const $h1 = document.createElement('h1');
  const $text = document.createTextNode('this is the the secondslide');
  $h1.appendChild($text);
  document.body.appendChild($h1);
});
