import { useSnackbar } from 'notistack';
import '../styles/bookImage/bookImage.css';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket } from '../actions';
import Swal from 'sweetalert2';
import history from '../history';

const Notistack = ({addToBasket, removeFromBasket, redux, remove, basket, userGoogle}) => {
    const { enqueueSnackbar } = useSnackbar();

    const logAlert = () => {
      Swal.fire({
        icon: 'warning',
        text: 'Debes iniciar sesión para añadir artículos a la canasta',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "De acuerdo",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#0d6efd',
    })
        .then((result) => {
            if (result.value) {
                history.push('/login');
            }
        }); 
    }

    const handleClick = () => {

      if(!userGoogle) {
        logAlert();
      }
      else {
        if(remove) {
          enqueueSnackbar('Libro quitado');
          removeFromBasket(redux.id)
        }

        else {
          enqueueSnackbar('Libro añadido');
          addToBasket(redux.name, redux.price, redux.author, redux.src, redux.alt, redux.id);
        }
        }
    };
  
    return (
      <>
        <button className="book__button" onClick={() => handleClick()}>
          {remove ? 'Quitar del carrito' : 'Añadir al carrito'}
        </button>
      </>
    );
  }
 
  const mapStateToProps = (state) => {
    return { 
      basket: state.basket,
      userGoogle: state.google.userId
    }
  }
  
  export default connect(mapStateToProps, {addToBasket, removeFromBasket})(Notistack);