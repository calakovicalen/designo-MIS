import GalleryCard from "./GalleryCard";
import Wrapper from "../../UI/Wrapper";

import airfilter from "../../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../../../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../../../assets/app-design/desktop/image-todo.jpg";

const DATA = [
  {
    image: airfilter,
    header: "Airfilter",
    text: "Rešavanje problema lošeg kvaliteta vazduha u zatvorenom prostoru filtriranjem vazduha",
  },
  {
    image: eyecam,
    header: "Eyecam",
    text: "Proizvod koji vam omogućava da u svakom trenutku uređujete svoje omiljene fotografije i video zapise",
  },
  {
    image: faceit,
    header: "Faceit",
    text: "Upoznajte svoju omiljenu internet superzvezdu pomoću aplikacije Faceit",
  },
  {
    image: todo,
    header: "Todo",
    text: "Todo aplikacija koja ima sinhronizaciju u cloudu sa svetlim i tamnim režimom",
  },
  {
    image: loopstudios,
    header: "Loopstudios",
    text: "Aplikacija za VR iskustvo napravljena za Loopstudios",
  },
];

const AppGallery = () => {
  return (
    <Wrapper>
      {DATA.map((item, index) => {
        return (
          <GalleryCard key={index}>
            <img src={item.image} alt={`Pic of ${item.header} website`} />
            <span>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </span>
          </GalleryCard>
        );
      })}
    </Wrapper>
  );
};

export default AppGallery;
