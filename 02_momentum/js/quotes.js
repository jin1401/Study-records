const quotes = [
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
    },
    {
        quote: "Momentum builds success.",
        author: "Suzy Kassem",
    }, 
    {
        quote: "It's very simple; just look at your life to see where you're heading. You're always in a momentum of something.",
        author: "Maria Erving",
    },
    {
        quote: "Instead of talking about what you wish to do, start doing it. Take action towards your dreams.",
        author: "Akiroq Brost",
    },
    {
        quote: "The very act of seeking sets things in motion.",
        author: "Laurie Buchanan, PhD",
    },
    {
        quote: "If a goal doesn’t exist, there is no momentum (other than that which is involved in falling down).",
        author: "Craig D. Lounsbrough",
    },
    {
        quote: "If sorrow as a force is gravity, and mere happiness is inertia, then love and being in love is momentum.",
        author: "Penny Reid",
    },
    {
        quote: "It’s not the size of my feet. Rather, it’s my determination to make them walk.",
        author: "Craig D. Lounsbrough",
    },
    {
        quote: "The quickest route to success is a straight line. A straight line in its purest form, is simple. We must activate the power of simplicity!",
        author: "Troy Sandidge",
    },
    {
        quote: "To gain momentum for growth, keep adding moments of success achieved - however small.",
        author: "Rekha Goel",
    },
    {
        quote: "To gain momentum of growth for yourself, keep adding moments of success achieved - however small.",
        author: "Rekha Goel",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

