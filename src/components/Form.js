import Button from "./UI/Button";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.form}>
      <div className={classes.wrapper}>
        <h3>Kontaktirajte nas</h3>
        <p>
          Spremni da pređete na sledeći nivo? Hajde da pričamo o vašem projektu
          ili ideji i saznajte kako možemo pomoći vašem poslovanju da raste. Ako
          tražite jedinstvena digitalna rešenja koja se odnose na vaše
          korisnike, Pišite nam.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone" />
        <textarea
          placeholder="Your Message"
          rows="5"
          cols="50"
          spellCheck="false"
        />

        <Button label="Submit" />
      </form>
    </div>
  );
};

export default Form;
