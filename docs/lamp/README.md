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
sudo apt upgrade -y
```

## Apache HTTP-server

Het internet is een groot netwerk van computers. Niet alle computers hebben dezelfde taak. Servers zijn normaal altijd beschikbaar en bieden informatie aan. Clients zijn meestal niet altijd beschikbaar en vragen informatie op aan server. Dit model wordt het client/server model genoemd.

### HTTP-protocol

Het HTTP-protocol (Hyper Tekst Transfer Protocol) is gemaakt voor Client-server toepassingen. Het HTTP-protocol is gestandaardiseerd door de IETF (Internet Engineering Task Force) Standaard maakt HTTP gebruik van poort 80. Andere poorten zijn echter ook mogelijk.

### Installatie

Apache kan geïnstalleerd worden met de apt-pakketmanager. Voer volgende opdracht uit in de LXTerminal:

```console
sudo apt install apache2 -y
```

### Uitproberen

Als alles goed is gegaan, functioneert de Raspberry Pi al een HTTP-server met behulp van Apache. De eenvoudigste manier om dit te testen is op de raspberry pi zelf. Open de browser en surf naar localhost. U moet de Apache Debian standaardpagina krijgen.

![Apache-debian](./assets/apache-debian.png)

Het is ook mogelijk om vanaf een andere machine toegang te krijgen tot de webpagina. De enige vereiste is dat de client zicht in hetzelfde netwerk bevindt. Hiervoor heb je het IP-adres van de Raspberry PI nodig. Dit is mogelijk via volgende opdracht in de LXTerminal:

```console
ifconfig
```

### Opdracht

Maak een eenvoudige webpagina en plaats deze in de map /var/www/html

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


