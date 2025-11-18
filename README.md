# Проект «Вычислитель отличий»
[![Actions Status](https://github.com/mdshishov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mdshishov/frontend-project-46/actions)
[![Node CI](https://github.com/mdshishov/frontend-project-46/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mdshishov/frontend-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mdshishov_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mdshishov_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mdshishov_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=mdshishov_frontend-project-46)

**Вычислитель отличий** – программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:
- Поддержка входных форматов: yaml, json.
- Генерация отчета в виде plain text, stylish и json.

## Подгтовка и запуск

```console
# Клонируем репозиторий с GitHub
git clone https://github.com/mdshishov/frontend-project-46.git

# Переходим в созданную директорию
cd frontend-project-46

# Устанавливаем зависимости
make install
# или
npm ci

# Выводим справочную информацию
gendiff -h
```
## Пример использования
```console
# Формат stylish (по умолчанию)
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}

# Формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```
