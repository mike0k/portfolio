import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './Store';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={Store}>
            <PersistGate persistor={Persistor}>{children}</PersistGate>
        </Provider>
    );
}
