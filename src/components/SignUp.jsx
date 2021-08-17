import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/signUp.css';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid format').required('Required!'),
        password: Yup.string().required('Required!')
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
    return (
        <>
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
                            {/* <ErrorMessage name='name' component={TextError} /> */}
                        </div>

                        <div className="theField">
                            <Field 
                                type='email' 
                                id='email' 
                                name='email' 
                                className="theInput"
                                placeholder="Correo electrónico"
                            />
                            {/* <ErrorMessage name='email' component={TextError} /> */}
                        </div>

                        <div className="theField">
                            <Field 
                                type='password' 
                                id='password' 
                                name='password' 
                                className="theInput"
                                placeholder="Contraseña"
                            />
                            {/* <ErrorMessage name='password' component={TextError} /> */}
                        </div>
                        <button type='submit' className="submitButton">Registrarse</button>
                    </Form>
                </Formik>
            
        </div>
        <br />
        <br />
        </>
    );
}

export default SignUp;
