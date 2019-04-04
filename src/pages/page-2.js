import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const PrimaryButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: 'Roboto', 'Merriweather', sans-serif;
  font-weight: 100;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <PrimaryButton>Normal Button</PrimaryButton>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
