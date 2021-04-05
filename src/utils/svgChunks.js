export function getSvgChunks(max) {
  let total = 13;
  let left = total % max;
  let arr = Array(max + 1)
    .fill(0)
    .map((e, i) =>
      i <= left
        ? i * Math.ceil(total / max)
        : i * Math.floor(total / max) + left
    );
  return arr;
}

export default getSvgChunks;
