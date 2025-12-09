import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .textarea {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .textarea__label {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .textarea__textarea {
    background: var(--color-gray-lightest);
    width: 100%;
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    padding: 1.25rem;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    display: block;
    resize: none;
    -webkit-appearance: none;
    appearance: none;

    &:focus {
      border-color: var(--color-gray-dark);
    }

    .textarea--error & {
      border-color: var(--color-error);
    }
  }
`;
