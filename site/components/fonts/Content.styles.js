import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .content__letters {
    display: none;
  }

  .content__main {
    padding: 5.25rem 3.5rem 7rem 3.5rem;

    & > section + section {
      margin-top: 5.25rem;
      border-top: 1px solid $color-gray-light;
      padding-top: 5.25rem;
    }
  }

  .content__heading {
    margin-bottom: 3.5rem;
    text-align: center;
  }

  .content__heading-sale {
    margin-top: 1.25rem;
    color: $color-red;
    font-size: 2rem;
  }

  @media (min-width: $break-desktop) {
    .content__container {
      display: flex;
      align-items: flex-start;
    }

    .content__letters {
      background-image:
        linear-gradient($color-gray-light 1px, transparent 1px),
        linear-gradient(90deg, $color-gray-light 1px, transparent 1px);
      background-size: 8.5rem 8.5rem;
      width: calc(8.5rem * 5);
      height: calc(100vh - 8.5rem);
      margin: -1px 0 -1px -1px;
      border-bottom: 1px solid $color-gray-light;
      position: sticky;
      top: 8.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $color-purple;
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

      &:after {
        content: '';
        background-image:
          url(abstract-dots($color-green-encoded)),
          url(abstract-squiggle-thin($color-pink-encoded));
        background-position:
          2.5rem calc(50% - 7.5rem),
          center;
        background-size: 16rem, 40rem;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        z-index: -2;
        transform: translateX(calc(-50% + 4rem));
      }
    }

    .content__main {
      width: calc(100% - (8.5rem * 5));
      padding: 8.5rem;
      border-left: 1px solid $color-gray-light;

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
