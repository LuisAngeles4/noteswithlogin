import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "firebase/compat/firestore";
import firebase from "../../firebase";
import { useUser } from "../../session/hooks";

const db = firebase.firestore(firebase);

export default function Note(props) {
  const { note, setReloadNote } = props;
  const user = useUser();

  const deleteTask = async (e) => {
    e.preventDefault();
    await db
      .collection(`${user.email}`)
      .doc(note.id)
      .delete()
      .then(() => {
        setReloadNote(true);
      });
  };
  return (
    <>
      <tr>
        <td>{note.noNote}</td>
        <td>{note.name}</td>
        <td>{note.date}</td>
        <td>{note.totalAmount}</td>

        <td>
          <Button
            variant="outline-danger"
            onClick={(e) => {
              deleteTask(e);
            }}
          >
            Borrar nota
          </Button>
        </td>
      </tr>
    </>
  );
}
