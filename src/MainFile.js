import { Provider } from 'react-redux';
import {store, persistor} from './Redux/Users/store';
import Login from './Login';
import { PersistGate } from 'redux-persist/integration/react';

const MainFile = () =>{
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Login/>
            </PersistGate>
        </Provider>
    );
}
export default MainFile;