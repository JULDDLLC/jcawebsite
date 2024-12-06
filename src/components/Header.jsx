import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">JULDD</Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/consultation">Consultation</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
