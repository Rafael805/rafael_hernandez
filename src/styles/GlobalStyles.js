import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

    * {
        box-sizing: border-box;
    }
    
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: #8b8b8b;
        background-color: #272727;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        overflow: hidden;
    }
  
    html,
    body {
        width: 100%;
        height: 100%;
    }
    body {
        position: fixed;
        overflow: hidden;
        color: black;
    }
  
    body {
        overscroll-behavior-y: none;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
        sans-serif;
        color: black;
        background: radial-gradient(at 50% 60%, #873740 0%, #272730 40%, #171720 80%, #070710 100%);
    }

    .canvas {
        position: absolute;
        top: 0;
        pointer-events: none;
    }

    .canvas > div {
        z-index: 10000000;
    }   

    .loading {
        padding: 10px;
        transform: translate3d(-50%, -50%, 0);
        color: #8b8b8b;
    }

    .scrollArea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: auto;
    }

    .scroll-container {
        position: absolute;
        overflow: auto;
        top: 0px;
        width: 100%;
        height: 100vh;
        font-size: 20em;
        font-weight: 800;
        line-height: 0.9em;
    }

    .bottom-left {
        padding: 1.5rem;
        transform: translate3d(0, -100%, 0) !important;
    }

`;

export default GlobalStyles;
