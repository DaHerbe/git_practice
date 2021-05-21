const phrases = ['You will have good luck today', 
                    'There is money in your future',
                    'May the odds be ever in your favor',
                    'If you\'re reading this it\'s already too late'];

const number = Math.floor(Math.random() * phrases.length);

console.log(phrases[number]);