// Create an array named library that contains multiple objects. Each object should represent a book with properties title, author, and year. Log the title of the first book and the author of the second book.

let library = [
    {
        title : "Clean Code",
        auther : "Robert C. Martin",
        year : 2008,
    },
    {
        title : "The Pragmatic Programmer",
        auther : "Andrew Hunt & David Thomas",
        year : 1999,
    },
    {
        title : "You Don't Know JS",
        auther : "Kyle Simpson",
        year : 2014,
    },
    {
        title : "Introduction to the Theory of Computation",
        auther : "Michael Sipser",
        year : 2006,
    },

    {  
        title : "Design Patterns: Elements of Reusable Object-Oriented Software",
        auther : "Erich Gamma, Richard Helm, Ralph Johnson & John Vlissides",
        year : 1994,
    }
];

console.log(library[0].title)
console.log(library[1].auther)