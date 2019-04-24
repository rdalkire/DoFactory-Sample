# DoFactory-Sample

Starting from [SQL Tutorial Sample Database](https://www.dofactory.com/sql/sample-database) at dofactory.com

My plan (as of this writing) is to create a kind of grid-dropdown using [react-autocomplete](https://github.com/reactjs/react-autocomplete).

## Initial Run

I'm using VS Studio 2019, though this will almost certainly work in previous versions as well.

1. Create and populate the database:
   1. Open the SQL Server Object Explorer
   2. See that you're connected to `(localdb)\MSSQLLocalDB`
   3. Create a new database `dofactory_sample`
   4. Edit the file `Db_Scripts\dofactory-sample-database\sample-model.sql`
   5. Connect the editor to the database you just created
   6. Run the script (and check that it worked, of course)
   7. Do the same steps for `...sample-data.sql`
2. Launch - If website appears without any error messages, the initial run was a success
