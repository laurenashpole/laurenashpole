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
    margin-bottom: 5.25rem;
    text-align: center;
  }

  @media (min-width: $break-desktop) {
    .content__container {
      display: flex;
      align-items: flex-start;
    }

    .content__letters {
      min-width: calc(8.5rem * 5);
      height: calc(100vh - 8.5rem);
      background-image: 
        linear-gradient($color-gray-light 1px, transparent 1px),
        linear-gradient(90deg, $color-gray-light 1px, transparent 1px);
      background-size: 8.5rem 8.5rem;
      margin: -1px;
      border-bottom: 1px solid $color-gray-light;
      position: sticky;
      top: 8.5rem;

      color: $color-purple;
      font-size: 15rem;
      // line-height: 0.85;
      line-height: 0.95;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // gap: 2rem;

      span {
        display: block;

        // background: $color-purple;
        // color: #fff;
        // width: 13rem;
        // height: 13rem;
        // border-radius: 50%;
        // font-size: 8rem;
        // display: flex;
        // align-items: center;
        // justify-content: center;
      }

      span:nth-of-type(1) {
        transform: rotate(-10deg) translateX(-6rem);
      }

      span:nth-of-type(2) {
        transform: rotate(5deg) translateX(6rem);
        // font-size: 12rem;
      }

      span:nth-of-type(3) {
        transform: rotate(-5deg) translateX(-3rem);
      }

      &:after {
        content: "";
        background-image:
          url(abstract-dots($color-green-encoded)),
          url(abstract-squiggle-thin($color-pink-encoded));
          ;
        // background-position: -4rem 3rem;
        background-position: 2.5rem calc(50% - 7.5rem), center;
        background-size: 16rem, 40rem;
        background-repeat: no-repeat;
        // width: calc(100% + 10rem);
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
      padding: 8.5rem;
      border-left: 1px solid $color-gray-light;

      & > section + section {
        margin-top: 8.5rem;
        padding-top: 8.5rem;
      }
    }

    .content__heading {
      margin-bottom: 8.5rem;
    }
  }

  //   &:after {
  //     content: "";
  //     background: url(abstract-line-hr($color-pink-encoded));
  //     background-repeat: no-repeat;
  //     width: 4rem;
  //     height: 2rem;
  //     margin: 1.5rem auto;
  //     display: block;
  //   }
  // }

  // .content__heading-sale {
  //   color: $color-red;
  //   font-size: 2rem;
  //   font-weight: 700;
  //   text-transform: uppercase;
  //   line-height: normal;
  // }

  // .content__aside {
  //   display: none;
  // }

  // @media (min-width: $break-tablet) {
  //   .content__heading {
  //     &:after {
  //       width: 4.75rem;
  //       height: 2.25rem;
  //       margin-top: 2.5rem;
  //     }
  //   }
  // }

  // @media (min-width: $break-desktop) {
  //   .content__heading {
  //     &:after {
  //       width: 5.5rem;
  //       height: 2.5rem;
  //       margin: 2.5rem auto 2rem auto;
  //     }
  //   }

  //   .content__container {
  //     display: flex;
  //     align-items: flex-start;
  //   }

  //   .content__aside {
  //     width: 25%;
  //     padding: 2.5rem 6rem 2rem 2rem;
  //     text-align: right;
  //     flex-shrink: 0;
  //     position: sticky;
  //     top: calc(8rem + 4rem + 1px + 4rem);
  //     display: block;
  //   }

  //   .content__item {
  //     margin-bottom: 0.5rem;

  //     button {
  //       color: $color-gray-darkest;
  //       text-transform: uppercase;
  //       letter-spacing: 0.065em;
  //       text-align: right;
  //       display: inline;
  //     }

  //     button:hover,
  //     button:focus {
  //       color: $color-purple;
  //       text-decoration: none;
  //     }
  //   }

  //   .content__item--active {
  //     button {
  //       color: $color-purple;

  //       &:before {
  //         content: "\2014\00a0\00a0";
  //       }
  //     }
  //   }

  //   .content__main {
  //     width: 75%;
  //     border-left: 1px solid $color-gray-light;
  //     padding: 0 3rem 0 6rem;
  //   }
  // }
`;