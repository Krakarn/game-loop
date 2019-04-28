import { bootstrap } from './bootstrap';
import { createLoop } from './loop';

export const createGame = (
  initialize: (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => void,
  update: (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    t: number,
  ) => boolean,
  container?: HTMLElement,
) => {
  bootstrap(container);
  const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  initialize(canvas, ctx);
  const loop = createLoop(t => update(canvas, ctx, t));
  loop(0);
}
