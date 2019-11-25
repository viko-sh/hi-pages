# Solution description 

Hi there, 
I have enjoyed coding this,
hope you will enjoy reading this.

Thanks.


## Server

### `Express`
I have used the Express framework to develop the server-side of the application. It came as part of the boilerplate. Still, I would probably use Express as my first choice for this solution as well, as it's pretty fast do develop a lightweight REST API services with Express, and it comes with enough tool to focus on the application business logic.

### `Sequelize` 
Using ORM for this size application might look too much, but applications can grow very fast, more and more developers can work on the same code. 
Sequelize ORM, like any other ORM, can help with migrations, structure, and security. Speed up the development of simple, repetitive queries. 
We can also use direct SQL for more complex queries.

### `Project Structure`
There many ways to structure a server application and all have their pros and cons.
In my opinion, the important part is to separate the parties based on their responsibilities so that each section can stay focused on one job.

Our project structured as following:

- **routes** route handlers will be found in the `./src/routes/**` 
each base `route` will be represented by one file.
- **models** Sequelize models will placed at `./src/models/**`. Sequelize models are here to represent a table in database and an instances, of the same class, to represent a database row.
- **constants** any static objects or/and enums we are looking to share with in our app can be placed here `./src/constants/**` 
- **services** are some sort of a controller, responsibel to get the information, format | filter | validate and send back to the service user. 
In our application, we have one service at this time, `JobsService` and it's responsibale for the `job` CRUD operatntions.
    - `getInvitedJobs`: will return a collection of jobs with status `new`.
    - `getAcceptedJobs`: will return all the jobs with the `accepted` status.
    - `changeJobStatus`: can change the requested (by id) job to one of the available statuses. The statuses are represented by `JobsStatus` ENUM, and can be faund here `./src/constants/index.ts`
- **factory** here we can store interfaces to represent our models. The idea behind this is to have something in between the DB result, or any other data sourse that we might use, and the API consumer, our React application at this case. 
This is were we can create a contract how each instance will be represented outside of our server, format the data based on the instance state.


- **application flow**
  - Register to base a route in `index.ts` with route handler
  - Route handler will be responsible to attach a callback to a request, extract parameters from the request object, invoke method on a service.
  - Service will make request to the DB via Sequelize model, map and format the result with one of the factory objects, return the result to the route handler
  - Route handler will send to result back to the API consumer


### `Available Scripts`
- `build-dev`: typescript compiler will build the distribution files, and watch for changes
- `start-dev`: init the server via nodemon, server will restart after every change in the source files
- `start-dev-inspect`: as previous command, with inspect
- `test`: run unit tests
- `test-ci`: will run the unit tests and generate coverage report, the report will be generated to `./coverage`    


### `What else I would do given more time`
- `Logs` - adding loging service for debugin, tracing
- `More unit tests` - to cover the route handlers
- `Error handler middleware` - for better error handling

## Client

### General
The front-end side of the application developed with React and Typescript.
Most of the styling developed by using `styled-component` - with this library we can define CSS ruling inside JS files, React components in this case.
Redux, and Redux-saga to manage application state and API calls. 

### Diagram - Components tree
![Diagram Tab](/client_diagram.png.png?raw=true "Diagram Tab")

### `Available Scripts`
- `test`: run test,
- `test-ci`: run test and generate coverage reports,

### `What else I would do given more time`
- `Data lazy loading` - currently, every time we click on a tab, we bring the data from the server. 
- `More unit tests` - to cover sagas and interactions
- `E2E test` with `Cypress JS`
- `deployment scripts`


