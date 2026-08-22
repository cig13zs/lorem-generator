;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LoremGenerator = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  const WORDS = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation',
    'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis',
    'aute', 'irure', 'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum',
    'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non',
    'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ];

  function generateWords(count) {
    count = count || 10;
    const res = [];
    for (let i = 0; i < count; i++) {
      res.push(WORDS[i % WORDS.length]);
    }
    return res.join(' ');
  }

  function generateParagraphs(count) {
    count = count || 3;
    const paras = [];
    for (let i = 0; i < count; i++) {
      const sentences = [];
      for (let j = 0; j < 4; j++) {
        const wCount = 8 + (j % 5);
        const sWords = [];
        for (let k = 0; k < wCount; k++) {
          sWords.push(WORDS[(i * 10 + j * 5 + k) % WORDS.length]);
        }
        const s = sWords.join(' ');
        sentences.push(s.charAt(0).toUpperCase() + s.slice(1) + '.');
      }
      paras.push(sentences.join(' '));
    }
    return paras.join('\n\n');
  }

  return { generateWords: generateWords, generateParagraphs: generateParagraphs };
});
