import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact"

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <form name="test-contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="test-name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="test-email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="test-role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        {/* <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form name="test_subscribe" data-netlify="true">
                <p className="h5 text-center mb-4">Subscribe</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="test_subscribe_name"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="test_subscribe_email"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" outline color="info">
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer> */}
      </Layout>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
