const product = {
	id: 12,
	name: "whateves",
	description: "asdasd asd asd sad",
};

// const id = product.id;

// object destructuring
const { id: productId, name, description } = product;

console.log(productId, name, description);
