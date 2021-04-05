const alphabet = Array(26).fill(65).map((e,i) => e+=i).map(e => String.fromCharCode(e));

export { alphabet };
