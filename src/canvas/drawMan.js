import { canvasCreator } from './canvasCreator.js'

export function drawMan (count) {
  const { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator()
  switch (count) {
    case 1:
      head()
      break
    case 2:
      body()
      break
    case 3:
      leftArm()
      break
    case 4:
      rightArm()
      break
    case 5:
      leftLeg()
      break
    case 6:
      rightLeg()
      break
    default:
      break
  }
}
