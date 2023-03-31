import { client, products } from "./mongoConnect.js";
const deleteproducts = async () => {
  //start try catch
  try {
    await client.connect();
    const itemDeleted = await products.deleteOne({ name: "one scoop" });
    console.log(itemDeleted);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};
deleteproducts();
