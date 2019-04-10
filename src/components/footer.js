import React from "react"
import injectSheet from "react-jss"
import { Container } from "react-bootstrap"

const preto = "#333"
const branco = "#f0f0f0"
const branco__selecionado = "#d1e5e1"

const styles = {
  footer: {
    backgroundColor: "white",
    color: preto,
    height: "2em",
    width: "100%",
    textAlign: "center",
    fontSize: "1em",
    fontFamily: "Raleway",
  },
}

const Footer = ({ classes }) => (
  <Container>
    <footer className={classes.footer}>
      Estacionamento Juvevê LTDA © {new Date().getFullYear()}
    </footer>
  </Container>
)

export default injectSheet(styles)(Footer)
