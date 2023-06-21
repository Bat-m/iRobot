import kotlinx.coroutines.*
import kotlinx.coroutines.GlobalScope.coroutineContext
import kotlinx.html.Entities
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.onClick
import org.w3c.dom.HTMLInputElement
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.attrs
import react.dom.div
import react.dom.input
import react.dom.canvas
import kotlin.js.json

data class PositiveNumber(val value: Int) {
    init {
        require(value >= 0) { "La valeur doit être positive" }
    }
}

data class CoordsProps(
    val x: Int,
    val y: Int,
    val orientation: String
)

data class CurrentCoordsProps(
    val x: Int,
    val y: Int,
    val orientation: String
)

data class GridProps(
    val x: Int,
    val y: Int,
)

 interface IHooverProps : RProps {
    var name: String
    var coords: CoordsProps?
    var grid: GridProps
    var instruct: String
    var currentCoords: CurrentCoordsProps?
}


suspend fun repeatFun() {
    coroutineScope {
        while (isActive) {
            // do your network request here
            delay(1000)
        }
    }
}


data class IHooverState(val name: String, val coords: CoordsProps, val grid: GridProps, val instruct: String, val currentCoords: CurrentCoordsProps) : RState

@JsExport
class IHoover(props: IHooverProps) : RComponent<IHooverProps, IHooverState >(props) {

    init {
        val initialCoords = CoordsProps(5,5, "N")
        val initialGrid = GridProps(10,10)
        val initialInstruction = "DADADADAA"
        val initialCurrentCoords = CurrentCoordsProps(initialCoords.x,initialCoords.y, initialCoords.orientation)
        state = IHooverState(props.name, initialCoords, initialGrid,initialInstruction,initialCurrentCoords )
    }
    val coroutineScope = CoroutineScope(coroutineContext) // Create a coroutine scope

    override fun RBuilder.render() {
        div {
            +"Dimmension de la grille: ${state.grid}"
        }
        input {
            attrs {
                type = InputType.text
                value = state.grid.x.toString()
                onChangeFunction = { event ->
                    val newGridX = (event.target as HTMLInputElement).value.toInt()
                    setState({
                        IHooverState(state.name, state.coords, state.grid.copy(x=newGridX), state.instruct, state.currentCoords)
                    })
                }
            }
        }
        input {
            attrs {
                type = InputType.text
                value = state.grid.y.toString()
                onChangeFunction = { event ->
                    val newGridY = (event.target as HTMLInputElement).value.toInt()
                    setState({
                        IHooverState(state.name, state.coords, state.grid.copy(y=newGridY), state.instruct, state.currentCoords)
                    })
                }
            }
        }
        div {
            +"Position initiale: ${state.coords}"
        }
        div {
            +"X:  ${state.coords.x}"
        }
        input {
            attrs {
                type = InputType.text
                value = state.coords.x.toString()
                onChangeFunction = { event ->
                    val newX = (event.target as HTMLInputElement).value.toInt()
                    setState({
                        IHooverState(state.name, state.coords.copy(x = newX), state.grid, state.instruct, state.currentCoords)
                    })
                }
            }
        }
        div {
            +"Y:  ${state.coords.y}"
        }
        input {
            attrs {
                type = InputType.text
                value = state.coords.y.toString()
                onChangeFunction = { event ->
                    val newY = (event.target as HTMLInputElement).value.toInt()
                    setState({
                        val updatedCoordsY = state.coords.copy(y = newY)
                        IHooverState(state.name, updatedCoordsY, state.grid, state.instruct, state.currentCoords)
                    })
                }
            }
        }
        div {
            +"Orientation:  ${state.coords.orientation}"
        }
        input {
            attrs {
                type = InputType.text
                value = state.coords.orientation
                onChangeFunction = { event ->
                    val newOrientation = (event.target as HTMLInputElement).value
                    setState({
                        val updatedCoordsOrientation = state.coords.copy(orientation = newOrientation)
                        IHooverState(state.name, updatedCoordsOrientation, state.grid, state.instruct, state.currentCoords)
                    })
                }
            }
        }
        div {
            +"Instructions: ${state.instruct}"
        }
        input {
            attrs {
                type = InputType.text
                value = state.instruct
                onChangeFunction = { event ->
                    val newInstruction = (event.target as HTMLInputElement).value
                    setState({
                        IHooverState(state.name, state.coords, state.grid, newInstruction, state.currentCoords)
                    })
                }
            }
        }

        input {
            attrs {
                type = InputType.button
                value = "Démarrer le robot"
               onClickFunction={

                   println("test start")


                    coroutineScope.launch {
                       coroutineScope {
                               for (i in 0 until state.instruct.length) {
                                   println( "instructions:${state.instruct[i]}")

                                   //logique qui définit l'orientation du robot
                                   when {
                                       (state.instruct[i] == 'D' && state.currentCoords.orientation == "N") || (state.instruct[i] == 'G' && state.currentCoords.orientation == "S") -> {
                                           println("state  1 instructions:${state.instruct[i]} orientation:${state.currentCoords.orientation} ")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy( orientation = "E"))
                                           })
                                       }
                                       (state.instruct[i] == 'G' && state.currentCoords.orientation == "N") || (state.instruct[i] == 'D' && state.currentCoords.orientation == "S") -> {
                                           println("state  2 instructions:${state.instruct[i]} orientation:${state.currentCoords.orientation} ")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy( orientation = "O"))
                                           })
                                       }
                                       (state.instruct[i] == 'D' && state.currentCoords.orientation == "E") || (state.instruct[i] == 'G' && state.currentCoords.orientation == "O") -> {
                                           println("state  3 instructions:${state.instruct[i]} orientation:${state.currentCoords.orientation} ")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy( orientation = "S"))
                                           })
                                       }
                                       (state.instruct[i] == 'G' && state.currentCoords.orientation == "E") || (state.instruct[i] == 'D' && state.currentCoords.orientation == "O") -> {
                                           println("state  4 instructions:${state.instruct[i]} orientation:${state.currentCoords.orientation} ")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy( orientation = "N"))
                                           })
                                       }
                                   }


                                   delay(1000)
                                    //logique qui défini l'avancement du robot
                                      if(state.instruct[i]=='A' &&  state.currentCoords.orientation=="N" && state.currentCoords.y<state.grid.y){
                                           println("state  A N")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy(y = state.currentCoords.y + 1))
                                           })
                                       }else if(state.instruct[i]=='A' &&  state.currentCoords.orientation=="S" && state.currentCoords.y>0){
                                           println("state  A S")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy(y = state.currentCoords.y - 1))
                                           })
                                       }else if(state.instruct[i]=='A' &&  state.currentCoords.orientation=="E" && state.currentCoords.x<state.grid.x){
                                           println("state  A E")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy(x = state.currentCoords.x + 1))
                                           })
                                       }
                                       else if(state.instruct[i]=='A' &&  state.currentCoords.orientation=="O" && state.currentCoords.x>0){
                                           println("state  A O")
                                           setState({
                                               IHooverState(state.name, state.coords, state.grid, state.instruct, state.currentCoords.copy(x = state.currentCoords.x - 1))
                                           })
                                       }




                               }
                           //println("end 1")
                       }
                       //println("end 2")


                   }
               }

            }
        }
        div {
            +"Coordonées actuel du robot: ${state.currentCoords}"
        }

    }
}
