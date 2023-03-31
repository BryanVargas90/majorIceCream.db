import { client, products } from "./mongoconnect.js";
const getAllProducts = async () => {
  try {
    await client.connect();
    const allProducts = await products.find().toArray();
    console.log(allProducts);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};
getAllProducts();
