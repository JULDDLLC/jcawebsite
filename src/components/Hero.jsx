import styled from 'styled-components'

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  text-align: center;
`

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>JULDD Creative AI</Title>
        <Subtitle>Transforming ideas into digital reality</Subtitle>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
