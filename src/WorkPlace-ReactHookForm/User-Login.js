import React from "react";
import { Button, Grid, Form, Label, Header } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const handleSubmitForm = (data) => {
    console.log("data", data);
  };
  return (
    <React.Fragment>
      <Grid.Column largeScreen="13" tablet="13" mobile="14">
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Header as="h1" textAlign="center">
            Login
          </Header>
          <Form.Field>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              ref={register({
                required: "Check your username",
                minLength: { value: 5, message: "Username is Too short" },
              })}
            />
            {errors.userName && (
              <Label color="red" pointing>
                <p>{errors.userName.message}</p>
              </Label>
            )}
          </Form.Field>

          <Form.Field>
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              ref={register({
                required: "Check your password",
                minLength: { value: 5, message: "Password is Too short" },
              })}
            />

            {errors.userPassword && (
              <Label color="red" pointing>
                <p>{errors.userPassword.message}</p>
              </Label>
            )}
          </Form.Field>

          <Button color="pink" type="submit">
            Login
          </Button>
        </Form>
      </Grid.Column>
    </React.Fragment>
  );
};
