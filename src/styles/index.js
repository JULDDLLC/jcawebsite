import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#ffffff',
    accent: '#007AFF',
    background: '#ffffff',
    text: '#333333'
  },
  fonts: {
    primary: 'Montserrat, sans-serif'
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    cursor: none;
  }

  .custom-cursor {
    width: 60px;
    height: 60px;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, opacity 0.2s ease;
    display: none;
  }

  .custom-cursor-outer {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.7) 0%, rgba(184, 134, 11, 0.7) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }

  .custom-cursor-inner {
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, rgba(255, 236, 139, 0.7) 0%, rgba(218, 165, 32, 0.7) 100%);
    border-radius: 50%;
    animation: pulse 2s infinite;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(0.8); opacity: 0.5; }
  }

  .custom-cursor.hover {
    opacity: 0.2;
  }

  @media (hover: none) and (pointer: coarse) {
    body {
      cursor: auto;
    }
    .custom-cursor {
      display: none !important;
    }
  }
`
