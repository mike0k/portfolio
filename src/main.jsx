import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './store/Store.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <Provider store={Store}>
            <PersistGate persistor={Persistor}>
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </StrictMode>
);
