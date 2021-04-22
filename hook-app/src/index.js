import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './components/09-useContext/MainApp';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayout/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useSatate/CounterWithCustomHook';
// import { CounterApp } from './components/01-useSatate/CounterApp';
// import { HookApp } from './HookApp';
// import {FormWithCustomHook} from './components/02-useEffect/FormWithCustomHook.js'
// import { TodoApp } from './components/08-useReducer/TodoApp';

import './index.css';

ReactDOM.render(
  // <React.StrictMode>
    // <SimpleForm></SimpleForm>,
  // <FormWithCustomHook></FormWithCustomHook>,
  // <MultipleCustomHook></MultipleCustomHook>,
  // <FocusScreen></FocusScreen>,
    // <RealExampleRef/>,
    // <Layout/>,
    // <Memorize/>,
    // <MemoHook/>,
    // <CallbackHook/>,
   //  <Padre/>,
    // <TodoApp/>,
    <MainApp></MainApp>,
  // </React.StrictMode>,
  document.getElementById('root')
);