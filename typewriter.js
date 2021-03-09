const sentence = `Tautrion Stoneglutes, Goddess-King of the Petalsworn Death-Clan, drew their deadly blade with a deadly glare, striking a deadly pose. "Watch out," they said with deadly...deadliness. "Or you'll be dead."`;

let delay = 0;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), delay);
  delay += 20;
};

setTimeout(() => process.stdout.write("\n"), delay);