const quotes = [
    {
        quote: "Rudeness is the weak man's imitation of strength.",
        author:"Eric Hoffer",
    },
    {
        quote: "Nothing is stronger than habit.",
        author:"Publius Naso Ovidius",
    },
    {
        quote: "To love someone is to identify with them",
        author:"Aristotle",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author:"Carol Burnet",
    },
    {
        quote: "Patience is bitter, but its fruit is sweet.",
        author:"Aristotle",
    },
    {
        quote: "If you would win a man to your cause, First convince him that you are his sincere friend.",
        author:"Abraham Lincoln",
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself",
        author:"George Bernard Shaw",
    },
    {
        quote: "Everyone thinks of changing the world, but no one thinks of changing himself",
        author:"Leo Tolstoy",
    },
    {
        quote: "The secret to success is to do the common things uncommonly well",
        author:"John D. Rockefeller",
    },
    {
        quote: "Curious things, habits. People themselves never knew they had them.",
        author:"Agatha Christie",
    },
    {
        quote: "It's not whether you get knocked, It's whether you get back up.",
        author:"Vince Lombardi",
    },
    {
        quote: "They say that time changes things, but you actually have to change them yourself.",
        author:"Andy Warhol",
    }
]

const quote = document.querySelector("#quotes-form span:first-child");
const author = document.querySelector("#quotes-form span:last-child");
// 2번째 span요소를 고르고 싶다? -> "#quote-form span:nth-child(2)"
// 뒤에서 부터 세러면 nth-last-child()

const getNumber = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[getNumber].quote;
author.innerText = quotes[getNumber].author;

// Math.round(number); -> 반올림
// Math.ceil(number); -> 올림
// Math.floor(number); -> 내림