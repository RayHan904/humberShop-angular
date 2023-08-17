Humber Shop Angular
Humber Shop Angular is a full-stack e-commerce application built using Angular for the frontend and a backend based on the MERN stack (MongoDB, Express.js, Node.js). It enables users to browse products, add them to a shopping cart, and place orders. This README provides instructions on how to set up and run the Humber Shop Angular application on your local machine.

Prerequisites
To run the Humber Shop Angular application, ensure you have the following installed on your machine:

Node.js (v12 or higher)
Angular CLI (v12 or higher)
MongoDB (v4 or higher)
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd humber-shop-angular
Install the dependencies for both the frontend:

Copy code
npm install
Configuration
Create a config.ts file in the src/environments directory of the Angular project and provide the following configuration:

typescript
Copy code
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5001', // Update with your backend server URL
  jwtSecret: '<your-jwt-secret>' // Choose a strong, unique value for security purposes
};
Running the Application
Open a terminal window.

In the terminal, navigate to the project directory:

bash
Copy code
cd humber-shop-angular
Start the Angular development server:

Copy code
ng serve
The frontend will start running on port 4200 by default. Access it in your web browser at http://localhost:4200.

Usage
Once the application is running, you can access it in your web browser at http://localhost:4200. The Humber Shop Angular interface allows users to:

Browse products: View a list of available products, sorted by categories, or search for specific items.
Manage the cart: View the contents of the shopping cart, modify quantities, or remove items.
Place an order: Proceed to checkout and provide shipping and payment information to place an order.
Admin functionality: Edit or delete users if logged in as an admin.
Contributing
If you wish to contribute to the Humber Shop Angular project, please fork the repository, create a new branch, and submit a pull request with your proposed changes. We appreciate your contributions!

License
The Humber Shop Angular application is open-source and released under the MIT License. You are free to modify and distribute the application as per the terms of this license.

Contact
If you have any questions or need further assistance, please feel free to contact Rehan Ali at dev.rayhan98@gmail.com.

Happy shopping with Humber Shop Angular!


