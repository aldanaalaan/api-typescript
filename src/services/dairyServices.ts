import {
    DairyEntry,
    NonSensitiveInfoDairyEntry,
    newDairyEntry,
} from "../types";
import dairyData from "./diaries.json";

const diaries: DairyEntry[] = dairyData as DairyEntry[];

export const getEntries = (): DairyEntry[] => diaries;

export const findById = (
    id: number
): NonSensitiveInfoDairyEntry | undefined => {
    const entry = diaries.find((d) => d.id == id);
    if (entry != null) {
        const { comment, ...restOfDairy } = entry;
        return restOfDairy;
    }
    return undefined;
};

export const getEntriesWithoutSensitiveInfo =
    (): NonSensitiveInfoDairyEntry[] => {
        return diaries.map(({ id, date, weather, visibility }) => {
            return {
                id,
                date,
                weather,
                visibility,
            };
        });
    };

export const addDairy = (newDairyEntry: newDairyEntry): DairyEntry => {
    const newDairy = {
        id: Math.max(...diaries.map((d) => d.id)) + 1,
        ...newDairyEntry,
    };

    diaries.push(newDairy);
    return newDairy;
};
