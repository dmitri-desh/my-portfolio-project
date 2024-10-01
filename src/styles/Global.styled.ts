import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {SectionTitle} from "../components/SectionTitle";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
            color: ${theme.colors.fontWhite};
    }
    
    section {
            padding: 70px 0;
    }
    
    section:nth-of-type(odd) {
        ${SectionTitle} {
            color: ${theme.colors.fontWhite};
        }
    }

    section:nth-of-type(even) {
        ${SectionTitle} {
            color: ${theme.colors.accent};
        }
    }
    
    section:nth-of-type(n+2):nth-of-type(odd) {
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-of-type(n+2):nth-of-type(even) {
            background: radial-gradient(90.6% 78.78% at 93.96% 12.39%, rgba(220, 227, 228, 0.71) 0%, #FCFCFC 100%);
    }
`;