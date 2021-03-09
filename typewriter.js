const typewriter = (string, delayIn = 30) => {
  let charDelay = 0;
  for (const char of string) {
    setTimeout(() => process.stdout.write(char), charDelay);
    charDelay += delayIn;
  };

  setTimeout(() => process.stdout.write("\n"), charDelay);
};

//Testing code
//const sentence = `Tautrion Stoneglutes, Goddess-King of the Petalsworn Death-Clan, drew their deadly blade with a deadly glare, striking a deadly pose. "Watch out," they said with deadly...deadliness. "Or you'll be dead."`;
//typewriter(sentence);

module.exports = typewriter;