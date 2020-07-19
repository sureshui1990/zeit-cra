
import React from 'react';
import { Button,Grid, Form,Label,Header  } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

export default () => {
        const { register, handleSubmit, errors } = useForm();
        const handleSubmitForm = data => {
            console.log('data', data);
        }
        return (
            <React.Fragment>
                <Grid.Column largeScreen="13" tablet="13" mobile="14" >
                    <Form onSubmit={handleSubmit(handleSubmitForm)}>
                         <Header as='h1' textAlign="center">Register</Header>
                        
                        <Form.Field>
                            <input type="text" name="firstName"
                            placeholder="First Name"
                            ref={register({required: 'Check your first name', minLength: {value:5,message:'First name is Too short'} })} />
                            {errors.firstName &&
                            <Label color="red" pointing>
                                <p>{errors.firstName.message}</p>
                            </Label>
                            }
                        </Form.Field>
                        
                        <Form.Field>
                            <input type="text" name="lastName"
                            placeholder="Last Name"
                            ref={register({required: 'Check your lastName', minLength: {value:5,message:'last is Too short'} })} />
                            {errors.lastName &&
                            <Label color="red" pointing>
                                <p>{errors.lastName.message}</p>
                            </Label>
                            }
                        </Form.Field>
                        
                        <Form.Field>
                            <input type="text" name="userName"
                            placeholder="Username please"
                            ref={register({required: 'Check your username', minLength: {value:5,message:'Username is Too short'} })} />
                            {errors.userName &&
                            <Label color="red" pointing>
                                <p>{errors.userName.message}</p>
                            </Label>
                            }
                        </Form.Field>
                        
                        <Form.Field>
                            <input type="email" name="emailId"
                            placeholder="EmailId"
                            ref={register({required: 'Valid email please', minLength: {value:8,message:'emailId is Too short'} })} />
                            {errors.emailId &&
                            <Label color="red" pointing>
                                <p>{errors.emailId.message}</p>
                            </Label>
                            }
                        </Form.Field>
                        
                        <Form.Field>
                            <input type="text" name="mobileNumber"
                            placeholder="Mobile Number"
                            ref={register({required: 'Check your mobileNumber', minLength: {value:10,message:'MobileNumber is Too short'} })} />
            
                            {errors.mobileNumber &&
                            <Label color="red" pointing>
                                <p>{errors.mobileNumber.message}</p>
                            </Label>
                            }
                        </Form.Field>
        
                        <Button color="pink" type="submit">Sign Up</Button>
                     </Form>
                </Grid.Column>
            </React.Fragment>
    )
}