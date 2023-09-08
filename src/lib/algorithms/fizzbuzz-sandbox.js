const fizzBuzz = num => {
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

const fizzBuzzM = num => {
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

const fb = num => {
  const tab = Array(num);
  for (let i = 2; i < num; i += 3) {
    tab[i] = 'fiz';
  }
  for (i = 4; i < num; i += 5) {
    tab[i] = tab[i] ? tab[i] + 'Buz' : 'Buz';
  }

  for (i = 0; i < tab.length; i++) {
    console.log(tab[i] ? tab[i] : i + 1);
  }
};
fb(22);

const fizzBuzzO = num => {
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
