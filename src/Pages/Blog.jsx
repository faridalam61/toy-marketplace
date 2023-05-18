import React from "react";

function Blog() {
  return (
    <div className="w-full lg:w-3/4 p-4 lg:p-0 mx-auto my-8">
      <div className="border p-4 lg:p-6 rounded-md my-6">
        <h1 className="text-2xl font-bold mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          An access token and a refresh token are both used in authentication
          systems to grant and manage access to protected resources. An access
          token is a credential that is issued by an authentication server after
          a user successfully authenticates. It typically contains information
          such as the user's identity and any associated permissions or scopes.
          The access token is sent along with each request to the server that
          hosts the protected resources. It allows the server to verify the
          user's identity and determine if they have the necessary permissions
          to access the requested resource. Access tokens have a limited
          lifespan and typically expire after a certain period of time. A
          refresh token, on the other hand, is a long-lived credential that is
          also issued by the authentication server during the initial
          authentication process. Its purpose is to obtain new access tokens
          when the current one expires, without requiring the user to re-enter
          their credentials. When an access token expires, the client can use
          the refresh token to request a new access token from the
          authentication server. This process is known as a token refresh flow.
          Both access tokens and refresh tokens need to be securely stored on
          the client-side. Storing them in a secure manner is crucial to prevent
          unauthorized access and potential token theft. Common practices
          include: Storing tokens in memory: Tokens can be stored in memory
          variables within the client application. This method is suitable for
          browser-based applications where tokens are not persisted across
          sessions or page reloads. However, it is important to ensure that the
          memory is properly cleared when the application is closed or the user
          logs out. Storing tokens in secure cookies: Tokens can be stored as
          HTTP-only cookies, which are not accessible to JavaScript. This
          approach provides additional security as the tokens are automatically
          included in subsequent requests by the browser. However, it is
          important to use secure cookies that are not vulnerable to cross-site
          scripting (XSS) attacks. Storing tokens in secure storage: Tokens can
          be stored in secure storage mechanisms such as the browser's local
          storage or session storage. These storage options provide persistence
          across sessions and page reloads. However, it is important to use
          secure storage methods and avoid storing sensitive information in
          plain text. It is essential to follow security best practices when
          storing access tokens and refresh tokens on the client-side to
          minimize the risk of token leakage and unauthorized access.
        </p>
      </div>
      <div className="border p-4 lg:p-6 rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">
          Comparation of SQL and NoSQL databases
        </h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>SQL Databases</th>
              <th>NoSQL Databases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structure</td>
              <td>Relational (Tables with Rows/Columns)</td>
              <td>Non-Relational (Key-Value, Document, Columnar, Graph)</td>
            </tr>
            <tr>
              <td>Schema</td>
              <td>Schema-based</td>
              <td>Schema-less</td>
            </tr>
            <tr>
              <td>Query Language</td>
              <td>Structured Query Language (SQL)</td>
              <td>
                Various query languages (e.g., JSON-based, object-oriented)
              </td>
            </tr>
            <tr>
              <td>Data Integrity</td>
              <td>
                ACID (Atomicity, Consistency, Isolation, Durability) properties
                are enforced
              </td>
              <td>
                Typically sacrifice some ACID properties for scalability and
                performance
              </td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Vertical (Scaling up hardware)</td>
              <td>Horizontal (Scaling out across multiple servers/nodes)</td>
            </tr>
            <tr>
              <td>Flexibility</td>
              <td>Limited flexibility for schema changes</td>
              <td>Flexible schema allows easy modifications</td>
            </tr>
            <tr>
              <td>Scaling</td>
              <td>Limited scalability for large datasets</td>
              <td>High scalability for large datasets</td>
            </tr>
            <tr>
              <td>Joins</td>
              <td>Supports complex joins between tables</td>
              <td>No explicit join support in most NoSQL databases</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>Full transaction support (commit/rollback)</td>
              <td>Limited transaction support or eventual consistency</td>
            </tr>
            <tr>
              <td>Examples</td>
              <td>MySQL, PostgreSQL, Oracle</td>
              <td>MongoDB, Cassandra, Redis, Elasticsearch</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border p-4 lg:p-6 rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">
          What is express js? What is Nest JS?
        </h2>
        <p>
          Express.js is a minimalist web application framework for Node.js,
          offering a flexible and unopinionated approach. It allows developers
          to build web applications and APIs by defining routes, handling HTTP
          requests, and managing middleware functions. Express.js is lightweight
          and highly customizable, with a vast ecosystem of middleware and
          plugins available. Nest.js, on the other hand, is a progressive
          Node.js framework influenced by Angular's architecture. It emphasizes
          modularity, extensibility, and uses TypeScript. Nest.js builds on top
          of Express.js and provides a structured and opinionated approach to
          application development. It promotes the use of decorators, modules,
          and dependency injection to organize code and facilitate reusability.
          With features like a powerful CLI and seamless integration with other
          libraries, Nest.js is well-suited for building scalable and
          enterprise-grade applications. In summary, Express.js is a minimal and
          flexible framework, while Nest.js is a structured and opinionated
          framework that extends Express.js with additional features and
          architectural patterns.
        </p>
      </div>
      <div className="border p-4 lg:p-6 rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          In MongoDB, the aggregate method allows for advanced data processing
          using aggregation pipelines. It takes an array of stages as input,
          where each stage represents an operation like filtering, grouping,
          sorting, or joining. The stages are executed sequentially, with the
          output of one stage becoming the input for the next. Common stages
          include $match for filtering, $group for grouping and aggregation, and
          $lookup for joining collections. The aggregate method is a powerful
          tool for performing complex data transformations and analysis in
          MongoDB
        </p>
      </div>
    </div>
  );
}

export default Blog;
