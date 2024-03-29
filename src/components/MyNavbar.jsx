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
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const MyNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const token = useSelector((state) => state.token);
  const [leaveTimer, setLeaveTimer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleSearch = () => {
    const url = `http://localhost:3001/prodotti/prodotti-per-parte-del-nome?parteDelNome=${encodeURIComponent(
      searchTerm
    )}`;

    
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati ricevuti dalla chiamata API:", data);
        setSearchResults(data);
        navigate("/risultati-perNome", { state: { searchResults: data } });
      })
      .catch((error) => {
        setError(error.message);
      });
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
    <Navbar expand="lg" className="bg-success-subtle">
      <Container fluid>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png"
          className="logo"
        ></img>
        <Navbar.Brand as={Link} to="/">PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <OverlayTrigger
              trigger="hover 'focus'"
              placement="bottom"
              show={showDropdown === "dropdown1"}
              overlay={
                <Popover id="popover-basic" onMouseLeave={handleMouseLeave}>
                  <Popover.Body>
                    <Link to="/guizagli" className="dropdown-item">
                      Guinzagli
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
                    <Link
                      to="/accessoriGabbieUccelli"
                      className="dropdown-item"
                    >
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="outline-success text-black"
            type="button"
            onClick={handleSearch}
          >
            Cerca
          </Button>
        </Form>
        <Button className="me-3"
          variant="outline-success text-black"
          onClick={()=>{
            localStorage.clear();
            navigate("/login")}}
        >
          accedi
        </Button>

        
        <FaCartShopping
          onClick={(e) => {
            e.preventDefault();
            navigate("/carrello");
          }}
          className=" fs-4 text-success fw-medium ms-3 me-3  border-1 border-black icona-animation"
        />
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
