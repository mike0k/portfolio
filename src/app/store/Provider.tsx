import { Provider } from 'react-redux';
import Store from './Store';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={Store}>{children}</Provider>;
}
