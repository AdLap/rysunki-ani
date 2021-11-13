import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormSection, FormStyled, InputStyled, InputSubmit, LabelStyled } from './Contact.styled';

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required()
});

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => console.log(data);

    return (
        <FormSection>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <LabelStyled htmlFor='name'>Imię</LabelStyled>
                <InputStyled {...register('name')} />
                {errors.name && 'Wpisz swoje Imię'}
                
                <LabelStyled htmlFor='email'>Email</LabelStyled>
                <InputStyled {...register('email')} />
                {errors.email && 'Wpisz prawdłowy adres email'}
                
                <LabelStyled htmlFor='message'>Wiadomość</LabelStyled>
                <InputStyled {...register('message')} />
                {errors.message && 'Napisz dłuższą wiadomość'}
                
                <InputSubmit type='submit' />
            </FormStyled>
        </FormSection>

    );
}

export default Contact;

