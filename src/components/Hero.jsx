import styled from "styled-components";
import HeroImg from "../assets/hero1.png";
import { useContext } from "react";
import { DarkContext } from "../DarkContext";
export default function Hero() {
  const { dark } = useContext(DarkContext);
  return (
    <>
      <div className=" flex justify-between items-center md:flex-col sm:flex-col flex-wrap lg:flex-row lg:mr-14 lg:ml-14">
        <div className="flex justify-center items-center lg:items-start flex-col m-2 p-3 flex-1">
          <h1 className="text-4xl lg:text-7xl font-bold b gradient-text">
            Discover the Sound of Freedom..
          </h1>
          <p
            className={`text-slate-600 italic text-md lg:text-xl mt-4 mb-4  ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Unleash the power of immersive audio with our premium range of
            headphones. Whether you're a music aficionado, a gaming enthusiast,
            or simply seeking solace in your favorite podcasts, our headphones
            deliver unparalleled sound quality, comfort, and style.
          </p>
          <Button dark={dark}>Explore More..</Button>
        </div>

        {/* for image  */}
        <div className="">
          <img src={HeroImg} alt="Hero_Image" width={500} height={500} />
        </div>
      </div>
    </>
  );
}

const Button = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid ${(props) => (props.dark ? "white" : "black")};
  padding: 10px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  color: ${(props) => (props.dark ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.dark ? "#ff1c34 " : "#ff1c34 ")};
    color: ${(props) => (props.dark ? "white" : "white")};
    border: none;
  }
`;
