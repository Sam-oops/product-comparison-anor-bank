import { useProducts, type Product } from '@/entities/product'
import { useComparisonStore } from '@/entities/comparison'
import { RemoveFromComparison } from '@/features/remove-from-comparison'
import { hasDifferentValues } from '@/shared/lib'
import { PRODUCT_SPECS } from '../model/specs'
import styles from './ComparisonTable.module.css'

export function ComparisonTable() {
  const selectedIds = useComparisonStore((state) => state.selectedIds)
  const { data: products } = useProducts()

  const selected = selectedIds
    .map((id) => products?.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product))

  if (selected.length === 0) {
    return <p className={styles.empty}>Выберите товары, чтобы сравнить их характеристики.</p>
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th />
          {selected.map((product) => (
            <th key={product.id} className={styles.productHead}>
              <span>{product.name}</span>
              <RemoveFromComparison productId={product.id} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {PRODUCT_SPECS.map((spec) => {
          const values = selected.map((product) => product[spec.key])
          const different = hasDifferentValues(values)

          return (
            <tr key={spec.key} className={different ? styles.different : undefined}>
              <th scope="row" className={styles.specLabel}>
                {spec.label}
              </th>
              {selected.map((product) => (
                <td key={product.id}>{spec.format(product)}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
