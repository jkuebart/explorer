import React from 'react';
import { render } from 'react-dom';
import html from '../index.html';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/scroll/simplescrollbars.css';
import css from './css/main.scss';

import App from './app';

document.addEventListener('DOMContentLoaded', function() {
  const domContainer = document.querySelector('#jsonapi-explorer-root');
  const exploredUrl = domContainer.getAttribute('data-explored-url');
  if (domContainer) {
    render(<App options={{exploredUrl}}/>, domContainer);
  }
});
