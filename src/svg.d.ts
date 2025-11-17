declare module '*.svg' {
  import * as React from 'react'
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >

  const src: string
  // noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
  export default src
}
