import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookImage from '../utils/BookImage';
import '../styles/library/library.css';
import { Link } from 'react-router-dom';
import { booksData } from '../utils/booksData';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { connect } from 'react-redux'
import GoTopButton from '../utils/GoTopButton';
// import CarouselItem  from '../utils/CarouselItem';
import SidebarFilterBooks from '../utils/SidebarFilterBooks'

const Library = ({basket}) => {

    const [searchedBook, setSearchedBook] = useState('');
    const [getBook, setGetBook] = useState('');
    const [filterBooks, setFilterBooks] = useState([]);
    const [showInputToSearch, setShowInputToSearch] = useState(false)

    useEffect(() => {

        setGetBook(booksData.filter(book => {
            return book.name.toLowerCase().includes(searchedBook.toLowerCase()) 
            || book.author.toLowerCase().includes(searchedBook.toLowerCase());
        }));

    }, [searchedBook]);

    
    const selectFilter = (select) => {
        setFilterBooks(booksData.filter(categoryBook => {
            return categoryBook.category.includes(select);
        }));
    }

    const onChangeSearch = (e) => {
        setSearchedBook(e.target.value);
        setFilterBooks('');
    }

    return ( 
        <>
            <div>
                <hr />
                <div className="library__carousel">
                <Carousel interval={6000} prevLabel={false} nextLabel={false} variant="dark">
                    {/* WHY NOT WORKING? */}
                    {/* <CarouselItem name="sharma" /> */}
                    {/* <CarouselItem name="catmull" /> */}
                    {/* <CarouselItem name="trump" /> */}
                    {/* <CarouselItem name="kelly" /> */}
                     <Carousel.Item >
                        <img
                        src="/assets/img/carousel-library/sharma-carousel.png"
                        alt="Sharma"
                        style={{height: '400px', width: '100%'}}
                        
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        src="/assets/img/carousel-library/catmull-carousel.jpg"
                        alt="Creatividad"
                        style={{height: '400px', width: '100%'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        src="/assets/img/carousel-library/trump-carousel.jpg"
                        alt="Trump"
                        style={{height: '400px', width: '100%'}}
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        src="/assets/img/carousel-library/kelly-carousel.jpg"
                        alt="Resistencia"
                        style={{height: '400px', width: '100%'}}
                        
                        />
                    </Carousel.Item>
                    
                </Carousel>
                </div>

                <div>
                    <div className="library__nav">
                        <Link className="library__link" onClick={()=> selectFilter('finance')}>FINANZAS</Link> |
                        <Link className="library__link" onClick={()=> selectFilter('personalDevelopment')}>DESARROLLO PERSONAL</Link> |
                        <Link className="library__link" onClick={()=> selectFilter('biographies')}>BIOGRAFIAS</Link> |
                        <Link className="library__link" onClick={()=> selectFilter('moreOrders')}>MAS PEDIDOS</Link> |
                        {/* <Link className="library__link">CONCURSOS</Link> | */}
                        <input 
                            placeholder="BUSCAR LIBRO" 
                            className="library__searchBook" 
                            value={searchedBook}
                            onChange={(e) => onChangeSearch(e)}
                        />
                    </div>
                    <div className="library__principalNav">
                        <div className="library__filterSidebar">
                            <SidebarFilterBooks filter={selectFilter} showSearchInput={setShowInputToSearch} />
                        </div>
                        <Link to='/checkout' className="library__link" style={{color: '#0D6EFD'}}>
                                <ShoppingBasketOutlinedIcon fontSize="large" style={{cursor: 'pointer', display: 'inline'}}/>
                                {basket.basketList.length}
                        </Link>
                    </div>
                    
                </div>

                <div className={showInputToSearch ? 'inputSearchBook' : 'hiddenInputSearchBook'}>
                    <input 
                        placeholder="BUSCAR LIBRO" 
                        className="library__searchBook phone" 
                        value={searchedBook}
                        onChange={(e) => onChangeSearch(e)}
                    />
                </div>
                
                <hr style={{width: '75%', margin: 'auto'}}/>

                

                <div className="library__featured">
                    {filterBooks?
                    filterBooks.map((book, i) => (
                        <div className="library__filtered" key={i}>
                            <BookImage 
                                src={book.src}
                                alt={`book${i}`}
                                price={book.price}
                                author={book.author}
                                forRedux={book}
                                button
                                big
                            />
                        </div>
                    ))
                    : <></>
                    }
                    
                </div>


                <div className="library__featured">

                    {
                        !searchedBook 
                        ? <>
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
                                    forRedux={book}
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
                            <p style={{display: 'flex'}}>TODOS NUESTROS LIBROS</p>
                        </div>
                    </div>
                    
                    <div>
                        {booksData.map( (book, i) => (
                            <div key={i} style={{display: 'inline-flex'}}>
                                <BookImage 
                                    src={book.src}
                                    alt={`book${i}`}
                                    price={book.price}
                                    author={book.author}
                                    forRedux={book}
                                    button
                                    big
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <GoTopButton />
            </div>
        
        </>
    );
}

const mapStateToProps = (state) => {
    return { basket: state.basket }
}

export default connect(mapStateToProps, null)(Library);