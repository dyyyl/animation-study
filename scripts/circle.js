import { TweenMax } from 'gsap';

TweenMax.set('#circle', { xPercent: -50, yPercent: -50 });

document.addEventListener('click', event => {
  const { clientX, clientY } = event;
  TweenMax.to('#circle', 1, { x: clientX, y: clientY });
});
