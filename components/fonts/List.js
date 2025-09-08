import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { ga4Event } from '../../utils/ga4';
import Well from '../../shared/components/Well';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Tags from '../../shared/components/Tags';
import styles from './List.styles.js';
import Container from '../../shared/components/Container.js';

const List = ({ heading, fonts, tags, description }) => {
  const [filter, setFilter] = useState('');
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);
  const [view, setView] = useState('grid');

  useEffect(() => {
    const defaultView = window.sessionStorage.getItem('fontListView');

    if (defaultView) {
      setView(defaultView);
    }
  }, []);

  useEffect(() => {
    ga4Event('view_item_list', fonts, `${heading} List`);
  }, [fonts, heading]);

  useEffect(() => {
    const filteredFonts = filter ? fonts.filter((font) => font.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) : fonts;
    setFilteredFonts(filteredFonts);
  }, [filter, fonts]);

  const handleClick = (font) => {
    ga4Event('select_item', [font], `${heading} List`);
  };

  const handleView = (option) => {
    window.sessionStorage.setItem('fontListView', option);
    setView(option);
  };

  return (
    <div className="list">
      {/* <Well size="large" stickyChild={1}> */}
        <div className="list__header">
          <Container>
            <h1 className="list__heading">{heading}</h1>

            {tags.length > 0 &&
              <div className="list__tags">
                <Tags tags={tags} path="/fonts/tagged" source="font list" />
              </div>
            }

            {description && <h2 className="list__desc">{description}</h2>}
          </Container>
        </div>

        <div className="list__settings">
          <Container>
            <div className="list__settings-options">
              <form className="list__filter">
                <Button style="secondary" onClick={() => setFilter('')} attributes={{ type: 'button', disabled: !filter, 'data-ga-click': true, 'data-ga-category': 'font list', 'data-ga-text': 'Reset search term' }}>
                  <span aria-label="Reset search term" />
                </Button>

                <Input label="Find by name" hideLabel={true} attributes={{ type: 'text', value: filter, placeholder: 'Find by name', onChange: (e) => setFilter(e.target.value) }} />
              </form>

              {['grid', 'list'].map((option) => {
                return (
                  <Button key={option} style="link" onClick={() => handleView(option)} attributes={{ type: 'button', disabled: view === option, 'data-ga-click': true, 'data-ga-category': 'font list', 'data-ga-text': `${option} view` }}>
                    <span className={`list__view list__view--${option}`} aria-label={`Switch to ${option} view`} />
                  </Button>
                );
              })}
            </div>
          </Container>
        </div>

        {filteredFonts.length > 0 ? (
          <div className="list__list-container">
            <Container>
              <ul className={view === 'grid' ? 'list__list--grid' : ''}>
                {filteredFonts.map((font, i) => {
                  return (
                    <li key={font._id} className="list__item">
                      <Link href={`/fonts/${font.slug}`}>
                        <a className="list__link" data-ga-click={true} data-ga-category="font list" data-ga-text={`${font.name} details`} onClick={() => handleClick(font, i)}>
                          {view === 'grid' ? (
                            <>
                              <Image key={`${font.name}Grid`} className="list__img" src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.main}`} alt={`${font.name} Sample Characters`} width={350} height={300} />
                              <div className="list__name">{font.name}</div>
                            </>
                          ) : (
                            <>
                              <div className="list__name">{font.name}</div>
                              <picture>
                                <source media="(min-width: 768px)" srcSet={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.list}`} />
                                <img src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.list_mobile}`} alt={`${font.name} Sample Characters`} />
                              </picture>
                            </>
                          )}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </div>
        ) : (
          <div className="list__empty">
            No results for &quot;{filter}&quot;.
          </div>
        )}
      {/* </Well> */}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

List.propTypes = {
  heading: PropTypes.string,
  fonts: PropTypes.array,
  tags: PropTypes.array,
  description: PropTypes.string
};

export default List;