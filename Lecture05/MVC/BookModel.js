class BookModel{
    constructor(){
        this.books=[];
        this.nextId=1;
    }

    //CREATE
    AddNewBook(BookData){
        const NewBook={
            id:this.nextId++,
            Name:BookData.Name,
            AuthorName:BookData.AuthorName,
            isIssued:false,
            ...BookData
        }
        this.books.push(NewBook);
        return NewBook;
    }

    //getAllBooks
    getAllBooks(){
        return this.books;
    }

    //getBookById
    getBookById(id){
        return this.books.find((book)=>book.id===id);
    }

    //UpdateBookData
    UpdateBookData(id,UpdatedData){
        const book=this.getBookById(id);
        if(book){
            Object.assign(book,UpdatedData);
        }
        return book;
    }

    //Delete
    DeleteData(id){
        this.books= this.books.filter((book)=>book.id!==id)
    }

    //Search By Book Name
    SearchByName(keyword){
        return this.books.filter((book)=>book.Name.toLowerCase().include(keyword.toLowerCase()));
    }

     //Search By Auth Name
    SearchByName(keyword){
        return this.books.filter((book)=>book.AuthorName.toLowerCase().include(keyword.toLowerCase()));
    }

    //Issuing Book
    issueBook(id){
        const book=this.getBookById(id);
        if(!book){
            return{success:false,msg:"Book Not Found"};
        }
        if(book.isIssued){
            return{msg:"Book is already Issued"};
        }
        book.isIssued=!book.isIssued;
        return{success:true,msg:"Book has been successfully issued"}
    }
}