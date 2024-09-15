import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥 We could not find recipes for your query! Please try again 😊 🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥`;
  _message = `Success`;

  _generateMarkup() {
    console.log(this._data);

    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
