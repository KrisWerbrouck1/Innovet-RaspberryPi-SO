# Arduino To Raspberry pi

We willen sensordata met de ESP8266 via wifi doorsturen naar de raspberry pi. 

In onderstaande arduino programma voor de WemosD1 R2 met ESP8266 microcontroller wordt iedere 10 seconden 2 waardes verzonden naar het php bestand dataToMySQL.php. Dit php bestand scrijft vervolgens de data in de database.


```cpp
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "arduino_secrets.h" //bewaren ssid en paswoord wifi netwerk

String pathPHP = "http://192.168.1.27/";  //IP adres raspberry pi

const char* ssid = SECRET_SSID;   //Haal de ssid en het paswoord van het wifi netwerk uit het arduino_secrets.h
const char* pass = SECRET_PASS;

String postData = ""; //string om GET request in te bewaren

int valueTeller1 = 0;  //variabelen voor te verzenden data
int valueTeller2 = 0;

unsigned long previousMillis = 0; //tijdstip laatste maal er data verzonden is
unsigned long currentMillis = 0;  // huidige tijdstip

void setup () {
  Serial.begin(115200); //start the serial connection

  while (!Serial); //wait for serial monitor to open

  WiFi.begin(ssid, pass);

  while (WiFi.status() != WL_CONNECTED) {
    delay(5000);
    Serial.print("Connecting..");
  }
}

void loop() {
  currentMillis = millis(); //huidig tijdstip in currentMillis plaatsen
  if ((currentMillis - previousMillis) > 10000) // om de 10 seconden uitvoeren
  { previousMillis = currentMillis; //update previousMillis
    //variabelen met te verzenden data laten toenemen.
    valueTeller1++;
    valueTeller2 = valueTeller2 + 2;

    //opbouw http GET request naar php bestand op apache server
    postData = "";
    postData = pathPHP;
    postData += "dataToMySQL.php?waarde1=";
    postData += valueTeller1;
    postData += "&waarde2=";
    postData += valueTeller2;
    if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
      HTTPClient http;  //Declare an object of class HTTPClient
      Serial.println(postData);
      http.begin(postData);  //Specify request destination
      int httpCode = http.GET(); //Send the request

      if (httpCode > 0) { //Check the returning code
        String payload = http.getString();   //Get the request response payload
        Serial.println(payload);                     //Print the response payload
      }
      http.end();   //Close connection
    }
  }
}
```

De SSID en het paswoord van het WPA2 personal netwerk worden bewaard in het bestand arduino_secrets.h. Dit bestand moet in dezelfde map staan als het arduino ino bestand en volgende info bevatten.

```cpp
#define SECRET_SSID "SSID_WIFI_Netwerk"
#define SECRET_PASS "Paswoord_WIFI_Netwerk"
```

## Opdrachten

Maak een database en een php bestand aan om de temperatuur van een DS18B20 temperatuur sensor weer te geven.
Schrijf vervolgens een programma voor een wemosD1R2 arduino module om de temperatuur iedere 30 seconden te bewaren in de database.

Bewaar de temperatuur en luchtvochtigheid van een DHT11 iedere 10 seconden in een database.

Bewaar de afstand gemeten van een HC-SR04 iedere 10 seconden in een database.

Bewaar het gemeten gewicht afkomstig van een loadcell en een HX711 sensor module iedere 10 seconden in een database.

