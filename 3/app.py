import os
from google.cloud import storage
import psycopg2
from datetime import datetime

def process_new_proforma(data, context):
    # Obtener información sobre el archivo subido
    file_name = data['name']
    file_path = data['bucket'] + '/' + file_name

    # Extraer información del nombre del archivo
    file_info = file_name.split('_')
    order_id = file_info[1]
    user_id = file_info[2]
    creation_datetime = datetime.strptime(file_info[3] + file_info[4], '%d%m%Y%H%M%S')

    
    connection = psycopg2.connect(user="your_db_user",
                                  password="your_db_password",
                                  host="your_db_host",
                                  port="your_db_port",
                                  database="your_db_name")
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM validacion_proforma WHERE order_id = %s AND user_id = %s", (order_id, user_id))
    existing_record = cursor.fetchone()

    if existing_record:
        cursor.execute("UPDATE validacion_proforma SET fecha_hora = %s, url_archivo = %s, status = 0 WHERE order_id = %s AND user_id = %s",
                       (creation_datetime, file_path, order_id, user_id))
    else:
        cursor.execute("INSERT INTO validacion_proforma (order_id, user_id, fecha_hora, url_archivo, status) VALUES (%s, %s, %s, %s, 0)",
                       (order_id, user_id, creation_datetime, file_path))

    connection.commit()
    cursor.close()
    connection.close()

    print(f"Proforma {file_name} procesada correctamente.")

