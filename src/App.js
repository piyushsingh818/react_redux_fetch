import './App.css';
import PostList from './components/TodosComponent';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostList/>
    </div>
    </Provider>
  );
}

export default App;
