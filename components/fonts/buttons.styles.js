import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .buttons {
    .btn {
      flex-direction: column;
    }

    .btn span {
      margin-top: 0.25rem;
      font-size: 1.35rem;
      line-height: normal;
    }

    button[disabled] span {
      font-size: 0;
    }

    .btn + .btn {
      margin-top: 1rem;
    }
  }

  @media (min-width: $break-tablet) {
    .buttons {
      display: flex;
      justify-content: center;

      .btn {
        max-width: 50%;
      }

      .btn span {
        margin-top: 0.5rem;
      }

      .btn + .btn {
        margin: 0 0 0 1.5rem;
      }
    }
  }
`;