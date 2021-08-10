import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper';

const App = () : JSX.Element => {

  return <BrowserRouter>
          <AppWrapper />

    </BrowserRouter>
}

export default App;
