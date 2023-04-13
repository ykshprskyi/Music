import { PrImage } from "../PrImage/PrImage";
import { Link } from "react-router-dom";
import "./ContentCard.scss";

export const ContentCard = ({ album }) => {
  return (
    <div className={`album album-${album.id}`}>
      <div className="album_content">
        <Link className="album_content__link" to={`${album.id}`} />
        <div className="album_content__cover">
          <PrImage name={album.cover} />
        </div>
        <div className="album_content__name">
          <h3>{album.name}</h3>
        </div>
        <div className="album_content__author">
          <h4>{album.author}</h4>
        </div>
        <div className="album_content__add">Add to playlist</div>
      </div>
    </div>
  );
};