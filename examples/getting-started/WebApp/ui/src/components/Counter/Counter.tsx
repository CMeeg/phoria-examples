import { useState } from "react"

interface CounterProps {
  startAt?: number
}

function Counter({ startAt }: CounterProps) {
  const [count, setCount] = useState(startAt ?? 0)

  return (
    <div>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export { Counter }
