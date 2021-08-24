import '../styles/bookImage.css';

const BookImage = ({src, alt, name, price, rating, author}) => {
    return ( 
        <div className="bookImage__container">
            <img src={src} alt={alt} loading="lazy" className="bookImage" />
            <div className="book__data">
                <p className="book__name">{name}</p>
                <p><i>{author}</i></p>
                <p>{price}</p>
                <p>{rating}</p>
            </div>
        </div>
     );
}
 
export default BookImage;