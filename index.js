import axios from "axios";

/**
 * This is the Kenshi Deep Index endpoint for GraphQL
 */
const endpoint = "https://api.kenshi.io/index/graphql";

/**
 * Define your GraphQL query here
 */
const query = `{
    getEntries(blockchain: "binance-testnet") {
      event {
        name
      }
    }
  }`;

/**
 * Post request sending the GraphQL query to the
 * Kenshi Deep Index endpoint, receive the data and print
 */
const { data } = await axios.post(endpoint, { query });
console.log(data);
