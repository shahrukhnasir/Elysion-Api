
const Page = dynamic(() => import(''))
  
  export default function Page() {
    return (
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
      </Suspense>
    )
  }