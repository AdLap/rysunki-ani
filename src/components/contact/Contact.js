import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FormSection, FormStyled, InputSubmit, LabelStyled } from './Contact.styled';
import { ErrorStyled } from '../global/Error.styled';
import { Spinner } from '../global/Spinner.styled';
import Success from '../global/Success';
import Error from '../global/Error';

const validationSchema = Yup.object({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(10).required()
});

const validationErrorMessages = {
    name: 'Wpisz swoje Imię',
    email: 'Wpisz prawdłowy adres email',
    message: 'Napisz dłuższą wiadomość'
}

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState({
        state: false,
        message: ''
    });
    const [error, setError] = useState({
        state: false,
        message: ''
    });
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const showingSuccess = () => {
        setSuccess({
            state: true,
            message: 'Wiadomość wysłana'
        });
        setTimeout(() => {
            setSuccess({
                state: false,
                message: ''
            })
        }, 2000)
    }

    const onSubmit = async (data) => {
        setSubmitting(() => true);
        try {
            const result = await emailjs.send('email_AnnaGallery', 'AnnaGallery', data, 'AxE3JnpPFN08AbJvQ')
            if (result.text === 'OK') {
                showingSuccess();
            }
            reset();
        } catch (error) {
            setError({
                state: true,
                message: 'Wiadomość nie wysłana, spróbuj poźniej'
            });
        } finally {
            setSubmitting(() => false);
        }
    }

    return (
        <FormSection>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <LabelStyled htmlFor='name'>
                    Imię
                    <input {...register('name')} />
                    {errors.name && <ErrorStyled>{validationErrorMessages.name}</ErrorStyled>}
                </LabelStyled>

                <LabelStyled htmlFor='email'>
                    Email
                    <input {...register('email')} />
                    {errors.email && <ErrorStyled>{validationErrorMessages.email}</ErrorStyled>}
                </LabelStyled>

                <LabelStyled htmlFor='message'>
                    Wiadomość
                    <textarea rows='4' {...register('message')} />
                    {errors.message && <ErrorStyled>{validationErrorMessages.message}</ErrorStyled>}
                </LabelStyled>

                <InputSubmit type='submit'>
                    Wyślij
                </InputSubmit>
                {
                    error.state && <Error error={error.message} />
                }
            </FormStyled>
            {
                submitting && <Spinner />
            }
            {
                success.state && <Success message={success.message} />
            }

        </FormSection>
    );
}

export default Contact;
