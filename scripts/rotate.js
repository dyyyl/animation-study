import { TweenMax } from 'gsap';

TweenMax.set('#box', {
  backgroundImage:
    'radial-gradient( circle 1043px at 94.6% 122.8%,  rgba(250,18,108,1) 0%, rgba(15,73,189,1) 90% )',
  width: '70px',
  height: '70px',
  x: '300rem',
  y: '300rem',
});

document.addEventListener('click', () => {
  TweenMax.to('#box', 0.5, {
    rotation: '+=90',
  });
});
