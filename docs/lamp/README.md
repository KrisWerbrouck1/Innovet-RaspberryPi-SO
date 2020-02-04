# LAMP-server

Standaard wordt Raspbian (een Linux distributie aangepast voor de Raspberry Pi) gebruikt als besturingssysteem op de Rapsberry Pi. Hierdoor kan de Raspberry Pi functioneren als een webserver.  In veel toepassingen wordt hiervoor de LAMP-stack gebruik. Dit is open source software. LAMP staat voor:
* Linux: het besturingssysteem
* Apache: een HTTP-webserver
* MySQL: een database
* PHP: een programmeertaal voor dynamische webpagina’s.

![LAMP](./assets/lamp.jpg)

# Lamp-componenten installeren
## Raspbian bijwerken

Voor het installeren wordt Raspbian best bijgewerkt naar de nieuwste versie. Dit is mogelijk met volgende opdrachten in de LXTerminal:

```console
sudo apt update
sudo apt upgrade
```

## Apache HTTP-server

Het internet is een groot netwerk van computers. Niet alle computers hebben dezelfde taak. Servers zijn normaal altijd beschikbaar en bieden informatie aan. Clients zijn meestal niet altijd beschikbaar en vragen informatie op aan server. Dit model wordt het client/server model genoemd.

### HTTP-protocol

Het HTTP-protocol (Hyper Tekst Transfer Protocol) is gemaakt voor Client-server toepassingen. Het HTTP-protocol is gestandaardiseerd door de IETF (Internet Engineering Task Force) Standaard maakt HTTP gebruik van poort 80. Andere poorten zijn echter ook mogelijk.

### Installatie

Apache kan geïnstalleerd worden met de apt-pakketmanager. Voer volgende opdracht uit in de LXTerminal:

```console
sudo apt install apache2
```

### Uitproberen

Als alles goed is gegaan, functioneert de Raspberry Pi al een HTTP-server met behulp van Apache. De eenvoudigste manier om dit te testen is op de raspberry pi zelf. Open de browser en surf naar localhost. U moet de Apache Debian standaardpagina krijgen.

![Apache-debian](./assets/apache-debian.png)

Het is ook mogelijk om vanaf een andere machine toegang te krijgen tot de webpagina. De enige vereiste is dat de client zicht in hetzelfde netwerk bevindt. Hiervoor heb je het IP-adres van de Raspberry PI nodig. Dit is mogelijk via volgende opdracht in de LXTerminal:

```console
ifconfig
```

### Opdracht

Maak een eenvoudige webpagina demo1.html en plaats deze in de map /var/www/html

Hiervoor installeren we eerst leafpad.

```console
sudo apt install leafpad
```
start leafpad op via de LXTerminal. Het is nodig leafpad als super user op te starten anders is het niet mogelijk een bestand te bewaren in de map /var/www/html.

```console
sudo leafpad
```
Plaats onderstaande html pagina in het bestand demo1.html.

Voorbeeldpagina

```html
<!DOCTYPE html>
<html>
<head>
<title>Mijn eerste webpagina</title>
</head>
<body>

<h1>Mijn eerste webpagina</h1>
<p>Dit is een paragraaf.</p>

</body>
</html>
```

## MySQL-database

MySQL is een van de populairste databasebeheerssystemen ter wereld. Het kan worden gebruikt voor kleine ontwikkelingsprojecten tot grote sites. 

MySQL en MariaDB zijn open source en gratis te gebruiken, waardoor ze veel gebruikt worden. 

![Mariadb vs MySQL](./assets/mariadb-vs-mysql.jpg)


MySQL versus MariaDB

MySQL is van Oracle en is niet meer volledig open source. Dit komt niet meer overeen met het oorspronkelijk idee van de ontwikkelaar. Daarom hebben de ontwikkelaars een fork gecreëerd waar de closed source onderdelen vervangen zijn door open-source. Deze fork wordt MariaDB genoemd en is volledig open source.
MariaDB en MySQL zijn compatibel.

### Wat is een database

Een database is een verzameling van gegevens die op een georganiseerde manier zijn opgeslagen. Je kunt een database beschouwen als een kast. 

![kast](./assets/kast.jpg)

### Database Management System (DBMS)

Nog toevoegen

### Tabellen

Wanneer informatie in een archiefkast wordt geplaatst, gooit u deze niet allemaal in dezelfde lade. U maakt lades voor specifieke informatie.

In een database worden tabellen gemaakt. Een tabel kan de gegevens van een klantenlijst bevatten. De informatie van een sensor, ….

![Tabel](./assets/tabel.png)

### kolommen en datatypes

Tabellen zijn opgebouwd uit kolommen. Kolommen bevatten een bepaald stuk informatie in de tabel. Voorbeeld de temperatuur gemeten door een sensor, het tijdstip, …

