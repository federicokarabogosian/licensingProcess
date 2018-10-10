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
- Su felxibilidad permite la futura evolución del diseño del workflow a otros tipos de procesos relacionados. En esta versión inicial solo se relaciona con el proceso de licenciamiento.

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
'''
npm install
'''
Instalar el mocha para que pueda ser ejecutado de forma global:
'''
npm install -g mocha
'''
### Ejecución
#### Ejecutar pruebas
'''
mocha ./test --recursive --timeout 15000
'''
#### Ejecutar proyecto
