import React from 'react'
import NavBar from './NavBar';
import Weather from './Weather';
import '../styles/home.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {

    const news = ['asa', 'asas', 'fdf', 'sd']

    return ( 
        <div className="home">
            <div>
                <NavBar />
            </div>
            
            <hr />

            <div className="home__content">
                <div className="home__img" style={{backgroundColor: 'tomato', height: '400px', width: '700px'}}>
                    FOTO
                </div>
            </div> 

            <div className="home__news">
                <div className="news__title">
                    <h4>DEBERIAS SABER</h4>
                </div>
                {/* <div className="home__newsPhotos">
                    <img src="/assets/img/liomessi.jpg" alt="new1" />
                </div>
                <div className="home__newsPhotos">
                    <img src="/assets/img/liomessi.jpg" alt="new1" />
                </div>
                <div className="home__newsPhotos">
                    <img src="/assets/img/liomessi.jpg" alt="new1" />
                </div> */}
                
                <div className="home__container">
                    <div  className="home__newsContainer">
                        <div className="home__newsPhotos">
                            <img src="/assets/img/liomessi.jpg" alt="new1" />
                        </div>
                        <figcaption>Titulo de la noticia que deberias saber</figcaption>
                    </div>
                    <div  className="home__newsContainer">
                        <div className="home__newsPhotos">
                            <img src="/assets/img/liomessi.jpg" alt="new1" />
                        </div>
                        <figcaption>Titulo de la noticia que deberias saber</figcaption>
                    </div>
                    <div  className="home__newsContainer">
                        <div className="home__newsPhotos">
                            <img src="/assets/img/liomessi.jpg" alt="new1" />
                        </div>
                        <figcaption>Titulo de la noticia que deberias saber</figcaption>
                    </div>
                    <div  className="home__newsContainer">
                        <div className="home__newsPhotos">
                            <img src="/assets/img/liomessi.jpg" alt="new1" />
                        </div>
                        <figcaption>Titulo de la noticia que deberias saber</figcaption>
                    </div>
                </div>
                    
                
            </div>

            <div className="home__library">
                <div>
                    <h4><Link className="navBar__link" to='/library'>VISITA NUESTRA TIENDA</Link></h4>
                </div>
                <img src="/assets/img/monje.jpg" alt="book1" />
                <img src="/assets/img/secretos.jpg" alt="book2" />
                <img src="/assets/img/elon.jpg" alt="book3" />
                <img src="/assets/img/dinero.jpg" alt="book4" />
            </div>

            <div className="home__quote">
                <p className="quote"><i>"La vida se basa en organizar y actuar. Nada más. Saber qué se quiere, cómo se quiere, dónde se quiere, y dar el primer paso, luego el 2º y así sucesivamente. La clave es el orden"</i></p>
                <div className="quote__img">
                    <h3>Foto</h3>
                </div>
            </div>

            

        </div>
    );
}
 
export default Home;