const Content = (props) => {
  const contendDivStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "30px",
    margin: "30px",
    boxShadow: "0 0 1em black",
    maxWidth: "1000px",
  };
  const contentImg = () => {
    return (
      <img
        src={props.src}
        style={{
          width: "40vw",
          height: "40vw",
          margin: "5vw",
          maxWidth: "300px",
          maxHeight: "300px",
        }}
      ></img>
    );
  };
  const contentText = () => {
    return (
      <div style={{ color: "black", margin: "5vw" }}>
        <h1 style={{ color: "black" }}>{props.title}</h1>
        <p style={{ color: "black", }}>{props.text}</p>
      </div>
    );
  };
  return (
    <div
      id={props.id}
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {props.left ? (
        <div style={contendDivStyle}>
          {contentImg()}
          {contentText()}
        </div>
      ) : (
        <div style={contendDivStyle}>
          {contentText()}
          {contentImg()}
        </div>
      )}
    </div>
  );
};
export default Content;
