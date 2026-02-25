// Array de 20 fases fixas
const fixedLevels = [
  // Fase 1 totalmente livre: apenas chão e bandeira
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
    ],
    coinItems: [],
    powerups: [],
    enemies: [],
    skyCannons: [],
    spikePistons: [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 2
  },
  // Fase 2
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 800, y: 420, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 900, y: 390 }],
    powerups: [],
    enemies: [],
    skyCannons: [],
    spikePistons: [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 3
  },
  // Fase 3
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1200, y: 400, w: 200, h: 20, type: 'platform' },
      { x: 2000, y: 350, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1250, y: 370 }, { x: 2050, y: 320 }],
    powerups: [],
    enemies: [],
    skyCannons: [],
    spikePistons: [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 4
  },
  // Fase 4 - Obstáculos e cenário dia
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1000, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 1800, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2600, y: 300, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1100, y: 390 }, { x: 1900, y: 320 }, { x: 2700, y: 270 }],
    powerups: [],
    enemies: [{ x: 1200, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 2000, y: 500, direction: 'up' }],
    spikePistons: [{ x: 2500, y: 500, w: 60, h: 40 }],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 5,
    theme: 'day',
  },
  // Fase 5 - Obstáculos e cenário noite
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 900, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 1700, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2500, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3200, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1000, y: 390 }, { x: 1800, y: 320 }, { x: 2600, y: 270 }, { x: 3300, y: 220 }],
    powerups: [],
    enemies: [{ x: 1200, y: 470, type: 'goomba' }, { x: 2000, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 2200, y: 500, direction: 'up' }],
    spikePistons: [{ x: 3200, y: 500, w: 60, h: 40 }],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 6,
    theme: 'night',
  },
  // Fase 6 - Obstáculos e cenário neve
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 800, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 1600, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2400, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3200, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 900, y: 390 }, { x: 1700, y: 320 }, { x: 2500, y: 270 }, { x: 3300, y: 220 }],
    powerups: [{ x: 1700, y: 320, type: 'mushroom' }],
    enemies: [{ x: 1200, y: 470, type: 'goomba' }, { x: 2000, y: 470, type: 'goomba' }, { x: 2800, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 1600, y: 500, direction: 'up' }],
    spikePistons: [{ x: 2400, y: 500, w: 60, h: 40 }],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 7,
    theme: 'snow',
  },
  // Fase 7 - Obstáculos e cenário deserto
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1000, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 1800, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2600, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3400, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1100, y: 390 }, { x: 1900, y: 320 }, { x: 2700, y: 270 }, { x: 3500, y: 220 }],
    powerups: [{ x: 1900, y: 320, type: 'mushroom' }],
    enemies: [{ x: 1200, y: 470, type: 'goomba' }, { x: 2000, y: 470, type: 'goomba' }, { x: 2800, y: 470, type: 'goomba' }, { x: 3600, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 3400, y: 500, direction: 'up' }],
    spikePistons: [{ x: 1800, y: 500, w: 60, h: 40 }],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 8,
    theme: 'desert',
  },
  // Fase 8
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1200, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 2000, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2800, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3600, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1300, y: 390 }, { x: 2100, y: 320 }, { x: 2900, y: 270 }, { x: 3700, y: 220 }],
    powerups: [{ x: 2100, y: 320, type: 'mushroom' }],
    enemies: [{ x: 1400, y: 470, type: 'goomba' }, { x: 2200, y: 470, type: 'goomba' }, { x: 3000, y: 470, type: 'goomba' }, { x: 3800, y: 470, type: 'goomba' }],
    skyCannons: [],
    spikePistons: [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 9
  },
  // Fase 9
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1000, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 1800, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2600, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3400, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1100, y: 390 }, { x: 1900, y: 320 }, { x: 2700, y: 270 }, { x: 3500, y: 220 }],
    powerups: [{ x: 1900, y: 320, type: 'mushroom' }],
    enemies: [{ x: 1200, y: 470, type: 'goomba' }, { x: 2000, y: 470, type: 'goomba' }, { x: 2800, y: 470, type: 'goomba' }, { x: 3600, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 2000, y: 500, direction: 'up' }],
    spikePistons: [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 10
  },
  // Fase 10
  {
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1200, y: 420, w: 200, h: 20, type: 'platform' },
      { x: 2000, y: 350, w: 200, h: 20, type: 'platform' },
      { x: 2800, y: 300, w: 200, h: 20, type: 'platform' },
      { x: 3600, y: 250, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [{ x: 1300, y: 390 }, { x: 2100, y: 320 }, { x: 2900, y: 270 }, { x: 3700, y: 220 }],
    powerups: [{ x: 2100, y: 320, type: 'mushroom' }],
    enemies: [{ x: 1400, y: 470, type: 'goomba' }, { x: 2200, y: 470, type: 'goomba' }, { x: 3000, y: 470, type: 'goomba' }, { x: 3800, y: 470, type: 'goomba' }],
    skyCannons: [{ x: 2200, y: 500, direction: 'up' }],
    spikePistons: [{ x: 2500, y: 500, w: 60, h: 40 }],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 11
  },
  // Fase 11 a 20 (cópias variadas)
  ...Array.from({ length: 10 }, (_, i) => ({
    worldWidth: 4000,
    spawn: { x: 80, y: 430 },
    platforms: [
      { x: 0, y: 500, w: 4000, h: 40, type: 'ground' },
      { x: 1000 + i * 200, y: 420 - i * 10, w: 200, h: 20, type: 'platform' },
      { x: 1800 + i * 100, y: 350 - i * 10, w: 200, h: 20, type: 'platform' },
      { x: 2600 + i * 50, y: 300 - i * 10, w: 200, h: 20, type: 'platform' },
    ],
    coinItems: [
      { x: 1100 + i * 200, y: 390 - i * 10 },
      { x: 1900 + i * 100, y: 320 - i * 10 },
      { x: 2700 + i * 50, y: 270 - i * 10 },
    ],
    powerups: [{ x: 1900 + i * 100, y: 320 - i * 10, type: 'mushroom' }],
    enemies: [
      { x: 1200 + i * 100, y: 470, type: 'goomba' },
      { x: 2000 + i * 100, y: 470, type: 'goomba' },
      { x: 2800 + i * 100, y: 470, type: 'goomba' },
    ],
    skyCannons: i % 2 === 0 ? [{ x: 2000 + i * 100, y: 500, direction: 'up' }] : [],
    spikePistons: i % 3 === 0 ? [{ x: 2500 + i * 50, y: 500, w: 60, h: 40 }] : [],
    flag: { x: 3800, y: 460, w: 20, h: 80 },
    nextLevel: 12 + i
  })),
];
// --- SUPORTE GAMEPAD ---
let gamepadIndex = null;
function pollGamepad() {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = gamepadIndex !== null ? gamepads[gamepadIndex] : null;
  if (gp) {
    // Eixos: 0 = esquerda/direita, 1 = cima/baixo
    const axisX = gp.axes[0] || 0;
    keys.left = axisX < -0.3;
    keys.right = axisX > 0.3;
    // Botões: 0 = A (pular), 1 = B (atirar), 2 = X, 3 = Y
    const jumpPressed = gp.buttons[0]?.pressed;
    if (jumpPressed && !keys.jump) keys.jumpPressed = true;
    keys.jump = !!jumpPressed;
    keys.fire = !!gp.buttons[1]?.pressed;
  }
  requestAnimationFrame(pollGamepad);
}

window.addEventListener('gamepadconnected', (e) => {
  gamepadIndex = e.gamepad.index;
  pollGamepad();
  // Oculta todos os botões mobile
  hideMobileButtons();
});
window.addEventListener('gamepaddisconnected', (e) => {
  if (gamepadIndex === e.gamepad.index) gamepadIndex = null;
  // Mostra todos os botões mobile novamente
  showMobileButtons();
// Funções para ocultar e mostrar botões mobile
function hideMobileButtons() {
  if (ui && ui.mobileLeft) ui.mobileLeft.style.display = 'none';
  if (ui && ui.mobileRight) ui.mobileRight.style.display = 'none';
  if (ui && ui.mobileJump) ui.mobileJump.style.display = 'none';
  if (ui && ui.mobileFire) ui.mobileFire.style.display = 'none';
  if (ui && ui.mobileReturn) ui.mobileReturn.style.display = 'none';
  if (ui && ui.mobileSettings) ui.mobileSettings.style.display = 'none';
  if (ui && ui.mobileStart) ui.mobileStart.style.display = 'none';
  if (ui && ui.mobileScale) ui.mobileScale.style.display = 'none';
}

function showMobileButtons() {
  if (ui && ui.mobileLeft) ui.mobileLeft.style.display = '';
  if (ui && ui.mobileRight) ui.mobileRight.style.display = '';
  if (ui && ui.mobileJump) ui.mobileJump.style.display = '';
  if (ui && ui.mobileFire) ui.mobileFire.style.display = '';
  if (ui && ui.mobileReturn) ui.mobileReturn.style.display = '';
  if (ui && ui.mobileSettings) ui.mobileSettings.style.display = '';
  if (ui && ui.mobileStart) ui.mobileStart.style.display = '';
  if (ui && ui.mobileScale) ui.mobileScale.style.display = '';
}
});
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

let audioCtx = null;
let audioUnlocked = false;
let ambientReady = false;
let ambientGain = null;
let audioEnabled = true;
let masterVolume = 1;
let musicNextNoteTime = 0;
let musicStep = 0;

const MUSIC_STEP_SECONDS = 0.14;
const AMBIENT_BASS_PATTERN = [130.81, 130.81, 164.81, 130.81, 196.0, 164.81, 146.83, 164.81];
const AMBIENT_LEAD_PATTERN = [
  null,
  261.63,
  329.63,
  392.0,
  329.63,
  293.66,
  261.63,
  246.94,
  null,
  293.66,
  369.99,
  440.0,
  369.99,
  329.63,
  293.66,
  261.63,
];

const PIXEL = 2;

const PLAYER_SPRITES = {
  idle: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbyyybbb....',
    '..yyyy..yyyy....',
    '..yyyy..yyyy....',
    '.yyyyy..yyyyy...',
    '................',
  ],
  walkA: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbyyybbb....',
    '..yyyy...yyyy...',
    '.yyyy.....yyyy..',
    'yyyy.......yyyy.',
    '................',
  ],
  walkB: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbyyybbb....',
    '...yyyy...yyyy..',
    '..yyyy.....yyyy.',
    '.yyyy.......yyyy',
    '................',
  ],
  walkC: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbyyybbb....',
    '.yyyyy..yyyy....',
    '...yyyy..yyyy...',
    '..yyyy....yyyy..',
    '................',
  ],
  skid: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbbyyyb.....',
    '..yyyyyyyyyy....',
    '.yyy......yyy...',
    'yyyy......yyyy..',
    '................',
  ],
  jump: [
    '.....rrrrrr.....',
    '....rRRRRRRr....',
    '...rrrwwwwrr....',
    '...rwkwwwkwr....',
    '...rwkkkkkwr....',
    '...rwwkwwwwr....',
    '...rrwwwwrrr....',
    '....bbbbbbbb....',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbBBBBbbb...',
    '...bbbyyybbb....',
    '....yyyyyyyy....',
    '....yyyyyyyy....',
    '.....yyyyyy.....',
    '................',
  ],
};

const ENEMY_SPRITE = [
  '..............',
  '....mmmmmm....',
  '..mmmmmmmmmm..',
  '.mmmmmMMmmmmm.',
  '.mmkmmmmmmkmm.',
  '.mmmmmmmmmmmm.',
  '.mmmwmmmmwmmm.',
  '..mmmmmmmmmm..',
  '..mmmddddmmm..',
  '.dddd....dddd.',
  '.ddd......ddd.',
  '..............',
];

