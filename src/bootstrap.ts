export const bootstrap = (container?: HTMLElement) => {
  container = container || document.createElement('div');
  document.body.appendChild(container);
  container.id = 'container';

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  canvas.id = 'canvas';
};
