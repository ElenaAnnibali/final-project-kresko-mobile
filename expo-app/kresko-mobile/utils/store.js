import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_KEY = '@kresko-mobile';

export const saveEntries = async (entries) => {
  await AsyncStorage.setItem(STORE_KEY, JSON.stringify(entries));
};

export const loadEntries = async () => {
  const json = await AsyncStorage.getItem(STORE_KEY);
  if (!json) {
    return [];
  }
  return JSON.parse(json);
};

export const addEntry = async (entry) => {
  const entries = await loadEntries();
  entries.push(entry);
  await saveEntries(entries);
};
