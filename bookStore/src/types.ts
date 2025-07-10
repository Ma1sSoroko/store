// Типизация лого
/// <reference types="vite/client" />

import type { BOOKS_LIMIT } from "./redux/booksSlice";

export type OrderingType = 'title' | 'price'

declare module "*.png" {
  const value: string;
  export default value;
}