const RUNNER_SPRITE = [
  '..............',
  '....mmmmmm....',
  '..mmmmmmmmmm..',
  '.mmmmmMMmmmmm.',
  '.mmkmmmmmmkmm.',
  '.mmmmmmmmmmmm.',
  '.mmmwmmmmwmmm.',
  '..mmmmmmmmmm..',
  '..mmmddddmmm..',
  '.ddd......ddd.',
  '.dd........dd.',
  '..............',
];

const HOPPER_SPRITE = [
  '..............',
  '....mmmmmm....',
  '..mmmmmmmmmm..',
  '.mmmMMmmMMmmm.',
  '.mmkmmmmmmkmm.',
  '.mmmmmmmmmmmm.',
  '..mmmmmmmmmm..',
  '..mmmwmmwmmm..',
  '.mmmddddddmmm.',
  '.dd........dd.',
  '.d..........d.',
  '..............',
];

const COIN_SPRITE = [
  '..yyyy..',
  '.yYYYYy.',
  'yYYyyYYy',
  'yYyyyyYy',
  'yYyyyyYy',
  'yYYyyYYy',
  '.yYYYYy.',
  '..yyyy..',
];

const FLAG_SPRITE = [
  'rrrrrrrrrr',
  'rRRRRRRRrr',
  'rrrrRRRRrr',
  'rrrRRRRRrr',
  'rrrrRRRRrr',
  'rrrrrrrrrr',
];

const FIREBALL_SPRITE = [
  '.ooOOoo.',
  'oOORROOo',
  'oORYYROo',
  'OORYYRRO',
  'oORYYROo',
  'oOORROOo',
  '.ooOOoo.',
  '........',
];

const PLAYER_FIREBALL_SPRITE = [
  '.bbBBbb.',
  'bBBwwBBb',
  'bBwYYwBb',
  'BBwYYwBB',
  'bBwYYwBb',
  'bBBwwBBb',
  '.bbBBbb.',
  '........',
];

const MUSHROOM_SPRITE = [
  '...rrrrrr...',
  '..rRRRRRRr..',
  '.rRRRRRRRRr.',
  '.rRRRRRRRRr.',
  '..wwwwwwww..',
  '..wwkwwkww..',
  '..wwwwwwww..',
  '..www..www..',
];

const FLOWER_SPRITE = [
  '....yyyy....',
  '...yYYYYy...',
  '..yYYwwYYy..',
  '..yYwYYwYy..',
  '..yYYwwYYy..',
  '...yYYYYy...',
  '....gggg....',
  '....gGGg....',
];

const PALETTE = {
  r: '#b91c1c',
  R: '#ef4444',
  s: '#f59e0b',
  k: '#111827',
  p: '#fca5a5',
  b: '#1d4ed8',
  B: '#2563eb',
  y: '#facc15',
  Y: '#fde047',
  o: '#f97316',
  O: '#ea580c',
  m: '#7c2d12',
  M: '#92400e',
  w: '#f8fafc',
  d: '#292524',
  g: '#16a34a',
  G: '#15803d',
};

const ui = {
  coins: document.getElementById('coins'),
  coinsTotal: document.getElementById('coinsTotal'),
  lives: document.getElementById('lives'),
  time: document.getElementById('time'),
  status: document.getElementById('status'),
  restartBtn: document.getElementById('restartBtn'),
  soundToggle: document.getElementById('soundToggle'),
  volumeSlider: document.getElementById('volumeSlider'),
  volumeValue: document.getElementById('volumeValue'),
  mobileLeft: document.getElementById('mobileLeft'),
  mobileRight: document.getElementById('mobileRight'),
  mobileReturn: document.getElementById('mobileReturn'),
  mobileJump: document.getElementById('mobileJump'),
  mobileFire: document.getElementById('mobileFire'),
  mobileSettings: document.getElementById('mobileSettings'),
  mobileSetup: document.getElementById('mobileSetup'),
  mobileStart: document.getElementById('mobileStart'),
  mobileScale: document.getElementById('mobileScale'),
  mobileScaleValue: document.getElementById('mobileScaleValue'),
  orientationHint: document.getElementById('orientationHint'),
  desktopOnlyNotice: document.getElementById('desktopOnlyNotice'),
};

const WORLD = {
  width: 4200,
  height: 540,
  gravity: 0.85,
  maxFall: 18,
};

const FIRE_MODES = [
  { name: 'normal', speed: 5.6, steer: 0.02, gravity: 0.06, intervalMul: 1 },
  { name: 'buscadora', speed: 6.2, steer: 0.09, gravity: 0.02, intervalMul: 0.88 },
  { name: 'insana', speed: 7.1, steer: 0.15, gravity: 0.01, intervalMul: 0.72 },
];

const TOTAL_LEVELS = 23;

const keys = {
  left: false,
  right: false,
  jump: false,
  jumpPressed: false,
  fire: false,
};

let gameState;
let lastTime = performance.now();
let mobileSetupOpen = false;

const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

function applyMobileScale(percent) {
  const value = Math.max(85, Math.min(130, Number(percent) || 100));
  document.documentElement.style.setProperty('--mobile-game-scale', String(value / 100));
  if (ui.mobileScale) ui.mobileScale.value = String(value);
  if (ui.mobileScaleValue) ui.mobileScaleValue.textContent = `${value}%`;
}

function isLandscapeNow() {
  return window.innerWidth > window.innerHeight;
}

function refreshMobileOrientationHint() {
  if (!ui.orientationHint || !ui.mobileStart) return;
  const landscape = isLandscapeNow();
  ui.orientationHint.textContent = landscape
    ? 'Perfeito! Tela em paisagem detectada.'
    : 'Gire o celular para o modo paisagem para jogar melhor.';
  ui.mobileStart.disabled = !landscape;
}

function openMobileSetup() {
  if (!isTouchDevice || !ui.mobileSetup) return;
  ui.mobileSetup.hidden = false;
  mobileSetupOpen = true;
  refreshMobileOrientationHint();
}

function closeMobileSetup() {
  if (!ui.mobileSetup) return;
  ui.mobileSetup.hidden = true;
  mobileSetupOpen = false;
}

async function tryLockLandscapeOrientation() {
  const orientationApi = screen.orientation;
  if (!orientationApi || typeof orientationApi.lock !== 'function') return false;
  try {
    await orientationApi.lock('landscape');
    return true;
  } catch (_) {
    return false;
  }
}

async function enableMobileImmersiveMode() {
  if (!isTouchDevice) return;

  if (document.fullscreenElement == null && document.documentElement.requestFullscreen) {
    try {
      await document.documentElement.requestFullscreen();
    } catch (_) {}
  }

  await tryLockLandscapeOrientation();
}

function blockDesktopExperience() {
  document.body.classList.add('desktop-locked');
  if (ui.desktopOnlyNotice) {
    ui.desktopOnlyNotice.hidden = false;
  }
  if (ui.status) {
    ui.status.textContent = 'Somente celular';
  }
}

function ensureAudioRunning() {
  if (!audioCtx) return;
  if (audioCtx.state !== 'running') {
    audioCtx.resume().catch(() => {});
  }
}

function unlockAudio() {
  if (audioUnlocked) {
    ensureAudioRunning();
    ensureAmbientAudio();
    return;
  }
  const AudioContextRef = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextRef) return;
  audioCtx = new AudioContextRef();
  ensureAudioRunning();
  audioUnlocked = true;
  ensureAmbientAudio();
}

function ensureAmbientAudio() {
  if (!audioUnlocked || !audioCtx || ambientReady) return;

  ambientGain = audioCtx.createGain();
  ambientGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  ambientGain.connect(audioCtx.destination);

  musicNextNoteTime = audioCtx.currentTime + 0.06;
  musicStep = 0;
  ambientReady = true;
}

function playAmbientNote(freq, duration, startTime, type = 'square', volume = 0.08) {
  ensureAudioRunning();
  if (!audioUnlocked || !audioCtx || !ambientGain || !audioEnabled || !freq) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.995), startTime + duration);

  const adjustedVolume = Math.max(0.0001, volume * masterVolume);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(adjustedVolume, startTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ambientGain);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.01);
}

function scheduleAmbientMusic(now) {
  const horizon = now + 0.35;
  while (musicNextNoteTime < horizon) {
    const bassFreq = AMBIENT_BASS_PATTERN[musicStep % AMBIENT_BASS_PATTERN.length];
    const leadFreq = AMBIENT_LEAD_PATTERN[musicStep % AMBIENT_LEAD_PATTERN.length];

    playAmbientNote(bassFreq, MUSIC_STEP_SECONDS * 0.95, musicNextNoteTime, 'triangle', 0.1);
    if (leadFreq) {
      playAmbientNote(leadFreq, MUSIC_STEP_SECONDS * 0.72, musicNextNoteTime, 'square', 0.06);
    }

    musicStep += 1;
    musicNextNoteTime += MUSIC_STEP_SECONDS;
  }
}

function updateAmbientAudio() {
  if (!audioUnlocked || !audioCtx) return;
  ensureAmbientAudio();
  if (!ambientReady || !ambientGain) return;

  const now = audioCtx.currentTime;
  const isPlaying = gameState && gameState.status === 'playing';
  const targetGain = audioEnabled ? (isPlaying ? 0.22 : 0.015) * masterVolume : 0.0001;

  ambientGain.gain.cancelScheduledValues(now);
  ambientGain.gain.setTargetAtTime(targetGain, now, 0.18);

  if (isPlaying && audioEnabled) {
    scheduleAmbientMusic(now);
  } else {
    musicNextNoteTime = now + 0.06;
  }
}

function playTone(startHz, endHz, duration = 0.08, type = 'square', volume = 0.04) {
  ensureAudioRunning();
  if (!audioUnlocked || !audioCtx || !audioEnabled) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(startHz, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, endHz), now + duration);

  gain.gain.setValueAtTime(0.0001, now);
  const adjustedVolume = Math.max(0.0001, volume * 1.8 * masterVolume);
  gain.gain.exponentialRampToValueAtTime(adjustedVolume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.01);
}

function sfx(name) {
  if (name === 'jump') {
    playTone(250, 430, 0.05, 'square', 0.055);
    setTimeout(() => playTone(380, 560, 0.055, 'square', 0.05), 28);
  } else if (name === 'coin') {
    playTone(988, 1175, 0.055, 'square', 0.065);
    setTimeout(() => playTone(1175, 1480, 0.05, 'square', 0.06), 40);
    setTimeout(() => playTone(1480, 1976, 0.06, 'square', 0.06), 76);
  } else if (name === 'stomp') {
    playTone(180, 110, 0.08, 'sawtooth', 0.05);
  } else if (name === 'hurt') {
    playTone(320, 95, 0.16, 'triangle', 0.05);
    setTimeout(() => playTone(780, 310, 0.13, 'sawtooth', 0.06), 16);
    setTimeout(() => playTone(620, 220, 0.13, 'sawtooth', 0.05), 52);
  } else if (name === 'win') {
    playTone(520, 760, 0.09, 'square', 0.04);
    setTimeout(() => playTone(760, 980, 0.09, 'square', 0.035), 95);
    setTimeout(() => playTone(980, 1310, 0.11, 'square', 0.04), 190);
  } else if (name === 'fire') {
    playTone(240, 150, 0.06, 'sawtooth', 0.04);
  }
}

