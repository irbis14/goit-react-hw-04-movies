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
      <div className={styles.container}>
        <h3>Casts List</h3>
        <ul className={styles.list}>
          {casts.map((cast) => {
            return (
              <li key={cast.id}>
                <div className={styles.wraper}>
                  <img
                    src={`${imgURL}${cast.profile_path}`}
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
    );
  }
}

CastList.defaultProps = {
  src: "https://i.stack.imgur.com/l60Hf.png",
};

export default CastList;
