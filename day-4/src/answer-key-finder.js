const { createHash } = require('node:crypto')

const finsSuffixOfSecretKey = (secretKey, numberOfZeroesInFrontOfHash) => {
  let answerKey = 1;

  while (true) {
    const myHash = createHash('md5');
    myHash.update(secretKey + answerKey);

    const hash = (myHash.digest('hex'));

    if (hash.startsWith('0'.repeat(numberOfZeroesInFrontOfHash))) {
      return answerKey;
    }

    answerKey++;
  }
}

exports.finsSuffixOfSecretKey = finsSuffixOfSecretKey;