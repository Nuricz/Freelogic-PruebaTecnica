<template>
	<v-row>
		<v-col cols="12">
			<v-row class="d-flex flex-nowrap">
				<v-col class="px-1" cols="auto">
					<v-btn :color="getButtonColor('BORRADOR')" @click="setFilter('BORRADOR')">
						<v-icon left>mdi-cached</v-icon>
						Borrador
					</v-btn>
				</v-col>
				<v-col class="px-1" cols="auto">
					<v-btn :color="getButtonColor('CONFIRMADA')" @click="setFilter('CONFIRMADA')">
						<v-icon left>mdi-check-circle-outline</v-icon>
						Confirmada
					</v-btn>
				</v-col>
				<v-col class="px-1" cols="auto">
					<v-btn :color="getButtonColor('VISADA')" @click="setFilter('VISADA')">
						<v-icon left>mdi-check-all</v-icon>
						Visada
					</v-btn>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['currentFilterState'])
	},
	methods: {
		...mapActions(['updateFilterState']),
		setFilter(state) {
			this.updateFilterState(state);
		},
		getButtonColor(state) {
			return this.currentFilterState === state ? 'primary' : 'default';
		}
	}
};
</script>