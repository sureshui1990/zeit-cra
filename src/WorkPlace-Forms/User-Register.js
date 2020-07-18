
import React from 'react';
import { Button,Grid, Form,Segment,Label,Header } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

export default () => {
        const { register, handleSubmit, errors } = useForm();
        const handleSubmitForm = data => {
            console.log('data', data);
        }
        const loginBg = {
            height:'100vh',
            width:'100%',
            background: '#e03997'
        }
        const centering = {
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',margin:0
        }
        const contentStyle={
            minHeight:'20em',paddingTop:'3em'
        }
        return (
            <div style={loginBg}>
                <Grid centered padding="horizontally" style={centering}>
                    <Grid.Column computer="7" largeScreen="5" tablet="8" mobile="16" >

                            <Segment style={contentStyle}>
                            <Grid centered>
                                <Grid.Column largeScreen="13" tablet="13" mobile="14" >
                                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                            <Header as='h1' textAlign="center">Login</Header>
                        <Form.Field>
                            <input type="text" name="userName"
                            placeholder="Username"
                            ref={register({required: 'Check your username', minLength: {value:5,message:'Username is Too short'} })} />
                            {errors.userName &&
                            <Label color="red" pointing>
                                <p>{errors.userName.message}</p>
                            </Label>
                            }
                        </Form.Field>
                        
                        <Form.Field>
                            <input type="password" name="userPassword"
                            placeholder="Password"
                            ref={register({required: 'Check your password', minLength: {value:5,message:'Password is Too short'} })} />
            
                            {errors.userPassword &&
                            <Label color="red" pointing>
                                <p>{errors.userPassword.message}</p>
                            </Label>
                            }
                        </Form.Field>
        
                        <Button color="pink" type="submit">Login</Button>
                </Form>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        
                    </Grid.Column>
                </Grid>
            </div>
    )
}