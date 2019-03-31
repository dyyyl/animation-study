import { TweenMax } from 'gsap';

TweenMax.set('#circle', { xPercent: -50, yPercent: -50 });

document.addEventListener('click', event => {
  const { x, y } = event;
  TweenMax.fromTo('#circle', 1, { x, y }, { x: 500, y: 500 });
});