function createLevel(levelNumber) {
  const groundY = 470;

  if (levelNumber === 3) {
    const worldWidth = 6000;
    const platforms = [
      { x: 0, y: 500, w: 820, h: 40, type: 'ground' },
      { x: 980, y: 500, w: 1140, h: 40, type: 'ground' },
      { x: 2290, y: 500, w: 1190, h: 40, type: 'ground' },
      { x: 3650, y: 500, w: 1210, h: 40, type: 'ground' },
      { x: 5030, y: 500, w: 970, h: 40, type: 'ground' },
      { x: 470, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 560, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 650, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 1120, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 1210, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 1300, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 3200, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 3290, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 3380, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 4580, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 4670, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 4760, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 220, y: 440, w: 120, h: 20, type: 'brick' },
      { x: 420, y: 410, w: 130, h: 20, type: 'brick' },
      { x: 640, y: 380, w: 140, h: 20, type: 'brick' },
      { x: 900, y: 350, w: 120, h: 20, type: 'brick' },
      { x: 1140, y: 390, w: 130, h: 20, type: 'brick' },
      { x: 1380, y: 360, w: 130, h: 20, type: 'brick' },
      { x: 1650, y: 330, w: 140, h: 20, type: 'brick' },
      { x: 1920, y: 400, w: 120, h: 20, type: 'brick' },
      { x: 2170, y: 370, w: 130, h: 20, type: 'brick' },
      { x: 2440, y: 340, w: 140, h: 20, type: 'brick' },
      { x: 2710, y: 410, w: 130, h: 20, type: 'brick' },
      { x: 2970, y: 380, w: 140, h: 20, type: 'brick' },
      { x: 3250, y: 350, w: 140, h: 20, type: 'brick' },
      { x: 3530, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 3780, y: 390, w: 140, h: 20, type: 'brick' },
      { x: 4060, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 4340, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 4590, y: 390, w: 130, h: 20, type: 'brick' },
      { x: 4860, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 5140, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 5400, y: 390, w: 140, h: 20, type: 'brick' },
      { x: 5680, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 760, y: 270, w: 90, h: 20, type: 'brick' },
      { x: 2320, y: 260, w: 100, h: 20, type: 'brick' },
      { x: 4020, y: 255, w: 100, h: 20, type: 'brick' },
      { x: 5480, y: 250, w: 100, h: 20, type: 'brick' },
    ];

    const coinItems = [
      { x: 250, y: 390, r: 10, collected: false },
      { x: 460, y: 330, r: 10, collected: false },
      { x: 690, y: 270, r: 10, collected: false },
      { x: 980, y: 310, r: 10, collected: false },
      { x: 1230, y: 240, r: 10, collected: false },
      { x: 1500, y: 180, r: 10, collected: false },
      { x: 1810, y: 300, r: 10, collected: false },
      { x: 2090, y: 240, r: 10, collected: false },
      { x: 2370, y: 180, r: 10, collected: false },
      { x: 2650, y: 300, r: 10, collected: false },
      { x: 2910, y: 240, r: 10, collected: false },
      { x: 3210, y: 180, r: 10, collected: false },
      { x: 3510, y: 300, r: 10, collected: false },
      { x: 3760, y: 240, r: 10, collected: false },
      { x: 4030, y: 180, r: 10, collected: false },
      { x: 4310, y: 300, r: 10, collected: false },
      { x: 4570, y: 240, r: 10, collected: false },
      { x: 4850, y: 180, r: 10, collected: false },
      { x: 5150, y: 300, r: 10, collected: false },
      { x: 5410, y: 240, r: 10, collected: false },
      { x: 5690, y: 180, r: 10, collected: false },
    ];

    const powerups = [
      { type: 'mushroom', x: 1620, y: 304, w: 26, h: 26, collected: false },
      { type: 'flower', x: 4280, y: 334, w: 26, h: 26, collected: false },
    ];

    const enemies = [
      { type: 'patrol', x: 1080, y: groundY - 30, w: 30, h: 30, vx: 3.4, minX: 1010, maxX: 1240, alive: true },
      { type: 'chaser', x: 1760, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.4, aggroRange: 340, minX: 1620, maxX: 1940 },
      { type: 'hopper', x: 2620, y: groundY - 30, w: 30, h: 30, vx: 3.1, minX: 2480, maxX: 2800, alive: true, jumpPower: 10.8 },
      { type: 'chaser', x: 3460, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.8, aggroRange: 360, minX: 3320, maxX: 3620 },
      { type: 'runner', x: 4300, y: groundY - 30, w: 30, h: 30, vx: 4.1, minX: 4160, maxX: 4480, alive: true },
      { type: 'chaser', x: 5220, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 5.0, aggroRange: 390, minX: 5060, maxX: 5400 },
    ];

    const skyCannons = [
      { x: 1080, y: 34, shootInterval: 1.45, cooldown: 0.9 },
      { x: 2040, y: 34, shootInterval: 1.3, cooldown: 1.0 },
      { x: 3060, y: 34, shootInterval: 1.2, cooldown: 0.95 },
      { x: 4080, y: 34, shootInterval: 1.1, cooldown: 0.9 },
      { x: 5120, y: 34, shootInterval: 1.0, cooldown: 1.05 },
    ];

    const spikePistons = [
      { x: 760, w: 70, topStartY: -120, topRange: 210, topH: 120, bottomStartY: 500, bottomRange: 190, bottomH: 120, speed: 1.65, phase: 0.2 },
      { x: 1360, w: 72, topStartY: -120, topRange: 220, topH: 120, bottomStartY: 500, bottomRange: 200, bottomH: 120, speed: 1.78, phase: 1.1 },
      { x: 2220, w: 74, topStartY: -120, topRange: 230, topH: 120, bottomStartY: 500, bottomRange: 210, bottomH: 120, speed: 1.9, phase: 0.4 },
      { x: 3010, w: 74, topStartY: -120, topRange: 240, topH: 120, bottomStartY: 500, bottomRange: 220, bottomH: 120, speed: 2.02, phase: 1.7 },
      { x: 3860, w: 76, topStartY: -120, topRange: 250, topH: 120, bottomStartY: 500, bottomRange: 230, bottomH: 120, speed: 2.15, phase: 0.8 },
      { x: 4720, w: 78, topStartY: -120, topRange: 260, topH: 120, bottomStartY: 500, bottomRange: 240, bottomH: 120, speed: 2.25, phase: 1.35 },
      { x: 5480, w: 80, topStartY: -120, topRange: 265, topH: 120, bottomStartY: 500, bottomRange: 245, bottomH: 120, speed: 2.35, phase: 0.95 },
    ];

    return {
      worldWidth,
      spawn: { x: 80, y: 430 },
      platforms,
      coinItems,
      powerups,
      enemies,
      skyCannons,
      spikePistons,
      flag: { x: worldWidth - 120, y: 360, w: 20, h: 140 },
      // Garante que a fase 3 não bloqueie o avanço
      nextLevel: levelNumber + 1
    };
  }

  if (levelNumber === 2) {
    const worldWidth = 5600;
    const platforms = [
      { x: 0, y: 500, w: 800, h: 40, type: 'ground' },
      { x: 900, y: 500, w: 1000, h: 40, type: 'ground' },
      { x: 2050, y: 500, w: 1100, h: 40, type: 'ground' },
      { x: 3200, y: 500, w: 900, h: 40, type: 'ground' },
      { x: 4300, y: 500, w: 900, h: 40, type: 'ground' },
      { x: 400, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 500, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 600, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 1500, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 1600, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 1700, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 2700, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 2800, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 2900, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 3900, y: 470, w: 90, h: 30, type: 'brick' },
      { x: 4000, y: 440, w: 90, h: 60, type: 'brick' },
      { x: 4100, y: 410, w: 90, h: 90, type: 'brick' },
      { x: 220, y: 440, w: 120, h: 20, type: 'brick' },
      { x: 420, y: 410, w: 130, h: 20, type: 'brick' },
      { x: 640, y: 380, w: 140, h: 20, type: 'brick' },
      { x: 900, y: 350, w: 120, h: 20, type: 'brick' },
      { x: 1140, y: 390, w: 130, h: 20, type: 'brick' },
      { x: 1380, y: 360, w: 130, h: 20, type: 'brick' },
      { x: 1650, y: 330, w: 140, h: 20, type: 'brick' },
      { x: 1920, y: 400, w: 120, h: 20, type: 'brick' },
      { x: 2170, y: 370, w: 130, h: 20, type: 'brick' },
      { x: 2440, y: 340, w: 140, h: 20, type: 'brick' },
      { x: 2710, y: 410, w: 130, h: 20, type: 'brick' },
      { x: 2970, y: 380, w: 140, h: 20, type: 'brick' },
      { x: 3250, y: 350, w: 140, h: 20, type: 'brick' },
      { x: 3530, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 3780, y: 390, w: 140, h: 20, type: 'brick' },
      { x: 4060, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 4340, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 4590, y: 390, w: 130, h: 20, type: 'brick' },
      { x: 4860, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 5140, y: 420, w: 120, h: 20, type: 'brick' },
      { x: 5400, y: 390, w: 140, h: 20, type: 'brick' },
      { x: 5680, y: 360, w: 140, h: 20, type: 'brick' },
      { x: 760, y: 270, w: 90, h: 20, type: 'brick' },
      { x: 2320, y: 260, w: 100, h: 20, type: 'brick' },
      { x: 4020, y: 255, w: 100, h: 20, type: 'brick' },
      { x: 5480, y: 250, w: 100, h: 20, type: 'brick' },
    ];

    const coinItems = [
      { x: 210, y: 390, r: 10, collected: false },
      { x: 400, y: 330, r: 10, collected: false },
      { x: 610, y: 270, r: 10, collected: false },
      { x: 870, y: 210, r: 10, collected: false },
      { x: 1120, y: 290, r: 10, collected: false },
      { x: 1370, y: 240, r: 10, collected: false },
      { x: 1650, y: 190, r: 10, collected: false },
      { x: 1920, y: 310, r: 10, collected: false },
      { x: 2180, y: 250, r: 10, collected: false },
      { x: 2440, y: 200, r: 10, collected: false },
      { x: 2720, y: 300, r: 10, collected: false },
      { x: 2980, y: 240, r: 10, collected: false },
      { x: 3260, y: 180, r: 10, collected: false },
      { x: 3540, y: 260, r: 10, collected: false },
      { x: 3780, y: 210, r: 10, collected: false },
      { x: 4040, y: 160, r: 10, collected: false },
      { x: 4290, y: 290, r: 10, collected: false },
      { x: 4540, y: 230, r: 10, collected: false },
      { x: 4790, y: 180, r: 10, collected: false },
      { x: 5070, y: 250, r: 10, collected: false },
      { x: 5320, y: 200, r: 10, collected: false },
    ];

    const powerups = [
      { type: 'mushroom', x: 1220, y: 394, w: 26, h: 26, collected: false },
      { type: 'flower', x: 3620, y: 364, w: 26, h: 26, collected: false },
    ];

    const enemies = [
      { type: 'patrol', x: 520, y: groundY - 30, w: 30, h: 30, vx: 3.2, minX: 440, maxX: 760, alive: true },
      { type: 'chaser', x: 1160, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.2, aggroRange: 340, minX: 980, maxX: 1400 },
      { type: 'runner', x: 1870, y: groundY - 30, w: 30, h: 30, vx: 3.8, minX: 1760, maxX: 2100, alive: true },
      { type: 'chaser', x: 2610, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.4, aggroRange: 360, minX: 2480, maxX: 2890 },
      { type: 'hopper', x: 3360, y: groundY - 30, w: 30, h: 30, vx: 3.2, minX: 3220, maxX: 3560, alive: true, jumpPower: 10.4 },
      { type: 'chaser', x: 4130, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.7, aggroRange: 380, minX: 3980, maxX: 4370 },
      { type: 'patrol', x: 4970, y: groundY - 30, w: 30, h: 30, vx: 3.8, minX: 4860, maxX: 5220, alive: true },
    ];

    const skyCannons = [
      { x: 700, y: 36, shootInterval: 1.8, cooldown: 0.7 },
      { x: 1540, y: 42, shootInterval: 1.55, cooldown: 0.9 },
      { x: 2320, y: 34, shootInterval: 1.45, cooldown: 0.8 },
      { x: 3120, y: 38, shootInterval: 1.35, cooldown: 1.0 },
      { x: 3900, y: 30, shootInterval: 1.28, cooldown: 0.95 },
      { x: 4680, y: 36, shootInterval: 1.2, cooldown: 1.05 },
      { x: 5340, y: 32, shootInterval: 1.12, cooldown: 1.0 },
    ];

    return {
      worldWidth,
      spawn: { x: 80, y: 430 },
      platforms,
      coinItems,
      powerups,
      enemies,
      skyCannons,
      spikePistons: [],
      flag: { x: worldWidth - 120, y: 360, w: 20, h: 140 },
      nextLevel: levelNumber + 1
    };
  }

  if (levelNumber === 1) {
    const worldWidth = 5200;
    const platforms = [
    { x: 0, y: 500, w: 760, h: 40, type: 'ground' },
    { x: 900, y: 500, w: 980, h: 40, type: 'ground' },
    { x: 2020, y: 500, w: 1060, h: 40, type: 'ground' },
    { x: 3240, y: 500, w: 900, h: 40, type: 'ground' },
    { x: 4320, y: 500, w: 880, h: 40, type: 'ground' },
    { x: 430, y: 470, w: 90, h: 30, type: 'brick' },
    { x: 520, y: 440, w: 90, h: 60, type: 'brick' },
    { x: 610, y: 410, w: 90, h: 90, type: 'brick' },
    { x: 1460, y: 470, w: 90, h: 30, type: 'brick' },
    { x: 1550, y: 440, w: 90, h: 60, type: 'brick' },
    { x: 1640, y: 410, w: 90, h: 90, type: 'brick' },
    { x: 2720, y: 470, w: 90, h: 30, type: 'brick' },
    { x: 2810, y: 440, w: 90, h: 60, type: 'brick' },
    { x: 2900, y: 410, w: 90, h: 90, type: 'brick' },
    { x: 3870, y: 470, w: 90, h: 30, type: 'brick' },
    { x: 3960, y: 440, w: 90, h: 60, type: 'brick' },
    { x: 4050, y: 410, w: 90, h: 90, type: 'brick' },
    { x: 220, y: 440, w: 130, h: 20, type: 'brick' },
    { x: 410, y: 410, w: 120, h: 20, type: 'brick' },
    { x: 620, y: 380, w: 150, h: 20, type: 'brick' },
    { x: 910, y: 450, w: 100, h: 20, type: 'brick' },
    { x: 1120, y: 420, w: 140, h: 20, type: 'brick' },
    { x: 1360, y: 390, w: 130, h: 20, type: 'brick' },
    { x: 1660, y: 460, w: 110, h: 20, type: 'brick' },
    { x: 1890, y: 430, w: 120, h: 20, type: 'brick' },
    { x: 2110, y: 400, w: 120, h: 20, type: 'brick' },
    { x: 2440, y: 470, w: 130, h: 20, type: 'brick' },
    { x: 2660, y: 440, w: 140, h: 20, type: 'brick' },
    { x: 2920, y: 410, w: 160, h: 20, type: 'brick' },
    { x: 3210, y: 380, w: 150, h: 20, type: 'brick' },
    { x: 3460, y: 450, w: 120, h: 20, type: 'brick' },
    { x: 3690, y: 420, w: 150, h: 20, type: 'brick' },
    { x: 3890, y: 390, w: 120, h: 20, type: 'brick' },
    { x: 4160, y: 460, w: 120, h: 20, type: 'brick' },
    { x: 4390, y: 430, w: 140, h: 20, type: 'brick' },
    { x: 4680, y: 400, w: 140, h: 20, type: 'brick' },
    { x: 4950, y: 370, w: 130, h: 20, type: 'brick' },
    { x: 820, y: 250, w: 90, h: 20, type: 'brick' },
    { x: 2270, y: 245, w: 120, h: 20, type: 'brick' },
    { x: 3580, y: 240, w: 100, h: 20, type: 'brick' },
    { x: 4470, y: 235, w: 120, h: 20, type: 'brick' },
    { x: 700, y: 460, w: 40, h: 40, type: 'brick' },
    { x: 980, y: 440, w: 40, h: 60, type: 'brick' },
    { x: 1520, y: 450, w: 36, h: 50, type: 'brick' },
    { x: 1740, y: 430, w: 40, h: 70, type: 'brick' },
    { x: 2360, y: 450, w: 40, h: 50, type: 'brick' },
    { x: 2860, y: 430, w: 42, h: 70, type: 'brick' },
    { x: 3340, y: 450, w: 40, h: 50, type: 'brick' },
    { x: 3820, y: 430, w: 48, h: 70, type: 'brick' },
    { x: 4260, y: 450, w: 42, h: 50, type: 'brick' },
    { x: 4720, y: 430, w: 50, h: 70, type: 'brick' },
  ];

  const coinItems = [
    { x: 255, y: 380, r: 10, collected: false },
    { x: 450, y: 320, r: 10, collected: false },
    { x: 675, y: 280, r: 10, collected: false },
    { x: 960, y: 350, r: 10, collected: false },
    { x: 1185, y: 300, r: 10, collected: false },
    { x: 1425, y: 250, r: 10, collected: false },
    { x: 1715, y: 310, r: 10, collected: false },
    { x: 1945, y: 260, r: 10, collected: false },
    { x: 2165, y: 210, r: 10, collected: false },
    { x: 2410, y: 460, r: 10, collected: false },
    { x: 2485, y: 380, r: 10, collected: false },
    { x: 2725, y: 315, r: 10, collected: false },
    { x: 2975, y: 260, r: 10, collected: false },
    { x: 3260, y: 210, r: 10, collected: false },
    { x: 3500, y: 280, r: 10, collected: false },
    { x: 3735, y: 235, r: 10, collected: false },
    { x: 3930, y: 185, r: 10, collected: false },
    { x: 4080, y: 460, r: 10, collected: false },
    { x: 4230, y: 290, r: 10, collected: false },
    { x: 4460, y: 240, r: 10, collected: false },
    { x: 4750, y: 190, r: 10, collected: false },
    { x: 5030, y: 150, r: 10, collected: false },
  ];

  const powerups = [
    { type: 'mushroom', x: 960, y: 414, w: 26, h: 26, collected: false },
    { type: 'flower', x: 3240, y: 344, w: 26, h: 26, collected: false },
  ];

  const enemies = [
    { type: 'patrol', x: 510, y: groundY - 30, w: 30, h: 30, vx: 2.4, minX: 460, maxX: 700, alive: true },
    { type: 'runner', x: 1230, y: groundY - 30, w: 30, h: 30, vx: 3.4, minX: 1130, maxX: 1310, alive: true },
    { type: 'patrol', x: 1780, y: groundY - 30, w: 30, h: 30, vx: 3.1, minX: 1680, maxX: 1960, alive: true },
    { type: 'chaser', x: 2220, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 3.8, aggroRange: 300, minX: 2080, maxX: 2490 },
    { type: 'hopper', x: 2860, y: groundY - 30, w: 30, h: 30, vx: 2.9, minX: 2740, maxX: 3050, alive: true, jumpPower: 9.9 },
    { type: 'patrol', x: 3370, y: groundY - 30, w: 30, h: 30, vx: 3.4, minX: 3280, maxX: 3520, alive: true },
    { type: 'chaser', x: 3680, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.1, aggroRange: 340, minX: 3540, maxX: 4060 },
    { type: 'patrol', x: 4310, y: groundY - 30, w: 30, h: 30, vx: 3.5, minX: 4190, maxX: 4470, alive: true },
    { type: 'chaser', x: 4890, y: groundY - 30, w: 30, h: 30, vx: 0, alive: true, chaseSpeed: 4.3, aggroRange: 350, minX: 4720, maxX: 5080 },
  ];

  const skyCannons = [
    { x: 760, y: 42, shootInterval: 2.2, cooldown: 1.1 },
    { x: 1460, y: 30, shootInterval: 1.9, cooldown: 0.5 },
    { x: 2320, y: 48, shootInterval: 1.6, cooldown: 0.9 },
    { x: 2910, y: 36, shootInterval: 1.7, cooldown: 1.0 },
    { x: 3490, y: 34, shootInterval: 1.5, cooldown: 0.8 },
    { x: 3950, y: 40, shootInterval: 1.35, cooldown: 1.2 },
    { x: 4520, y: 34, shootInterval: 1.25, cooldown: 1.0 },
    { x: 5070, y: 32, shootInterval: 1.15, cooldown: 1.15 },
  ];

    return {
      worldWidth,
      spawn: { x: 80, y: 430 },
      platforms,
      coinItems,
      powerups,
      enemies,
      skyCannons,
      spikePistons: [],
      flag: { x: worldWidth - 120, y: 360, w: 20, h: 140 },
      nextLevel: levelNumber + 1
    };
  }

  // Fases fixas do 4 ao 23
  if (levelNumber >= 4 && levelNumber <= 23) {
    // Carrega a fase fixa correspondente
    const fixedLevel = fixedLevels[levelNumber - 4];
    // Retorna uma cópia para evitar mutação
    return JSON.parse(JSON.stringify(fixedLevel));
  }
}

