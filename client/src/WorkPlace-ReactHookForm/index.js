import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import NormalizedCardNumber from "./NormalizedCardNumber";


export default () => {
  const loginBg = {
    height: "100vh",
    width: "100%",
    background: "#e03997",overflow:'auto'
  };
  const centering = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 0,
  };
  const contentStyle = {
    minHeight: "20em",
    paddingTop: "3em",
  };
  return (
    <div style={loginBg}>
      <Grid centered padding="horizontally" style={centering}>
        <Grid.Column computer="7" largeScreen="5" tablet="8" mobile="16">
          <Segment style={contentStyle}>
            <Grid centered>
              <NormalizedCardNumber />
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};
