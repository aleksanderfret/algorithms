export const fizzBuzz0 = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

export const fizzBuzz1 = num => {
  for (let i = 1; i <= num; i++) {
    let res = '';
    if (i % 3 === 0) {
      res = 'Fizz';
    }
    if (i % 5 === 0) {
      res += 'Buzz';
    }
    if (!res) {
      res = i;
    }
    console.log(res);
  }
};

export const fizzBuzz2 = num => {
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 3 === 0
        ? i % 5 === 0
          ? 'FizzBuzz'
          : 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : i
    );
  }
};
