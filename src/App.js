import { useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav'
import UserContext from './contexts/UserContext'

function App() {
  // const user = useContext(UserContext)
  // console.log(user)
  return (
    <div className="App">
      {/* All context comes with the Provider Componet.  This allows us to use this as a wrapper and share information to all of its children.  We need the value prop inside our provider. */}
      <UserContext.Provider value={'Thiago'}>
        <Nav />
      </UserContext.Provider>


    </div>
  );
}

export default App;