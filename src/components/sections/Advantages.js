import classes from "./Advantages.module.css";

import Friendly from "../svgs/Friendly";
import Passionate from "../svgs/Passionate";
import Resourceful from "../svgs/Resourceful";

const DATA = [
  {
    id: "1",
    header: "Strastveni",
    text: `Svaki projekat počinje detaljnim istraživanjem brenda kako bismo bili sigurni da
    kreiramo proizvode koje služe svrsi. Spajamo umetnost, dizajn i
    tehnologije u uzbudljiva nova rešenja.`,
  },
  {
    id: "2",
    header: "Snalažljivi",
    text: `Sve što radimo ima stratešku svrhu. Koristimo agilno
    pristup u svim našim projektima i cenimo saradnje sa klijentima. To
    garantuje vrhunske rezultate koji ispunjavaju potrebe naših klijenata.`,
  },
  {
    id: "3",
    header: "Prijateljski",
    text: `Mi smo grupa entuzijastičnih ljudi koji znaju da stave ljude na prvo mesto.
    Naš uspeh zavisi od naših kupaca, a mi se trudimo da im pružimo
    najbolje iskustvo koje kompanija može da pruži.`,
  },
];

const compare = (variable, ar1, ar2, ar3) => {
  if (variable === "Passionate") {
    return ar1;
  } else if (variable === "Resourceful") {
    return ar2;
  } else return ar3;
};

const Advantages = () => {
  return (
    <section className={classes.advantages}>
      {DATA.map((item) => {
        return (
          <div key={item.id} className={classes["advantages-card"]}>
            <div className={classes["svg-container"]}>
              <div
                className={`${classes["svg-background"]} ${`${compare(
                  item.header,
                  classes.passionate,
                  classes.resourceful,
                  classes.friendly
                )}`}`}
              ></div>
              {compare(
                item.header,
                <Passionate />,
                <Resourceful />,
                <Friendly />
              )}
            </div>
            <div className={classes["text-container"]}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Advantages;
