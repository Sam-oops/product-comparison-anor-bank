import { ClearComparison } from '@/features/clear-comparison'
import { ComparisonTable } from '@/widgets/comparison-table'
import { ProductCatalog } from '@/widgets/product-catalog'
import styles from './ComparisonPage.module.css'

export function ComparisonPage() {
  return (
    <main className={styles.page}>
      <h1>Сравнение ноутбуков</h1>

      <ProductCatalog />

      <section className={styles.comparison}>
        <div className={styles.comparisonHead}>
          <h2>Сравнение</h2>
          <ClearComparison />
        </div>
        <ComparisonTable />
      </section>
    </main>
  )
}
