import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .buttons {
    a,
    button {
      flex-direction: column;
    }

    a span,
    button span {
      margin-top: 0.25rem;
      font-size: 1.35rem;
      line-height: normal;
      width: 100%;
    }

    button[disabled] span {
      font-size: 0;
    }

    a + button,
    button + button {
      margin-top: 1rem;
    }
  }

  .buttons__price + .buttons__price {
    margin-left: 4px;
    text-decoration: line-through;
  }

  @media (min-width: $break-tablet) {
    .buttons {
      display: flex;
      justify-content: center;

      a,
      button {
        max-width: 50%;
      }

      a span,
      button span {
        margin-top: 0.5rem;
      }

      a + button,
      button + button {
        margin: 0 0 0 1.5rem;
      }
    }
  }
`;