import type { RenderReactPhoriaIslandComponent } from "@phoria/phoria-react/server"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

const renderWithStyledComponents: RenderReactPhoriaIslandComponent = async (island, props) => {
  let result = ""

  const sheet = new ServerStyleSheet()

  try {
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <island.component {...props} />
      </StyleSheetManager>
    )

    // TODO: Need to do something with the styleTags, or can just render inline?
    const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();

    result = html + styleTags
  } catch (error) {
    // handle error
    console.error(error)
  } finally {
    sheet.seal()
  }

  return result
}

export { renderWithStyledComponents }
