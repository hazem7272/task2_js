

const arrAuthoreQoute = [
    {
        authorName: ' Oscar Wilde',
        authorQuote: 'Be yourself; everyone else is already taken'
    },
    {
        authorName: ' Albert Einstein',
        authorQuote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe'
    },
    {
        authorName: 'Marilyn Monroe',
        authorQuote: 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best'
    },
    {
        authorName: 'Wayne Gretzy',
        authorQuote: 'You miss 100% of the shots you don\'t take.'
    },
    {
        authorName: 'Nelson Mandela',
        authorQuote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        authorName: 'Elbert Hubbard',
        authorQuote: 'Do not take life too seriously. You will not get out alive.'
    },
];


function NewQoute() {
    let index = Math.floor(Math.random() * arrAuthoreQoute.length)
    document.getElementById('authorQuote').innerHTML = arrAuthoreQoute[index].authorQuote
    document.getElementById('authorName').innerHTML = arrAuthoreQoute[index].authorName
}