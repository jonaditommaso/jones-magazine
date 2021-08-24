import Carousel from 'react-bootstrap/Carousel';
import BookImage from '../utils/BookImage';
import '../styles/library.css';
import { Link } from 'react-router-dom';

const Library = () => {
    return ( 
        <div>
            <hr />

            <Carousel  interval={6000} prevLabel={false} nextLabel={false} variant="dark">
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/sharma-carousel.png"
                    alt="Sharma"
                    style={{height: '400px', width: '100%'}}
                    
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/catmull-carousel.jpg"
                    alt="Creatividad"
                    style={{height: '400px', width: '100%'}}
                    />
                    
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/trump-carousel.jpg"
                    alt="Trump"
                    style={{height: '400px', width: '100%'}}
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    // className="d-block w-100"
                    src="/assets/img/carousel-library/kelly-carousel.jpg"
                    alt="Resistencia"
                    style={{height: '400px', width: '100%'}}
                    
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                
            </Carousel>

            <div className="library__nav">
                    <Link className="library__link">FINANZAS</Link> |
                    <Link className="library__link">DESARROLLO PERSONAL</Link> |
                    <Link className="library__link">BIOGRAFIAS</Link> |
                    <Link className="library__link">MAS PEDIDOS</Link> |
                    <Link className="library__link">CONCURSOS</Link> |
                    <Link className="library__link">BUSCAR LIBRO</Link>
            </div>

            <hr style={{width: '75%', margin: 'auto'}}/>

            <div className="library__featured">
                <BookImage 
                    src="/assets/img/monje.jpg" 
                    alt="book1" 
                    name="El monje que vendió su Ferrari"
                    price="AR$ 1.950"
                    author="Robin Sharma"
                />
                <BookImage 
                    src="/assets/img/secretos.jpg" 
                    alt="book2" 
                    name="Secretos de la mente millonaria"
                    price="AR$ 1.950"
                    author="Harv Eker"
                />
                <BookImage 
                    src="/assets/img/elon.jpg" 
                    alt="book3" 
                    name="Elon Musk"
                    price="AR$ 1.950"
                    author="Ashlee Vance"
                />
                <BookImage 
                    src="/assets/img/dinero.jpg" 
                    alt="book4" 
                    name="Dinero: Domina el juego"
                    price="AR$ 1.950"
                    author="Anthony Robbins"
                />
            </div>
        </div>
     );
}
 
export default Library;