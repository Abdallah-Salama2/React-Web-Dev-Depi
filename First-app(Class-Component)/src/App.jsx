import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./Parent";

export class App extends Component {
  render() {
    return (
      <div>
        <Parent></Parent>
      </div>
    );
  }
}

export default App;

// In a typical React application, the files `App.js`, `index.js`, and `index.html` play distinct but interconnected roles. Here’s a breakdown to help clarify the "cycle" or flow of how they work together:

// ### 1. **index.html**
//    - **Purpose:** This file serves as the base HTML document that will be loaded in the browser.
//    - **Content:** It contains a minimal HTML structure, typically with a `div` element that has an `id` like `root` (or sometimes `app`). This `div` is where your entire React application will be rendered.
//    - **Example:**
//      ```html
//      <!DOCTYPE html>
//      <html lang="en">
//      <head>
//          <meta charset="UTF-8">
//          <meta name="viewport" content="width=device-width, initial-scale=1.0">
//          <title>React App</title>
//      </head>
//      <body>
//          <div id="root"></div> <!-- React will render your app here -->
//      </body>
//      </html>
//      ```

// ### 2. **index.js**
//    - **Purpose:** This file is the entry point of your React application. It’s responsible for rendering the main React component (usually `App.js`) into the `root` element in `index.html`.
//    - **Content:** It typically imports React and ReactDOM, along with the main component (often `App.js`). Then it uses `ReactDOM.render()` or `createRoot()` (in newer React versions) to inject the React app into the DOM.
//    - **Example:**
//      ```javascript
//      import React from 'react';
//      import ReactDOM from 'react-dom';
//      import App from './App';

//      ReactDOM.createRoot(document.getElementById('root')).render(
//        <React.StrictMode>
//          <App />
//        </React.StrictMode>
//      );
//      ```

//    - **Explanation:** Here, `index.js` tells React to take the `App` component and render it inside the `div` with the `id="root"` from `index.html`.

// ### 3. **App.js**
//    - **Purpose:** This file defines the main structure and logic of your application. It’s a React component that typically represents the top-level component in your application’s component tree.
//    - **Content:** This component could include other components, define routes, or contain the logic for the app’s state management.
//    - **Example:**
//      ```javascript
//      import React from 'react';

//      function App() {
//        return (
//          <div className="App">
//            <h1>Hello, World!</h1>
//            {/* Other components go here */}
//          </div>
//        );
//      }

//      export default App;
//      ```

//    - **Explanation:** `App.js` is where you define the UI and logic for your app. In this case, it just renders a simple "Hello, World!" message.

// ### **The Cycle:**
// 1. **Load `index.html`:** When the browser loads your application, it first loads `index.html`, which contains an empty `div` with the `id="root"`.

// 2. **Execute `index.js`:** This file is executed by the JavaScript engine. It imports `App.js`, and then uses `ReactDOM.createRoot()` to render the `App` component into the `root` div.

// 3. **Render `App.js`:** The `App` component is executed, which creates the actual UI (like the "Hello, World!" message). This UI is then inserted into the `root` div in `index.html`.

// ### **Summary:**
// - `index.html` provides the basic HTML structure and a target (`div` with `id="root"`) for the React app.
// - `index.js` initializes the React app and renders the `App` component into the `root` div.
// - `App.js` defines the main application component, which holds the content and logic of your app.

// This "cycle" connects these files together, allowing your React application to run in the browser.
