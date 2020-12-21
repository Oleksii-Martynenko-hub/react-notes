import { INote, ITodo } from '../interfaces/interfaces';

export default {
  get(key: string): [] | null {
    const localStore: string | null = localStorage.getItem(key);

    const parseLocalStore = localStore && JSON.parse(localStore);
    return parseLocalStore;
  },

  set(key: string, newStore: INote[] | ITodo[]): void | null {
    return localStorage.setItem(key, JSON.stringify(newStore));  
  }
};