function createPlayer(spawnX, spawnY) {
  return {
    x: spawnX,
    y: spawnY,
    w: 34,
    h: 44,
    vx: 0,
    vy: 0,
    facing: 1,
    maxSpeed: 5.2,
    accelGround: 0.46,
    accelAir: 0.24,
    brakeGround: 0.7,
    frictionGround: 0.82,
    frictionAir: 0.985,
    jumpPower: 15,
    jumpBufferTime: 0,
    coyoteTime: 0,
    jumpCutReady: false,
    onGround: false,
    invuln: 0,
    walkTime: 0,
    skidTimer: 0,
    form: 'small',
    hasFirePower: false,
    shootCooldown: 0,
  };
}

function loadLevel(levelNumber, carry = {}) {
  const level = createLevel(levelNumber);
  const isCarry = gameState && Object.keys(carry).length > 0;
  const levelLabel =
    levelNumber === 2
      ? `FASE ${levelNumber}/${TOTAL_LEVELS} - NOITE LAVA`
      : levelNumber === 3
      ? `FASE ${levelNumber}/${TOTAL_LEVELS} - PISTOES DE ESPINHO`
      : `FASE ${levelNumber}/${TOTAL_LEVELS}`;

  gameState = {
    player: createPlayer(level.spawn.x, level.spawn.y),
    cameraX: 0,
    lives: isCarry ? carry.lives : 3,
    coinCount: 0,
    totalCoins: level.coinItems.length,
    time: isCarry ? carry.time : 0,
    status: 'playing',
    message: levelLabel,
    currentLevel: levelNumber,
    totalLevels: TOTAL_LEVELS,
    fireModeIndex: isCarry ? carry.fireModeIndex : 1,
    fireballs: [],
    playerShots: [],
    particles: [],
    popups: [],
    shakeTime: 0,
    shakeStrength: 0,
    flashTime: 0,
    worldWidth: level.worldWidth,
    victoryJinglePlayed: false,
    theme: level.theme || undefined,
    ...level,
  };

  gameState.enemies = gameState.enemies.map((enemy) => ({
    ...enemy,
    vy: 0,
    onGround: false,
    gravity: enemy.gravity ?? 0.82,
    maxFall: enemy.maxFall ?? 14,
    moveDir: enemy.vx && enemy.vx < 0 ? -1 : 1,
    speed: Math.max(1.8, Math.abs(enemy.vx || 2.8)),
    jumpCooldown: enemy.jumpCooldown ?? 0,
  }));

  if (isCarry && carry.playerForm) {
    setPlayerForm(gameState.player, carry.playerForm);
    gameState.player.hasFirePower = Boolean(carry.hasFirePower);
  }

  setTimeout(() => {
    if (gameState && gameState.currentLevel === levelNumber && gameState.status === 'playing') {
      gameState.message = '';
    }
  }, 1500);

  updateHUD();
}

function resetGame() {
  loadLevel(1);
}

