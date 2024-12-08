import { registerComponents } from "@phoria/phoria"

registerComponents({
  Counter: {
    /* The default export of this `module` will be used as the `component`.
    If you want to use a named export, you can specify an object with `module`
    and `component` keys. */
    loader: () => import("./Counter/Counter.tsx"),
    framework: "react"
  }
})
