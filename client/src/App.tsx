import TheRouterProvider from "./routes/TheRouterProvider"
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const  App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <TheRouterProvider />

    </QueryClientProvider>
  )
}

export default App
