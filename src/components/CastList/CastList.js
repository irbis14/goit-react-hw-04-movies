import styles from "./CastList.module.css";

const imgURL = "https://image.tmdb.org/t/p/w500";

const CastList = ({ casts }) => {
  return (
    <div>
      <ul>
        {casts.map((cast) => {
          <li key={cast.id}>
            <div>
              <img src={`${imgURL}${cast.profile_path}`} alt={cast.name}></img>
              <h3>{cast.name}</h3>
              <p>{cast.character}</p>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default CastList;
