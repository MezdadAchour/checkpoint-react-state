import React from "react";
import "./App.css";

class App extends React.Component {
  // constructor et declaration de person
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Achour Mezdad",
        bio: "Développeur web passionné avec 5 ans d'expérience, spécialisé en React et Node.js. Adepte des bonnes pratiques de code et de l'apprentissage continu. Amateur de randonnée et de photographie le week-end.",
        imgSrc:
          "https://st3.depositphotos.com/13194036/19088/i/450/depositphotos_190887154-stock-photo-young-hacker-developing-malware-dark.jpg",
        profession: "Développeur Web",
      },
      show: true,
    };
  }

  // Méthode pour mettre à jour l'état
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show } = this.state;

    return (
      <div className="App">
        <div className="card">
          {/* si show = true */}
          {show && (
            <>
              <img className="card-image" src={person.imgSrc} />
              <div className="card-content">
                <h1 className="card-name">{person.fullName}</h1>
                <h2 className="card-profession">{person.profession}</h2>
                <p className="card-bio">{person.bio}</p>
              </div>
            </>
          )}
          {/* boutton */}
          <button className="toggle-button" onClick={this.toggleShow}>
            {show ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
