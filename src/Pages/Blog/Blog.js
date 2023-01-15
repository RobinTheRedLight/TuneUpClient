import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center  p-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300 '>Blog</h1>
            <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Using the state property of a React component, which allows components to maintain their own internal state.Using the useState hook, which allows functional components to use state in a similar way to class components.Using the useReducer hook, which is similar to useState, but allows for more complex state management and allows for the use of reducers.</p>
                </div>
            </div>
            <div tabIndex={1} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        Prototypical inheritance is a mechanism used by many programming languages, including JavaScript, to implement inheritance between objects.This allows for a chain of objects to be linked together, where an object can inherit properties and methods from its prototype, and that prototype can inherit properties and methods from its own prototype, and so on. This chain is known as the prototype chain.
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>A unit test is a type of automated test that tests a small, isolated piece of code, such as a single function or method, in isolation from the rest of the system. The goal of a unit test is to ensure that the individual components of a software system work as expected, and that they work correctly together when they are integrated.Overall, unit testing is an important practice that can help to improve the quality, maintainability, and reliability of a codebase.</p>
                </div>
            </div>
            <div tabIndex={3} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        React is a JavaScript library for building user interfaces. It was developed and is maintained by Facebook and is widely used for building large and complex web applications. React uses a virtual DOM which optimizes the update process and allows for efficient rendering of components. It also has a large and active community, a rich ecosystem of tools and libraries, and a strong focus on developer experience and performance.

                        Angular is a JavaScript framework for building web applications. It is developed and maintained by Google, and is designed to be a complete solution for building web applications. Angular provides a lot of built-in features such as two-way data binding, dependency injection, and a powerful template language. It also uses a component-based architecture which allows for better code organization and reusability.

                        Vue is a JavaScript framework for building user interfaces. It was created by Evan You and is similar to React and Angular, but with a simpler and more approachable syntax. It provides a powerful template language and a reactivity system that makes it easy to build dynamic and responsive user interfaces. Vue also has a smaller footprint and lighter-weight than React and Angular, and it's easier to learn for developers new to JavaScript frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;