import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($filter: ID) {
    products(filter: $filter) {
      _id
      name
      description
      price
      quantity
      image
      filter {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      filter {
        name
      }
    }
  }
`;

export const QUERY_FILTERS = gql`
  {
    filters {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
