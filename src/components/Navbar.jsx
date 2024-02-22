import { useContext } from "react";
import styled from "styled-components";
import { DarkContext } from "../DarkContext";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(DarkContext);
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-3xl font-medium gradient-text">Dark Mode</h1>

        <div>
          <ul className="flex items-center gap-10 text-xl font-medium">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <Button dark={dark} onClick={toggleTheme}>
            Dark Mode
          </Button>
        </div>
      </div>
    </>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${(props) => (props.dark ? "white" : "black")};
  padding: 10px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  color: ${(props) => (props.dark ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.dark ? "white" : "black")};
    color: ${(props) => (props.dark ? "black" : "white")};
  }
`;
