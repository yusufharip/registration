# Registration App
## Technology
1. Frontend
    * Reactjs (create-react-app boiler plate)
    * axios (http request)
    * SASS (CSS Preprocessor)
    * react-router-dom (reactjs routing)
    * node-sass (sass compiler)
2. Backend
    * Laravel v6.9.0
    * Propaganistas/Laravel-Phone (Phone number validator package)
3. Database
    * MySql 8.0.15


## Configuration
1. Clone this repository
2. Backend configuration step:
    * Open **backend** folder
    * Run *composer install*
    * Run *docker-compose up -d* to run MySql server
    * Setup .env file (i'm using mysql and pgsql)
    * Run *php artisan migrate*
    * Run *php artisan serve --port=7777* 
    * Backend ready to serve
3. Endpoint information:
    * {base_url}/api/login
       Method POST with body *phone_number*
    * {base_url}/api/logout
       Method POST with body *phone_number*
    * {base_url}/api/home
       Method POST with body *phone_number* and *token*
    * {base_url}/api/register
       Method POST with body *phone_number*, *first_name*, *last_name*, *email*, *gender*, and *date_of_birth*
4. Frontend configuration step:
    * Open **fe-regis** folder
    * Run *npm install*
    * Run *npm start* 
    * This app will serve on port 3000

## Live Test
1. Backend: https://regis-backend.hubme.xyz
2. Frontend: http://regis.hubme.xyz