import React, { useContext, useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [leaveTimer, setLeaveTimer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/risultati-perNome?parteDelNome=${encodeURIComponent(searchQuery)}`
      );
    }
  };

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
        <Navbar.Brand href="/">PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <OverlayTrigger
              trigger="hover 'focus'"
              placement="bottom"
              show={showDropdown === "dropdown1"}
              overlay={
                <Popover id="popover-basic" onMouseLeave={handleMouseLeave}>
                  <Popover.Body>
                    <Link to="/guizagli" className="dropdown-item">
                      guinzagli
                    </Link>
                    <Link to="/ciotoleCane" className="dropdown-item">
                      Ciotole
                    </Link>
                    <Link to="/crocchetteCane" className="dropdown-item">
                      Crocchette
                    </Link>
                    <Link to="/ciboUmidoCane" className="dropdown-item">
                      Cibo umido
                    </Link>
                    <Link to="/giochiCane" className="dropdown-item">
                     Giochi
                    </Link>
                    <Link to="/CuccieCane" className="dropdown-item">
                    Cuccie e lettini
                    </Link>
                    <Link to="/abbigliamentoCane" className="dropdown-item">
                      Abbigliamento
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
                    <Link to="/ciotolegatto" className="dropdown-item">
                      Ciotole
                    </Link>
                    <Link to="/crocchetteGatto" className="dropdown-item">
                      Crocchette
                    </Link>
                    <Link to="/ciboUmidoGatto" className="dropdown-item">
                      Cibo umido 
                    </Link>
                    <Link to="/giochiGatto" className="dropdown-item">
                      Giochi
                    </Link>
                    <Link to="/cuccieLettiniGatto" className="dropdown-item">
                      Cuccie e lettini
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
                    <Link to="/mangimeUccelli" className="dropdown-item">
                      Mangime
                    </Link>
                    <Link to="/gabbie" className="dropdown-item">
                      Gabbie
                    </Link>
                    <Link to="/accessoriGabbieUccelli" className="dropdown-item">
                      Accessori Gabbie
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
        <Form className="d-flex me-5 pe-4">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-3"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Cerca
          </Button>
        </Form>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate("/carrello");
          }}
          className="bg-success text-black fw-medium fw-medium ms-3  border-1 border-black"
        >
          vai al carrello
        </Button>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
