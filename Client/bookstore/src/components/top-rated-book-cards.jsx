import React, { Fragment, Component } from 'react';
import BookCard from '../components/book-card';
import Loading from '../components/loading';
import BooksService from '../services/books-service';

class TopRatedbookCards extends Component {
    state = {
        books: [],
        isLoading: false,
    }

    static service = new BooksService();

    render() {
        const { books, isLoading } = this.state;

        if (isLoading) {
            return <Loading />
        }

        if (!books.length && !isLoading) {
            return (
                <div>
                    <h2>No books!</h2>
                </div>
            )
        }

        return (
            <Fragment>
                <h2>Top Rated</h2>
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            books.map(book => (
                                <BookCard key={book.id} {...book} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
        try {
            const books = await TopRatedbookCards.service.getTopRatedBooks();

            this.setState({ books });
        } catch (error) {
            console.log('asd' + error);
        }
    }
}

export default TopRatedbookCards;