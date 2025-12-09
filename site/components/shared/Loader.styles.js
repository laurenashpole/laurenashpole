import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .loader {
    position: relative;
    display: flex;
    align-items: center;
    animation: wave infinite 1s ease-in-out -0.2s;
  }

  .loader,
  .loader:before,
  .loader:after {
    background: var(--color-accent-pink);
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
  }

  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
  }

  .loader:before {
    left: -2.5rem;
    animation: wave infinite 1s ease-in-out -0.4s;
  }

  .loader:after {
    right: -2.5rem;
    animation: wave infinite 1s ease-in-out;
  }
`;
