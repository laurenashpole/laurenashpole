import React from 'react';
import { Link } from 'react-router-dom';

const Fonts = () => {
  let fonts = window.APP.fonts;

  return(
    <main className="main">
      <div className="font-grid">
        {fonts.map((font) => {
          return (
            <div className="well font-grid__item" key={font._id}>
              <div className="font-grid__image">
                <img src={`/images/fonts/${font.image_main}`} />
              </div>
              <h3>{font.name}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Fonts;