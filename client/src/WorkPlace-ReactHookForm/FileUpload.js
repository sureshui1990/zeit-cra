import React, { useState} from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

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
  const handleUpload =  (data) => {
    const formData = new FormData();
    formData.append('file',image.raw);

    axios.post('http://localhost:4000/upload',formData)
    .then(response =>{
      console.log(response);
      const {fileName, filePath} = response.data;
      setUploadedFile({fileName, filePath});
    })
    .catch(err => {
      if(err.response.status === 500){
        console.log('There was a server problem');
      }else{
      console.log('err', err.response.message);
      }
    })

  }
  console.log('uploadedFile',uploadedFile)

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
      {uploadedFile && <div>
        <h3>{uploadedFile.fileName}</h3>
      <img src={uploadedFile.filePath} title="dd" alt="ss" />
        </div>}
          {image && image.preview && <Image bordered src={image.preview} title="ben10" alt="ben10" size="medium" /> }
          </Grid.Column>
    </React.Fragment>
  );
};
