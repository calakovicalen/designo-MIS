import GalleryCard from "./GalleryCard";
import Wrapper from "../../UI/Wrapper";

import boxed from "../../../assets/graphic-design/desktop/image-boxed-water.jpg";
import change from "../../../assets/graphic-design/desktop/image-change.jpg";
import science from "../../../assets/graphic-design/desktop/image-science.jpg";

const DATA = [
  {
    image: change,
    header: "Tim Brown",
    text: `Korice knjige dizajnirane za
    Novo izdanje Tima Brauna, 'Change'`,
  },
  {
    image: boxed,
    header: "Boxed water",
    text: "Jednostavan koncept pakovanja napravljen za Boxed Water",
  },
  {
    image: science,
    header: "Science!",
    text: "Plakat napravljen u saradnji sa Saveznim umetničkim projektom",
  },
];

const GraphicGallery = () => {
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

export default GraphicGallery;
