import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .mailing--inline {
    width: 100%;
    padding: 1.5rem 1.5rem 0 1.5rem;
    display: flex;

    .mailing__input {
      width: 66.666%;
      padding: 0;

      input[type="email"] {
        text-align: left;
      }
    }

    .mailing__btn {
      width: 33.333%;
      padding: 0 0 0 1rem;
      font-size: 1.5rem;

      br {
        display: inline;
      }
    }
  }

  .mailing__input {
    padding-bottom: 1.25rem;

    input[type="email"] {
      text-align: center;
    }
  }

  .mailing__btn {
    padding-bottom: 2rem;

    br {
      display: none;
    }
  }

  .mailing__hidden {
    display: none;
  }

  @media (min-width: $break-tablet) {
    .mailing--inline {
      padding: 1.25rem 0 0 1.25rem;

      .mailing__btn {
        padding: 0 0 0 1.25rem;
        font-size: 1.75rem;

        br {
          display: none;
        }
      }
    }

    .mailing__input {
      padding-bottom: 1.5rem;
    }

    .mailing__btn {
      padding-bottom: 2.5rem;
    }
  }
`;