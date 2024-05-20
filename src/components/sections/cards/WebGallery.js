import GalleryCard from "./GalleryCard";
import Wrapper from "../../UI/Wrapper";

import blogr from "../../../assets/web-design/desktop/image-blogr.jpg";
import builder from "../../../assets/web-design/desktop/image-builder.jpg";
import camp from "../../../assets/web-design/desktop/image-camp.jpg";
import express from "../../../assets/web-design/desktop/image-express.jpg";
import photon from "../../../assets/web-design/desktop/image-photon.jpg";
import transfer from "../../../assets/web-design/desktop/image-transfer.jpg";

const DATA = [
  {
    image: express,
    header: "Express",
    text: "Višenamenski sajt za isporuku za e-trgovinske poslove",
  },
  {
    image: transfer,
    header: "Transfer",
    text: "Sajt za jeftine transfera novca i slanje novca u roku od nekoliko sekundi",
  },
  {
    image: photon,
    header: "Photon",
    text: "Savremeni muzički plejer sa visokom rezolucijom zvuka i DSP efektima",
  },
  {
    image: builder,
    header: "Builder",
    text: "Povezuje korisnike sa lokalnim izvođačima radova na osnovu njihove lokacije",
  },
  {
    image: blogr,
    header: "Blogr",
    text: "Blogr je platforma za kreiranje online bloga ili publikacije",
  },
  {
    image: camp,
    header: "Camp",
    text: "Dobijte stručno obuku u kodiranju, podacima, dizajnu i digitalnom marketingu",
  },
];

const WebGallery = () => {
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

export default WebGallery;
