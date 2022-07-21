import { Typography } from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Create from "./create";
import { DataGrid } from "@mui/x-data-grid";

const Read = (props) => {
  const navigate = useNavigate();
  const [agendamentoList, setAgendamentoList] = useState([]);
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <>
      <Create
        setAgendamentoList={setAgendamentoList}
        agendamentoList={agendamentoList}
        open={OpenModal}
        setOpen={setOpenModal}
      ></Create>
      <Navbar routes={props.navbar}></Navbar>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            margin: "5vw",
            backgroundColor: "white",
            boxShadow: "0 0 1em black",
            borderRadius: "30px",
          }}
        >
          <div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "space-around", margin: "30px", }}>
                  <Typography>Name</Typography>
                  <Typography>CPF</Typography>
                  <Typography>Room</Typography>
                  <Typography>Date</Typography>
                  <Typography>Hour</Typography>
                </div>
            {agendamentoList.map((agendamento) => {
              return (

                <div style={{ display: "flex", gap: "20px", justifyContent: "space-around", margin: "30px", }}>
                  <Typography>{agendamento.name}</Typography>
                  <Typography>{agendamento.cpf}</Typography>
                  <Typography>{agendamento.room}</Typography>
                  <Typography>{new Date(agendamento.date).toTimeString()}</Typography>
                  <Typography>{agendamento.hour}</Typography>
                </div>
              );
            })}
            <AddCircleIcon
              onClick={() => {
                setOpenModal(true);
              }}
              style={{
                color: "black",
                cursor: "pointer",
                margin: "3px",
                display: "flex",
              }}
            ></AddCircleIcon>
          </div>
        </div>
      </div>
    </>
  );
};
export default Read;
