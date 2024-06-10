<template>
	<v-card>
		<v-card-title>{{ item.names[0].name }}</v-card-title>
		<v-card-subtitle v-for="(name, index) in item.names.slice(1)" :key="index">{{ name.name }}</v-card-subtitle>
		<v-card-text>
			<v-chip :color="chipColor">#{{ item.id }}</v-chip>
			<b>{{ item.date }}</b>
			<p><b>{{ item.address }}</b></p>
		</v-card-text>
		<v-divider></v-divider>
		<item-actions :state="item.state.id" :cep="item.cep" :timbrado="item.timbrado" :itemId="item.id" />
	</v-card>
</template>

<script>
import ItemActions from './ItemActions.vue';

export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	computed: {
    chipColor() {
      switch (this.item.state.name) {
        case 'BORRADOR':
          return 'grey';
        case 'CONFIRMADA':
          return 'green';
        case 'VISADA':
          return 'light-blue';
        default:
          return 'default';
      }
    }
  },
	components: {
		ItemActions
	}
};
</script>