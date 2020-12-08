import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './app/layout/App'; 
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/layout/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
 



const store = configureStore(); 




ReactDOM.render(
 
     <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
             <ReduxToastr
               position="bottom-right"
               transitionIn="fadeIn"
               transitionOut="fadeOut"
             />
                 <App />
          </ScrollToTop>
         </BrowserRouter>
     </Provider>,



  document.getElementById('root')
);
 
