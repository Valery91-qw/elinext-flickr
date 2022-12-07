import './index.css';
import App from './view/App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./bll/store";

import {createRoot} from "react-dom/client";
const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>,
)