import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state'
import RepositoriesState from './components/RepositoriesList'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search For a Package</h1>
                <RepositoriesState />
            </div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))