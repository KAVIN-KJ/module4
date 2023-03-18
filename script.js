const names = ["John", "kane", "Jack", "Alex"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye JSomeName`);
  } else {
    console.log(`Hello SomeName`);
  }
}
