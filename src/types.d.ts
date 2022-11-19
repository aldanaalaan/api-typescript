export type Weather = "sunny" | "rainy" | "cludy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DairyEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

// Tipo de dato omitiendo algun dato
/* export type NonSensitiveInfoDairyEntry = Pick<
    DairyEntry,
    "id" | "date" | "weather" | "visibility"
>; */

export type NonSensitiveInfoDairyEntry = Omit<DairyEntry, "comment">;
export type newDairyEntry = Omit<DairyEntry, "id">;
