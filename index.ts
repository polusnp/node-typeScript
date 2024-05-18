interface ILibrary {
    sections: Isection[];
    books: IBook[];
    readers: IReader[];
}

class Library implements ILibrary {
    private _sections: Isection[] = [];
    private _books: IBook[] = [];
    private _readers: IReader[] = [];

    get sections(): Isection[] {
        return this._sections;
    }

    get books(): IBook[] {
        return this._books;
    }

    get readers(): IReader[] {
        return this._readers;
    }
}

interface Isection {
    name: string;
    books: IBook[];
}

class Section implements Isection {
    private _name: string;
    private _books: IBook[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get books(): IBook[] {
        return this._books;
    }
}

interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    quantity: number;
    genre: string;
}

class Book implements IBook {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public year: number,
        public quantity: number,
        public genre: string
    ) {}
}

interface IReader {
    firstName: string;
    lastName: string;
    cardNumber: string;
    borrowedBooks: IBook[];
}

class Reader implements IReader {
    private _borrowedBooks: IBook[] = [];

    constructor(
        public firstName: string,
        public lastName: string,
        public cardNumber: string
    ) {}

    get borrowedBooks(): IBook[] {
        return this._borrowedBooks;
    }

    addBorrowedBook(book: IBook): void {
        this._borrowedBooks.push(book);
    }

    removeBorrowedBook(book: IBook): void {
        const index = this._borrowedBooks.findIndex((b) => b.id === book.id);
        if (index !== -1) {
            this._borrowedBooks.splice(index, 1);
        }
    }
}
