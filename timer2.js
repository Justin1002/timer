const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  let Num = Number(key);

  if (key === 'b') {
    process.stdout.write('beep\n');

  }
  if (key === '1') {
    process.stdout.write(`setting timer for ${key} second...\n`);
    let delay = Num;
    setTimeout(() => {
      process.stdout.write(`beep\n`);
    },delay * 1000);
  }

  if (Num > 1 && Num <= 9) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    let delay = Num;
    setTimeout(() => {
      process.stdout.write(`beep\n`);
    },delay * 1000);
  }

  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});
