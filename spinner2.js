const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let count = 0;
for (const elem of arr) {
  count += 200;
  setTimeout(() => {
    process.stdout.write('\r' + elem + '   ');
  }, count);
};
