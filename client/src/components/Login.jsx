import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/signUp/signUp.css';
import TextError from '../utils/TextError';
import Swal from 'sweetalert2';
import SignInWithGoogle from './SignInWithGoogle';
import history from '../history';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid format').required('¡Requerido!'),
        password: Yup.string().required('¡Requerido!')
    });

    const initialValues = {
        email: email,
        password: password,
    }

    const onSubmit = (values) => {
        setEmail(values.email);
        setPassword(values.password);
    }
    

    const notice = () => {
        Swal.fire({
            icon: 'info',
            text: 'El inicio de sesión por medio de JONES no está disponible por el momento. Los campos de texto sólo están habilitados a modo de demostración. Intente iniciar sesión con Google.',
            showConfirmButton: true,
            confirmButtonText: "De acuerdo",
            confirmButtonColor: '#0d6efd'
        });
    }

    return ( 
        <>
            <hr />
            <div className="signUp__container">
                <div className="login__title">
                    <h5>Iniciar sesión en tu cuenta de JONES</h5>
                    <p><i>¿No tienes una cuenta? <span className="login__span" onClick={() => history.push('/signup')}>¡Crea una!</span></i></p>
                </div>
                <div className="login__google">
                    <SignInWithGoogle/>
                </div>
                
                <div className="horizontal__line">
                    <span>O</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                >
                    <Form>
                        <div className="theField">
                            <Field 
                                type='email' 
                                id='email' 
                                name='email' 
                                className="theInput"
                                placeholder="Correo electrónico"
                            />
                            <ErrorMessage name='email' component={TextError} />
                        </div>

                        <div className="theField">
                            <Field 
                                type='password' 
                                id='password' 
                                name='password' 
                                className="theInput"
                                placeholder="Contraseña"
                            />
                            <ErrorMessage name='password' component={TextError} />
                        </div>
                        <button type='submit' className="submitButton" onClick={notice}>Iniciar sesión</button>
                        <p className="textLogin1"><i>Need help? Check out our FAQs.</i></p>
                        <p className="textLogin2"><i>You can unsubscribe from emails at any time. By signing up you are agreeing to our Terms of Use and Privacy Policy</i></p>
                    </Form>
                </Formik>
                    
            </div>
            <br />
            <br />
        </>
    );
}
 
export default Login;