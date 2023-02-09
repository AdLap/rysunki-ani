import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormSection, FormStyled, InputSubmit, LabelStyled } from './Contact.styled';

const validationSchema = Yup.object({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(10).required()
});

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => console.log(data);

    return (
        <FormSection>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <LabelStyled htmlFor='name'>
                    Imię
                    <input {...register('name')} />
                    {errors.name && <div className='error'>Wpisz swoje Imię</div>}
                </LabelStyled>

                <LabelStyled htmlFor='email'>
                    Email
                    <input {...register('email')} />
                    {errors.email && <div className='error'>Wpisz prawdłowy adres email</div>}
                </LabelStyled>

                <LabelStyled htmlFor='message'>
                    Wiadomość
                    <textarea rows='4' {...register('message')} />
                    {errors.message && <div className='error'>Napisz dłuższą wiadomość</div>}
                </LabelStyled>

                <InputSubmit type='submit'>
                    Wyślij
                </InputSubmit>
            </FormStyled>
        </FormSection>
    );
}

export default Contact;
