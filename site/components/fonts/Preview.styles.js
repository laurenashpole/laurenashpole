import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .preview {
    text-align: left;
  }

  .preview__form {
    display: flex;
    flex-wrap: wrap;
  }

  .preview__input {
    margin-right: 1.5rem;
    flex-grow: 1;
  }

  .preview__select {
    width: 12rem;
  }

  .preview__btn {
    width: 100%;
    margin-top: 1.5rem;
  }

  .preview__preview {
    padding: 2rem 0;
    word-break: break-word;

    & + .preview__preview {
      border-top: 1px solid var(--color-gray-light);
    }
  }

  @media (min-width: $break-tablet) {
    .preview__input {
      input[name='text'] {
        height: 7rem;
      }
    }

    .preview__select {
      width: 15rem;

      select[name='size'] {
        height: 7rem;
      }
    }
  }

  @media (min-width: $break-tablet) {
    .preview__select {
      width: 20rem;
    }

    .preview__preview {
      padding: 3rem 0;
    }
  }
`;
