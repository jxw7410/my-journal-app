import React, { createContext } from 'react';
import { HashProvider, Switch } from 'react-router';


const AppContext = createContext(null);

function App() {
  return (
    <AppContext.Provider>
      <HashProvider>
        <Switch>

        </Switch>
      </HashProvider>
    </AppContext.Provider>
  )
}


export default App;
