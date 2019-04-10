import React from "react"
import ReactPlayer from "react-player"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "portao.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      class="focuspoint bgParallax"
      data-speed="15"
      data-focus-x="0"
      data-focus-y="0"
      data-image-w="1920"
      data-image-h="1080"
    >
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
