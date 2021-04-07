'use strict';

const buttonNewQuote = document.querySelector('.quote__button--newquote');

const quotes = [
    {
        text: 'Be yourself, everyone else is already taken',
        author: 'Oscar Wilde'
    },
    {
        text: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
        author: 'Marilyn Monroe'
    },
    {
        text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        author: 'Albert Einstein'
    },
    {
        text: 'If you can\'t explain it to a six year old, you don\'t understand it yourself.',
        author: 'Albert Einstein'
    },
    {
        text: 'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
        author: 'Haruki Murakami'
    },
    {
        text: 'Sometimes the questions are complicated and the answers are simple.',
        author: 'Dr. Seuss'
    },
    {
        text: 'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.',
        author: 'Mark Twain'
    },
    {
        text: 'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.',
        author: 'Paulo Coelho'
    },
    {
        text: 'We\'re all human, aren\'t we? Every human life is worth the same, and worth saving.',
        author: 'J.K. Rowling'
    },
    {
        text: 'Being a woman is a terribly difficult trade since it consists principally of dealings with men.',
        author: 'Joseph Conrad' // czy tu ma byc przecinek???
    } // czy tu ma byc przecinek???
]


function renderNewQuote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const {text, author} = quotes[randomQuote]; // dlaczego ta skladnia wyglada w ten sposob?
    document.querySelector('.quote__content--text').innerHTML = text;
    document.querySelector('.quote__content--author').innerHTML = author;
}

function hexColor() {
    const newColor = `#${Math.floor(Math.random() * 16777590).toString(16)}`; // dlaczego taka skladnia? 
    const color = `color: ${newColor}`;
    const background = `background-color: ${newColor}`;
    const quoteMachine = getQuoteMachine();
    quoteMachine.updateColor(color); // update? to ogolna funckja? jak to dziala?
    quoteMachine.updateBackground(background);
}

function getQuoteMachine() {
    return {
        content: document.querySelector('.quote__content'), //dlaczego taki zapis jak obiekty a nie zmienna?
        iconQuote: document.querySelector('.quote__content--icon'),
        buttonTwitter: document.querySelector('.quote__button--twitter'),
        button: document.querySelector('.quote__button--newquote'),
        background: document.querySelector('body'),
        updateColor(color) {
            this.content.setAttribute('style', color);
            this.buttonTwitter.setAttribute('style', color);
            this.iconQuote.setAttribute('style', color);
        },
        updateBackground(background) {
            this.background.setAttribute('style', background);
            this.button.setAttribute('style', background);
        }
    }
}

buttonNewQuote.addEventListener('click', renderNewQuote);
buttonNewQuote.addEventListener('click', hexColor);