function restartFromCurrentState() {
  if (!gameState) {
    resetGame();
    return;
  }

  if (gameState.status === 'lose') {
    loadLevel(gameState.currentLevel);
    return;
  }

  resetGame();
}

function updateHUD() {
  const fireModeName = FIRE_MODES[gameState.fireModeIndex].name.toUpperCase();
  const p = gameState.player;
  const powerName = p.hasFirePower ? 'FOGO' : p.form === 'big' ? 'GRANDE' : 'PEQUENO';
  ui.coins.textContent = gameState.coinCount;
  ui.coinsTotal.textContent = gameState.totalCoins;
  ui.lives.textContent = gameState.lives;
  ui.time.textContent = Math.floor(gameState.time);
  ui.status.textContent =
    gameState.status === 'playing'
      ? `Fase ${gameState.currentLevel}/${gameState.totalLevels} | Bala: ${fireModeName} | Poder: ${powerName}`
      : gameState.status === 'win'
      ? 'Vitória!'
      : 'Derrota';
}

function rectsIntersect(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

function circleRectIntersect(circle, rect) {
  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.w));
  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.h));
  const dx = circle.x - closestX;
  const dy = circle.y - closestY;
  return dx * dx + dy * dy <= circle.r * circle.r;
}

function hurtPlayer() {
  const p = gameState.player;
  if (p.invuln > 0 || gameState.status !== 'playing') {
    return;
  }

  if (p.hasFirePower) {
    p.hasFirePower = false;
    p.invuln = 1.2;
    p.vy = -6;
    p.vx = -2.2;
    emitParticles(p.x + p.w / 2, p.y + p.h * 0.6, 14, ['#93c5fd', '#2563eb', '#60a5fa'], 3.8, 1.1, 0.4);
    addPopup('FOGO PERDIDO!', p.x + p.w / 2, p.y - 12, '#93c5fd', 0.52);
    triggerShake(5, 0.16);
    sfx('hurt');
    updateHUD();
    return;
  }

  if (p.form === 'big') {
    setPlayerForm(p, 'small');
    p.invuln = 1.2;
    p.vy = -6;
    p.vx = -2.2;
    emitParticles(p.x + p.w / 2, p.y + p.h * 0.55, 14, ['#fef08a', '#fde047', '#facc15'], 3.5, 1.1, 0.4);
    addPopup('ENCOLHEU!', p.x + p.w / 2, p.y - 12, '#fde047', 0.52);
    triggerShake(5, 0.16);
    sfx('hurt');
    updateHUD();
    return;
  }

  gameState.lives -= 1;
  p.invuln = 1.2;
  p.vy = -8;
  p.vx = -3;

  emitParticles(p.x + p.w / 2, p.y + p.h * 0.6, 16, ['#ef4444', '#f97316', '#fca5a5'], 4.2, 1.1, 0.45);
  addPopup('AI!', p.x + p.w / 2, p.y - 10, '#fca5a5', 0.55);
  triggerShake(7, 0.22);
  triggerFlash(0.12);
  sfx('hurt');

  if (gameState.lives <= 0) {
    gameState.status = 'lose';
    gameState.message = 'Você perdeu! Toque em Reiniciar para tentar de novo.';
  }

  updateHUD();
}

function stompEnemy(enemy) {
  enemy.alive = false;
  gameState.player.vy = -10;
  emitParticles(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 12, ['#92400e', '#78350f', '#f59e0b'], 3.2, 1.4, 0.42);
  addPopup('+100', enemy.x + enemy.w / 2, enemy.y - 8, '#facc15', 0.5);
  triggerShake(4, 0.12);
  sfx('stomp');
}

function setPlayerForm(player, form) {
  const targetForm = form === 'big' ? 'big' : 'small';
  if (player.form === targetForm) return;

  const oldW = player.w;
  const oldH = player.h;
  const nextW = 34;
  const nextH = targetForm === 'big' ? 54 : 44;

  player.form = targetForm;
  player.w = nextW;
  player.h = nextH;
  player.x -= (nextW - oldW) * 0.5;
  player.y -= nextH - oldH;
}

function collectPowerup(item, player) {
  item.collected = true;
  if (item.type === 'mushroom') {
    if (player.form === 'small') {
      setPlayerForm(player, 'big');
      addPopup('CRESCEU!', player.x + player.w / 2, player.y - 16, '#fde047', 0.65);
    } else {
      addPopup('+50', player.x + player.w / 2, player.y - 16, '#fde047', 0.45);
    }
    emitParticles(item.x + item.w / 2, item.y + item.h / 2, 16, ['#ef4444', '#fde047', '#f8fafc'], 3.5, 1.3, 0.45);
  } else {
    setPlayerForm(player, 'big');
    player.hasFirePower = true;
    addPopup('PODER DE FOGO!', player.x + player.w / 2, player.y - 16, '#93c5fd', 0.72);
    emitParticles(item.x + item.w / 2, item.y + item.h / 2, 18, ['#60a5fa', '#93c5fd', '#f8fafc'], 3.8, 1.35, 0.5);
  }
  sfx('coin');
  triggerFlash(0.08);
}

function spawnPlayerShot(player) {
  const shotSpeed = 9.2;
  const dir = player.facing >= 0 ? 1 : -1;
  gameState.playerShots.push({
    x: player.x + (dir > 0 ? player.w - 2 : -12),
    y: player.y + player.h * 0.48,
    w: 12,
    h: 12,
    vx: dir * shotSpeed,
    vy: -1.1,
    life: 1.5,
    alive: true,
  });
  emitParticles(player.x + player.w / 2, player.y + player.h * 0.5, 8, ['#93c5fd', '#60a5fa', '#f8fafc'], 2.5, 1.1, 0.24);
  sfx('fire');
}

function emitParticles(x, y, count, colors, speed = 3, size = 1.2, life = 0.35) {
  const particles = gameState.particles;
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const force = Math.random() * speed;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * force,
      vy: Math.sin(angle) * force - Math.random() * 1.4,
      life: life + Math.random() * 0.2,
      maxLife: life + Math.random() * 0.2,
      size: size + Math.random() * 1.4,
      color: colors[(Math.random() * colors.length) | 0],
      gravity: 10 + Math.random() * 8,
    });
  }
}

function addPopup(text, x, y, color = '#ffffff', life = 0.45) {
  gameState.popups.push({ text, x, y, color, life, maxLife: life });
}

function triggerShake(strength = 4, duration = 0.12) {
  gameState.shakeStrength = Math.max(gameState.shakeStrength, strength);
  gameState.shakeTime = Math.max(gameState.shakeTime, duration);
}

function triggerFlash(duration = 0.08) {
  gameState.flashTime = Math.max(gameState.flashTime, duration);
}

function spawnFireball(cannon, player, fireMode) {
  const spawnX = cannon.x + 2;
  const spawnY = cannon.y + 18;
  const targetX = player.x + player.w / 2;
  const targetY = player.y + player.h * 0.45;

  const dx = targetX - (spawnX + 11);
  const dy = targetY - (spawnY + 11);
  const distance = Math.max(1, Math.hypot(dx, dy));
  const speed = fireMode.speed;

  const fireball = {
    x: spawnX,
    y: spawnY,
    w: 22,
    h: 22,
    vx: (dx / distance) * speed,
    vy: (dy / distance) * speed,
    gravity: fireMode.gravity,
    steer: fireMode.steer,
    alive: true,
  };

  gameState.fireballs.push(fireball);
  emitParticles(fireball.x + fireball.w / 2, fireball.y + fireball.h / 2, 12, ['#f97316', '#fb923c', '#facc15'], 2.2, 1.2, 0.26);
  sfx('fire');
}

function updateAudioHUD() {
  if (ui.soundToggle) {
    ui.soundToggle.textContent = audioEnabled ? 'ON' : 'OFF';
  }
  if (ui.volumeValue) {
    ui.volumeValue.textContent = `${Math.round(masterVolume * 100)}%`;
  }
}

function setMasterVolume(percent) {
  masterVolume = Math.max(0, Math.min(1, percent / 100));
  updateAudioHUD();
  updateAmbientAudio();
}

function setAudioEnabled(enabled) {
  audioEnabled = enabled;
  updateAudioHUD();
  updateAmbientAudio();
}

function updateEffects(dt) {
  const s = gameState;

  if (s.shakeTime > 0) {
    s.shakeTime -= dt;
    if (s.shakeTime <= 0) {
      s.shakeTime = 0;
      s.shakeStrength = 0;
    }
  }

  if (s.flashTime > 0) {
    s.flashTime -= dt;
    if (s.flashTime < 0) s.flashTime = 0;
  }

  for (const particle of s.particles) {
    particle.life -= dt;
    particle.x += particle.vx * 60 * dt;
    particle.y += particle.vy * 60 * dt;
    particle.vy += particle.gravity * dt;
  }
  s.particles = s.particles.filter((particle) => particle.life > 0);

  for (const popup of s.popups) {
    popup.life -= dt;
    popup.y -= 28 * dt;
  }
  s.popups = s.popups.filter((popup) => popup.life > 0);
}

