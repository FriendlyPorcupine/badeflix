Dear User,

please ensure to run Yarn and Nestjs (Node) on your machine:

Installing Nestjs:
1. install nest.js

Installing yarn: 
1. yarn install

Copy content from example.env to a new file with ".env"

First time install:
Got to Server directory in terminal
1. yarn docker:dev
2. yarn prisma:generate
3. yarn prisma:migrate
4: yarn dev

To see database:
5. yarn prisma:studio in server directory

Got to Client directory in terminal
1. yarn dev

//OR
Windows: setup.bat in terminal
Mac: enter setup.sh in terminal//

Start everything 
zuerst den server port 3000
yarn dev

dann client nimmt sich 3001
yarn dev

Für prisma Studio:
in den /server ordner gehen dann
yarn prisma:studio

Prisma stores our users and with the following command, you can see all stored data
--> yarn prisma:studio
Prisma Client is a query builder that composes queries the way you think and is  auto-generated
from the Prisma schema with types tailored to your app.

Prisma Migrate automatically generates SQL database migrations, that are fully customizable, enabling
you to make changes to the database without generating migration files.

Run the following to update:                           │
│    yarn add --dev prisma@latest                         │
│    yarn add @prisma/client@latest

**1.2.1. Muss-Kriterien**
● Standort muss eingegeben werden
● Bäder müssen nach Entfernungen sortiert werden
● Auslastung per Bäderampel muss angezeigt werden
● Aktuelles Wetter vor Ort muss angezeigt werden
● Routenplaner für öffentliche Verkehrsmittel muss angezeigt werden
● Login Bereich: User muss ein Profil anlegen können
● Login Bereich: User muss sein Profil löschen können

**1.2.2. Soll-Kriterien**
● Login Bereich: User soll drei Badeplätze als Favoriten speichern können
● Suche erweitern: Auswahl zwischen Kategorie Freibad oder Naturschwimmplatz (API
Schwimmbäder)
● Die Web-Applikation soll ein responsive Layout haben

**1.2.3. Kann-Kriterien**
● Login Bereich: User kann bisherige Suchen speichern
● Routenplaner: Zweiter User kann bei der Suche nach dem nächsten Bad
berücksichtigt werden (Meet me halfway)

**1.2.4. Abgrenzungskriterien**
● Die Web-Applikation soll nur für Wien funktionieren, nicht österreichweit
● Routenplanung nicht für Auto oder Rad verfügbar

yarn add react-table
yarn add styled-components
