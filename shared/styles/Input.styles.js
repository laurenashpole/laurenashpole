import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .input {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .input--error {
    span {
      color: var(--color-error);
    }

    .input__input {
      border-color: var(--color-error);
    }
  }

  .input__label {
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.175em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: calc(1.25rem + 1px);
    right: calc(1.25rem + 1px);
    left: calc(1.25rem + 1px);
  }

  .input__label--hidden {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .input__input {
    background: var(--color-gray-lightest);
    width: 100%;
    height: 7rem;
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    padding: 2.75rem 1.25rem 0.5rem 1.25rem;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    -webkit-appearance: none;
    appearance: none;

    &:focus {
      border-color: var(--color-gray-dark);
    }

    .input__label--hidden + & {
      height: 5.5rem;
      padding: 1rem 1.5rem;
    }
  }

  .input__input[type='file'] {
    padding-top: 3.25rem;
    font-size: 2rem;
  }

  @media (min-width: $break-tablet) {
    .input__input {
      height: 7.5rem;

      .input__label--hidden + & {
        height: 6rem;
      }
    }

    .input__input[type='file'] {
      padding-top: 3.5rem;
    }
  }
`;
