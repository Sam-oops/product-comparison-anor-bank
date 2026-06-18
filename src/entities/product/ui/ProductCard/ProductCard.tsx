import type { ReactNode } from 'react'
import type { Product } from '../../model/types'
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
  children?: ReactNode
}

export function ProductCard({ product, children }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.brand}>{product.brand}</p>
      <p className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</p>
      <div className={styles.action}>{children}</div>
    </article>
  )
}
