import css from 'styled-jsx/css';

export default css.global`
  .sr-only {
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0,0,0,0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    position: absolute;
  }
`;
