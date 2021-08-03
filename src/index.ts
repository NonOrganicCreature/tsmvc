import "./fonts/hack-bold.woff"
import './style.css'
import { initCanvas, resetPageStyles } from "./pageWrapper"
import { gameStart } from './game/main'

resetPageStyles()
initCanvas()

gameStart()