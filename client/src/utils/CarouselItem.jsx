import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = ({name}) => {
    console.log(name)
    return ( 
        <Carousel.Item >
            <img
            src={`/assets/img/carousel-library/${name}-carousel.jpg`}
            alt={name}
            style={{height: '400px', width: '100%'}}
                        
        /></Carousel.Item>
    );
}
 
export default CarouselItem;