import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import Hat from './components/Hat'
import Choice from './components/Choice'
import AddItem from './components/AddItem'
import ImportCSV from './components/ImportCSV'
import soundBite from './sound'
const hatQuote = "Hmm, difficult. VERY difficult. Plenty of courage, I see. Not a bad mind, either. There's talent, oh yes. And a thirst to prove yourself. But where to put you?"

class App extends Component {

  state = {
    items: [],
    choice: hatQuote,
    choices: [],
    audio: true,
    addComplete: false
  }

  reset = () => {
    this.setState({
      items: [],
      audio: true,
      choice: hatQuote,
      choices: [],
      addComplete: false
    })
  }

  handleCSV = (data) => {
    const items = data.filter(i => i.item !== "").map(i => i.item)
    this.setState(prevState => {
      return {
        items: prevState.items.concat(items),
        addComplete: true
      }
    })
  }

  addItem = (item) => {
    this.setState((prevState) => {
      console.log(prevState.items)
      return {
        items: prevState.items.concat(item)
      }
    })
  }

  randomChoice = () => {
    if (this.state.items.length === 0) {
      this.setState(() => {
        return {
          choice: 'Hat empty!',
          audio: false
        }
      })
      return;
    }

    this.setState((prevState) => {
      const randomizedItems = _.shuffle(prevState.items)
      const choice = _.last(randomizedItems)
      const items = randomizedItems.filter(i => i !== choice)

      return {
        choice,
        items,
        choices: prevState.choices.concat(choice)
      }
    })

  }

  playSoundBite = () => {
    if(!this.state.audio) {
      return;
    }
    const audioBite = new Audio(soundBite())
    audioBite.play();
  }

  render() {
    return (
      <div className="App">
        <div className="bar-top">
          <div className="controller">
            {!this.state.addComplete ?
              <ImportCSV addItems={this.handleCSV} />
              :
              <div className="csv-import">CSV imported!</div>
            }
          </div>
          
          <div className="controller">
            <AddItem addItem={this.addItem} />
          </div>

          <div className="controller">
            <button className="reset" onClick={() => this.reset()}>Reset</button>
          </div>
      </div>

      <div className="hero">
        <Hat speak={this.playSoundBite} pickItem={this.randomChoice} />
        {this.state.choice && <Choice choice={this.state.choice} />}
        <div className="footnote">App created in React by Ruegen Aschenbrenner</div>
      </div>
      
      </div >
    );
  }
}

export default App;
