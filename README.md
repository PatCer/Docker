# Docker
## Vorteile:
  - Im Gegensatz zu VMs, die ein Betriebsystem, unsere resource und alles drum und dran 
  gleichzeitig runnen muss, kann ein docker nur die resource selber runnen, dh. es ist
  - schneller beim start,
  - viel effizienter
  - und verbrauchen viel weniger speicherplatz.
## Nachteile:
  - Sicherheitsrisiko
  - Noch nicht vollständig in windows eingebunden
  - wenig personal, die sich damit auskennt

## Dockerfiles:
  Die bauanleitung für das Bild dh. das hat alle commands schon geschrieben die 
  man braucht um das bild zu erstellen und man muss nur noch den file selber ausführen 
  und das Bild ird erstellt.

## Basis-Image:
  Ein standartimage, der verändert wird um sein eigenes docker image zu bauen.
  
## Docker-Registries:
  In docker Registrie haltet alle versionen von einer docker image, sodass der anwender 
  auf alle Versionen zugriff hat.

## Docker image Tags:
  Tags anhand man images einordnen kann dh. es funktioniert wie der name des Images.

  #### Beispiel:
  ##### Hier wird ein image mit der ID 0e5574283393 als fedora/httpd mit dem tag version1.0 getagt:
    docker tag 0e5574283393 fedora/httpd:version1.0

## Arbeiten mit der Registrie:
  #### Pull
    # docker Pullen
    docker pull ubuntu:latest
  #### Push
    # Erst tag angeben, damit der file in namen haben 
    docker tag my_image:latest username/repository_name:latest
    # docker Pushen
    docker push username/repository_name:latest
## Docker-Schichten
<p align="center">
<img src="https://miro.medium.com/v2/resize:fit:702/0*jmt5sFda_p5teIUI.jpg" height = "350">
</p>

### Vorteile vom Schichtemodell
- Effizienz
- Schnell
- Wiederverwendbar
- Einfache wartung und aktualisierung
- Rollback-fähig

## Docker images effizient nutzen:
- Verwendung von offiziellen Basis-Images
- Effiziente Resourcennutzung
- Sichreheitsbest Practices einhalten

## Best Practices:
- Docker Image so kelin wie möglich halten
- Verwendung von docker-files
- Verwendung von ofiziellen basis-Images
- Schichten anzahl minimieren

## Sicherheit:
Um Docker images am sichersten zu halten, sollten:
  - die best practices eingehalten werden,
  - minimale basis images verwendet werden,
  - die Container berechtigungen begrenzt werden,
  - Docker Content trust (DCT) aktiviert werden,
  - Netzwerksegmentierung implementiert werden,
  - Container Aktivität überwacht und protokolliert werden,
  - Images auf schwachstellen gescannt werden und
  - tool verwenden werden um Secrets zu Verwalten.

> [!NOTE]
Here Are some useful [commands](https://docs.docker.com/get-started/docker_cheatsheet.pdf)


# First Steps

## Dockerfile erstellen
1. File mit dem namen Dockerfile erstellen
2. Spezifiziere, welches os du benutzt mit FROM 
    -> Syntax : ```FROM <name>:<version>```
    -> bsp.   : ```FROM nginx:1.11-alpine```
3. Führe befehle aus mit RUN
    -> Syntax : ```RUN <befehl>```
    -> bsp.   : ```RUN echo 'Hallo aus der Image'```
4. resourcen einbinden mit COPY
    -> Syntax : ```COPY <pfad der resource> <pfad an dem die resource ankommen soll>```
    -> bsp.   : ```COPY TestWebSite/index.html /usr/share/nginx/html```
5. port freigeben mit EXPOSE
    -> Syntax : ```EXPOSE <port nummer>```
    -> bsp.   : ```EXPOSE 80``` 
6. spezifizier den command der ausgeführt werden soll mit CMD (muss immer am ende einer Dockerfile sein)
  -> Syntax : ```CMD [<executable> <param>]```
  -> bsp.   : ```CMD ["nginx", "-g", "daemon off;"]```

## Dockerfile ausführen
Im cmd kannst du mit dem Command ```docker images``` alle docker images von dir ansehen.

Navigiere im cmd an den file, in dem sich dein Dockerfile befindet und führe das befehl 
syntax: ```docker build <pfad> <tag>```
bsp.  : ```docker build . -t firsttestimage```
um den image zu bauen.

Wenn du jetzt das befehl ```docker images``` ausführst sollte dein docker image da stehen.

Führe anschließlich dieses befehl:
syntax:```docker run . -d -p <angegebener port:port> <tag>``` 
bsp.  : ```docker run . -d -p 80:8081``` 
aus um dein docker zu runnen.

Wenn du wie ich in diesem fall eine Website erstellt hast, dann kannst du in deinem 
browser einfach ```localhost:<dein port>``` eingeben und dann sollte deine webseite erscheinen.

## Dockerfile in Azure Registry pushen
[Hier](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal?tabs=azure-cli) ist ein tutorial um den registry zu erstellen und ein image zu pushen.
Wenn bei der anmeldung ein username angeforder wird, dann geh auf dein registry/AccessKeys
dan check das kästchen mit "Admin user" und dann steht dein username aund passwort da.
Bei der eingabe vom passwort wird nix angezeigt, aber die eingaben gelten trotzdem.

