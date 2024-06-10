import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		items: [],
		filterState: 'CONFIRMADA'
	},
	mutations: {
		setItems(state, items) {
			state.items = items;
		},
		setFilterState(state, filterState) {
			state.filterState = filterState;
		},
		updateCep(state, itemId) {
			const item = state.items.find(item => item.id === itemId);
			if (item) {
				item.cep = true;
			}
		},
		updateTimbrado(state, itemId) {
			const item = state.items.find(item => item.id === itemId);
			if (item) {
				item.timbrado = true;
			}
		}
	},
	actions: {
		async fetchItems({ commit }) {
			try {
				const response = await axios.get('https://run.mocky.io/v3/fbca71a3-24e8-477e-aff5-5be63ab5417c');
				commit('setItems', response.data);
			} catch (error) {
				console.error('Error al obtener datos de la API:', error);
			}
		},
		updateFilterState({ commit }, filterState) {
			commit('setFilterState', filterState);
		}
	},
	getters: {
		filteredItems: (state) => {
			if (!state.filterState) {
				return state.items;
			}
			return state.items.filter(item => item.state.name === state.filterState);
		},
		currentFilterState: (state) => {
			return state.filterState;
		}
	}
});