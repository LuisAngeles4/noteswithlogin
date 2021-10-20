import React, { useState, useEffect } from "react";
import Note from "../Note/Note";
import { map, size } from "lodash";
import { Table, Spinner, Button } from "react-bootstrap";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import { useUser } from "../../session/hooks";

import "./ViewNote.scss";

const db = firebase.firestore();

export default function ViewNote() {
  const user = useUser();
  const [notes, setNotes] = useState(null);
  const [reloadNote, setReloadNote] = useState(false);

  useEffect(() => {
    db.collection(`${user.email}`)
      .orderBy("noNote")
      .get()
      .then((response) => {
        const arrayNotes = [];
        map(response.docs, (notes) => {
          const data = notes.data();
          parseInt(data.noNote);
          data.id = notes.id;
          arrayNotes.push(data);
        });
        setNotes(arrayNotes);
      });
    setReloadNote(false);
  }, [reloadNote]);

  return (
    <div>
      <Table className="table__content" striped bordered hover responsive>
        <thead>
          <tr>
            <th>No nota</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Importe total</th>
            <th>Borrar Nota</th>
          </tr>
        </thead>
        {!notes ? (
          <Spinner animation="grow" />
        ) : size(notes) === 0 ? (
          <td>No hay tareas</td>
        ) : (
          <tbody>
            {map(notes, (note, index) => (
              <Note note={note} key={index} setReloadNote={setReloadNote} />
            ))}
          </tbody>
        )}
      </Table>
      <div className="button">
        <Button variant="outline-dark" href="/addnote">
          Añade una nota!
        </Button>
      </div>
    </div>
  );
}
