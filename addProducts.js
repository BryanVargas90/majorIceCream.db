import { client, products } from "./mongoConnect.js";

const addproducts = async () => {
  const myProducts = [
    {
      name: "double scoop",
      price: 8.99,
      stock: 40,
    },
    {
      name: "waffle cone",
      price: 5.99,
      stock: 25,
    },
    {
      name: "sundae",
      price: "7.99",
      stock: "27",
    },
    {
      name: "banana split",
      price: "12.99",
      stock: "50",
    },
  ];

  try {
    await client.connect();
    const added = await products.insertMany(myProducts);
    console.log(added);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
  //console.log(addedFruit);
};
addproducts();