function update(dt) {
  const s = gameState;
  const p = s.player;

  if (mobileSetupOpen) {
    updateAmbientAudio();
    return;
  }

  updateEffects(dt);
  updateAmbientAudio();

  if (s.status !== 'playing') {
    return;
  }

  s.time += dt;
  if (p.shootCooldown > 0) {
    p.shootCooldown -= dt;
  }
  if (p.jumpBufferTime > 0) {
    p.jumpBufferTime -= dt;
  }
  if (p.coyoteTime > 0) {
    p.coyoteTime -= dt;
  }
  if (p.invuln > 0) {
    p.invuln -= dt;
  }

  if (keys.jumpPressed) {
    p.jumpBufferTime = 0.14;
    keys.jumpPressed = false;
  }

  let direction = 0;
  if (keys.left) direction -= 1;
  if (keys.right) direction += 1;

  if (direction !== 0) {
    if (p.onGround && Math.sign(p.vx) !== 0 && Math.sign(p.vx) !== direction && Math.abs(p.vx) > 0.35) {
      p.vx += direction * p.brakeGround;
      p.skidTimer = 0.14;
    } else {
      const accel = p.onGround ? p.accelGround : p.accelAir;
      p.vx += direction * accel;
    }
    p.facing = direction;
  } else if (p.onGround) {
    p.vx *= p.frictionGround;
  }

  if (!p.onGround) {
    p.vx *= p.frictionAir;
  }

  p.vx = Math.max(-p.maxSpeed, Math.min(p.maxSpeed, p.vx));
  if (Math.abs(p.vx) < 0.05) {
    p.vx = 0;
  }

  if (p.skidTimer > 0) {
    p.skidTimer -= dt;
  }

  if (p.onGround && Math.abs(p.vx) > 0.22) {
    p.walkTime += dt * (6 + Math.abs(p.vx) * 1.25);
  } else if (p.onGround) {
    p.walkTime = 0;
  }

  const canJump = p.onGround || p.coyoteTime > 0;
  if (p.jumpBufferTime > 0 && canJump) {
    p.vy = -p.jumpPower;
    p.onGround = false;
    p.coyoteTime = 0;
    p.jumpBufferTime = 0;
    p.jumpCutReady = true;
    emitParticles(p.x + p.w / 2, p.y + p.h - 2, 10, ['#ffffff', '#bae6fd', '#93c5fd'], 2.1, 1.2, 0.28);
    sfx('jump');
  }

  if (!keys.jump && p.jumpCutReady && p.vy < 0) {
    p.vy *= 0.52;
    p.jumpCutReady = false;
  }
  if (p.vy >= 0) {
    p.jumpCutReady = false;
  }

  if (keys.fire && p.hasFirePower && p.shootCooldown <= 0) {
    spawnPlayerShot(p);
    p.shootCooldown = 0.24;
  }

  p.vy += WORLD.gravity;
  if (p.vy > WORLD.maxFall) {
    p.vy = WORLD.maxFall;
  }

  p.x += p.vx;
  for (const plat of s.platforms) {
    if (!rectsIntersect(p, plat)) continue;
    if (p.vx > 0) p.x = plat.x - p.w;
    else if (p.vx < 0) p.x = plat.x + plat.w;
  }

  p.y += p.vy;
  p.onGround = false;
  for (const plat of s.platforms) {
    if (!rectsIntersect(p, plat)) continue;

    if (p.vy > 0 && p.y + p.h - p.vy <= plat.y + 4) {
      p.y = plat.y - p.h;
      p.vy = 0;
      p.onGround = true;
      p.coyoteTime = 0.12;
    } else if (p.vy < 0 && p.y - p.vy >= plat.y + plat.h - 4) {
      p.y = plat.y + plat.h;
      p.vy = 0;
    }
  }

  if (p.y > WORLD.height + 100) {
    hurtPlayer();
    p.x = 80;
    p.y = 380;
    p.vx = 0;
    p.vy = 0;
  }

  p.x = Math.max(0, Math.min(s.worldWidth - p.w, p.x));

  for (const coin of s.coinItems) {
    if (coin.collected) continue;
    if (circleRectIntersect(coin, p)) {
      coin.collected = true;
      s.coinCount += 1;
      emitParticles(coin.x, coin.y, 14, ['#facc15', '#fde047', '#fef08a'], 3.3, 1.25, 0.38);
      addPopup('+1', coin.x, coin.y - 6, '#fde047', 0.48);
      sfx('coin');
    }
  }

  for (const item of s.powerups) {
    if (item.collected) continue;
    if (rectsIntersect(item, p)) {
      collectPowerup(item, p);
      updateHUD();
    }
  }

  for (const enemy of s.enemies) {
    if (!enemy.alive) continue;

    let intendedVX = enemy.vx || 0;
    if (enemy.type === 'chaser') {
      const playerCenter = p.x + p.w / 2;
      const enemyCenter = enemy.x + enemy.w / 2;
      const distance = playerCenter - enemyCenter;

      if (Math.abs(distance) <= enemy.aggroRange) {
        intendedVX = Math.sign(distance) * enemy.chaseSpeed;
      } else {
        intendedVX *= 0.86;
      }
    } else {
      if (enemy.type === 'hopper') {
        enemy.jumpCooldown -= dt;
        if (enemy.onGround && enemy.jumpCooldown <= 0) {
          enemy.vy = -(enemy.jumpPower || 10);
          enemy.onGround = false;
          enemy.jumpCooldown = 0.95 + Math.random() * 0.35;
        }
      }

      const baseSpeed = enemy.type === 'runner' ? enemy.speed * 1.2 : enemy.speed;
      intendedVX = enemy.moveDir * baseSpeed;
    }

    enemy.x += intendedVX;
    let hitWall = false;
    for (const plat of s.platforms) {
      if (!rectsIntersect(enemy, plat)) continue;
      if (intendedVX > 0) {
        enemy.x = plat.x - enemy.w;
        hitWall = true;
      } else if (intendedVX < 0) {
        enemy.x = plat.x + plat.w;
        hitWall = true;
      }
    }

    if (enemy.type === 'chaser') {
      enemy.vx = hitWall ? 0 : intendedVX;
    } else {
      if (enemy.x <= enemy.minX) {
        enemy.x = enemy.minX;
        enemy.moveDir = 1;
      }
      if (enemy.x + enemy.w >= enemy.maxX) {
        enemy.x = enemy.maxX - enemy.w;
        enemy.moveDir = -1;
      }
      if (hitWall) {
        enemy.moveDir *= -1;
      }
      enemy.vx = enemy.moveDir * (enemy.type === 'runner' ? enemy.speed * 1.2 : enemy.speed);
    }

    enemy.vy += enemy.gravity;
    if (enemy.vy > enemy.maxFall) enemy.vy = enemy.maxFall;
    enemy.y += enemy.vy;
    enemy.onGround = false;

    for (const plat of s.platforms) {
      if (!rectsIntersect(enemy, plat)) continue;

      if (enemy.vy > 0 && enemy.y + enemy.h - enemy.vy <= plat.y + 4) {
        enemy.y = plat.y - enemy.h;
        enemy.vy = 0;
        enemy.onGround = true;
      } else if (enemy.vy < 0 && enemy.y - enemy.vy >= plat.y + plat.h - 4) {
        enemy.y = plat.y + plat.h;
        enemy.vy = 0;
      }
    }

    if (!rectsIntersect(p, enemy)) continue;

    const playerBottomPrev = p.y + p.h - p.vy;
    const enemyTop = enemy.y;

    if (p.vy > 0 && playerBottomPrev <= enemyTop + 6) {
      stompEnemy(enemy);
    } else {
      hurtPlayer();
    }
  }

  for (const shot of s.playerShots) {
    if (!shot.alive) continue;
    shot.life -= dt;
    shot.vy += 0.18;
    shot.x += shot.vx;
    shot.y += shot.vy;

    const shotRect = { x: shot.x, y: shot.y, w: shot.w, h: shot.h };

    for (const plat of s.platforms) {
      if (!rectsIntersect(shotRect, plat)) continue;
      shot.alive = false;
      emitParticles(shot.x + shot.w / 2, shot.y + shot.h / 2, 7, ['#93c5fd', '#60a5fa', '#f8fafc'], 2.2, 1, 0.2);
      break;
    }

    if (!shot.alive) continue;

    for (const enemy of s.enemies) {
      if (!enemy.alive) continue;
      if (!rectsIntersect(shotRect, enemy)) continue;
      enemy.alive = false;
      shot.alive = false;
      emitParticles(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 12, ['#fb923c', '#f97316', '#fde047'], 3.4, 1.2, 0.35);
      addPopup('+150', enemy.x + enemy.w / 2, enemy.y - 8, '#f8fafc', 0.5);
      sfx('stomp');
      break;
    }

    if (shot.life <= 0 || shot.x < -40 || shot.x > s.worldWidth + 40 || shot.y > WORLD.height + 40) {
      shot.alive = false;
    }
  }

  s.playerShots = s.playerShots.filter((shot) => shot.alive);

  for (const cannon of s.skyCannons) {
    cannon.cooldown -= dt;
    if (cannon.cooldown <= 0) {
      const nearPlayer = Math.abs(p.x + p.w / 2 - cannon.x) <= 620;
      const fireMode = FIRE_MODES[s.fireModeIndex];
      if (nearPlayer) {
        spawnFireball(cannon, p, fireMode);
      }
      cannon.cooldown = cannon.shootInterval * fireMode.intervalMul + Math.random() * 0.6;
    }
  }

  for (const fireball of s.fireballs) {
    if (!fireball.alive) continue;

    const toPlayerX = p.x + p.w / 2 - (fireball.x + fireball.w / 2);
    const toPlayerY = p.y + p.h / 2 - (fireball.y + fireball.h / 2);
    const targetDistance = Math.max(1, Math.hypot(toPlayerX, toPlayerY));
    const currentSpeed = Math.max(0.01, Math.hypot(fireball.vx, fireball.vy));

    fireball.vx += (toPlayerX / targetDistance) * fireball.steer;
    fireball.vy += (toPlayerY / targetDistance) * fireball.steer;

    const correctedSpeed = Math.hypot(fireball.vx, fireball.vy);
    fireball.vx = (fireball.vx / correctedSpeed) * currentSpeed;
    fireball.vy = (fireball.vy / correctedSpeed) * currentSpeed;

    fireball.x += fireball.vx;
    fireball.y += fireball.vy;
    fireball.vy += fireball.gravity;

    const fireRect = { x: fireball.x, y: fireball.y, w: fireball.w, h: fireball.h };

    if (rectsIntersect(p, fireRect)) {
      hurtPlayer();
      fireball.alive = false;
      emitParticles(
        fireball.x + fireball.w / 2,
        fireball.y + fireball.h / 2,
        18,
        ['#fb923c', '#f97316', '#dc2626'],
        3.4,
        1.4,
        0.34
      );
      continue;
    }

    for (const plat of s.platforms) {
      if (!rectsIntersect(fireRect, plat)) continue;
      fireball.alive = false;
      emitParticles(
        fireball.x + fireball.w / 2,
        fireball.y + fireball.h / 2,
        14,
        ['#fb923c', '#f59e0b', '#dc2626'],
        2.9,
        1.25,
        0.28
      );
      break;
    }

    if (fireball.y > WORLD.height + 30 || fireball.x < -40 || fireball.x > s.worldWidth + 40) {
      fireball.alive = false;
    }
  }

  s.fireballs = s.fireballs.filter((fireball) => fireball.alive);

  if (p.x + p.w >= s.flag.x + s.flag.w / 2) {
    if (s.currentLevel < s.totalLevels) {
      const carry = {
        lives: s.lives,
        time: s.time,
        fireModeIndex: s.fireModeIndex,
        playerForm: p.form,
        hasFirePower: p.hasFirePower,
      };
      emitParticles(s.flag.x + 28, s.flag.y + 24, 30, ['#facc15', '#f8fafc', '#60a5fa'], 4.2, 1.3, 0.62);
      triggerShake(4, 0.14);
      sfx('win');
      setTimeout(() => loadLevel(s.currentLevel + 1, carry), 800);
      s.status = 'win';
      s.message = 'Fase concluída!';
      return;
    } else {
      s.status = 'win';
      s.message = 'Você venceu a campanha!';
      if (!s.victoryJinglePlayed) {
        s.victoryJinglePlayed = true;
        emitParticles(s.flag.x + 28, s.flag.y + 24, 50, ['#facc15', '#f8fafc', '#60a5fa', '#f43f5e'], 5.2, 1.5, 0.82);
        triggerShake(5, 0.16);
        triggerFlash(0.14);
        sfx('win');
      }
    }
  }

  s.cameraX = Math.max(0, Math.min(s.worldWidth - canvas.width, p.x - canvas.width * 0.35));

  updateHUD();
}

function getShakeOffset() {
  const s = gameState;
  if (s.shakeTime <= 0 || s.shakeStrength <= 0) {
    return { x: 0, y: 0 };
  }
  const intensity = s.shakeStrength * (s.shakeTime / 0.25);
  return {
    x: (Math.random() * 2 - 1) * intensity,
    y: (Math.random() * 2 - 1) * intensity * 0.7,
  };
}

function drawSprite(sprite, x, y, scale = PIXEL, flipX = false) {
  const startX = Math.floor(x);
  const startY = Math.floor(y);
  for (let row = 0; row < sprite.length; row += 1) {
    const line = sprite[row];
    for (let col = 0; col < line.length; col += 1) {
      const px = line[col];
      if (px === '.') continue;
      ctx.fillStyle = PALETTE[px] || '#ffffff';
      const drawX = flipX
        ? startX + (line.length - 1 - col) * scale
        : startX + col * scale;
      ctx.fillRect(drawX, startY + row * scale, scale, scale);
    }
  }
}

