import { useSnackbar } from 'notistack';
import '../styles/bookImage.css';
import { connect } from 'react-redux';
import { addToBasket } from '../actions';

const Notistack = ({addToBasket}) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
      enqueueSnackbar('Libro añadido');
      addToBasket('funciona!')
    };
  
    return (
      <>
        <button className="book__button" onClick={() => handleClick()}>Añadir al carrito</button>
      </>
    );
  }
 
  const mapStateToProps = (state) => {
    console.log(state.basket)
    return { basket: state.basket }
  }
  
  export default connect(mapStateToProps, {addToBasket})(Notistack);