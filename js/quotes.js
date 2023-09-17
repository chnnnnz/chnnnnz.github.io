const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Being happy never goes out of style",
        author: "Lilly Pulitzer",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure",
        author: "Mark Twain",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
    },
    {
        quote: "Despite the forecast, live like it's spring",
        author: "Lilly Pulitzer",
    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation",
        author: "Herman Melville",
    },
    {
        quote: "Opportunities don't happen. You create them",
        author: "Chris Grosser",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;