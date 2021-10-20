import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { map } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "firebase/compat/firestore";
import firebase from "../../firebase";
import { useUser } from "../../session/hooks";
import "./AddNote.scss";

const db = firebase.firestore(firebase);

export default function AddNote() {
  const user = useUser();
  const [noNote, setNoNote] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [statusOfNote, setStatusOfNote] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const notesRef = db.collection(`${user.email}`);
    const snapshot = await notesRef.where("noNote", "==", noNote).get();

    if (snapshot.empty) {
      db.collection(`${user.email}`)
        .add({
          noNote: noNote,
          name: name,
          date: date,
          totalAmount: totalAmount,
          statusOfNote: statusOfNote,
        })
        .then(() => {
          setNoNote("");
          setName("");
          setDate("");
          setTotalAmount("");
          toast.success(`La nota ${noNote} ha sido añadida correctamente!`);
        });
    } else {
      toast.error(`La nota ${noNote} ya existe!`);
    }
  };

  return (
    <div className="formOnSubmit">
      <div className="formOnSubmit__form">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>No. de nota</Form.Label>
            <Form.Control
              type="number"
              placeholder="No. de nota"
              onChange={(e) => setNoNote(e.target.value)}
              value={noNote}
              min="0"
              required
            />
            <Form.Text muted>El número de nota no se debe duplicar</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de compra/venta</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Importe</Form.Label>
            <Form.Control
              type="number"
              placeholder="Importe"
              onChange={(e) => setTotalAmount(e.target.value)}
              value={totalAmount}
              min="0"
              required
            />
            <Form.Text muted>Importe en pesos mexicanos MXN</Form.Text>
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Guardar Nota
          </Button>
        </Form>

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
