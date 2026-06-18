import { ComparisonPage } from '@/pages/comparison'
import { QueryProvider } from './providers/QueryProvider'

function App() {
  return (
    <QueryProvider>
      <ComparisonPage />
    </QueryProvider>
  )
}

export default App
