import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Content from "./content";
import Navbar from "./navbar";
import { focus } from "./Utils";

const Home = (props) => {
  const src = "https://cdn-icons-png.flaticon.com/512/1546/1546140.png";
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const title = "What is Lorem Ipsum?";
  const location = useLocation();
  useEffect(() => {
    focus(location?.state?.focus);
  }, []);
  return (
    <>
      <Navbar routes={props.navbar}></Navbar>
      <Content
        id="sobremim"
        src={src}
        text={text}
        title={title}
        right
      ></Content>
      <Content id="curso" src={src} text={text} title={title} left></Content>
      <Content
        id="curso"
        src={src}
        text={text}
        title={title}
        right
      ></Content>
      <Content id="contato" src={src} text={text} title={title} left></Content>
    </>
  );
};

export default Home;
