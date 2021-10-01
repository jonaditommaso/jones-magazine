import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/signUp/signUp.css';
import Swal from 'sweetalert2';
import history from '../history';
import TextError from './TextError';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('¡Requerido!'),
        email: Yup.string().email('Invalid format').required('¡Requerido!'),
        password: Yup.string().required('¡Requerido!')
    });

    const initialValues = {
        name: name,
        email: email,
        password: password,
    }

    const onSubmit = (values) => {
        setName(values.name);
        setEmail(values.email);
        setPassword(values.password);
    }

    const notice = () => {
        Swal.fire({
            icon: 'info',
            text: 'El registro de cuenta en JONES no está disponible por el momento. Los campos de texto sólo están habilitados a modo de demostración. Intente iniciar sesión con Google.',
            showConfirmButton: true,
            confirmButtonText: "De acuerdo",
            confirmButtonColor: '#0d6efd',
            backdrop: false
        }).then(result => {
            if(result) {
                history.push('/login')
            }
        })
    }

    return (
        <>
        <hr />
        <div className="signUp__container">
             <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                >
                    <Form>
                        <div className="theField">
                            <Field 
                                type='text' 
                                id='name' 
                                name='name' 
                                className="theInput"
                                placeholder="Nombre"
                            />
                            <ErrorMessage name='name' component={TextError} />
                        </div>

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
                        <button type='submit' className="submitButton" onClick={notice}>Registrarse</button>
                    </Form>
                </Formik>
            
        </div>
        <br />
        <br />
        </>
    );
}

export default SignUp;
