import React from "react";
import NavBar from "../NavBar/NavBar";

const Blog = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex -justify-center">
        <div>
          <div className="p-4 m-1 bg-slate-200 rounded-lg text-center">
            <h2 className="font-bold ">how does context api works?</h2>
            <p>
              The React Context API has been available as an experimental
              feature for some time, but it was only with React 16.3.0 that it
              became safe to use in production. The next post will demonstrate
              two basic web shop apps, one with and one without the Context API.
              This new API addresses one important issue: prop drilling. Even if
              you're not familiar with the word, it's likely that you've
              encountered it when working on a React.js app. Prop drilling is
              the process of transferring data from component A to component Z
              via numerous levels of intermediary React components. The
              component will receive props indirectly, and you, the React
              Developer, will be responsible for ensuring that everything works
              properly. While your program may begin with a single component, as it increases in complexity, it must be progressively broken down into smaller components. We may isolate particular sections of a bigger application using components, creating a separation of concerns. If anything in your application fails, fault isolation allows you to quickly determine what went wrong.
            </p>
          </div>
          <div className="p-4 m-1 bg-slate-200 rounded-lg text-center">
            <h2 className="font-bold ">What is the purpose of React router?</h2>
            <p>
              React Router is a standard library for React routing. It allows
              navigating between views of different components in a React
              Application, changes the browser URL, and keeps the UI in sync
              with the URL. To understand how the React Router works, let's
              build a simple React application. The application will have three
              parts: the home component, the about a component, and the contact
              component. To move between these components, we will use React
              Router. Configuring the React Application: Create a React app with
              create-react-app and call it geeks.
              <br />
              <br />
              and A tool that allows you to handle routes in a web app, using
              dynamic routing. Dynamic routing takes place as the app is
              rendering on your machine, unlike the old routing architecture
              where the routing is handled in a configuration outside of a
              running app. React router implements a component-based approach to
              routing. It provides different routing components according to the
              needs of the application and platform. The following illustration
              shows how react router’s dynamic routing works as compared to
              traditional static routing:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
