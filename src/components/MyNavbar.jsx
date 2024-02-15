import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [leaveTimer, setLeaveTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [leaveTimer]);

  const handleMouseEnter = (dropdownName) => {
    if (leaveTimer) clearTimeout(leaveTimer);
    setShowDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowDropdown(null);
    }, 500);
    setLeaveTimer(timer);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png"
          className="logo"
        ></img>
        <Navbar.Brand href="#">PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <OverlayTrigger
              trigger="hover 'focus'"
              placement="bottom"
              show={showDropdown === "dropdown1"}
              overlay={
                <Popover id="popover-basic" onMouseLeave={handleMouseLeave}>
                  <Popover.Body>
                    <Link to="/action1" className="dropdown-item">
                      Action 1
                    </Link>
                    <Link to="/action2" className="dropdown-item">
                      Action 2
                    </Link>
                    <Link to="/action3" className="dropdown-item">
                      Action 3
                    </Link>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link
                href="#"
                onMouseEnter={() => handleMouseEnter("dropdown1")}
              >
                Cane
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover 'focus'"
              placement="bottom"
              show={showDropdown === "dropdown2"}
              overlay={
                <Popover id="popover-basic" onMouseLeave={handleMouseLeave}>
                  <Popover.Body>
                    <Link to="/tiragraffi" className="dropdown-item">
                      Tiragraffi
                    </Link>
                    <Link to="/another-action2" className="dropdown-item">
                      Another Action 2
                    </Link>
                    <Link to="/another-action3" className="dropdown-item">
                      Another Action 3
                    </Link>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link
                href="#"
                onMouseEnter={() => handleMouseEnter("dropdown2")}
              >
                Gatto
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover 'focus'"
              placement="bottom"
              show={showDropdown === "dropdown3"}
              overlay={
                <Popover id="popover-basic" onMouseLeave={handleMouseLeave}>
                  <Popover.Body>
                    <Link to="/mangime" className="dropdown-item">
                      Mangime
                    </Link>
                    <Link to="/another-action2" className="dropdown-item">
                      Another Action 2
                    </Link>
                    <Link to="/another-action3" className="dropdown-item">
                      Another Action 3
                    </Link>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link
                href="#"
                onMouseEnter={() => handleMouseEnter("dropdown3")}
              >
                Uccello
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-3"
            aria-label="Search"
          />
          <Button variant="outline-success">Cerca</Button>
        </Form>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
