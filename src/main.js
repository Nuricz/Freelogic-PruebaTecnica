/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import store from './store';
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(store);
app.mount('#app')
