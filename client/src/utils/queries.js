// setup for React and Apollo Client
import { gql } from '@apollo/client';

//setup for user data and any savedBook data then loads in SavedBooks.js
export const GET_ME = gql`
{
    me {
        _id
        username
        email 
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;