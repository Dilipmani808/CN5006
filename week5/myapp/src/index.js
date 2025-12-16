import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppColor from './Appbackground';
import GreetingElementwithProp from './myGreetingProp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppColor heading="This is first element" lbl="Name :" color="green" />
    <AppColor heading="This is second element" lbl="Name :" color="blue" />
    <AppColor heading="This is third element" lbl="Name :" color="yellow" />
    <GreetingElementwithProp msg="Hi its Monday" />
  </React.StrictMode>
);

reportWebVitals();

