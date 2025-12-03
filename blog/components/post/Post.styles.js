import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .post:not(.post--permalink) {
    border-bottom: 1px solid $color-gray-light;
    border-top: 1px solid $color-gray-light;

    & + .post {
      margin-top: 7rem;
    }
  }

  .post__content {
    padding: 3.5rem 2.625rem;
  }

  .post__body {
    padding-bottom: 2.625rem;

    img {
      margin: 0 auto;
    }

    img:not(:last-child) {
      margin-bottom: 3.5rem;
    }

    img + img {
      margin-top: -2.625rem;
    }

    p + img {
      margin-top: 3.5rem;
    }

    ol,
    ul {
      list-style: disc;
      padding-left: 2rem;
    }

    ol {
      list-style: number;

      li {
        padding-left: 0.75rem;
      }
    }

    li > ul {
      margin-top: 1.25rem;
    }

    ol:not(:last-child),
    ul:not(:last-child) {
      margin-bottom: 2.625rem;
    }

    li:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }

  .post__footer {
    margin-top: 3.5rem;
    font-size: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 0.075em;

    a {
      color: $color-red;
    }
  }

  @media (min-width: $break-tablet) {
    .post:not(.post--permalink) {
      & + .post {
        margin-top: 8.5rem;
      }
    }

    .post__container {
      display: flex;
    }

    .post__details {
      background-image: 
        linear-gradient($color-gray-light 1px, transparent 1px),
        linear-gradient(90deg, $color-gray-light 1px, transparent 1px);
      background-size: 4.25rem 4.25rem;
      width: calc(8.5rem * 3.5);
      border-right: 1px solid $color-gray-light;
      margin: -1px 0 -1px -1px;
      padding: 5.25rem 3.75rem 0 0;
      flex-shrink: 0;
    }

    .post__content {
      width: calc(100% - (8.5rem * 3.5));
      padding: 5.25rem 3.75rem;
    }

    .post__body {
      img:not(:last-child) {
        margin-bottom: 4rem;
      }

      img + img {
        margin-top: -3rem;
      }

      p + img {
        margin-top: 4rem;
      }

      ol,
      ul {
        padding-left: 2.5rem;
      }

      ol:not(:last-child),
      ul:not(:last-child) {
        margin-bottom: 3rem;
      }

      li {
        padding-left: 1rem;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .post__details {
      width: calc(8.5rem * 5);
    }

    .post__details {
      padding: 9.5rem 6rem;
    }

    .post__content {
      width: calc(100% - (8.5rem * 5));
      padding: 8.5rem;
    }

    .post__body {
      img:not(:last-child) {
        margin-bottom: 6rem;
      }

      img + img {
        margin-top: -5rem;
      }

      p + img {
        margin-top: 6rem;
      }

      h2:not(:last-child) {
        margin-bottom: 6rem;
      }

      ol:not(:last-child),
      ul:not(:last-child) {
        margin-bottom: 4rem;
      }

      li {
        padding-left: 2rem;
      }
    }
  }

  @media (min-width: $break-desktop-large) {
    .post__details {
      padding-right: 8.5rem;
    }
  }
`;
