import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const ME_QUERY = gql`
  query {
    me {
      id
      email
    }
  }
`;

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Query query={ME_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Link to="/login">Login</Link>;

          return <p>{data.me.email}</p>;
        }}
      </Query>
    </div>
  );
}

export default Home;
