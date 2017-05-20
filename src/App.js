import React, { Component } from 'react';
import landingScene from './scenes/landing-scene';
import expositionScene from './scenes/exposition-scene';

class App extends Component {

  constructor() {
    super();

    this.state = {
      backgroundURL: landingScene.backgroundUrl,
      headerText: landingScene.headerText,
      bodyText: landingScene.bodyText,
      userName: '',
      scene: landingScene
    };
  }

  setName(userName) {
    this.setState({ userName });
  }

  goToScene(scene) {
    this.setState({ scene });
    this.setState({ backgroundURL: scene.backgroundUrl });
    this.setState({ headerText: scene.headerText });
    this.setState({ bodyText: scene.bodyText });
  }


  render() {
    const { headerText, backgroundURL, bodyText, userName, scene } = this.state;
    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundURL})`
      }}>
        <div className="wrapper">
          <div className="Scene-header">
            <h2>{headerText}</h2>
          </div>
          <p> {bodyText} {userName} </p>
          <form onSubmit={e => {
            e.preventDefault();
            this.setName(e.target.elements.nameinput.value);
            this.goToScene(scene.nextScene);
          }}>
            <label>Name <input name="nameinput"></input></label>
            <p><button type="submit">Start Game</button></p>
          </form>
        </div>
      </div >
    );
  }
}

export default App;
