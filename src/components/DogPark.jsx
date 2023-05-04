import React from 'react';

class DogPark extends React.Component {
  state = {
    currentDog: '',
    isLoading: false,
    savedDogs: [],
  }

  getDogImage = async () => {
    this.setState({ isLoading: true },
      async () => {
        const apiResponse = await fetch('https://dog.ceo/api/breeds/image/random');
        const imgSrc = await apiResponse.json();
        this.setState({
          isLoading: false,
          currentDog: imgSrc.message,
        });
      });
  }

  componentDidMount = async () => {
    this.getDogImage();
  }

  searchDog = () => {
    this.getDogImage();
  }

  saveDog = () => {
    const { currentDog } = this.state;
    this.setState(({ savedDogs }) => ({
      savedDogs: [...savedDogs, currentDog],
    }));
  }

  render = () => {
    const { currentDog, isLoading } = this.state;
    return (
      <div className="dog-park">
        {!isLoading
        && (
          <h2>
            Breed:
            {currentDog.split('/')[4]}
          </h2>)}

        <div className="img-container">
          {isLoading
            ? (<p>loading...</p>)
            : (<img className="dog-img" src={ currentDog } alt="randon dog" />)}
        </div>
        <div className="buttons-div">
          <button type="button" onClick={ this.searchDog }>search</button>
          <button type="button" onClick={ this.saveDog }>save</button>
        </div>
      </div>
    );
  }
}

export default DogPark;
