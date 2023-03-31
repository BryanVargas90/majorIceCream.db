import { MongoClient } from "mongodb";
import { MONGOURI } from "./credentials.js";

export const client = new MongoClient(MONGOURI); // use the URI path
// connect to db - or create if there is none
export const database = client.db("majorIceCream");
// connect to collection
export const products = database.collection("products");

//Create instance of Mongo
