import React from "react";
import styled from "styled-components";
import Section from "./Section";


function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online Toucheless Delivery "
        backgroundimg="model-s.jpg"
        leftbtnText="Custom order"
        rightBtnText="Existing Inventory"
      ></Section>
      <Section
        title="Model Y"
        description="Order Online Toucheless Delivery "
        backgroundimg="model-y.jpg"
        leftbtnText="Custom order"
        rightBtnText="Existing Inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order Online Toucheless Delivery "
        backgroundimg="model-3.jpg"
        leftbtnText="Custom order"
        rightBtnText="Existing Inventory"
      ></Section>
      <Section
        title="Model X"
        description="Order Online Toucheless Delivery "
        backgroundimg="model-X.jpg"
        leftbtnText="Custom order"
        rightBtnText="Existing Inventory"
      ></Section>
      <Section
        title="Lowest Cost Solar Panels In America "
        description="Money Back Guarentee "
        backgroundimg="solar-panel.jpg"
        leftbtnText="Order Now"
        rightBtnText="Learn More"
      ></Section>
       <Section
        title="Solar For New Roofs "
        description="Solar Roofs Costs Lesser Than a New Roof Plus Solar panels "
        backgroundimg="solar-roof.jpg"
        leftbtnText="Order Now"
        rightBtnText="Learn More"
      ></Section>
       <Section
        title="Accessories "
        description="Money Back Guarentee "
        backgroundimg="accessories.jpg"
        leftbtnText="Order nOW"
      ></Section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;

export default Home;
