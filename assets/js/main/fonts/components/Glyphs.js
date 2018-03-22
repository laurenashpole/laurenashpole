import React, { Component, Fragment } from 'react';

class Glyphs extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeGlyphs: 'basic'
    };
  }

  handleClick = (e) => {
    let activeGlyphs = e.target.getAttribute('data-glyphs');
    this.setState({ activeGlyphs });
  }

  render () {
    return(
      <section className="font__section">
        <div className="container container--large">
          <div className="column--static u--center-mobile">
            <h2 className="font__heading text--uppercase">Glyphs</h2>

            {this.props.font.commercial_file.additional_chars.is_included &&
              <ul className="text--uppercase text--medium text--extra-bold list--unstyled u--center-mobile">
                <li className="font__heading-link">
                  <a href="javascript:void(0);" onClick={this.handleClick} data-glyphs="basic">Basic Characters</a>
                </li>
                <li className="font__heading-link">
                  <a href="javascript:void(0);" onClick={this.handleClick} data-glyphs="additional">Additional Characters</a>
                </li>
              </ul>
            }

            {this.state.activeGlyphs === 'basic' ? (
              <div className={`well font-glyphs font-${this.props.font.slug}`}>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">!</span>!
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">"</span>"
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">#</span>#
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">$</span>$
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">%</span>%
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">&amp;</span>&amp;
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">'</span>'
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">(</span>(
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">)</span>)
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">*</span>*
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">+</span>+
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">,</span>,
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">-</span>-
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">.</span>.
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">/</span>/
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">0</span>0
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">1</span>1
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">2</span>2
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">3</span>3
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">4</span>4
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">5</span>5
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">6</span>6
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">7</span>7
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">8</span>8
                </div>
                <div className="font-glyphs__char is-number">
                  <span className="font-glyphs__key">9</span>9
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">:</span>:
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">;</span>;
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">&lt;</span>&lt;
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">=</span>=
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">&gt;</span>&gt;
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">?</span>?
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">@</span>@
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">A</span>A
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">B</span>B
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">C</span>C
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">D</span>D
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">E</span>E
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">F</span>F
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">G</span>G
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">H</span>H
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">I</span>I
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">J</span>J
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">K</span>K
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">L</span>L
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">M</span>M
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">N</span>N
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">O</span>O
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">P</span>P
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">Q</span>Q
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">R</span>R
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">S</span>S
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">T</span>T
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">U</span>U
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">V</span>V
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">W</span>W
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">X</span>X
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">Y</span>Y
                </div>
                <div className="font-glyphs__char is-capital">
                  <span className="font-glyphs__key">Z</span>Z
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">[</span>[
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">\</span>\
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">]</span>]
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">^</span>^
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">_</span>_
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">`</span>`
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">a</span>a
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">b</span>b
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">c</span>c
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">d</span>d
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">e</span>e
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">f</span>f
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">g</span>g
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">h</span>h
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">i</span>i
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">j</span>j
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">k</span>k
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">l</span>l
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">m</span>m
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">n</span>n
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">o</span>o
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">p</span>p
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">q</span>q
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">r</span>r
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">s</span>s
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">t</span>t
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">u</span>u
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">v</span>v
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">w</span>w
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">x</span>x
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">y</span>y
                </div>
                <div className="font-glyphs__char is-lower">
                  <span className="font-glyphs__key">z</span>z
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">{'{'}</span>{'{'}
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">|</span>|
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">{'}'}</span>{'}'}
                </div>
                <div className="font-glyphs__char is-symbol">
                  <span className="font-glyphs__key">~</span>~
                </div>
              </div>
            ) : (
              <div className={`well font-glyphs font-${this.props.font.slug}`}>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&iexcl;</span>&iexcl;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&cent;</span>&cent;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&pound;</span>&pound;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&curren;</span>&curren;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&yen;</span>&yen;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&brvbar;</span>&brvbar;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&sect;</span>&sect;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&uml;</span>&uml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&copy;</span>&copy;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ordf;</span>&ordf;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&laquo;</span>&laquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&not;</span>&not;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&reg;</span>&reg;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&deg;</span>&deg;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&plusmn;</span>&plusmn;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&sup2;</span>&sup2;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&sup3;</span>&sup3;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&acute;</span>&acute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&micro;</span>&micro;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&para;</span>&para;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&middot;</span>&middot;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&cedil;</span>&cedil;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&sup1;</span>&sup1;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ordm;</span>&ordm;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&raquo;</span>&raquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&frac14;</span>&frac14;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&frac12;</span>&frac12;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&frac34;</span>&frac34;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&iquest;</span>&iquest;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Agrave;</span>&Agrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Aacute;</span>&Aacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Acirc;</span>&Acirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Atilde;</span>&Atilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Auml;</span>&Auml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Aring;</span>&Aring;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&AElig;</span>&AElig;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ccedil;</span>&Ccedil;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Egrave;</span>&Egrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Eacute;</span>&Eacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ecirc;</span>&Ecirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Euml;</span>&Euml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Igrave;</span>&Igrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Iacute;</span>&Iacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Icirc;</span>&Icirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Iuml;</span>&Iuml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ETH;</span>&ETH;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ntilde;</span>&Ntilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ograve;</span>&Ograve;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Oacute;</span>&Oacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ocirc;</span>&Ocirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Otilde;</span>&Otilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ouml;</span>&Ouml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&times;</span>&times;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Oslash;</span>&Oslash;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ugrave;</span>&Ugrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Uacute;</span>&Uacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Ucirc;</span>&Ucirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Uuml;</span>&Uuml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&Yacute;</span>&Yacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&THORN;</span>&THORN;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&szlig;</span>&szlig;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&agrave;</span>&agrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&aacute;</span>&aacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&acirc;</span>&acirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&atilde;</span>&atilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&auml;</span>&auml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&aring;</span>&aring;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&aelig;</span>&aelig;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ccedil;</span>&ccedil;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&egrave;</span>&egrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&eacute;</span>&eacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ecirc;</span>&ecirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&euml;</span>&euml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&igrave;</span>&igrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&iacute;</span>&iacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&icirc;</span>&icirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&iuml;</span>&iuml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&eth;</span>&eth;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ntilde;</span>&ntilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ograve;</span>&ograve;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&oacute;</span>&oacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ocirc;</span>&ocirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&otilde;</span>&otilde;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ouml;</span>&ouml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&divide;</span>&divide;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&oslash;</span>&oslash;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ugrave;</span>&ugrave;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&uacute;</span>&uacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ucirc;</span>&ucirc;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&uuml;</span>&uuml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&yacute;</span>&yacute;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&thorn;</span>&thorn;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&yuml;</span>&yuml;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&#338;</span>&#338;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&#339;</span>&#339;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&#376;</span>&#376;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&euro;</span>&euro;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&sbquo;</span>&sbquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ldquo;</span>&ldquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&hellip;</span>&hellip;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&lsaquo;</span>&lsaquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&rsaquo;</span>&rsaquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&lsquo;</span>&lsquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&rsquo;</span>&rsquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ldquo;</span>&ldquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&rdquo;</span>&rdquo;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&bull;</span>&bull;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&ndash;</span>&ndash;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&mdash;</span>&mdash;
                </div>
                <div className="font-glyphs__char is-additional">
                  <span className="font-glyphs__key">&trade;</span>&trade;
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Glyphs;