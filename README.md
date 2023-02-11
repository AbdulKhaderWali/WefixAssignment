Introduction:
The purpose of this project is to create a web application for storing data of shops for Retail Manager with their locations and can add more number of shops.

Features:

1. Real time searching of shops with their names
2. Fast and simple user interface.

Technologies:

ReactJS: The main front-end framework for the web application.

* How to run this application ?

Install Node.js and npm (Node Package Manager) on your computer. These tools are required to run a React project.

Clone or download the source code of this project.

Open a terminal or command prompt and navigate to the root directory of the project.

Run the following command to install the project dependencies:

* npm install

After the dependencies have been installed, run the following command to start the development server:

* npm start

The development server will start and you should see a message in the terminal or command prompt indicating that the server is running.

Open a web browser and go to the URL http://localhost:3000/ to view the application.

You should now be able to see the React application running in your web browser.

* How to build this application ?

1. create a basic react project using 
    * create-react-app
2. Add bootstrap CDN links
3. Create components folder and add the components such as
    * Navbar
    * HomePage
    * AddStore
4. install axios or you can even use fetch function.
5. using this API : "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
    create random users, in which we also get address of the users.
6. We are only going to use "city" value in the address part.