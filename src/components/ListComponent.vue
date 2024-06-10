<template>
	<v-container>
		<h2>Ejercicio</h2>
		<br>
		<FilterButtons />
		<v-row>
			<v-col v-for="item in filteredItems" :key="item.id" cols="12">
				<ItemComponent :item="item" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterButtons from './FilterButtons.vue';
import ItemComponent from './ItemComponent.vue';

export default {
	components: {
		FilterButtons,
		ItemComponent
	},
	computed: {
		...mapGetters(['filteredItems'])
	},
	created() {
		this.$store.dispatch('fetchItems');
	}
};
</script>