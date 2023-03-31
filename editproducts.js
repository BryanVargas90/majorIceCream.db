import { client, products } from "./mongoConnect.js";

const editProducts = async () => {
  //collection.findOne({name: 'cantaloupe'})

  const newProducts = await products.findOneAndUpdate(
    { name: "sundae" },
    { $set: { name: "chocolate sundae" } }
  );

  console.log(newProducts);
};
editProducts();
