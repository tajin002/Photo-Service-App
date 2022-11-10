import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {

  useTitle('Blog')
  return (
    <section className="p-4 lg:p-8 bg-black text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row mt-24">
          <img
            src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Database
            </span>
            <h3 className="text-3xl font-bold">
              What's difference between SQL and NoSQL
            </h3>
            <p className="my-6 dark:text-gray-400">
            NoSQL (“non SQL” or “not only SQL”) databases were developed in the late 2000s with a focus on scaling, fast queries, allowing for frequent application changes, and making programming simpler for developers. Relational databases accessed with SQL (Structured Query Language) were developed in the 1970s with a focus on reducing data duplication as storage was much more costly than developer time. SQL databases tend to have rigid, complex, tabular schemas and typically require expensive vertical scaling.
            </p>
            <button type="button" className="self-start">
              Author : Tajin Shawon
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://jwt.io/img/logo-asset.svg"
            alt=""
            className="h-80 bg-gray-300 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              JWT
            </span>
            <h3 className="text-3xl font-bold">
                What is JWT, and how does it work?
            </h3>
            <p className="my-6 dark:text-gray-400">
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>
            <button type="button" className="self-start">
              Author : Tajin Shawon
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              JavaScript/Node
            </span>
            <h3 className="text-3xl font-bold">
                What is the difference between javascript and NodeJS?
            </h3>
            <p className="my-6 dark:text-gray-400">
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </p>
            <button type="button" className="self-start">
              Author : Tajind Shawon
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://miro.medium.com/max/1400/0*XmLZNOn37zwvenDL.png"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Node.js
            </span>
            <h3 className="text-3xl font-bold">
                How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="my-6 dark:text-gray-400">
                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </p>
            <button type="button" className="self-start">
              Author : Tajind Shawon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
