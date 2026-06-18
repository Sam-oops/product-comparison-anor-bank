import { MAX_SELECTED, useComparisonStore } from '@/entities/comparison'
import styles from './ToggleCompare.module.css'

type ToggleCompareProps = {
  productId: string
}

export function ToggleCompare({ productId }: ToggleCompareProps) {
  const selectedIds = useComparisonStore((state) => state.selectedIds)
  const toggle = useComparisonStore((state) => state.toggle)

  const checked = selectedIds.includes(productId)
  const limitReached = !checked && selectedIds.length >= MAX_SELECTED

  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={checked}
        disabled={limitReached}
        onChange={() => toggle(productId)}
      />
      Сравнить
    </label>
  )
}
