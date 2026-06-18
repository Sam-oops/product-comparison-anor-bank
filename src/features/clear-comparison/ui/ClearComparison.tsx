import { useComparisonStore } from '@/entities/comparison'
import styles from './ClearComparison.module.css'

export function ClearComparison() {
  const count = useComparisonStore((state) => state.selectedIds.length)
  const clear = useComparisonStore((state) => state.clear)

  if (count === 0) return null

  return (
    <button type="button" className={styles.button} onClick={clear}>
      Очистить ({count})
    </button>
  )
}
