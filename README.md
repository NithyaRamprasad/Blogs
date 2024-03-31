# Blogs - React Application
This is a react application with user session(Login and Logout) to read and manage blogs.

**The available functionality in the project are as follows :**
1. User can create an account.
2. User can login and logout.
3. User can read and create blogs.
4. User can manage the blogs created from their account.

**Steps to run the application :**

1. Clone the repository into local file system.
2. Open the folder in any text editor.
3. Open terminal in the project folder.
4. Run the below command to install all the necessary node modules required to run the project.
   ```
   npm install
   ```
5. Everytime to make the code up all the dependent modules have to be executed before running the project. To do so execute the following commands in the terminal in the order given below   :
   
   Using json server module to keep a track of the users present in "users.json" file. To achieve this run the below command.
   ```
   npx json-server --watch data/users.json --port 8001
   ```
   To keep a track of the blogs present in "db.json" file, run the below command
   ```
   npx json-server --watch data/db.json --port 8000
   ```
   Once this is done all the project is dependencies are set up.
6. Finally to run the project in development mode
   ```
   npm run start
   ```

Hurrah! The code is up and running. Happy coding!
