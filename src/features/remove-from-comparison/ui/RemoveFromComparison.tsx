import { useComparisonStore } from '@/entities/comparison'
import styles from './RemoveFromComparison.module.css'

type RemoveFromComparisonProps = {
  productId: string
}

export function RemoveFromComparison({ productId }: RemoveFromComparisonProps) {
  const remove = useComparisonStore((state) => state.remove)

  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Убрать из сравнения"
      onClick={() => remove(productId)}
    >
      ✕
    </button>
  )
}
