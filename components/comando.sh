#!/bin/bash

# Obtener todos los nombres de archivo con extensión .tsx
files=$(find . -type f -name "*.tsx")

# Recorrer los nombres de archivo
for file in $files; do
  # Obtener el nombre del archivo sin la extensión .tsx
  filename=$(basename "$file" .tsx)
  
  # Crear la carpeta con el mismo nombre
  mkdir "$filename"
  
  # Mover el archivo a la carpeta
  mv "$file" "$filename/"
done

echo "Se han creado las carpetas y se han movido los archivos .tsx."