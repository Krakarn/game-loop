import { test, expect } from './report';
import { createGame } from '../src/game';

const startGame = createGame(
  (canvas, ctx, t) => {
    test('canvas type', () => {
      expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    });

    test('ctx type', () => {
      expect(ctx).toBeInstanceOf(CanvasRenderingContext2D);
    });

    test('ctx canvas link', () => {
      expect(ctx.canvas).toBe(canvas);
    });

    return false;
  },
);

startGame(0);
