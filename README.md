# Getting Started with Laravel 8.1 and Inertia

This is a basic guide to help you get started with Laravel 8.1 and Inertia, a modern monolithic approach to building web apps with Vue.js.

## Requirements

Before starting, make sure that you have the following requirements:

-   PHP 7.3 or later
-   Composer
-   Node.js and npm
-   A web server such as Apache or Nginx
-   A database management system such as MySQL

## Installation

Follow the steps below to install Laravel 8.1 on your local machine:

1. Install Composer by following the instructions on the official [Composer website](https://getcomposer.org/).

2. Open a terminal or command prompt and run the following command to install Laravel:

```
composer global require laravel/installer
```

3. Once the installation is complete, run the following command to create a new Laravel project:

```
laravel new myproject
```

This will create a new Laravel project in a directory called `myproject`.

4. Next, run the following command to install the Inertia and Vue.js packages:

```
composer require inertiajs/inertia-laravel
npm install @inertiajs/inertia @inertiajs/inertia-vue vue
```

This will install the necessary packages for building a monolithic web app using Inertia and Vue.js.

## Database Configuration

Before running the Laravel application, you need to update the database configuration in the `.env` file. The `.env` file is located in the root directory of your project.

1. Rename the `.env.example` file to `.env`.

2. Open the `.env` file in a text editor and update the following lines with your database details:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

3. Save the changes to the `.env` file.

## Compiling Assets

Since we're using Inertia and Vue.js, we need to compile the assets using the following commands:

1. Run the following command to install the required npm packages:

```
npm install
```

2. Run the following command to compile the assets:

```
npm run dev
```

## Running the Application

To start the Laravel application, navigate to the root directory of your project in the terminal and run the following command:

```
php artisan serve
```

This will start a development server at `http://localhost:8000`.

You can now visit the application in your web browser by navigating to `http://localhost:8000`.
