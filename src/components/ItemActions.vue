<template>
	<v-card-actions>
		<template v-if="state === 1"> <!-- Borrador -->
			<v-btn color="primary">VER FICHA</v-btn>
		</template>
		<template v-else-if="state === 2"> <!-- Confirmada -->
			CEP:
			<v-btn :color="cep ? 'success' : 'primary'" @click="pagar(cep, 'CEP', itemId)">
				<v-icon v-if="cep">mdi-check-circle</v-icon>
				<b v-else>Pagar</b>
			</v-btn>
			Timbrado:
			<v-btn :color="timbrado ? 'success' : 'primary'" @click="pagar(timbrado, 'TIMBRADO', itemId)">
				<v-icon v-if="timbrado">mdi-check-circle</v-icon>
				<b v-else>Pagar</b>
			</v-btn>
		</template>
		<template v-else-if="state === 3"> <!-- Visada -->
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" color="primary"><v-icon>mdi-chevron-down</v-icon></v-btn>
				</template>
				<v-list>
					<v-list-item @click="null">Detalle Ficha</v-list-item>
					<v-list-item @click="null">Agregar Ampliación</v-list-item>
					<v-list-item @click="null">Agregar Certificado</v-list-item>
				</v-list>
			</v-menu>
		</template>
	</v-card-actions>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	props: {
		state: Number,
		cep: Boolean,
		timbrado: Boolean,
		itemId: Number
	},
	methods: {
		...mapMutations(['updateCep', 'updateTimbrado']),
		pagar(value, type, itemId) {
			if (!value) {
				console.log(`${type} PAGADO`);
				if (type === 'CEP') {
					this.updateCep(itemId);
				} else if (type === 'TIMBRADO') {
					this.updateTimbrado(itemId);
				}
			}
		}
	}
};
</script>