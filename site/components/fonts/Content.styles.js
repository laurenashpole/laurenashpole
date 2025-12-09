import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .content__letters {
    display: none;
  }

  .content__main {
    padding: 5.25rem 3.5rem 7rem 3.5rem;

    & > section + section {
      margin-top: 5.25rem;
      border-top: 1px solid var(--color-gray-light);
      padding-top: 5.25rem;
    }
  }

  .content__heading {
    margin-bottom: 3.5rem;
    text-align: center;
  }

  .content__heading-sale {
    margin-top: 1.25rem;
    color: var(--color-primary);
    font-size: 2rem;
  }

  @media (min-width: $break-desktop) {
    .content__container {
      display: flex;
      align-items: flex-start;
    }

    .content__letters {
      background-image:
        linear-gradient(var(--color-gray-light) 1px, transparent 1px),
        linear-gradient(90deg, var(--color-gray-light) 1px, transparent 1px);
      background-size: 8.5rem 8.5rem;
      width: calc(8.5rem * 5);
      height: calc(100vh - 8.5rem);
      margin: -1px 0 -1px -1px;
      border-bottom: 1px solid var(--color-gray-light);
      position: sticky;
      top: 8.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--color-secondary);
      font-size: 15rem;
      font-display: block;
      text-align: center;
      line-height: 1;

      span {
        display: block;
      }

      span:nth-of-type(1) {
        transform: rotate(-10deg) translateX(-6rem);
      }

      span:nth-of-type(2) {
        transform: rotate(5deg) translateX(6rem);
      }

      span:nth-of-type(3) {
        transform: rotate(-5deg) translateX(-3rem);
      }
    }

    .content__shapes {
      position: absolute;
      z-index: -1;
    }

    .content__shapes--squiggle {
      width: 40rem;
      top: 50%;
      left: calc(50% + 4rem);
      transform: translate3d(-50%, -50%, 0);
      color: var(--color-accent-pink);
    }

    .content__shapes--dot-group {
      width: 16rem;
      left: 6.5rem;
      top: calc(50% - 14rem);
      color: var(--color-accent-green);

    .content__main {
      width: calc(100% - (8.5rem * 5));
      padding: 8.5rem;
      border-left: 1px solid var(--color-gray-light);

      & > section + section {
        margin-top: 8.5rem;
        padding-top: 8.5rem;
      }
    }

    .content__heading {
      margin-bottom: 6.375rem;
    }
  }
`;
