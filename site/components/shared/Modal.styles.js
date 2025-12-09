import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .modal {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
    visibility 0.15s linear 0.15s,
    opacity 0.15s linear 0.15s;

    h3 {
      max-width: 42rem;
      margin: 0 auto;
    }

    p {
      padding: 0 3rem;
    }

    &:after {
      content: '';
      background: var(--color-black);
      opacity: 0.75;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  .modal--visible {
    opacity: 1;
    visibility: visible;
    transition:
    visibility 0.15s linear,
    opacity 0.15s linear;

    .modal__content > * {
      opacity: 1;
      transition: opacity 0.15s linear 0.45s;
    }

    .modal__content:before,
    .modal__content:after {
      width: 100%;
      height: 100%;
      transition:
        width 0.15s ease-out 0.15s,
        height 0.15s ease-out 0.3s;
    }

    .modal__content:before {
      border-top-color: var(--color-white);
      border-right-color: var(--color-white);
    }

    .modal__content:after {
      border-bottom-color: var(--color-white);
      border-left-color: var(--color-white);
    }
  }

  .modal__content {
    width: 100%;
    max-width: 56rem;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    text-align: center;

    & > * {
      position: relative;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.15s linear;
    }
  }

  .modal__content:before,
  .modal__content:after {
    content: ' ';
    width: 0;
    height: 0;
    border: 2px solid transparent;
    border-radius: 6px;
    position: absolute;
  }

  .modal__content:before {
    top: 0;
    left: 0;
  }

  .modal__content:after {
    bottom: 0;
    right: 0;
  }

  .modal__well {
    background: var(--color-white);
    max-height: 90vh;
    overflow-y: auto;
  }
`;
