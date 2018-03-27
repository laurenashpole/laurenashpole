import React, { Component } from 'react';
import Purchase from './Purchase';
import Download from './Download';

const Cta = (props) => {
  return(
    <section className="column--fixed well well--no-padding font-hero__well">
      <div className="well__row">
        <div className="well__column">
          <h3 className="text--uppercase">
            {props.font.name}
          </h3>

          {props.font.commercial_font_file &&
            <Purchase font={props.font} />
          }

          {props.font.personal_font_file &&
            <Download font={props.font} />
          }
        </div>
      </div>

      <ul className="list--unstyled well__row">
        <li className="well__column font-hero__files">
          <i className="fa fa-desktop font-hero__files-icon"></i>
          Desktop
        </li>

        {props.font.commercial_file.webfont.is_included &&
          <li className="well__column font-hero__files">
            <i className="fa fa-code font-hero__files-icon"></i>
            Web
          </li>
        }
      </ul>
    </section>
  );
};

export default Cta;