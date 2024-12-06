import styled from 'styled-components'

const PortfolioSection = styled.section`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Portfolio = () => {
  return (
    <PortfolioSection>
      <h1>Our Work</h1>
      <p>Explore our creative projects and innovations.</p>
    </PortfolioSection>
  )
}

export default Portfolio
