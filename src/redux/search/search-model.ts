import { ImageType } from '../../dal/axios';

export const initialSearch: SearchStateType = {
  searchValue: undefined,
  pagination: null,
  images: [],
};

export type SearchStateType = {
  searchValue: string | undefined
  pagination: { page: number; pages: number } | null
  images: Array<ImageType>
};
