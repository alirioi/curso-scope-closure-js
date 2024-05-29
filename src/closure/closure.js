function greeting() {
  let username = 'Alirio';

  function displayUserName() {
    return `Hello, ${username}!`;
  }

  return displayUserName;
}

const greet = greeting();
console.log(greet);
console.log(greet());