const textToObject = (text) => {
  const obj = {}
  text.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').forEach((word) => {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  });
  return obj;
};
const harmlessRansomNote2 = (noteText, messageText) => {
  const msgObj = textToObject(messageText);
  const noteObj = textToObject(noteText);
  for (let word in noteObj) {
    if (!msgObj[word] || (msgObj[word] && msgObj[word] < noteObj[word])) {
      return false;
    }
    return true;
  }
};

const t1 = performance.now();
console.log(harmlessRansomNote2('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));
const t2 = performance.now();
console.log(`time: ${(t2 - t1) / 1000}s.`);



const messageAvailable = (message, source) => {
  const messageWords = message.split(' ');
  const sourceWords = source.split(' ');
  const sourceObj = {};

  sourceWords.forEach(word => {
    if (!sourceObj[word]) {
      sourceObj[word] = 0;
    }
    sourceObj[word]++;
  });

  for (let i = 0; i < messageWords.length; i++) {
    const word = messageWords[i];

    if (sourceObj[word]) {
      sourceObj[word]--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(messageAvailable('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));