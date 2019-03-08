import { get } from '../data/crud.js'

class BooksService {
    constructor() {
        this.baseUrl = 'http://localhost:500/book';
        this.allBooksUrl = `${this.baseUrl}/all`;
    }

    getTopRatedBooks() {
        return get(this.allBooksUrl);
    }
}

export default BooksService;