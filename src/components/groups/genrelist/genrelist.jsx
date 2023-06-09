import { Genrebutton } from "../../primitives/Genrebutton/Genrebutton";
import "./Genrelist.scss";
export const GenreList = () => {
  const genres = [
    { name: "Nu-metal", icon: "numetal" },
    { name: "Pop", icon: "pop" },
    { name: "Hip-Hop", icon: "hiphop" },
    { name: "Jazz", icon: "jazz" },
    { name: "Thrash Metal", icon: "thrash" },
    { name: "Alternative", icon: "alternative" },
    { name: "Indie", icon: "indie" },
  ];
  return (
    <div className="catalog_genres_list">
      <h2>Genres</h2>
      {genres.map((el, index) => (
        <Genrebutton genreName={el.name} key={el.name} icon={el.icon} />
      ))}
    </div>
  );
};
