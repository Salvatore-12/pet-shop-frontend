import { Container, Nav } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Snapchat,
  Telegram,
  Tiktok,
  Twitch,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      fluid
      className="footerInter bg  bg-success-subtle text-black pt-3 ms-0 me-0"
    >
      <Nav>
        <div className="d-flex flex-row ms-4 ps-5 mt-4 mt-3">
          <span className="d-flex flex-column ms-4 ps-4">
            <h5>SHOPPING</h5>
            <p>Acquisti online</p>
            <p>Metodi di pagamento</p>
          </span>
          <span className="d-flex flex-column ms-4 ps-4">
            <h5>HELP</h5>
            <p>Contattaci</p>
            <p>FAQ</p>
            <p>Traccia ordini e resi</p>
            <p>Spedizioni</p>
            <p>Resi e rimborsi</p>
            <p>Guida alle taglie</p>
          </span>
          <span className="d-flex flex-column ms-4 ps-4 ">
            <h5>AREA LEGALE</h5>
            <p>Termini e Condizioni di Acquisto</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </span>

        </div>

        <div className="icons">
          <Telegram className="me-3" />
          <Linkedin className="me-3" />
          <Tiktok className="me-3" />
          <Youtube className="me-3" />
          <Twitch className="me-3" />
          <Instagram className="me-3" />
          <Snapchat className="me-3" />
          <Facebook className="me-3" />
          <Whatsapp className="me-3" />
          <hr></hr>
          <div className="cart d-flex flex-row">
            <FaCcPaypal className="me-4" />
            <FaCcMastercard className="me-4" />
            <FaCcAmazonPay className="me-4" />
            <FaCcApplePay className="me-4" />
            <FaCcVisa className="me-4" />
            <FaCcAmazonPay className="me-4" />
            <FaGooglePay className="me-4" />
            <FaCcJcb className="me-4" />
          </div>
        </div>
      </Nav>
    </Container>
  );
};
export default Footer;
