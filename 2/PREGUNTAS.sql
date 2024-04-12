A. Los arrendatarios que arriendan la casa ubicada en la calle Carrera nº 1024, Santiago.

SELECT A.Nombre, A.Apellido
FROM Arrendatario A
INNER JOIN Arrienda B ON A.RUT = B.RUT
INNER JOIN Casa C ON B.Id_casa = C.Id_casa
WHERE C.Calle = 'Carrera' AND C.Nro = 1024 AND C.Ciudad = 'Santiago';


B. ¿Cuánto le deben a María Pérez?
SELECT SUM(Deuda)
FROM Arrienda A
INNER JOIN Arrendatario R ON A.RUT = R.RUT
WHERE R.Nombre = 'María' AND R.Apellido = 'Pérez';


C. ¿Cuál es la deuda total para cada dueño?
SELECT D.Nombre, D.Apellido, SUM(A.Deuda) AS DeudaTotal
FROM Dueño D
INNER JOIN Casa C ON D.RUT = C.RUT
INNER JOIN Arrienda A ON C.Id_casa = A.Id_casa
GROUP BY D.Nombre, D.Apellido;


D. Liste todas las personas de la base de datos
SELECT Nombre, Apellido
FROM Arrendatario
UNION
SELECT Nombre, Apellido
FROM Dueño;


E. Indique los dueños que poseen tres o más casas.
SELECT D.Nombre, D.Apellido
FROM Dueño D
INNER JOIN Casa C ON D.RUT = C.RUT
GROUP BY D.Nombre, D.Apellido
HAVING COUNT(*) >= 3;


PARTE 2

A. Para mejorar el rendimiento de las consultas, podemos proponer los siguientes índices:

Índice en la tabla Arrendatario en el campo RUT: Este índice puede mejorar el rendimiento de las consultas que involucran la tabla Arrendatario, especialmente aquellas que buscan arrendatarios específicos por su RUT.

Índice en la tabla Casa en los campos (Calle, Nro, Ciudad): Dado que hay consultas que filtran por la dirección de la casa, crear un índice en estos campos puede mejorar el rendimiento de las consultas que involucran la búsqueda por dirección.

Índice en la tabla Arrienda en el campo Id_casa: Como este campo se utiliza para relacionar la tabla Arrienda con la tabla Casa, crear un índice en este campo puede mejorar el rendimiento de las consultas que involucran la tabla Arrienda y la identificación de casas arrendadas.

Índice en la tabla Dueño en el campo RUT: Similar al índice propuesto para la tabla Arrendatario, un índice en el campo RUT de la tabla Dueño puede mejorar el rendimiento de las consultas que involucran a los dueños por su RUT.

Estos índices ayudarían a acelerar el proceso de búsqueda y filtrado en las consultas, reduciendo el tiempo de respuesta.

B. Respecto a la forma normal de las tablas:

Las tablas parecen estar en la primera forma normal (1FN), ya que no hay valores repetidos en las columnas y cada celda contiene un solo valor.
Además, parece que las tablas están en la segunda forma normal (2FN), ya que no hay dependencias parciales en las claves primarias.
Sin embargo, podría haber una optimización para llevar las tablas a la tercera forma normal (3FN) separando la información que no depende de la clave primaria en tablas separadas. Por ejemplo, la tabla "Telefono" podría separarse de las tablas Arrendatario y Dueño, ya que los números de teléfono pueden no ser únicos para cada arrendatario o dueño.


C. Los campos que se pueden considerar como primary key y foreign key son:

Primary Key:
En la tabla Arrendatario, el campo RUT podría ser la clave primaria.
En la tabla Dueño, el campo RUT también podría ser la clave primaria.
En la tabla Casa, el campo Id_casa podría ser la clave primaria.
Foreign Key:
En la tabla Arrienda, el campo RUT sería una clave foránea que hace referencia al campo RUT de la tabla Arrendatario, y el campo Id_casa sería una clave foránea que hace referencia al campo Id_casa de la tabla Casa.
En la tabla Casa, el campo RUT sería una clave foránea que hace referencia al campo RUT de la tabla Dueño.