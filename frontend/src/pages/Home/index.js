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

function Home(props) {
  const authToken = localStorage.getItem("token");
  console.log(authToken);
  return (
    <div>
      <h1>Home Page</h1>
      {authToken && (
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");

              props.history.push("/");
            }}
          >
            Logout
          </button>
          <Query query={ME_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return;

              return <p>{data.me.email}</p>;
            }}
          </Query>
        </div>
      )}
      {!authToken && <Link to="/login">Login</Link>}
    </div>
  );
}

export default Home;
