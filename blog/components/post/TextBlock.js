import 'prismjs/themes/prism.css';

import Link from 'next/link';

import styles from './TextBlock.module.css';

const TextBlock = ({ post, isPermalink }) => {
  return (
    <div>
      <h2>{post.title}</h2>

      {post.affiliate_links && (
        <p className={styles.affiliate}>
          This section features affiliate links, meaning I&apos;ll earn a small
          commission (at no cost to you) if you decide to click through and make
          a purchase.
        </p>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.preview || post.html }} />

      {post.preview && (
        <p className={styles.more}>
          <Link
            href={post.pathname}
            data-ga-category="blog post"
            data-ga-click="true"
          >
            Continue Reading
          </Link>
        </p>
      )}

      {post.tags.includes('newsletter') && isPermalink && (
        <div>
          <hr />

          <p>
            This was reposted from my newsletter on{' '}
            <a
              href="https://laurenashpole.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beehiiv
            </a>
            . To get next month&aposs by email, sign up below.
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://embeds.beehiiv.com/66e5dcfa-f3e8-46fb-b1c3-9ba4f42d988f"
                data-test-id="beehiiv-embed"
                width="100%"
                height="320"
                frameborder="0"
                scrolling="no"
                style="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"
              ></iframe>
              <script
                type="text/javascript"
                async
                src="https://embeds.beehiiv.com/attribution.js"
              ></script>
            `,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TextBlock;
