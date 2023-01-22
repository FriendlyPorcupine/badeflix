 

**HOW-TO GUIDE**
Installation
Starting 
Usage
Requirements

**INSTALLATION:**
Dear User,
please ensure to run Yarn and Nestjs (Node) on your machine.
If you don’t have yarn yet, please install and set up as your project’s package manager.
You are also going to need a IDE, of course.

Installing Nestjs:
npm install nest.js

Installing yarn via npm:
npm install yarn

Copy content from example.env to a new file with ".env" within the same folder. The example file can be found in
the server folder.
Our project uses a Google API, so please add your google API key to the env file under: 
GOOGLE_DIRECTIONS_API_KEY=”******************************”

Download Docker Desktop application and start it. Once running, proceed. If Docker is not active, server won't connect.

**FIRST TIME USING SERVER:**
Navigate to the server directory in your terminal & use the following commands:
1. yarn install
2. yarn docker:dev
3. yarn prisma:generate
4. yarn prisma:migrate
5: yarn dev

To see the database in your browser (use this command, from your server directory):
6. yarn prisma:studio 

**CLIENT:**
Now navigate to the client directory and type:
1. yarn dev

**
STARTING SERVER, CLIENT & DATABASE (IF ALREADY INSTALLED):**

If you already installed everything, you only need to start the server and client.
Before doing so, we recommend running yarn install from the server directory, in case some new dependencies have to be downloaded/updated.

Navigate to the server directory & type:
1. yarn docker:dev 
2. yarn prisma:studio
2. yarn dev

Navigate to the client directory & type:
1. yarn dev

**PRISMA:**

Prisma stores our users and with the following command, you can see all stored data
--> yarn prisma:studio
Prisma Client is a query builder that composes queries the way you think and is auto-generated from the Prisma schema with types tailored to your app.

Prisma Migrate automatically generates SQL database migrations, that are fully customizable, enabling you to make changes to the database without generating migration files.


**HOW TO USE:**
First, make sure you are logged in (you can create a user by clicking the “Register” link in the menu on the top right corner).
After registering, please log in with your email and password.
Now you can search an address in Vienna (don’t forget to put the zip code), once you click on search, you will get a list of the bathing places that are closest to you.
You will also get the temperature, the distance from your address to the places and if there’s availability or not. 
By clicking on a bathing place, it will show you how to get there using public transportation.

**
REQUIREMENTS **

**MUSS**
Das System muss in der Lage sein, eine "Eingabeleiste" anzuzeigen, damit der/die User*in eine Adresse eingeben kann.

Sobald der/die User*in eine Adresse in die Eingabeleiste schreibt und auf "Suchen" klickt,
muss das System eine Liste mit drei bis vier Badeplätzen anzeigen können.

Das System muss Badeorte im Umkreis von 30 km anzeigen können.

Das System muss in der Lage sein, die Ortsliste nach der Entfernung zu der angegebenen
Adresse in aufsteigender Reihenfolge (näheste zuerst) zu sortieren.

Das System muss in der Lage sein, neben jedem angezeigten Badeort auf der Liste das
aktuelle Wetter anzuzeigen.

Das System muss in der Lage sein, die Entfernung zu jedem Badeort auf der Liste neben
ebendiesem anzuzeigen.

Das System muss neben jedem Badeort auf der Liste die „Auslastung per Bäderampel“
anzeigen können.

Wenn der/die User*in eine Badeplatz-Option in der angezeigten Liste anklickt, muss das
System in der Lage sein, die Route mit öffentlichen Verkehrsmitteln von der aktuellen
Adresse zur Adresse des ausgewählten Badeortes anzugeben.

Das System muss in der Lage sein, ein Dropdown-Menü für den Loginbereich in der oberen
rechten Ecke anzuzeigen.

Wenn der/die nicht eingeloggte User*in auf das Dropdown-Menü klickt oder den Mauszeiger
darüber bewegt, muss das System in der Lage sein, einen Link zur Anmeldung anzuzeigen.

Wenn der/die nicht eingeloggte User*in auf das Dropdown-Menü klickt, muss das System in
der Lage sein, einen Link zur Registrierung anzuzeigen.

Wenn der/die eingeloggte User*in auf das Dropdown-Menü klickt, muss das System in der
Lage sein, einen Link zur Abmeldung anzuzeigen.

Das System muss dem/der User*in die Möglichkeit bieten, sich mit einer E-Mail-Adresse und
einem Passwort zu registrieren.

