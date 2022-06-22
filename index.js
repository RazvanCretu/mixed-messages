const words = {
  verbs: ["is", "eat", "wash", "jump", "make"],
  nouns: ["happiness", "car", "cake", "star", "money"],
  adjectives: ["silly", "mad", "fun", "fast", "yellow"],
};

const randN = () => {
  return Math.floor(Math.random() * 5);
};

const getRandWords = () => {
  return [
    words.verbs[randN()],
    words.nouns[randN()],
    words.adjectives[randN()],
  ];
};

const mixedMessages = () => {
  const [verb, noun, adjective] = getRandWords();

  return `Sometimes I just ${verb} with my ${noun} that is very ${adjective}.`;
};

console.log(mixedMessages());
