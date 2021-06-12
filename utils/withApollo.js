import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = (ctx) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    
    cache: new InMemoryCache({})
    //   typePolicies: {
    //     Query: {
    //       fields: {
    //         diets: {
    //           keyArgs: [],
    //           merge(
    //             existing,
    //             incoming
    //           ) {
    //             return {
    //               ...incoming,
    //               diets: [...(existing?.diets || []), ...incoming.diets],
    //             };
    //           },
    //         },
    //       },
    //     },
    //   },
    // }),
  });

export const withApollo = createWithApollo(createClient);