function drawBackground(cameraX) {
  let theme = 'day';
  if (gameState && gameState.theme) {
    theme = gameState.theme;
  } else if (gameState && gameState.currentLevel === 2) {
    theme = 'night';
  }

  if (theme === 'night') {
    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, '#020617');
    sky.addColorStop(0.52, '#111827');
    sky.addColorStop(1, '#1f2937');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const moonX = canvas.width - 130 - cameraX * 0.04;
    const moonY = 90;
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 6, moonX, moonY, 86);
    moonGlow.addColorStop(0, '#e2e8f0dd');
    moonGlow.addColorStop(0.45, '#94a3b888');
    moonGlow.addColorStop(1, '#94a3b800');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 86, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(moonX, moonY, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f8fafc88';
    for (let i = 0; i < 80; i += 1) {
      const sx = ((i * 127 - cameraX * 0.08) % (canvas.width + 160)) - 80;
      const sy = 20 + (i * 37) % 220;
      ctx.fillRect(Math.floor(sx), Math.floor(sy), i % 5 === 0 ? 2 : 1, i % 5 === 0 ? 2 : 1);
    }

    for (let i = 0; i < 10; i += 1) {
      const x = Math.floor(((i * 320 - cameraX * 0.12) % (canvas.width + 420)) - 220);
      const baseY = 410 + (i % 2) * 14;
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(x + 20, baseY - 130, 30, 130);
      ctx.fillRect(x + 6, baseY - 90, 58, 90);
      ctx.fillRect(x - 14, baseY - 50, 96, 50);
      ctx.fillStyle = '#334155';
      ctx.fillRect(x + 16, baseY - 74, 10, 74);
      ctx.fillRect(x + 42, baseY - 102, 8, 102);
    }

    const glow = ctx.createLinearGradient(0, 360, 0, 540);
    glow.addColorStop(0, '#ef444400');
    glow.addColorStop(1, '#ef444455');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 340, canvas.width, 200);

    const lavaWave = Math.sin(gameState.time * 4) * 2;
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(0, 488, canvas.width, 52);
    ctx.fillStyle = '#b91c1c';
    for (let x = 0; x < canvas.width; x += 26) {
      const y = 492 + ((x / 26) % 2 ? lavaWave : -lavaWave);
      ctx.fillRect(x, y, 26, 12);
    }
    ctx.fillStyle = '#fb923c';
    for (let x = 0; x < canvas.width; x += 18) {
      const y = 498 + Math.sin(gameState.time * 6 + x * 0.09) * 3;
      ctx.fillRect(x + 3, y, 10, 3);
    }
    return;
  }

  // Temas customizados
  if (theme === 'snow') {
    // Céu azul claro
    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, '#e0f2fe');
    sky.addColorStop(0.55, '#bae6fd');
    sky.addColorStop(1, '#f0f9ff');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Flocos de neve
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 60; i++) {
      const x = ((i * 97 - cameraX * 0.13) % (canvas.width + 120)) - 60;
      const y = 30 + (i * 41) % 400 + Math.sin(gameState.time * 2 + i) * 8;
      ctx.beginPath();
      ctx.arc(x, y, i % 3 === 0 ? 2 : 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Montanhas de neve
    ctx.fillStyle = '#bae6fd';
    ctx.fillRect(0, 420, canvas.width, 80);
    ctx.fillStyle = '#e0e7ef';
    ctx.fillRect(0, 470, canvas.width, 30);
    return;
  }
  if (theme === 'desert') {
    // Céu amarelado
    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, '#fef9c3');
    sky.addColorStop(0.55, '#fde68a');
    sky.addColorStop(1, '#fcd34d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sol forte
    const sunX = canvas.width - 120 - (cameraX * 0.04);
    const sunY = 80;
    const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 110);
    sunGlow.addColorStop(0, '#fde047ee');
    sunGlow.addColorStop(0.45, '#fbbf24aa');
    sunGlow.addColorStop(1, '#fde04700');
    ctx.fillStyle = sunGlow;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 110, 0, Math.PI * 2);
    ctx.fill();

    // Dunas
    ctx.fillStyle = '#fbbf24';
    for (let i = 0; i < canvas.width; i += 60) {
      const x = i - ((cameraX * 0.09) % 60);
      const y = 470 + Math.sin(gameState.time * 2 + i * 0.1) * 6;
      ctx.beginPath();
      ctx.ellipse(x, y, 40, 18, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#fde68a';
    ctx.fillRect(0, 490, canvas.width, 20);
    return;
  }

  // Dia padrão
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, '#0ea5e9');
  sky.addColorStop(0.55, '#38bdf8');
  sky.addColorStop(1, '#67e8f9');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const sunX = canvas.width - 140 - (cameraX * 0.05);
  const sunY = 92;
  const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 95);
  sunGlow.addColorStop(0, '#fef08aee');
  sunGlow.addColorStop(0.45, '#fde04788');
  sunGlow.addColorStop(1, '#fde04700');
  ctx.fillStyle = sunGlow;
  ctx.beginPath();
  ctx.arc(sunX, sunY, 95, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fde047';
  ctx.beginPath();
  ctx.arc(sunX, sunY, 24, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#93c5fd';
  for (let i = 0; i < canvas.width; i += 24) {
    const px = i - ((cameraX * 0.06) % 24);
    ctx.fillRect(Math.floor(px), 0, 12, 2);
  }

  for (let i = 0; i < 9; i += 1) {
    const x = Math.floor(((i * 280 - cameraX * 0.08) % (canvas.width + 360)) - 180);
    const baseY = 380 + (i % 2) * 18;
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(x + 16, baseY - 120, 20, 120);
    ctx.fillRect(x + 4, baseY - 90, 44, 90);
    ctx.fillRect(x - 8, baseY - 48, 68, 48);
    ctx.fillStyle = '#0369a1';
    ctx.fillRect(x + 8, baseY - 70, 12, 70);
    ctx.fillRect(x + 30, baseY - 100, 8, 100);
  }

  const horizonFog = ctx.createLinearGradient(0, 310, 0, 500);
  horizonFog.addColorStop(0, '#ffffff00');
  horizonFog.addColorStop(1, '#dbeafe66');
  ctx.fillStyle = horizonFog;
  ctx.fillRect(0, 300, canvas.width, 220);

  ctx.fillStyle = '#bae6fd';
  for (let i = 0; i < 8; i += 1) {
    const x = Math.floor(((i * 300 - cameraX * 0.2) % (canvas.width + 340)) - 140);
    const y = 60 + (i % 3) * 38;
    ctx.fillRect(x, y, 72, 16);
    ctx.fillRect(x + 16, y - 16, 36, 16);
    ctx.fillRect(x + 24, y + 16, 24, 8);
  }

  for (let i = 0; i < 14; i += 1) {
    const x = Math.floor(((i * 170 - cameraX * 0.32) % (canvas.width + 220)) - 120);
    const y = 418 + (i % 3) * 8;
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(x + 8, y - 34, 8, 34);
    ctx.fillRect(x, y - 24, 24, 24);
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(x + 4, y - 20, 16, 20);
    ctx.fillStyle = '#15803d';
    ctx.fillRect(x + 10, y - 30, 4, 6);
  }

  for (let i = 0; i < canvas.width; i += 24) {
    const hillX = Math.floor((i - (cameraX * 0.15) % 24));
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(hillX, 450, 24, 50);
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(hillX + 4, 442, 16, 8);
  }

  ctx.fillStyle = '#14532d66';
  ctx.fillRect(0, 498, canvas.width, 4);
}

function drawPlatform(plat, cameraX) {
  const x = Math.floor(plat.x - cameraX);
  const y = Math.floor(plat.y);
  const isLavaNight = gameState && gameState.currentLevel === 2;

  if (plat.type === 'ground') {
    ctx.fillStyle = isLavaNight ? '#7f1d1d' : '#166534';
    ctx.fillRect(x, y, plat.w, 8);
    ctx.fillStyle = isLavaNight ? '#1f2937' : '#3f3f46';
    ctx.fillRect(x, y + 8, plat.w, plat.h - 8);
    ctx.fillStyle = isLavaNight ? '#ef4444' : '#71717a';
    ctx.fillRect(x, y + 8, plat.w, 2);

    ctx.fillStyle = isLavaNight ? '#475569' : '#52525b';
    for (let tx = x; tx < x + plat.w; tx += 16) {
      for (let ty = y + 8; ty < y + plat.h; ty += 12) {
        ctx.fillRect(tx, ty, 8, 4);
      }
    }
    return;
  }

  ctx.fillStyle = isLavaNight ? '#7f1d1d' : '#92400e';
  ctx.fillRect(x, y, plat.w, plat.h);
  ctx.fillStyle = isLavaNight ? '#b91c1c' : '#b45309';
  ctx.fillRect(x + 2, y + 2, plat.w - 4, 6);
  ctx.fillStyle = isLavaNight ? '#fb923c' : '#d97706';
  ctx.fillRect(x + 2, y + 8, plat.w - 4, 2);
  ctx.fillStyle = isLavaNight ? '#450a0a' : '#78350f';
  for (let tx = x + 6; tx < x + plat.w - 6; tx += 18) {
    ctx.fillRect(tx, y + 2, 2, plat.h - 4);
  }

  ctx.fillStyle = isLavaNight ? '#fde047' : '#fbbf24';
  for (let tx = x + 4; tx < x + plat.w - 4; tx += 20) {
    ctx.fillRect(tx, y + 4, 2, 2);
  }
}

function drawCoin(coin, cameraX) {
  if (coin.collected) return;
  const bob = Math.sin(gameState.time * 6 + coin.x * 0.03) * 2;
  const cx = coin.x - cameraX;
  const cy = coin.y + bob;
  ctx.fillStyle = '#fef08a66';
  ctx.fillRect(Math.floor(cx - 12), Math.floor(cy - 12), 24, 24);
  ctx.fillStyle = '#fff7aecc';
  ctx.fillRect(Math.floor(cx - 1), Math.floor(cy - 11), 2, 5);
  ctx.fillRect(Math.floor(cx - 1), Math.floor(cy + 6), 2, 5);
  ctx.fillRect(Math.floor(cx - 11), Math.floor(cy - 1), 5, 2);
  ctx.fillRect(Math.floor(cx + 6), Math.floor(cy - 1), 5, 2);
  drawSprite(COIN_SPRITE, cx - 8, cy - 8, 2, false);
}

function drawPowerup(item, cameraX) {
  if (item.collected) return;
  const bob = Math.sin(gameState.time * 5 + item.x * 0.02) * 2;
  const x = item.x - cameraX;
  const y = item.y + bob;

  ctx.fillStyle = item.type === 'flower' ? '#60a5fa44' : '#fde04733';
  ctx.fillRect(Math.floor(x - 2), Math.floor(y - 2), item.w + 4, item.h + 4);

  if (item.type === 'flower') {
    drawSprite(FLOWER_SPRITE, x, y, 2, false);
  } else {
    drawSprite(MUSHROOM_SPRITE, x, y, 2, false);
  }
}

function drawEnemy(enemy, cameraX) {
  if (!enemy.alive) return;

  if (enemy.type === 'chaser') {
    ctx.fillStyle = '#ef444466';
    ctx.fillRect(Math.floor(enemy.x - cameraX - 3), enemy.y - 2, enemy.w + 8, enemy.h + 6);
  } else if (enemy.type === 'runner') {
    ctx.fillStyle = '#38bdf855';
    ctx.fillRect(Math.floor(enemy.x - cameraX - 2), enemy.y - 1, enemy.w + 6, enemy.h + 4);
  } else if (enemy.type === 'hopper') {
    ctx.fillStyle = '#fde04755';
    ctx.fillRect(Math.floor(enemy.x - cameraX - 2), enemy.y - 1, enemy.w + 6, enemy.h + 4);
  }

  ctx.fillStyle = '#00000055';
  ctx.fillRect(Math.floor(enemy.x - cameraX + 4), enemy.y + enemy.h + 1, enemy.w - 8, 3);

  const sprite =
    enemy.type === 'runner'
      ? RUNNER_SPRITE
      : enemy.type === 'hopper'
      ? HOPPER_SPRITE
      : ENEMY_SPRITE;
  drawSprite(sprite, enemy.x - cameraX + 1, enemy.y + 5, 2, enemy.vx < 0);
}

function drawSkyCannon(cannon, cameraX) {
  const x = Math.floor(cannon.x - cameraX);
  const y = Math.floor(cannon.y);
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(x, y, 28, 24);
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(x + 2, y + 2, 24, 20);
  ctx.fillStyle = '#64748b';
  ctx.fillRect(x + 8, y + 8, 12, 10);
  ctx.fillStyle = '#94a3b8';
  ctx.fillRect(x + 10, y + 10, 8, 2);

  const pulse = (Math.sin(gameState.time * 6 + cannon.x * 0.03) + 1) * 0.5;
  ctx.fillStyle = pulse > 0.7 ? '#fca5a5' : '#f87171';
  ctx.fillRect(x + 12, y + 4, 4, 2);
}

function drawFireball(fireball, cameraX) {
  const x = fireball.x - cameraX;
  const y = fireball.y;
  ctx.fillStyle = '#fb923c66';
  ctx.fillRect(Math.floor(x - 4), Math.floor(y - 4), 30, 30);
  drawSprite(FIREBALL_SPRITE, x, y, 3, fireball.vx < 0);
}

function drawPlayerShot(shot, cameraX) {
  const x = shot.x - cameraX;
  const y = shot.y;
  ctx.fillStyle = '#60a5fa66';
  ctx.fillRect(Math.floor(x - 2), Math.floor(y - 2), 16, 16);
  drawSprite(PLAYER_FIREBALL_SPRITE, x, y, 2, shot.vx < 0);
}

function drawFlag(flag, cameraX) {
  const x = Math.floor(flag.x - cameraX);
  const y = Math.floor(flag.y);
  ctx.fillStyle = '#475569';
  ctx.fillRect(x, y, flag.w, flag.h);
  for (let i = 0; i < flag.h; i += 10) {
    ctx.fillStyle = i % 20 === 0 ? '#64748b' : '#475569';
    ctx.fillRect(x + 2, y + i, flag.w - 4, 5);
  }

  const shineY = y + 8 + ((Math.sin(gameState.time * 5) + 1) * 2);
  ctx.fillStyle = '#f8fafcaa';
  ctx.fillRect(x + flag.w + 6, Math.floor(shineY), 6, 2);
  drawSprite(FLAG_SPRITE, x + flag.w, y + 8, 2, false);
}

function drawPlayer(player, cameraX) {
  const blinking = player.invuln > 0 && Math.floor(player.invuln * 12) % 2 === 0;
  if (blinking) return;

  ctx.fillStyle = '#ffffff44';
  ctx.fillRect(Math.floor(player.x - cameraX + 4), player.y + 4, player.w - 8, 2);
  ctx.fillStyle = '#00000066';
  ctx.fillRect(Math.floor(player.x - cameraX + 8), player.y + player.h + 2, player.w - 14, 3);

  let sprite = PLAYER_SPRITES.idle;
  if (!player.onGround) {
    sprite = PLAYER_SPRITES.jump;
  } else if (player.skidTimer > 0 && Math.abs(player.vx) > 1.1) {
    sprite = PLAYER_SPRITES.skid;
  } else if (Math.abs(player.vx) > 0.22) {
    const runFrame = Math.floor(player.walkTime) % 3;
    sprite = runFrame === 0 ? PLAYER_SPRITES.walkA : runFrame === 1 ? PLAYER_SPRITES.walkB : PLAYER_SPRITES.walkC;
  }

  const scale = player.form === 'big' ? 2.4 : 2;
  const drawX = player.x - cameraX + (player.form === 'big' ? -2 : 1);
  const drawY = player.y + (player.form === 'big' ? -2 : 6);
  drawSprite(sprite, drawX, drawY, scale, player.facing > 0);

  if (player.hasFirePower) {
    const pulse = (Math.sin(gameState.time * 8) + 1) * 0.5;
    ctx.fillStyle = pulse > 0.5 ? '#93c5fd66' : '#60a5fa55';
    ctx.fillRect(Math.floor(player.x - cameraX - 2), Math.floor(player.y - 4), player.w + 4, player.h + 6);
  }
}

function drawOverlay() {
  const s = gameState;
  if (s.status === 'playing' && !s.message) return;

  if (s.message && s.status === 'playing') {
    ctx.fillStyle = '#0f172ad9';
    ctx.fillRect(160, 24, 640, 54);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(s.message, canvas.width / 2, 58);
    return;
  }

  ctx.fillStyle = '#020617b3';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '24px "Press Start 2P", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(s.status === 'win' ? 'VOCE VENCEU!' : 'GAME OVER', canvas.width / 2, 220);

  ctx.font = '12px "Press Start 2P", monospace';
  ctx.fillText(s.status === 'win' ? 'FASE COMPLETA' : 'SEM VIDAS RESTANTES', canvas.width / 2, 270);
  ctx.fillText('TOQUE EM REINICIAR', canvas.width / 2, 320);
}

function drawEffects(cameraX) {
  const s = gameState;

  for (const particle of s.particles) {
    const alpha = Math.max(0, particle.life / particle.maxLife);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = particle.color;
    const size = Math.max(1, Math.floor(particle.size));
    ctx.fillRect(Math.floor(particle.x - cameraX), Math.floor(particle.y), size, size);
  }
  ctx.globalAlpha = 1;

  ctx.font = '10px "Press Start 2P", monospace';
  ctx.textAlign = 'center';
  for (const popup of s.popups) {
    const alpha = Math.max(0, popup.life / popup.maxLife);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = popup.color;
    ctx.fillText(popup.text, Math.floor(popup.x - cameraX), Math.floor(popup.y));
  }
  ctx.globalAlpha = 1;

  if (s.flashTime > 0) {
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = Math.min(0.35, s.flashTime * 2.8);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }

  const vignette = ctx.createLinearGradient(0, 0, 0, canvas.height);
  vignette.addColorStop(0, '#0000001a');
  vignette.addColorStop(0.75, '#00000000');
  vignette.addColorStop(1, '#00000033');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const ambient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  ambient.addColorStop(0, '#ffffff14');
  ambient.addColorStop(1, '#0f172a12');
  ctx.fillStyle = ambient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function render() {
  const s = gameState;
  const shake = getShakeOffset();

  ctx.save();
  ctx.translate(shake.x, shake.y);
  drawBackground(s.cameraX);

  for (const cannon of s.skyCannons) drawSkyCannon(cannon, s.cameraX);
  for (const fireball of s.fireballs) drawFireball(fireball, s.cameraX);
  for (const shot of s.playerShots) drawPlayerShot(shot, s.cameraX);

  for (const plat of s.platforms) drawPlatform(plat, s.cameraX);
  for (const coin of s.coinItems) drawCoin(coin, s.cameraX);
  for (const item of s.powerups) drawPowerup(item, s.cameraX);
  for (const enemy of s.enemies) drawEnemy(enemy, s.cameraX);

  drawFlag(s.flag, s.cameraX);
  drawPlayer(s.player, s.cameraX);
  drawEffects(s.cameraX);
  ctx.restore();

  drawOverlay();
}

function gameLoop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.033);
  lastTime = now;

  update(dt);
  render();

  requestAnimationFrame(gameLoop);
}

