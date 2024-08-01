import App from './api/App';
import OPTIONS from './state/INIT_OPTIONS.js';

const app = new App();

app.initialApp(OPTIONS.CONTAINERS);
app.initialWidgets(OPTIONS.CONTAINERS);
app.initialState(OPTIONS.STATE);
app.createStreams();
app.subscribeToStreams();
