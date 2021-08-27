import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookImage from '../utils/BookImage';
import '../styles/library.css';
import { Link } from 'react-router-dom';
import { booksData } from '../utils/booksData';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { connect } from 'react-redux'

const Library = ({basket}) => {

    const [searchedBook, setSearchedBook] = useState('');
    const [getBook, setGetBook] = useState('');

    useEffect(() => {

        setGetBook(booksData.filter(book => {
            return book.name.toLowerCase().includes(searchedBook.toLowerCase()) 
            || book.author.toLowerCase().includes(searchedBook.toLowerCase());
        }));
    }, [searchedBook]);

    return ( 
        <div>
            <hr />

            <Carousel interval={6000} prevLabel={false} nextLabel={false} variant="dark">
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/sharma-carousel.png"
                    alt="Sharma"
                    style={{height: '400px', width: '100%'}}
                    
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/catmull-carousel.jpg"
                    alt="Creatividad"
                    style={{height: '400px', width: '100%'}}
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/trump-carousel.jpg"
                    alt="Trump"
                    style={{height: '400px', width: '100%'}}
                    />

                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/kelly-carousel.jpg"
                    alt="Resistencia"
                    style={{height: '400px', width: '100%'}}
                    
                    />
                </Carousel.Item>
                
            </Carousel>

            <div className="library__nav">
                    <Link className="library__link">FINANZAS</Link> |
                    <Link className="library__link">DESARROLLO PERSONAL</Link> |
                    <Link className="library__link">BIOGRAFIAS</Link> |
                    <Link className="library__link">MAS PEDIDOS</Link> |
                    <Link className="library__link">CONCURSOS</Link> |
                    <input 
                        placeholder="BUSCAR LIBRO" 
                        className="library__searchBook" 
                        value={searchedBook}
                        onChange={(e) => setSearchedBook(e.target.value)}
                    />
            </div>

            <hr style={{width: '75%', margin: 'auto'}}/>

            <div className="library__featured">

                {
                    !searchedBook 
                    ? <>
                    <div className="featuredBook">
                        <BookImage 
                            src="/assets/img/books/monje.jpg" 
                            alt="book1" 
                            name="El monje que vendió su Ferrari"
                            price="AR$ 1.950"
                            author="Robin Sharma"
                        />
                    </div>
                    <div className="featuredBook">
                        <BookImage 
                            src="/assets/img/books/secretos.jpg" 
                            alt="book2" 
                            name="Secretos de la mente millonaria"
                            price="AR$ 1.950"
                            author="Harv Eker"
                        />
                    </div>
                    
                    <div className="featuredBook">
                        <BookImage 
                            src="/assets/img/books/musk.jpg" 
                            alt="book3" 
                            name="Elon Musk"
                            price="AR$ 1.950"
                            author="Ashlee Vance"
                        />
                    </div>
                    
                    <div className="featuredBook">
                        <BookImage 
                            src="/assets/img/books/dinero.jpg" 
                            alt="book4" 
                            name="Dinero: Domina el juego"
                            price="AR$ 1.950"
                            author="Anthony Robbins"
                        />
                    </div>
                    </>
                    : 
                    <>
                    {getBook.map( (book, i) => (
                        <div className="library__filtered" key={i}>
                            <BookImage 
                                src={book.src}
                                alt={`book${i}`}
                                price={book.price}
                                author={book.author}
                                button
                                big
                            />
                        </div>
                    ))}
                    </>
                }
                
                
            </div>

            <hr style={{width: '75%', margin: 'auto'}}/>

            <div className="library__allBooks">
                    <div className="library__headerContainer">
                        <div className="library__leftHeader">
                            <p style={{display: 'flex'}}>NUESTROS LIBROS</p>
                        </div>
                        <div className="library__rightHeader">
                            <Link to='/checkout'>
                                <ShoppingBasketOutlinedIcon fontSize="large" style={{cursor: 'pointer', display: 'inline'}}/>
                            </Link>
                            {basket.basketList.length}
                        </div>
                    </div>
                
                
                <div>
                    {booksData.map( (book, i) => (
                        <>
                            <BookImage 
                                src={book.src}
                                alt={`book${i}`}
                                price={book.price}
                                author={book.author}
                                button
                                big
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return { basket: state.basket }
}

export default connect(mapStateToProps, null)(Library);