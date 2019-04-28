export const createLoop = (
  update: (t: number) => boolean,
) => {
  const loop = (t: number) => update(t) && requestAnimationFrame(loop);

  return loop;
};
