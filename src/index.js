import React from 'react'
import ReactDOM from 'react-dom'
import counterReducer from './reducers/counterReducer'
import {createStore} from 'redux'

const store = createStore(counterReducer)

const Statistiikka = () => {
  const palautteita = 0

  console.log(store.getState)

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState.GOOD}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td></td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({ type: nappi})
  }

  render() {
    return (

      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

