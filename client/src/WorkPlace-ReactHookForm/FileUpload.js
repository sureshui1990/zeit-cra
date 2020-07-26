import React, { useState} from "react";
import { useForm } from "react-hook-form";

import { Form, Image,Grid, Label, Header, Button } from "semantic-ui-react";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [ imgPath, setImgPath ] = useState(null);

  const handleSubmitForm = (data) => {
    console.log("file data ", data.uploadedFile[0]);
    const img = URL.createObjectURL(data.uploadedFile[0]);
    setImgPath(img);
    console.log('img',img);
  };
  return (
    <React.Fragment>
      <Grid.Column>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Header as="h1" textAlign="center">
          File Upload
        </Header>
        <Form.Field>
          <input
            type="file"
            name="uploadedFile"
            placeholder="Upload your file"
            ref={register({
              required: true
            })}
          />
          {errors.uploadedFile && (
            <Label color="red" pointing>
              <p>Upload your file</p>
            </Label>
          )}
        </Form.Field>

        <Form.Field>
          <Button color="pink" type="submit">
            Upload
          </Button>
        </Form.Field>
      </Form>
          {imgPath && <Image bordered src={imgPath} title="ben10" alt="ben10" size="medium" /> }
          </Grid.Column>
    </React.Fragment>
  );
};
