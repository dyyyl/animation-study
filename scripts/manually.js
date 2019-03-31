import { TimelineMax, TweenMax } from 'gsap';

TweenMax.set('#box', {
  backgroundImage:
    'radial-gradient( circle 1043px at 94.6% 122.8%,  rgba(250,18,108,1) 0%, rgba(15,73,189,1) 90% )',
  width: '70px',
  height: '70px',
  x: '200rem',
  y: '400rem',
});

const timeline = new TimelineMax({ repeat: -1 });

timeline.pause();

timeline.to('#box', 0.5, { x: 500 });
timeline.to('#box', 0.5, { y: 500 });
timeline.to('#box', 0.5, { x: 200 });
timeline.to('#box', 0.5, { y: 400 });

document.querySelector('#box').addEventListener('click', () => {
  timeline.isActive() ? timeline.pause() : timeline.resume();
});

document.addEventListener('wheel', event => {
  event.wheelDelta > 0
    ? TweenMax.to(timeline, 0.25, { progress: '+=0.08' })
    : TweenMax.to(timeline, 0.25, { progress: '-=0.08' });
});
