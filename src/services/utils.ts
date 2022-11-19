import { newDairyEntry } from "../types";

const parseComment = (commentFromRequest: any): string => {
    if (isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};

// Metodos de validacion de tipo
const isString = (string: string): boolean => {
    return typeof string === "string";
};

const isDate = (date: string): boolean => {
    return /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/.test(
        date
    );
};

const toNewDairyEntry = (object: any): newDairyEntry => {
    const newEntry: newDairyEntry = {
        comment: parseComment(object.comment),
    };

    return newEntry;
};

export default toNewDairyEntry;
