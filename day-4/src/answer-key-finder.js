const {createHash} = require('node:crypto')

const findAnswerKey = (secretKey, numberOfZeroesInFrontOfHash) => {
  let answerKey = 1;

  while(true) {
    const myHash = createHash('md5');
    myHash.update(secretKey + answerKey);
    
    const hash = (myHash.digest('hex'));
    const firstFiveHashString = hash.slice(0,numberOfZeroesInFrontOfHash);
    
    if(firstFiveHashString === '0'.repeat(numberOfZeroesInFrontOfHash)) {
      return answerKey;
    }
    answerKey++;
  }
}

exports.findAnswerKey = findAnswerKey;