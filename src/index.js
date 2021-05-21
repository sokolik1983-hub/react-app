import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1,name: 'Dima'},
    {id: 2,name: 'Andrey'},
    {id: 3,name: 'Nina'},
    {id: 4,name: 'Alex'},
    {id: 5,name: 'Valera'},
    {id: 6,name: 'Sonya'},
    {id: 7,name: 'Maria'}
];

let messages = [
    {id: 1,message: 'How are you?!'},
    {id: 2,message: 'Hi!'},
    {id: 3,message: 'Speak english!Speak english!1111'},
];

let posts = [
    {id: 1, post: 'Hi, how are you?Hi, how are you?11', like: 25},
    {id: 2, post: 'Its my first post!', like: 15},
    {id: 3, post: 'Fucking crazy', like: 55},
];

ReactDOM.render(
  <React.StrictMode>
    <App requestDialogs={dialogs} requestMessages={messages} requestPosts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
