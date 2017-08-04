# mean-crud
A MEAN -stack project with CRUD capabilities

**THE SETUP**

*DOWNLOAD*

-Node.js & npm

-MongoDB


*MongoDB*

My MongoDB is located in C:\ 

  *(e.g. C:\mongo\bin\mongo.exe)

My MongoDB's data goes into C:\data\db


-Open the windows cmd prompt and go to the location of MongoDB in the "bin" -folder and type "mongod".

-Open a new cmd prompt and go into the "bin" -folder. This time type "mongo". It should give you a ">" -symbol,
allowing you to type MongoDB -commands.

-Create a database named myProperty like this: >use myProperty

-Create a collection named myThings like this: >db.createCollection("myThings")

-Now open your 3rd cmd prompt and navigate into the "Angular_projekti" -folder and install the dependencies in listed in the "package.json" -file. (body-parser, mongojs and express)

  *(e.g. npm install express --save)

In "Angular_projekti" -folder use the command "node server", to run the "server.js" -file.
The app should be running in port 3000 so open a web-browser (used in FireFox and Chrome)
and type localhost:3000 in the address bar.














