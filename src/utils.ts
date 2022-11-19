import { newDairyEntry } from "./types";
import { Weather, Visibility } from "./anums";

//# Funciones de parseo de datos
// Parseo de comentarios
const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};

// Parseo de fecha
const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date");
    }
    return dateFromRequest;
};

// Parseo de Weather
const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing Weather");
    }
    return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (
        !isString(visibilityFromRequest) ||
        !isVisibility(visibilityFromRequest)
    ) {
        throw new Error("Incorrect or missing Visibility");
    }
    return visibilityFromRequest;
};

//# Metodos de validacion de tipo
// Validación de string
const isString = (string: string | object): boolean => {
    //* instance of para validar un String creado por constructor
    return typeof string === "string" || string instanceof String;
};

// Validación de fecha
const isDate = (date: string): boolean => {
    // Verificar con RegEx (Validación propia)
    /* return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date); */

    // Verificación de tutorial
    return Boolean(Date.parse(date));
};

// Validación de Weather
const isWeather = (weather: any): boolean => {
    // Verificar por Array de valores (Validación propia)
    //! No recomendado por tener que sincronizarlo en "types.d.ts" y donde sea que lo uses
    //return ["sunny", "rainy", "cloudy", "windy", "stormy"].includes(weather);

    // Verificación del tutorial
    return Object.values(Weather).includes(weather);
};

// Validación de Visibility
const isVisibility = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility);
};

// Convertir cuerpo de la request en una DairyEntry
const toNewDairyEntry = (object: any): newDairyEntry => {
    const newEntry: newDairyEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    };

    return newEntry;
};

export default toNewDairyEntry;
