import { useState } from "react";
import styled from "styled-components";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {
          cars && cars.map((car,index)=>(
            <li>
            <a key={index} href="#">{car}</a>
          </li>
          ))
        }
       
        <li>
          <a href="#">Trade in</a>
        </li>
        <li>
          <a href="#">Used inventory</a>
        </li>
        <li>
          <a href="#">Cyber truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;
const CustomMenu = styled(MenuSharpIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseSharpIcon)`
  cursor: pointer;
`;
export default Header;