function onKeyChange(event, pressed) {
  const key = event.key.toLowerCase();

  if (key === 'arrowleft' || key === 'a') keys.left = pressed;
  if (key === 'arrowright' || key === 'd') keys.right = pressed;
  if (key === 'arrowup' || key === 'w' || key === ' ') {
    if (pressed && !keys.jump) {
      keys.jumpPressed = true;
    }
    keys.jump = pressed;
  }
  if (key === 'x' || key === 'k') {
    keys.fire = pressed;
  }

  if (pressed && key === 'r') {
    restartFromCurrentState();
  }

  if (pressed && key === 'b' && gameState) {
    gameState.fireModeIndex = (gameState.fireModeIndex + 1) % FIRE_MODES.length;
    addPopup(
      `BALA ${FIRE_MODES[gameState.fireModeIndex].name.toUpperCase()}`,
      gameState.player.x + gameState.player.w / 2,
      gameState.player.y - 24,
      '#93c5fd',
      0.8
    );
    sfx('coin');
    updateHUD();
  }
}

function setVirtualControl(action, pressed) {
  if (action === 'left') {
    keys.left = pressed;
    return;
  }
  if (action === 'right') {
    keys.right = pressed;
    return;
  }
  if (action === 'jump') {
    if (pressed && !keys.jump) {
      keys.jumpPressed = true;
    }
    keys.jump = pressed;
    return;
  }
  if (action === 'fire') {
    keys.fire = pressed;
    return;
  }
}

function bindMobileButton(element, action) {
  if (!element) return;

  const press = (event) => {
    event.preventDefault();
    unlockAudio();
    setVirtualControl(action, true);
  };

  const release = (event) => {
    event.preventDefault();
    setVirtualControl(action, false);
  };

  element.addEventListener('pointerdown', press);
  element.addEventListener('pointerup', release);
  element.addEventListener('pointercancel', release);
  element.addEventListener('pointerleave', release);
  element.addEventListener('contextmenu', (event) => event.preventDefault());
}

window.addEventListener('keydown', (event) => {
  unlockAudio();
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', ' ', 'x', 'X', 'k', 'K'].includes(event.key)) {
    event.preventDefault();
    // Remove o foco de qualquer botão ativo
    if (document.activeElement && document.activeElement.tagName === 'BUTTON') {
      document.activeElement.blur();
    }
  }
  onKeyChange(event, true);
});

window.addEventListener('pointerdown', () => {
  unlockAudio();
});

window.addEventListener('pointerup', () => {
  unlockAudio();
});

window.addEventListener('touchstart', () => {
  unlockAudio();
}, { passive: true });

window.addEventListener('touchend', () => {
  unlockAudio();
}, { passive: true });

window.addEventListener('click', () => {
  unlockAudio();
});

window.addEventListener('keyup', (event) => {
  onKeyChange(event, false);
});

window.addEventListener('blur', () => {
  keys.left = false;
  keys.right = false;
  keys.jump = false;
  keys.jumpPressed = false;
  keys.fire = false;
});

window.addEventListener('resize', () => {
  if (isTouchDevice) {
    refreshMobileOrientationHint();
  }
});

window.addEventListener('orientationchange', () => {
  if (!isTouchDevice) return;
  refreshMobileOrientationHint();
  if (!mobileSetupOpen) {
    tryLockLandscapeOrientation();
  }
});

bindMobileButton(ui.mobileLeft, 'left');
bindMobileButton(ui.mobileRight, 'right');
bindMobileButton(ui.mobileJump, 'jump');
bindMobileButton(ui.mobileFire, 'fire');

if (ui.mobileScale) {
  ui.mobileScale.addEventListener('input', (event) => {
    applyMobileScale(event.target.value);
  });
}

if (ui.mobileSettings) {
  ui.mobileSettings.addEventListener('click', () => {
    openMobileSetup();
  });
}

if (ui.mobileReturn) {
  ui.mobileReturn.addEventListener('click', async () => {
    unlockAudio();
    if (screen.orientation && typeof screen.orientation.unlock === 'function') {
      try {
        screen.orientation.unlock();
      } catch (_) {}
    }
    if (document.fullscreenElement && document.exitFullscreen) {
      try {
        await document.exitFullscreen();
      } catch (_) {}
    }
    openMobileSetup();
  });
}

if (ui.mobileStart) {
  ui.mobileStart.addEventListener('click', async () => {
    unlockAudio();
    sfx('coin');
    refreshMobileOrientationHint();

    await enableMobileImmersiveMode();
    closeMobileSetup();
  });
}

ui.restartBtn.addEventListener('click', () => {
  restartFromCurrentState();
});

if (ui.soundToggle) {
  ui.soundToggle.addEventListener('click', () => {
    unlockAudio();
    setAudioEnabled(!audioEnabled);
  });
}

if (ui.volumeSlider) {
  ui.volumeSlider.addEventListener('input', (event) => {
    unlockAudio();
    setMasterVolume(Number(event.target.value));
  });
}

if (!isTouchDevice) {
  blockDesktopExperience();
} else {
  resetGame();
  updateAudioHUD();
  applyMobileScale(ui.mobileScale ? ui.mobileScale.value : 100);
  openMobileSetup();
  requestAnimationFrame(gameLoop);
}
