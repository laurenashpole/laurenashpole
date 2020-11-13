import Input from '../shared/Input';
import Button from '../shared/Button';
import styles from '../shared/mailing.styles.js';

const Mailing = () => {
  return (
    <form className="mailing mailing--inline" action-xhr="/api/amp/mailing" method="post" target="_top">
      <div className="mailing__input">
        <Input label="Mailing List Email" hideLabel={true} inputProps={{ type: 'email', name: 'email', placeholder: 'Want email updates?' }} />
      </div>

      <input className="mailing__hidden" name="b_5e9c643a20b49926773037101_a878f779fc" type="text" tabIndex="-1" aria-hidden="true" />

      <div className="mailing__button">
        <Button type="secondary" attributes={{ type: 'submit' }}>
          <span className="mailing__text--default">Sign<br /> me up!</span>
          <span className="mailing__text--response"></span>
        </Button>
      </div>

      <style jsx global>
        {styles}
      </style>
    </form>
  );
};

export default Mailing;