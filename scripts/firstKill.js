import { TweenMax } from 'gsap';

const divs = Array.from({ length: 100 }, () => document.createElement('div'));

divs.forEach(div => {
  TweenMax.set(div, {
    position: 'absolute',
    x: `${Math.random() * window.innerWidth - 30}px`,
    y: `${Math.random() * window.innerHeight - 30}px`,
    width: 20,
    height: 20,
    backgroundImage:
      'radial-gradient( circle 1043px at 94.6% 122.8%,  rgba(250,18,108,1) 0%, rgba(15,73,189,1) 90% )',
    border:
      '3px solid background-image: linear-gradient( 109.2deg,  rgba(148,84,167,1) 25.2%, rgba(197,51,100,1) 113.2% );',
  });

  document.body.appendChild(div);
});

TweenMax.to(divs, 25, { x: 500, y: 500 });

document.addEventListener('click', event => {
  const { x, y } = event;
  TweenMax.killTweensOf(event.target);
});
