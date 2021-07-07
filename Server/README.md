# Getting Started with Node js server


## Preparing to launch

1.	Download postgresql from https://www.postgresql.org/download/

2.  Create database with name `file_sharing`

3. Create `.env` file ( if not exist ) with this content, so that each value is on a new line:

    * `PORT=`
    * `DB_NAME=`
    * `DB_USER=`
    * `DB_PASSWORD=`
    * `DB_HOST=`
    * `DB_PORT=`
    * `SECRET_KEY=`
    
3.  Enter database connection details and your SECRET_KEY in `.env` file immediately after the `=` sign. 
If your database was created with a different name, enter your database_name opposite `DB_NAME=`.

4.  In the project directory, you should run: `cd Server`

## Launch

To launch the app enter: `npm run server`. 
> In this mode, the server will automatically reboot after saving the project files

## Links

### Issues
This section here: https://github.com/file-sharing-erp-team/file-sharing-erp/issues

### Homepage
This section here: https://github.com/file-sharing-erp-team/file-sharing-erp#readme

## Libraries

*  `bcrypt` - https://www.npmjs.com/package/bcrypt
*  `config` - https://www.npmjs.com/package/config
*  `cors` - https://www.npmjs.com/package/cors
*  `dotenv` - https://www.npmjs.com/package/dotenv
*  `express` - https://www.npmjs.com/package/express
*  `jsonwebtoken` - https://www.npmjs.com/package/jsonwebtoken
*  `pg` - https://www.npmjs.com/package/pg
*  `sequelize` - https://www.npmjs.com/package/sequelize
*  `concurrently` - https://www.npmjs.com/package/concurrently
* `nodemon` - https://www.npmjs.com/package/nodemon
