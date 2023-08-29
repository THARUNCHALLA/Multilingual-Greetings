import {Component} from 'react'

import Languages from './Components/Languages'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    initialImage: languageGreetingsList[0].imageUrl,
    imageAltText1: languageGreetingsList[0].imageAltText,
    activeTabId: languageGreetingsList[0].id,
  }

  SelectImage = id => {
    const filter = languageGreetingsList.find(each => each.id === id)
    this.setState({
      initialImage: filter.imageUrl,
      imageAltText1: filter.imageAltText,
      activeTabId: filter.id,
    })
  }

  render() {
    const {initialImage, imageAltText1, activeTabId} = this.state
    return (
      <div className="center">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unordered">
          {languageGreetingsList.map(each => (
            <Languages
              user={each}
              key={each.id}
              isActive={activeTabId === each.id}
              SelectImage={this.SelectImage}
            />
          ))}
        </ul>
        <img src={initialImage} alt={imageAltText1} />
      </div>
    )
  }
}

export default App
