import { ICategory } from './ICategory';

export interface IGameCategories {
  id: number;
  name: string;
  forum_url: string;
  nexusmods_url: string;
  genre: string;
  mod_count: number;
  file_count: number;
  downloads: number;
  categories: [ICategory];
}
