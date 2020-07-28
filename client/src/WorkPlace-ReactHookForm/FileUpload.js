import React, { useState} from "react";
import { useForm } from "react-hook-form";

import { Form, Image,Grid, Label, Header, Button } from "semantic-ui-react";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [ image, setImage ] = useState({preview:'', raw:''});
  const [ uploadedFile, setUploadedFile ] = useState({});

  const handleFile = e=>{
    if(e.target.files.length){
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  }
  const handleUpload = async (data) => {
    const formData = new FormData();
    formData.append('file',image.raw);
    try{
      const res = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "charset":"utf-8"
        },
        body: formData
      });
      const resJson = await res.json();
      const [fileName, filePath ] = resJson.data;
      setUploadedFile({fileName, filePath});
    }catch(err){
      console.log('err',err);
    }
  }

   return (
    <React.Fragment>
      <Grid.Column>
      <Form onSubmit={handleSubmit(handleUpload)}>
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
            onChange={handleFile}
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
          {image && image.preview && <Image bordered src={image.preview} title="ben10" alt="ben10" size="medium" /> }
          </Grid.Column>
    </React.Fragment>
  );
};
