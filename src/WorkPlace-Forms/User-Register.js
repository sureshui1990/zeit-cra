
import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

export default () => {
        const { register, handleSubmit, errors } = useForm();
        const handleSubmitForm = data => {
            console.log('data', data);
        }
        return (
            <Form onSubmit={handleSubmit(handleSubmitForm)}>

                <Form.Field>
                    <label>Username </label>
                    <input type="text" placeholder="Your Username" name="userName" ref={register} />
                </Form.Field>
                
                <Form.Field>
                    <label>Password </label>
                    <input type="password" placeholder="Your Password" name="userPassword"
                     ref={register({required: 'Passwrd plz', minLength: {value:5,message:'Too short'} })} />
                    
                     {errors.userPassword &&
                     <Message negative>
                         <p>{errors.userPassword.message}</p>
                     </Message>
                     }
                </Form.Field>

                <Button type="submit">Login</Button>    
        </Form>
    )
}