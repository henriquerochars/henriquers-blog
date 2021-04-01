import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import media from "styled-media-query"
import Img from "gatsby-image"
import styled from "styled-components"
import SocialLinks from "./../SocialLinks"

const AvatarWrapper = styled(Img)`
  border-radius: 25%;
  height: 4.75rem;
  margin: auto;
  width: 4.75rem;

  ${media.lessThan("large")`
    height: 4.875rem;
    width: 4.875rem;
    margin-top: 2px;
    margin-bottom: 10px;
  `}
`
const WillLogo = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "will.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default WillLogo
