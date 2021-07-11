import { Component } from "react";
import styles from "./CastList.module.css";
import defaultImg from "./defaultImage.jpg";

const imgURL = "https://image.tmdb.org/t/p/w500";

class CastList extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    const { casts } = this.props;
    this.setState({ casts: casts });
  }

  render() {
    const { casts } = this.state;
    console.log(casts);
    return (
      <>
        {casts.length > 0 ? (
          <div className={styles.container}>
            <h3>Casts List</h3>
            <ul className={styles.list}>
              {casts.map((cast) => {
                return (
                  <li key={cast.id}>
                    <div className={styles.wraper}>
                      <img
                        src={
                          cast.profile_path
                            ? `${imgURL}${cast.profile_path}`
                            : defaultImg
                        }
                        alt={cast.name}
                        className={styles.image}
                      ></img>
                      <h3 className={styles.name}>{cast.name}</h3>
                      <p className={styles.character}>{cast.character}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <h3 className={styles.message}>Sorry, no information found</h3>
        )}
      </>
    );
  }
}

export default CastList;
