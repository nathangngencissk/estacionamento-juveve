import React from "react"
import { Navbar, Nav, OverlayTrigger, Popover } from "react-bootstrap"
import injectSheet from "react-jss"
import { Link } from "gatsby"

const preto = "#333"
const branco = "#f0f0f0"
const branco__selecionado = "#d1e5e1"

const styles = {
  header: {
    position: "absolute",
  },
  navbar: {
    backgroundColor: "white",
  },
  navbar__principal__text: {
    color: preto,
    fontFamily: "Raleway",
  },
  navbar__menu__text: {
    color: preto,
    fontFamily: "Raleway",
    "&:hover": {
      color: branco__selecionado,
    },
  },
}

const popover = (
  <Popover id="popover-basic" title="Whatsapp">
    (41) 991320920
  </Popover>
)

const Header = ({ classes }) => (
  <header>
    <Navbar className={classes.navbar} expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <span className={classes.navbar__principal__text}>
            Estacionamento Juvevê
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/mensalista">
              <span className={classes.navbar__menu__text}>Mensalista</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/lavacar">
              <span className={classes.navbar__menu__text}>Lava-car</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/sobre">
              <span className={classes.navbar__menu__text}>Sobre</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contato">
              <span className={classes.navbar__menu__text}>Contato</span>
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <span className={classes.navbar__text__menu}>
                <i class="fab fa-whatsapp" />
              </span>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href="/home">
            <span className={classes.navbar__text__menu}>
              <i class="fab fa-facebook" />
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default injectSheet(styles)(Header)
