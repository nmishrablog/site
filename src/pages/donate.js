import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as A,
  Text,
  Avatar,
  theme
} from '@hackclub/design-system'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'
import { Headline, Subhline, Lead } from 'components/Content'
import DonateForm from 'components/donate/DonateForm'
import Sponsors from 'components/donate/Sponsors'
import donors from 'components/donate/donors.json'

const Header = styled(Box.withComponent('header'))`
  background: url('/pattern.svg');
  > div {
    display: grid;
    grid-gap: ${theme.space[4]}px;
    ${theme.mediaQueries.md} {
      grid-template-columns: 3fr 2fr;
    }
  }
`

const Row = styled(Box)`
  text-align: left;
  ${theme.mediaQueries.md} {
    display: grid;
    grid-gap: ${theme.space[3]}px;
    grid-template-columns: ${({ reverse }) =>
      reverse ? '3fr 2fr' : '2fr 3fr'};
  }
`

const DonateSheet = styled(Sheet).attrs({ bg: 'snow' })`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0625), 0 16px 32px rgba(0, 0, 0, 0.125) !important;
  > div > div:first-child {
    background-image: ${theme.gradient('warning', 'primary')};
  }
`

const Quote = styled(Sheet).attrs({
  maxWidth: 52,
  fontSize: 3,
  p: [4, 5],
  color: 'white'
})`
  position: relative;
  &:before {
    content: '“';
    line-height: 1;
    font-size: ${theme.fontSizes[7]}px;
    padding-left: ${theme.space[1]}px;
    position: absolute;
    left: 0;
    top: 0;
    color: ${theme.colors.snow};
    opacity: 0.5;
    padding: ${theme.space[3]}px;
  }
`
const FirstQuote = styled(Quote)`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme.colors.cyan[5]},
    ${theme.colors.teal[6]},
    ${theme.colors.green[7]}
  );
`
const SecondQuote = styled(Quote)`
  background-image: radial-gradient(
    ellipse farthest-corner at bottom left,
    ${theme.colors.blue[5]},
    ${theme.colors.indigo[5]},
    ${theme.colors.violet[5]}
  );
`
const subhline = { fontSize: [3, 4], style: { lineHeight: '1.375' } }

const contentContainer = {
  maxWidth: 72,
  width: 1,
  p: 3,
  color: 'black',
  style: { position: 'relative' }
}
const content = { maxWidth: 48, mx: 0, color: 'black' }

A.link = A.withComponent(Link)

const title = 'Support – Open Orgs'
const desc =
  'Contribute today to Grow the GDP of Open.'

const DonorGrid = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[1]}px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  p,
  a {
    width: 100%;
  }
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[3]}px;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
`

const DonorCardBase = styled(Sheet)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${theme.breakpoints.sm}em) {
    border-radius: 0;
    box-shadow: none;
  }
`
const DonorCard = ({ name, link = false }) => (
  <DonorCardBase bg="white" p={3} mb={0}>
    <Text color="black">{name}</Text>
  </DonorCardBase>
)

const DonorListing = ({ name, url }) => {
  if (url) {
    return (
      <A target="_blank" href={url} color="black" underline>
        <DonorCard name={name} link />
      </A>
    )
  } else {
    return <DonorCard name={name} />
  }
}

export default () => (
  <Layout title={title} desc={desc} path="/donate/">
    <Nav color="muted" />
    <Header pt={[4, 5, 6]}>
      <Container
        color="black"
        maxWidth={64}
        align="left"
        pt={[6, 7]}
        pb={6}
        px={3}
      >
        <Container maxWidth={48} mx={0}>
          <Heading.h1 color="primary" fontSize={[3, 4]} caps>
            Donate to Hack Club
          </Heading.h1>
          <Headline maxWidth={32} mt={2} mb={3}>
            We rely on people like you to support open orgs.
          </Headline>
          <Lead>
            Contribute today to grow the GDP of Open.
          </Lead>
          <Text mt={3} fontSize={2} color="muted">
            Your contribution is tax-deductible.
            <br />
            Hack Club is a 501(c)(3) non-profit with the EIN 81-2908499.
          </Text>
        </Container>
        <DonateSheet mt={[0, -3, -4]}>
          <DonateForm />
        </DonateSheet>
      </Container>
    </Header>
    <Container {...contentContainer}>
    </Container>
    <Flex justify="center" bg="snow" color="black">
      <Container width={1} py={[4, 5]} align={['left', 'center']}>
        <Headline px={3} mt={[3, 4]} mb={[4, 5]} mx="auto">
          A few of our amazing donors.
        </Headline>
        <DonorGrid mt={4} mb={3}>
          {Object.keys(donors).map(name => (
            <DonorListing key={name} name={name} url={donors[name]} />
          ))}
        </DonorGrid>
        <Text {...subhline} px={3}>
          and many more…
        </Text>
      </Container>
    </Flex>
    <Container {...contentContainer}>
      <Row my={5} {...content}>
        <Subhline mb={4}>
          Some fabulous companies support us.
        </Subhline>
        <Sponsors />
      </Row>
    </Container>
    <Footer />
  </Layout>
)
