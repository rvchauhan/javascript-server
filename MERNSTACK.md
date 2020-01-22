# MERN Stack
MERN Stack: MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.

Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.

### MERN Stack components
#### a.) MongoDB: Cross-platform Document-Oriented Database
MongoDB is a NoSQL database where each record is a document comprising of key-value pairs that are similar to JSON (JavaScript Object Notation) objects. MongoDB is flexible and allows its users to create schema, databases, tables, etc. Documents that are identifiable by a primary key make up the basic unit of MongoDB. Once MongoDB is installed, users can make use of Mongo shell as well. Mongo shell provides a JavaScript interface through which the users can interact and carry out operations (eg: querying, updating records, deleting records).

***Why use MongoDB?***

- Fast – Being a document-oriented database, easy to index documents. Therefore a faster response.
- Scalability – Large data can be handled by dividing it into several machines.
- Use of JavaScript – MongoDB uses JavaScript which is the biggest advantage.
- Schema Less – Any type of data in a separate document.
- Data stored in the form of JSON –
***1.*** Objects, Object Members, Arrays, Values and Strings
***2.*** JSON syntax is very easy to use.
***3.*** JSON has a wide range of browser compatibility.
***4.*** Sharing Data: Data of any size and type(video, audio) can be shared easily.
- Simple Environment Setup – Its really simple to set up MongoDB.
- Flexible Document Model – MongoDB supports document-model(tables, schemas, coloumns & SQL) which is faster and easier.

***Example:***

 ***1.Creating a database: Simply done using a “use” command:***
```sh
use database_name;
```
***2.Creating a table: If the collection/table doesn’t exist then a new collection/table will be created:***
```sh
db.createCollection("collection_name");
```
***3.Inserting records into the collection:***
```sh
db.collection_name.insert
(
    {
        "id" : 1,
        "Name" : "Klaus",
                "Department": "Technical",
                "Organization": "Geeks For Geeks"
    }
);
```

***4.Querying a document:***
```sh
db.database_name.find({Name : "Klaus"}).forEach(printjson);
```
### b.) Express: Back-End Framework:
Express is a Node.js framework. Rather than writing the code using Node.js and creating loads of Node modules, Express makes it simpler and easier to write the back-end code. Express helps in designing great web applications and APIs. Express supports many middlewares which makes the code shorter and easier to write.

***Why use Express?***

- Asynchronous and Single-threaded.
- Effecient, fast & scalable
- Has the biggest community for Node.js
- Express promotes code reusability with its built-in router.
-  Robust API
***example:*** Fololow the below steps


 

- Create a new folder to start your express project and type below command in the command prompt to initialize a package.json file. Accept the default settings and continue.
```sh
npm init
```

- Then install express by typing the below command and hit enter. Now finally create a file inside the directory named index.js.
 ```sh
npm install express --save
```


- Now type in the following in index.js to create a sample server.
```sh
filter_none
brightness_4
const express = require('express'), 
http = require('http'); 
  
const hostname = 'localhost'; 
const port = 8080; 
const app = express(); 
  
app.use((req, res) => { 
  console.log(req.headers); 
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/html'); 
  res.end('<html><body><h1>This is a test server</h1></body></html>'); 
  
}); 
const sample_server = http.createServer(app); 
  
sample_server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`); 
});
```
- Update the “scripts” section in package.json file
```sh
png
```
- Then to start the server by running the below command
```sh
npm start
```


- Now you can open the broswer and get the output of the running server.

### c.) React: Front-End Framework
React is a JavaScript library that is used for building user interfaces. React is used for the development of single-page applications and mobile applications because of its ability to handle rapidly changing data. React allows users to code in JavasScript and create UI components.

***Why use React?***

- ***Virtual DOM*** – A virtual DOM object is a representation of a DOM object. Virtual DOM is actually a copy of the original DOM. Any modification in the web application causes the entire UI to re-render the virtual DOM. Then the difference between the original DOM and this virtual DOM is compared and the changes are made accordingly to the original DOM.
- ***JSX*** – Stands for JavaScript XML. It is an HTML/XML JavaScript Extension which is used in React. Makes it easier and simpler to write React components.
- ***Components*** – ReactJS supports Components. Components are the building blocks of UI wherein each component has a logic and contributes to the overall UI. These components also promote code reusability and make the overall web application easier to understand.
- ***High Performance*** – Features like Virtual DOM, JSX and Components makes it much faster than the rest of the frameworks out there.
- ***Developing Android/Ios Apps*** – With React Native you can easily code Android-based or IOS-Based apps with just the knowledge of JavaScript and ReactJS.
- You can start your react application by first installing “create-react-app” using npm or yarn.
```sh
npm install create-react-app --global
```
OR
```sh
yarn global add create-react-app
```
- After that you can create a new react app by using.
```sh
create-react-app app_name
```
- Then navigate into the “app_name” folder and type yarn start or npm start to start your application.


***Example:***

- Update index.js file
```sh
filter_none
brightness_4
ReactDOM.render( 
  <h1>Hello DEVELOPERS!!</h1>, 
  document.getElementById('root') 
); 
```

- Use the below commadns to run your application.
 ```sh
npm start
```
or
```sh
yarn start
```


### d.) Node.js: JS Runtime Environment
Node.js provides a JavaScript Environment which allows the user to run their code on the server (outside the browser). Node pack manager i.e. npm allows the user to choose from thousands of free packages (node modules) to download.
***Why use Node.JS?***

- Open source JavaScript Runtime Environemnt
- Single threading – Follows a single threaded model.
- Data Streaming
- Fast – Built on Google Chrome’s JavaScript Engine, Node.js has a fast code execution.
- Highly Scalable
- Initialize a Node.js application by typing runing the below command in the command window. Accept the standard settings.
```sh
npm init
```
- Create a file named index.js.
***Example:***
```sh
A basic Node.js example to compute the perimeter & area of a rectangle.
filter_none
brightness_4
var rectangle = { 
    perimeter: (x, y) => (2*(x+y)), 
    area: (x, y) => (x*y) 
}; 
  
function Rectangle(l, b) { 
    console.log("A rectangle with l = " + l + " and b = " + b); 
  
    if (l <= 0 || b <= 0) { 
        console.log("Error! Rectangle's length & breadth should be greater than 0:  l = "
               + l + ",  and b = " + b); 
    } 
    else { 
        console.log("Area of the rectangle: " + rectangle.area(l, b)); 
        console.log("Perimeter of the rectangle: " + rectangle.perimeter(l, b)); 
    } 
} 
  
Rectangle(1, 8); 
Rectangle(3, 12); 
Rectangle(-6, 3); 
```
- Run the node application by running the below command in the command window.
 ```sh
npm start
```

