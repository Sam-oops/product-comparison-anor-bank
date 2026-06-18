import { MAX_SELECTED, useComparisonStore } from '@/entities/comparison'
import { ProductCard, useProducts } from '@/entities/product'
import { ToggleCompare } from '@/features/toggle-compare'
import styles from './ProductCatalog.module.css'

export function ProductCatalog() {
  const { isLoading, isError, data } = useProducts()
  const selectedCount = useComparisonStore((state) => state.selectedIds.length)

  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <p>Не удалось загрузить</p>

  return (
    <section>
      <p className={styles.counter}>
        Выбрано {selectedCount} из {MAX_SELECTED}
      </p>
      <ul className={styles.grid}>
        {data?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}>
              <ToggleCompare productId={product.id} />
            </ProductCard>
          </li>
        ))}
      </ul>
    </section>
  )
}
