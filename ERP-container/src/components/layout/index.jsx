import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ routes }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sticky__sidebar">
          <SideBar routes={routes} />
        </Col>
        <Col md={10} className={"bg-app-color"}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
