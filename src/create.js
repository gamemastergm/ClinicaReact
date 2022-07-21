import { Typography, Dialog, TextField, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";

const Create = (props) => {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
  return (
    <Dialog open={props.open}>
      <CancelIcon
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          props.setOpen(false);
        }}
      ></CancelIcon>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "30px",
          margin: "30px",
          width: "400px",
          height: "500px",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <TextField onChange={(e)=> {setName(e.target.value)}} style={{ width: "200px" }} label="Name"></TextField>
          <TextField onChange={(e)=> {setCpf(e.target.value)}} style={{ width: "200px" }} label="CPF"></TextField>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TextField onChange={(e)=> {setRoom(e.target.value)}} style={{ width: "200px" }} label="Room"></TextField>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <TextField onChange={(e)=> {setDate(e.target.value)}} style={{ width: "200px" }} type={"date"}></TextField>
          <TextField onChange={(e)=> {setHour(e.target.value)}} style={{ width: "200px" }} type={"time"}></TextField>
        </div>
        <Button onClick={()=>{props.setAgendamentoList([...props.agendamentoList,{name,cpf,room,date,hour}])}} variant="contained">Submit</Button>
      </div>
    </Dialog>
  );
};

export default Create;
