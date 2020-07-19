import React from "react";
import { useForm } from "react-hook-form";

import { Form, Grid, Label, Header, Button } from "semantic-ui-react";


const normalizeCardNumber = value => {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0,19) || '';
}
export default () => {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (data) => {
    console.log(" data ", data);
  };
  return (
    <React.Fragment>
      <Grid.Column>
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Header as="h1" textAlign="center">
            Card Number Normalize
          </Header>
          <Form.Field>
            <Label htmlFor="cardNumber">Card Number</Label>
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="cc-55number"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              ref={register}

              onChange={ event => {
                  const {value} = event.target;
                  event.target.value = normalizeCardNumber(value);
              }}
              
            />
          </Form.Field>

          <Form.Field>
            <Button color="pink" type="submit">
              Submit
            </Button>
          </Form.Field>
        </Form>
      </Grid.Column>
    </React.Fragment>
  );
};
