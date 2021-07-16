import { initCanvas, getCanvasContext, resetPageStyles } from "./pageWrapper"
import { gameStart } from './game/main'

resetPageStyles()
initCanvas()

gameStart()