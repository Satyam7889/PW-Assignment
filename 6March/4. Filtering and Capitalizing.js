const library = [
    {bookname:"book1",authorname:"author 1",year:1999},
    {bookname:"book2",authorname:"author 2",year:2001},
    {bookname:"book3",authorname:"author 3",year:1974},
    {bookname:"book4",authorname:"author 4",year:2004},
    {bookname:"book5",authorname:"author 5",year:2013},
    {bookname:"book6",authorname:"author 6",year:2011},
    {bookname:"book7",authorname:"Arjun",year:2017}
]

const remainingBooks = library.filter((book)=>book.year>2010).map((book)=>{
    return {
        bookname: book.bookname,
        authorname: book.authorname.toUpperCase(),
        year: book.year
    }

})

console.log(remainingBooks) 


