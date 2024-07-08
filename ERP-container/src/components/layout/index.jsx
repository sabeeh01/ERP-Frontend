import React from "react";
import { Container, Row, Col, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation hook
import SideBar from "./SideBar";

const Header = ({ routes }) => {
  const location = useLocation(); // Get current location object
  const currentPath = location.pathname; // Extract current path

  // Find the corresponding route label based on the current path
  const currentRoute = routes.find((route) => route.path === currentPath);
  const currentRouteLabel = currentRoute ? currentRoute.label : "";

  return (
    <Navbar.Brand href="/">
      <img src="/public/images/logo.svg" alt="SocialPie Logo" />
      {currentRouteLabel && <span className="ms-2">{currentRouteLabel}</span>}
    </Navbar.Brand>
  );
};

const Layout = ({ routes }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Header routes={routes} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img
                  src="https://github.com/Tabish-binaryvibes.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>Tabish</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu className="text-small shadow">
                <Dropdown.Item href="#">New project...</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={2} className="sticky__sidebar">
            <SideBar routes={routes} />
          </Col>
          <Col md={10} className="bg-app-color">
            <Outlet />
          </Col>
        </Row>
      </Container>

      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">Place your footer content here.</span>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
