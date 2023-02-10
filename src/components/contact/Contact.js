import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FormSection, FormStyled, InputSubmit, LabelStyled } from './Contact.styled';
import { ErrorStyled } from '../global/Error.styled';
import { Spinner } from '../global/Spinner.styled';

const validationSchema = Yup.object({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(10).required()
});

const validationError = {
    name: 'Wpisz swoje Imię',
    email: 'Wpisz prawdłowy adres email',
    message: 'Napisz dłuższą wiadomość'
}

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        try {
            setSubmitting(state => !state);
            const result = await emailjs.send('email_AnnaGallery', 'AnnaGallery', data, 'AxE3JnpPFN08AbJvQ')
            if (result.text === 'OK') {
                setSubmitting(state => !state);
                setSuccess(() => true);
                console.log(result)
            }
        } catch (error) {
            console.log('error catch::', error)
            setError(() => true);
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
                    {errors.name && <ErrorStyled>{validationError.name}</ErrorStyled>}
                </LabelStyled>

                <LabelStyled htmlFor='email'>
                    Email
                    <input {...register('email')} />
                    {errors.email && <ErrorStyled>{validationError.email}</ErrorStyled>}
                </LabelStyled>

                <LabelStyled htmlFor='message'>
                    Wiadomość
                    <textarea rows='4' {...register('message')} />
                    {errors.message && <ErrorStyled>{validationError.message}</ErrorStyled>}
                </LabelStyled>

                <InputSubmit type='submit'>
                    Wyślij
                </InputSubmit>
            </FormStyled>
            {
                submitting && <Spinner />
            }
        </FormSection>
    );
}

export default Contact;
