import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/signUp.css';
import ShowPassword from '../utils/ShowPassword';
import TextError from './TextError';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid format').required('Required!'),
        password: Yup.string().required('Required!')
    });

    const initialValues = {
        email: email,
        password: password,
    }

    const onSubmit = (values) => {
        setEmail(values.email);
        setPassword(values.password);
    }
    return ( 
        <>
        <div className="signUp__container">
            <div className="login__title">
                <h5><i>Iniciar sesión en tu cuenta de JONES</i></h5>
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
                                // component={ShowPassword}
                            />
                            <ErrorMessage name='password' component={TextError} />
                        </div>
                        <button type='submit' className="submitButton">Iniciar sesión</button>
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