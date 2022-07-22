import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        category={props.category}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div
        className="card-container"
        onClick={() => {
          handleClickCard();
        }}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-category">{props.category}</p>
        <p className="card-cost">R$ {props.cost}</p>
      </div>
    </>
  );
}
