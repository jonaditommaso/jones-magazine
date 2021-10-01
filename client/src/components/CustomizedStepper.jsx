import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper'; // ---------> Envolve
import Step from '@material-ui/core/Step'; // ---> Cada paso, que se mapea
import StepLabel from '@material-ui/core/StepLabel'; // --> Componente que renderiza el label de cada step
import StepConnector from '@material-ui/core/StepConnector'; // lo necesita estilos, colorlibconnector
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import history from '../history';
import { emptyBasket } from '../actions';
import { connect } from 'react-redux';


import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,   // --------------------------------------------> ALTURA DE LA LINEA
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#86b7fe 0%, #2754d5 50%, #0d6efd 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#86b7fe 0%, #2754d5 50%, #0d6efd 100%)',
    },
  },
  line: {
    height: 3, //--------------------> GROSOR DE LA LINEA
    border: 0, // no afecta
    backgroundColor: '#eaeaf0', // ---> COLOR DE LA LINEA
    borderRadius: 1, // no afecta
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #86b7fe 0%, #2754d5 50%, #0d6efd 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #86b7fe 0%, #2754d5  50%, #0d6efd 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = { // -----------------------------> ICONS
    1: <ShoppingBasketOutlinedIcon />,
    2: <PaymentOutlinedIcon />,
    3: <SentimentSatisfiedAltOutlinedIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',    // --------------------------------------------> WIDTH DEL STEP
  },
  button: {
    marginRight: theme.spacing(1), // ----------> botones back next
    // backgroundColor: '#0d6efd'
  },
  instructions: {
    marginTop: theme.spacing(5), // --------------> texto/instrucciones arriba de los botones
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['REVISA TU COMPRA', 'SELECCIONA MÉTODO DE PAGO', '¡COMPRAR!']; //--> MSJE ABAJO DEL ICON
}

function getStepContent(step) {  // ---------------------> MSJES QUE APARECEN ABAJO
  switch (step) {
    case 0:
      return 'Asegúrate de que sean los libros que quieres comprar';
    case 1:
      return '¡Falta poco! Elige una opción de pago para realizar tu compra';
    case 2:
      return '¿Está todo en orden? ¿Ya elegiste cómo pagarlo? ¡Realiza tu compra!';
    default:
      return 'Posiblemente haya ocurrido un error. ¡No te preocupes! Lo solucionaremos.';
  }
}

const CustomizedStepper = ({emptyBasket, alert, confirm}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0); // ----------> POSICION INICIAL 
  const steps = getSteps();

  useEffect(() => {
    if(confirm === true) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [confirm])

// console.log(activeStep)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === 0) {
      alert(true);
    }
    // getStepForModal(activeStep);
  };

  
  

  const purchaseMade = () => {
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: `Disfrútalo. ¡Gracias por confiar en nosotros!`,
      icon: 'success',
      confirmButtonText: 'Regresar a la librería',
      confirmButtonColor: '#0d6efd',
      backdrop: false
    }).then(result => {
      if(result.isConfirmed) {
        history.push('/library');
        emptyBasket()
      }
    });
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0); // reinicia
  // };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
      
      </>
      <div>
        {activeStep === steps.length ? ( // -----> si el paso actual es igual a la cantidad de pasos es porque se termino. y devuelve esto:
          <div> 
            {/* puedo devolver esto o mejor un sweet alert */}
            {/* <Typography className={classes.instructions}> 
              Su compra fue realizada con exito !
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Regresar a la libreria
            </Button> */}
            {purchaseMade()}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Volver
              </Button>
              <Button
                variant="contained"
                style={{backgroundColor: '#0d6efd', color: 'white'}}
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { basketList: state.basket.basketList }
}

export default connect(mapStateToProps, { emptyBasket })(CustomizedStepper);