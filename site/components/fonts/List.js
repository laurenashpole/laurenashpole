import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from '../../../shared/components/Button';
import Container from '../../../shared/components/Container.js';
import Input from '../../../shared/components/Input';
import Tags from '../../../shared/components/Tags';
import Grid from './Grid.js';
import styles from './List.styles.js';

const List = ({ heading, fonts, tags, description }) => {
  const [filter, setFilter] = useState('');
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);

  useEffect(() => {
    const filteredFonts = filter
      ? fonts.filter(
          (font) => font.name.toUpperCase().indexOf(filter.toUpperCase()) > -1,
        )
      : fonts;
    setFilteredFonts(filteredFonts);
  }, [filter, fonts]);

  return (
    <>
      <div className="list">
        <div className="list__header">
          <Container>
            <h1 className="list__heading">{heading}</h1>

            {tags.length > 0 && (
              <div className="list__tags">
                <Tags tags={tags} path="/fonts/tagged" source="font list" />
              </div>
            )}

            {description && <h2 className="list__desc">{description}</h2>}
          </Container>
        </div>

        <div className="list__filter">
          <Container>
            <form className="list__filter-form">
              <Button
                style="secondary"
                onClick={() => setFilter('')}
                attributes={{
                  type: 'button',
                  disabled: !filter,
                  'data-ga-click': true,
                  'data-ga-category': `${heading.toLowerCase()} list`,
                  'data-ga-text': 'Reset search term',
                }}
              >
                <span aria-label="Reset search term" />
              </Button>

              <Input
                label="Find by name"
                hideLabel={true}
                attributes={{
                  type: 'text',
                  value: filter,
                  placeholder: 'Find by name',
                  onChange: (e) => setFilter(e.target.value),
                }}
              />
            </form>
          </Container>
        </div>

        {filteredFonts.length > 0 ? (
          <Grid fonts={filteredFonts} gaCategory={heading} />
        ) : (
          <Container>
            <div className="list__empty">
              No results for &quot;{filter}&quot;.
            </div>
          </Container>
        )}
      </div>

      <Container />

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

List.propTypes = {
  heading: PropTypes.string,
  fonts: PropTypes.array,
  tags: PropTypes.array,
  description: PropTypes.string,
};

export default List;
