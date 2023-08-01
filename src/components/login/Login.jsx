
import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Invalid username')
        .min(6, 'username too short')
        .max(28, 'username too long'),
      password: Yup.string()
        .required('Password required')
        .min(6, 'password too short')
        .max(28, 'password too long'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.resetForm();
    }
  });
  return (
    <VStack as='form' w={{ base: '90%', md: '500px' }} m='auto'
      // @ts-ignore
      justify='center' h='100vh' spacing='1rem' onSubmit={formik.handleSubmit}>
      <Heading>Log In</Heading>

      <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel fontSize='lg'>Username</FormLabel>
        <Input name='username' placeholder='Enter username'
          autoComplete='off' {...formik.getFieldProps('username')}></Input>
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.password && formik.touched.password}>
        <FormLabel fontSize='lg'>Password</FormLabel>
        <Input name='password' placeholder='Enter password' type='password'
          autoComplete='off' {...formik.getFieldProps('password')}></Input>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      
      <ButtonGroup>
        <Button color='teal' type='submit'>Log In</Button>
        <Button onClick={ () => navigate('/register')}>Create Account</Button>
      </ButtonGroup>
    </VStack>
  )
}

export default Login;