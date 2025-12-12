import Link from 'next/link';

import Tags from '../../../shared/components/Tags';
import styles from './Details.module.css';

const Details = ({ font }) => {
  const { description, distributors, downloads, tags } = font;

  const distributorsLinks = [
    ...((distributors || []).slice(0, -1).length
      ? [
          distributors
            .slice(0, -1)
            .map(
              (dist) =>
                `<a href=${dist.url} target="_blank" rel="noopener noreferrer">${dist.name}</a>`,
            )
            .join(', '),
        ]
      : []),
    ...(distributors || [])
      .slice(-1)
      .map(
        (dist) =>
          `<a href=${dist.url} target="_blank" rel="noopener noreferrer">${dist.name}</a>`,
      ),
  ].join(' and ');

  return (
    <section>
      <h3>Details</h3>

      <ul className={styles.inline}>
        <li className={styles.link}>
          <Link href="/fonts/licensing">Licensing Info</Link>
        </li>

        <li className={styles.link}>
          <Link href="/fonts/eula">View EULA</Link>
        </li>
      </ul>

      {description && (
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {distributors && distributors.length > 0 && (
        <div className={styles.desc}>
          Have another marketplace you prefer to get your licensing from? This
          font is also available at{' '}
          <span dangerouslySetInnerHTML={{ __html: distributorsLinks }} />.
        </div>
      )}

      <div className={`${styles.lists} ${styles.inline}`}>
        {(downloads.personal.file || {}).url && (
          <ul className={styles.list}>
            <li>
              <h4>Personal Use Details</h4>
            </li>

            {(downloads.personal.features || []).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        {(downloads.commercial.file || {}).url && (
          <ul className={styles.list}>
            <li>
              <h4>Commercial Use Details</h4>
            </li>

            {(downloads.commercial.features || []).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className={styles.inline}>
          <span className={styles.tagHeading}>Tagged:</span>
          <Tags tags={tags} path="/fonts/tagged" source="font page" />
        </div>
      )}
    </section>
  );
};

export default Details;
