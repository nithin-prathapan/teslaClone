import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftbtnText,
  rightBtnText,
  backgroundimg,
}) {
  return (
    <Wrap bgImage={backgroundimg}>
      <Fade bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itemtext>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftbtnText}</LeftButton>
            {rightBtnText && <Rightbutton>{rightBtnText}</Rightbutton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
  
`;
const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background: orange;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical;
  align-items: center; //horizontal;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-diretion: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26.32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const Rightbutton = styled.div`
  background-color: rgba(23, 26.32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;

  overflow-x: hidden;
  margin-left: 50%;
  margin-right: 50%;
`;
const Buttons = styled.div``;
export default Section;
