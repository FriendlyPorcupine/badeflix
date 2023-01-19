Dear User,

please ensure to run Yarn and Nestjs (Node) on your machine
  --> yarn start:dev will start the server
  Yarn is a package manager that doubles down as project manager. Whether you work on one-shot
  projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

  Yarn is a package manager that doubles down as project manager. Whether you work on one-shot
  projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

  Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
  It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables
  developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming),
  FP (Functional Programming), and FRP (Functional Reactive Programming).
  Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and
  optionally can be configured to use Fastify as well!

Docker will handle our databank
  --> yarn docker:dev
  Docker allocates a read-write filesystem to the container, as its final layer. This allows a
  running container to create or modify files and directories in its local filesystem. Docker creates
  a network interface to connect the container to the default network, since you did not specify any
  networking options.

Prisma stores our users and with the following command, you can see all stored data
  --> yarn prisma:studio
  Prisma Client is a query builder that composes queries the way you think and is  auto-generated
  from the Prisma schema with types tailored to your app.

  Prisma Migrate automatically generates SQL database migrations, that are fully customizable, enabling
  you to make changes to the database without generating migration files.

First time install:
Got to Server directory in terminal
1. yarn docker:dev
2. yarn prisma:generate
3. yarn prisma:migrate
4: yarn start:dev

To see database:
5. yarn prisma:studio in server directory

Got to Client directory in terminal
1. yarn run dev

OR
Windows: setup.bat in terminal
Mac: enter setup.sh in terminal