Das System muss dem der/die User*in die Möglichkeit bieten, sich mit einer E-Mail-Adresse
und einem Passwort anzumelden.

Das System muss dem der/die User*in die Möglichkeit bieten, sich von der Web-Applikation
abzumelden.

Wenn die angegebene E-Mail-Adresse bei der Registrierung bereits vergeben ist, muss das
System eine Fehlermeldung mit dem Hinweis "E-Mail-Adresse existiert bereits" anzeigen.

Wenn der/die User*in eine Adresse außerhalb von Wien sucht, muss das System eine
Fehlermeldung anzeigen können, dass nur Wiener Postleitzahlen zulässig sind.

Ist die Adresse nicht korrekt geschrieben, muss das System eine Fehlermeldung „Adresse
nicht gefunden“ anzeigen können.

Das System muss den Bereich der angezeigten Schwimmmöglichkeiten auf Wien
beschränken.

**SOLL**

Das System muss sich an die Größe des Bildschirms anpassen können (responsive Layout).

Das System soll dem/der User*in die Möglichkeit bieten, Profilinformationen zu ergänzen und auch zu ändern.

Das System soll dem/der User*in die Möglichkeit bieten, bis zu drei Badeorte zu seinen/ihren "Favoriten" hinzuzufügen.

Wenn der/die User*in die Option „als Favorit hinzufügen“ auswählt, soll das System in der
Lage sein, den Badeplatz im Profil des/der User*in zu speichern.

Wenn der/die eingeloggte User*in auf das Dropdown-Menü klickt, soll das System einen Link zur Seite der „Favoriten“ des/der User*in anzeigen können.

Das System muss dem/der User*in die Möglichkeit bieten, sein/ihr Profil aus der
Web-Applikation zu löschen.

Wenn der/der User*in auf den Link zu seinen/ihren "Favoriten" klickt, soll das System in der
Lage sein, eine Liste der Badeorte anzuzeigen, die als "Favoriten" des/der User*in
gespeichert sind.

Das System soll in der Lage sein, bei den Suchergebnissen zwischen zwei Kategorien zu
unterscheiden: Freibad oder Naturschwimmplatz.

Das System soll dem/der User*in Ergebnisse aller oder wahlweise einzelner Kategorien
anzuzeigen.

Wird die Option „Freibad“ gewählt, soll das System nach dieser Kategorie filtern können und
nur die Ergebnisse der Kategorie “Freibad“ anzeigen.

Wird die Option “Naturschwimmplatz“ gewählt, soll das System nach dieser Kategorie filtern
können und nur die Ergebnisse der Kategorie "Naturschwimmplatz" anzeigen.

Wenn der/die User*in auf die Option "Profil löschen" klickt, soll das System in der Lage sein,
die gespeicherten Profildaten aus der Datenbank zu löschen.

**KANN**

Das System kann den Suchverlauf des/der User*in speichern.

Wenn der/die eingeloggte User*in auf das Dropdown-Menü klickt, kann das System
den Suchverlauf des/der User*in anzeigen.

Wenn der/die User*in auf seinen/ihren Browser-Verlauf klickt, kann das System eine Liste
der zuletzt angezeigten Ergebnisse abrufen.

Das System kann dem/der User*in die Option “meet me halfway” bei der Suche anbieten.
Wenn der/die User*in die Option “meet me halfway” auswählt, kann das System zwei
verschiedene Adresseingaben akzeptieren.

Wenn der/die User*in zwei verschiedene Adressen eingibt, kann das System die
nächstgelegenen Ergebnisse zu beiden Adressen finden und eine sortierte Liste dieser
Badeplätze anzeigen.

Das System soll in der Lage sein, Optionen zur automatischen Vervollständigung der nicht
ausgeschriebenen Adresse anzuzeigen.

**Abgrenzungskriterien**
Das System soll nicht nach Adressen außerhalb von Wien suchen.

Das System soll nicht zu jedem Badeort auf der Liste einen Link zum Ticketkauf anzeigen.

Wenn der/die User*in eine Orts-Option in der angezeigten Liste anklickt, soll das System die
Route von der aktuellen Adresse zur Adresse des ausgewählten Badeortes mit dem Auto
nicht anzeigen.

Wenn der/die User*in eine Orts-Option in der angezeigten Liste anklickt, soll das System die
Route von der aktuellen Adresse zur Adresse des ausgewählten Badeortes mit dem Fahrrad
nicht anzeigen.
