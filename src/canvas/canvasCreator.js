export function canvasCreator () {
  const canvas = document.createElement('canvas')

  const context = canvas.getContext('2d')
  context.beginPath()
  context.strokeStyle = '#000'
  context.lineWidth = 2

  function drawLine (fromX, fromY, toX, toY) {
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.stroke()
  }

  function head () {
    context.beginPath()
    context.arc(70, 30, 10, 0, Math.PI * 2, true)
    context.stroke()
  }

  function body () {
    drawLine(70, 40, 70, 80)
  }

  function leftArm () {
    drawLine(70, 50, 50, 70)
  }

  function rightArm () {
    drawLine(70, 50, 90, 70)
  }

  function leftLeg () {
    drawLine(70, 80, 50, 110)
  }

  function rightLeg () {
    drawLine(70, 80, 90, 110)
  }

  // initial frame
  function initialDrawing () {
    // clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    // bottom line
    drawLine(10, 130, 130, 130)
    // left line
    drawLine(10, 10, 10, 131)
    // top line
    drawLine(10, 10, 70, 10)
    // small top line
    drawLine(70, 10, 70, 20)
  }

  return { canvas, initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg }
}
