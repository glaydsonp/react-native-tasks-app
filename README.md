## React-Native Tasks App

### Installation

To clone this project you can run this command:
`git clone https://github.com/glaydsonp/react-native-tasks-app.git`

Then you must install all node dependencies by running the command below:
`npm install`

To run the project you can use:
`npm start` or `expo start`

### The APP

The app runs on React-Native v0.64.3 and Expo API v44. Also GraphQL was used to manage state and add offline support to the app alongside it's feature of caching data on InMemoryStorage. The app is also using TypeScript to yield better code readability and maintanability in the future.

To yeild better performance when React updates the VirtualDOM, memoization was implemented on components that aren't updated frequently such as Header, TabsBar and the list of Tasks reducing the amount of virtual elements that React had to keep track of when state is changed and all icons used were on SVG format since it's lighter and loads faster than other image/icon formats. All app layout features were handcrafted using styles, Dimensions API and not using any outside library so we can have 100% control of the app's styling.

There are two types of navigation that are used on the app: the Tab Navigation and the Root Navigation. This was a decision made because of layout requirements since it had Modals and a TabBar to navigate through the app.

Unit Tests are not implemented yet, but there is the intention to add at least 80% coverage.


### The API

The api used to demonstrate the app's features is located in the following repository: [API Repository](https://github.com/glaydsonp/simple-graphql-server). It's a simple GraphQL REST API to help us keep track of the Tasks we create, list and update in the app.
