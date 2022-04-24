
# CS-499 Enhancement 3

Capstone enhancement for Databases
## Run Locally

Clone the project

```bash
  git clone https://github.com/cheeto1234/cs499_enhancement3
```

Go to the project directory

```bash
  cd cs499_enhancement3
```

Install dependencies

```bash
  npm install
```

Install Postman if not already installed (for making requests to the API)

```bash
  choco install postman
```

Start the server

```bash
  npm start
```
## How to Use the API
- The document schema looks like this:
```javascript
{
    _id: ObjectID("621ff30d2a3e781873fcb661"),
    name:"Earth",
    orderFromSun: 3,
    hasRings: false,
    mainAtmosphere:[
        "N",
        "O2",
        "Ar"
    ],
    surfaceTemperatureC:{
        "min": -44.8,
        "max": 82,
        "mean": 23.1
    }
}
```
- The API follows a standard CRUD format
    1. Create endpoint: **/create**
        - Body of request will be the document created
    2. Read endpoints:
        - All: **/**
        - By ID: **/id/(id int)**
        - By name: **/name/(name string)**
        - By rings: **/hasRings/(rings boolean)**
        - By order from sun: **/orderFromSun/(order int)**
        - By surface temperature range: **/surfaceTemperatureC/(low int)&(high int)**
        - By element in atmosphere: **/mainAtmosphere/(element string)**
    3. Update endpoint: **/update/(id int)**
        - Body of request will be which values to update
    4. Delete endpoint: **/delete/<id int>**
- The program must be connected to a Mongo database, the URI and password of which can be set in the config file

## Narrative
**What is it?** This program is a simple REST API I wrote in NodeJS that can dynamically
create, read, update, and delete data in a connected MongoDB instance. It can connect to
any running instance of MongoDB and has a prebuilt schema configured to represent the planets
in the solar system. (I had to find a different dataset to work with as I no longer have
access to the dataset used in my CS-340 course)

**Why this?** I chose to create this program as my enhancement for the databases section of
the capstone as I felt taking an existing concept (the CRUD module I created for CS-340, which
was the main focus of the class) and making it available as a module that could be used interoperably
with other applications was a logical step in making it more like something that would be used in a
production environment. Additionally, due to the program's design, it can now be used to reach and modify data
over the internet, as well as operate on a server and serve live requests.

**Skills Demonstrated.** I think that this project showcases the ability to work with databases
using a modular program that can be used interoperably. By accomplishing this, it demonstrates
an understanding of working with databases, as well as the ability to apply said understanding
to a software application, in this case, a module that can be used to manipulate data programmatically
over the internet. The need to work with data programmatically through interfaces is a common practice
in many types of software and thus, a good understanding of the operations, setup, and implementation
of such applications is a must-have when it comes to working with large projects.

**Why are these skills important?** These skills are crucial to working with databases, especially
in the context of larger user-facing applications. In large projects with substantial userbases, data
is constantly needed and all manner of CRUD operations need to be facilitated for most
applications to work correctly. By understanding how to implement database interfaces, one can understand
how to manipulate data on a large scale in a production environment.

**Course Objectives.** I think this project meets the requirements for this milestone as it
not only include the enhancement of a previous artifact by incorporating
the usage of external databases, the manipulation of said databases through software, and
the ability to be used interoperably, but also the demonstration of these skills in a context
that could be used by a large number of users if it was hosted on a server. The skills demonstrated
in this project are invaluable to working with big data and perfectly encompass the goals I
had for enhancing this artifact.
## The Process

- I began by first locating a new data source to use as a basis for developement, as the one I previously had access to in CS-340 is now not accessible.
- I then started the process of implementing an express server.
- After this, I created the necessary routing.
- I then designed the schema to be used.
- After designing the schema, I was able to design the requests and their outputs.
- Finally, I integrated the ability to link to a MongoDB instance through it's URI.
- I also added a file for configuration for ease of use.
