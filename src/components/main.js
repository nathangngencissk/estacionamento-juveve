import React from "react"
import injectSheet from "react-jss"
import { Container } from "react-bootstrap"

const preto = "#333"
const branco = "#f0f0f0"
const branco__selecionado = "#d1e5e1"

const styles = {
  main: {
    backgroundColor: "white",
    color: preto,
    fontSize: "1em",
    fontFamily: "Roboto Slab",
    minHeight: "calc(100vh - 6em)",
  },
}

const Main = ({ children, classes }) => (
  <Container>
    <main className={classes.main}>{children}</main>
  </Container>
)

export default injectSheet(styles)(Main)
