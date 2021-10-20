import React from "react";
import { useSignOut, useUser } from "../../session/hooks";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

import "./Header.scss";

export default function Header() {
  const signOut = useSignOut();
  const user = useUser();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Notes</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/addnote">Agregar nota</Nav.Link>
          <Nav.Link href="/viewnote">Ver notas</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end" style={{ gap: "2vh" }}>
          <Navbar.Text>{`Sesión de: ${user.email}`}</Navbar.Text>
          <Button onClick={signOut} variant="light">
            Cerrar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
