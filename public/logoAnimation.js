const {
  gsap: { set, timeline },
} = window;
document.addEventListener('keydown', (objEvent) => {
  if (objEvent.keyCode == 9) {
    //tab pressed
    console.log('tab pressed');
    objEvent.preventDefault(); // stops its action
  }
});
const shared = {
  duration: 0.075,
};

const AUDIO = {
  CLACK_ONE: new Audio('https://assets.codepen.io/605876/clack-one.mp3'),
  CLACK_TWO: new Audio('https://assets.codepen.io/605876/clack-two.mp3'),
  WARZONE: new Audio('https://assets.codepen.io/605876/dial-up-warzone.mp3'),
};

const CLICK_RATE = 0.65;

AUDIO.WARZONE.loop = true;
AUDIO.WARZONE.volume = 0.1;
AUDIO.CLACK_ONE.volume = AUDIO.CLACK_TWO.volume = 0.5;
AUDIO.CLACK_ONE.playbackRate = AUDIO.CLACK_TWO.playbackRate = CLICK_RATE;

AUDIO.WARZONE.muted = AUDIO.CLACK_ONE.muted = AUDIO.CLACK_TWO.muted = true;
const toggleAudio = () => {
  AUDIO.WARZONE.muted = AUDIO.CLACK_ONE.muted = AUDIO.CLACK_TWO.muted = !AUDIO
    .WARZONE.muted;
  if (!AUDIO.WARZONE.muted) AUDIO.WARZONE.play();
  else AUDIO.WARZONE.pause();
};

// document.querySelector('#volume').addEventListener('input', toggleAudio);

set('#original-code-block', { x: 25, y: 15, scale: 0 });
const CODEPEN = document.querySelector('.codepen');
try {
  const TL = timeline({
    yoyo: true,
    repeat: -1,
    onStart: () => {
      try {
        // We want to fire a code block here!
        const block = document
          .querySelector('#original-code-block')
          .cloneNode(true);
        // block.removeAttribute('id');
        CODEPEN.appendChild(block);
        set(block, {
          transformOrigin: '50% 50%',
          scale: 0,
          x: 30,
          '--hue': 'random(0, 360)',
          y: 'random(15, 30)',
          display: 'block',
        });

        timeline({
          onComplete: () => block.remove(),
        })
          .to(block, {
            x: 'random(-35, -5)',
            y: 'random(-30, 30)',
            scale: 'random(0.75, 1.5)',
            rotate: 'random(-15, 15)',
            duration: 'random(0.25, 1.25)',
          })
          .to(
            block,
            {
              opacity: 0,
            },

            '-=0.1'
          );
      } catch {
        console.log('yo yo');
      }
    },
  })
    .to('.bear__head', {
      yPercent: 3,
      ...shared,
    })
    .to(
      '.bear__bandana-tie',
      {
        transformOrigin: '0 0',
        rotate: -30,
        ...shared,
      },

      0
    )
    .to(
      '.bear__keyboard-arm',
      {
        transformOrigin: '85% 20%',
        rotate: 4,
        ...shared,
      },

      0
    )
    .to(
      '.ground',
      {
        '--alpha': 0.25,
        ...shared,
      },

      0
    )
    .to(
      '.bear__tank',
      {
        transformOrigin: '50% 100%',
        scaleY: 0.99,
        ...shared,
      },

      0
    );

  document.body.addEventListener('pointerdown', () => {
    // Need to also adjust the playbackRate
    TL.timeScale(0.1);
    AUDIO.WARZONE.playbackRate = AUDIO.CLACK_ONE.playbackRate = AUDIO.CLACK_TWO.playbackRate = 10;
  });
  document.body.addEventListener('pointerup', () => {
    TL.timeScale(1);
    AUDIO.WARZONE.playbackRate = 1;
    AUDIO.CLACK_ONE.playbackRate = AUDIO.CLACK_TWO.playbackRate = CLICK_RATE;
  });
} catch {
  console.log('not on home page');
}
