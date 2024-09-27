// app/layout.js
'use client';
import './globals.css';
import { store } from '../store';
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <title>🗓 Date Picker</title>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
