import gql from 'graphql-tag';

export const GETRESULTS = gql`
    query {
        getResults{
            id
            name
            score
        }
  }
`