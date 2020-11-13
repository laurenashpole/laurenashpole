import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { eeImpressions, eeEvent } from '../../utils/tracking';
import Well from '../../components/shared/Well';
import Tags from '../../components/shared/Tags';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import styles from './list.styles.js';

const List = ({ heading, fonts, tags }) => {
  const [filter, setFilter] = useState('');
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);

  useEffect(() => {
    eeImpressions(fonts);
  }, []);

  useEffect(() => {
    const filteredFonts = filter ? fonts.filter((font) => font.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) : fonts;
    setFilteredFonts(filteredFonts);
  }, [filter]);

  const handleClick = (font, idx) => {
    eeEvent(font, idx + 1, 'productClick', 'click');
  };

  return (
    <div className="list">
      <Well size="large" stickyChild={1}>
        <>
          <h1 className="list__heading">{heading}</h1>

          {Object.keys(tags).length > 0 &&
            <div className="list__tags">
              <Tags tags={tags} source="font list" />
            </div>
          }
        </>

        <form className="list__filter">
          <Button type="secondary" onClick={() => setFilter('')} attributes={{ type: 'button', disabled: !filter, 'data-ga-click': true, 'data-ga-category': 'font list', 'data-ga-action': 'Reset search term' }}>
            <span aria-label="Reset search term" />
          </Button>

          <Input label="Search by font name" hideLabel={true} inputProps={{ type: 'text', value: filter, placeholder: 'Search by font name', onChange: (e) => setFilter(e.target.value) }} />
        </form>

        {filteredFonts.length > 0 ? (
          <ul className="list__grid">
            {filteredFonts.map((font, i) => {
              return (
                <li key={font._id} className="list__item">
                  <Link href={`/fonts/${font.slug}`}>
                    <a className="list__link" data-ga-click={true} data-ga-category="font list" data-ga-action={font.name} onClick={() => handleClick(font, i)}>
                      <Image className="list__img" src={`/uploads/images/${font.image}`} alt={`${font.name} Sample Characters`} width={350} height={300} />
                      <div className="list__name">{font.name}</div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="list__empty">
            No results for &quot;{filter}&quot;.
          </div>
        )}
      </Well>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

List.propTypes = {
  heading: PropTypes.string,
  fonts: PropTypes.array,
  tags: PropTypes.object
};

export default List;