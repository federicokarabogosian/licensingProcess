# Licensing Process

Proyecto de laboratorio para aprender a desarrollar sobre NodeJS.

## Modelo de datos
- Movie
- Track
- Licensing
- Song
- Role
- User
- Worflow
- Task
- TaskInstance

## Definir BD a utilizar
Se decide utilizar una base de datos NoSQL, especificamente MongoDB debido a:
- El proyecto no se basa en transacciones.
- Su flexibilidad permite la futura evolución del diseño del workflow. En esta versión inicial es simple.
- Su flexibilidad permite la futura evolución del diseño del workflow a otros tipos de procesos relacionados. En esta versión inicial solo se relaciona con el proceso de licenciamiento.

## Propuesta de solución para visibilidad inmediata
Pendiente.

## Instrucciones para ejecutar código localmente
### Configuración
#### Instalar MongoDB
#### Configurar MongoDB
#### Instalar NodeJS
#### Clonar proyecto
#### Instalar dependencias
Instalar las dependencias del proyecto:
```
npm install
```
Instalar el mocha para que pueda ser ejecutado de forma global:
```
npm install -g mocha
```
Poblar la base de datos con datos de ejemplos
```
node populatedb mongodb://localhost:27017/licensing-dev
```
### Ejecución
#### Ejecutar pruebas
Se requiere tener el servidor ejecutandose para realizar las pruebas
```
npm start
```
Luego se ejecutan las pruebas
```
npm test
```
Nota sobre los test: en esta version los test generan Tracks y Licensings haciendo referencia a objetos Movie y Song inexistentes. Estos objetos creados deben ser borrados de la base de datos ya que sino el frontend no obtiene ningun objeto si existen referencias erroneas.
#### Ejecutar proyecto
```
npm start
```
