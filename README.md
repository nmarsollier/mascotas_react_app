# mascotas_react

Demo de UI modular en react para proyecto mascotas

Abrir ventana de comandos en la carpeta, ejecutar:

```bash
npm install
npm start
```

Desde un browser debemos abrir [localhost:4200](http://localhost:4200/)

## Docker

Podemos usar Docker para levantar este servidor, esta configuración es un build para producción, pero sirve para probarlo:

```bash
docker build --no-cache -t mascotas-react https://raw.githubusercontent.com/nmarsollier/mascotas_react_app/master/Dockerfile

# Mac || Windows
docker run -it -d --name mascotas-react-app -p 4200:80 mascotas-react-app

# Linux
docker run --add-host host.docker.internal:172.17.0.1 -it -d --name mascotas-react-app -p 4200:80 mascotas-react-app
```

[Test](http://localhost:4200/)
