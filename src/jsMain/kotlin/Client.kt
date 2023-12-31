import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window

fun main() {
    window.onload = {
        render(document.getElementById("root")) {
            child(IHoover::class) {
                attrs {
                    name = "Kotlin/JS"
                }
            }
        }
    }
}
