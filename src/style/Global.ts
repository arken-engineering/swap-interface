import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face{font-family:"Exocet D";src:url(/fonts/ExocetD.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}
  @font-face{font-family:"Exocet Reaper";src:url(/fonts/ExocetReaperMedium.woff) format("woff");font-weight:normal;font-style:normal;font-display:swap}

  * {
    font-family: 'Exocet D', sans-serif;
    text-transform: uppercase;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    background: #000;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
