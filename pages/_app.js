import '@/styles/globals.css';
import HomeLayout from '@/templates/HomeLayout';
import { Provider } from 'react-redux';
import store from '../features/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </Provider>
  )
}
