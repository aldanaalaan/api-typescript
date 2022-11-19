"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anums_1 = require("./anums");
//# Funciones de parseo de datos
// Parseo de comentarios
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};
// Parseo de fecha
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date");
    }
    return dateFromRequest;
};
// Parseo de Weather
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing Weather");
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) ||
        !isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing Visibility");
    }
    return visibilityFromRequest;
};
//# Metodos de validacion de tipo
// Validación de string
const isString = (string) => {
    //* instance of para validar un String creado por constructor
    return typeof string === "string" || string instanceof String;
};
// Validación de fecha
const isDate = (date) => {
    // Verificar con RegEx (Validación propia)
    /* return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date); */
    // Verificación de tutorial
    return Boolean(Date.parse(date));
};
// Validación de Weather
const isWeather = (weather) => {
    // Verificar por Array de valores (Validación propia)
    //! No recomendado por tener que sincronizarlo en "types.d.ts" y donde sea que lo uses
    //return ["sunny", "rainy", "cloudy", "windy", "stormy"].includes(weather);
    // Verificación del tutorial
    return Object.values(anums_1.Weather).includes(weather);
};
// Validación de Visibility
const isVisibility = (visibility) => {
    return Object.values(anums_1.Visibility).includes(visibility);
};
// Convertir cuerpo de la request en una DairyEntry
const toNewDairyEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    };
    return newEntry;
};
exports.default = toNewDairyEntry;
