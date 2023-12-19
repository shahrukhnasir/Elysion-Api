import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.css'
import MainLayout from '../layout/MainLayout'
import '../css/style.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../Redux/store';


function MyApp({ Component, pageProps }) {
  return (<><div className="html">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout><Component {...pageProps} /></MainLayout>

      </PersistGate>
    </Provider>

  </div></>)

}

export default MyApp
