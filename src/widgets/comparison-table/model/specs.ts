import type { Product } from '@/entities/product'

export type ProductSpec = {
  key: keyof Product
  label: string
  format: (product: Product) => string
}

export const PRODUCT_SPECS: ProductSpec[] = [
  { key: 'brand', label: 'Бренд', format: (p) => p.brand },
  { key: 'price', label: 'Цена', format: (p) => `${p.price.toLocaleString('ru-RU')} ₽` },
  { key: 'cpu', label: 'Процессор', format: (p) => p.cpu },
  { key: 'ram', label: 'Оперативная память', format: (p) => `${p.ram} ГБ` },
  { key: 'storage', label: 'Накопитель', format: (p) => `${p.storage} ГБ` },
  { key: 'screenSize', label: 'Диагональ', format: (p) => `${p.screenSize}"` },
  { key: 'weight', label: 'Вес', format: (p) => `${p.weight} кг` },
]