Een kolom in een database heeft een bijhorend gegevenstype. Het definieert welk type gegevens de kolom kan bevatten. Voorbeeld numeriek, datum, tekst, …

![Kolom](./assets/kolom.png)

### Rijen

Gegevens in een tabel worden opgeslagen in rijen.

Voorbeeld: de temperatuur en lichtsterkte per meting.

![Rij](./assets/rij.png)

## Installatie 
 
De MariadB (fork van MySQL) kan worden geïnstalleerd met de apt-pakketmanager met volgende opdracht:


```console
sudo apt install mariadb-server php-mysql -y
sudo service apache2 restart
```

## MySQL-client

U kunt de MySQL-client starten via de terminal.

```console
sudo mysql -u root
```

* mysql: dit vertelt uw opdrachtpromp of powerschell om de mysql-client te starten.
* -u root: de -u vertelt de client om in te loggen met de opgegeven naam, in dit geval 'root'.

Je zou nu verbonden moeten zijn

```console
MariaDB [(none)]>
```

## Uitproberen

Met SQL kunnen we veel dingen doen. De twee meest gebruikte soorten zijn:
* Gegevensdefinitie: dit bepaalt hoe gegevens worden opgeslagen. Welke tabellen de database bevat, hoe de tabellen zijn gestructureerd, welke eigenschappen en gegevenstypen hebben de kolommen.
* Gegevensmanipulatie: gegevens maken, lezen, bijwerken en verwijderen.

### Aanmaken database

Voordat we iets in SQL kunnen doen, moeten we een database maken. Dit kan worden gedaan met de CREATE DATABASE query.

```SQL
CREATE DATABASE bookstore;
```

### Aanmaken tabel in database

Nu hebben we een database die tabellen en hun gegevens kan groeperen. Vervolgens maken we een nieuwe tabel aan in de database met de CREATE TABLE query. De tabel naam is books. We moeten eveneens de verschillende kolommen definiëren die in de tabel zullen voorkomen. Elke kolom heeft een naam, datatype en extra eigenschappen.
Om een tabel te maken waarin gegevens over boeken, zoals ISBN, naam, beschrijving en prijs, kunnen worden opgeslagen, kunnen we de volgende query schrijven en uitvoeren.

```SQL
CREATE TABLE books (
   isbn CHAR(13) NOT NULL PRIMARY KEY,
   name VARCHAR(64) NOT NULL,
   description TEXT,
   price DECIMAL(6,2)
);
```

### Gegevensmanipulatie

Er zijn veel dingen die we met gegevens kunnen doen. De acties die kunnen worden toegepast, worden soms afgekort met CRUD. CRUD staat voor C reate, R ead, U pdate en D elete.

#### Invoer nieuwe gegevens

Gegevens invoeren in een tabel met SQL kan met de INSERT INTO query. Vervolgens voegen we de tabel toe waaraan we gegevens willen toevoegen en de waarden die in die kolommen moeten worden opgeslagen.

```SQL
INSERT INTO books (isbn, name, description, price) VALUES ("9781449303969", "Learning MySQL", "Good book", 33.50);
```

#### Lezen

Nu we wat gegevens in de books tabel hebben, kunnen we deze ook uitlezen. Dit kan worden gedaan met behulp van de SELECT query. 

```SQL
SELECT isbn, name, description, price FROM books;
```

Resultaat

```SQL
+---------------+----------------+-------------+-------+
| isbn          | name           | description | price |
+---------------+----------------+-------------+-------+
| 9781449303969 | Learning MySQL | Good book   | 33.50 |
+---------------+----------------+-------------+-------+
```

#### Aanpassen

Als we bestaande gegevens in een tabel willen wijzigen, kunt u de UPDATE query gebruiken. De UPDATE query geeft de kolomnaam en -waarde die u wilt wijzigen. In dit geval is het belangrijk om een WHERE clausule aan de query toe te voegen om de wijziging alleen toe te passen op het boek dat een specifiek isbn-nummer heeft. Als u het weglaat of vergeet WHERE, krijgen alle boeken de nieuwe prijs. Dit is meestal niet wat je zou willen.

```SQL
UPDATE books SET price = 23.50 WHERE isbn = "9781449303969";
```

#### Verwijderen

De laatste manipulatie van gegevens is de DELETE. Met DELETE kunnen we gegevens uit de tabel verwijderen. Met DELETE wordt een volledige rij verwijderd in de tabel. Het is belangrijk om de WHERE clausule te gebruiken om te voorkomen dat alle rijen en dus alle gegevens in een tabel worden verwijderd.

```SQL
DELETE FROM books WHERE isbn = "9781449303969";
```
