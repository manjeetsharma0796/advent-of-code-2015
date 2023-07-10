const { createHash } = require('node:crypto')

const findSuffixOfSecretKey = (secretKey, numberOfZeroesInFrontOfHash) => {
  let suffixOfSecretKey = 1;

  while (true) {
    const hash = createHash('md5');
    hash.update(secretKey + suffixOfSecretKey);

    const hashValue = (hash.digest('hex'));

    if (hashValue.startsWith('0'.repeat(numberOfZeroesInFrontOfHash))) {
      return suffixOfSecretKey;
    }

    suffixOfSecretKey++;
  }
}

exports.findSuffixOfSecretKey = findSuffixOfSecretKey;