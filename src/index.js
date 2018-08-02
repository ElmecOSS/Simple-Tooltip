import Vue from 'vue'
export default Vue.directive('tooltip', {
  bind: function (el, binding) {
    createTooltip(el, binding)
  },
  update: function (el, binding) {
    let oldTooltipElements = el.querySelectorAll('.directive-tooltip-selector')
    el.removeChild(oldTooltipElements[0])
    el.removeChild(oldTooltipElements[1])
    createTooltip(el, binding)
  }
})
function createTooltip(el, binding) {
  el.style.position = 'relative'
  let tooltipBox = document.createElement('div')
  let tooltipArrow = document.createElement('div')
  let tooltipText = document.createElement('div')
  tooltipText.innerHTML = binding.value
  switch (binding.arg) {
    case 'bottom':
      tooltipBox.style.top = '100%'
      tooltipBox.style.left = '50%'
      tooltipBox.style.transform = 'translate(-50%, 10px)'
      tooltipArrow.style.top = '100%'
      tooltipArrow.style.left = '50%'
      tooltipArrow.style.borderColor = 'transparent transparent black transparent'
      tooltipArrow.style.marginLeft = '-5px'
      break
    case 'left':
      tooltipBox.style.right = '100%'
      tooltipBox.style.top = '50%'
      tooltipBox.style.transform = 'translate(-10px, -50%)'
      tooltipArrow.style.right = '100%'
      tooltipArrow.style.top = '50%'
      tooltipArrow.style.borderColor = 'transparent transparent transparent black'
      tooltipArrow.style.marginTop = '-5px'
      break
    case 'right':
      tooltipBox.style.left = '100%'
      tooltipBox.style.top = '50%'
      tooltipBox.style.transform = 'translate(10px, -50%)'
      tooltipArrow.style.left = '100%'
      tooltipArrow.style.top = '50%'
      tooltipArrow.style.borderColor = 'transparent black transparent transparent'
      tooltipArrow.style.marginTop = '-5px'
      break
    default:
      tooltipBox.style.bottom = '100%'
      tooltipBox.style.left = '50%'
      tooltipBox.style.transform = 'translate(-50%, -10px)'
      tooltipArrow.style.bottom = '100%'
      tooltipArrow.style.left = '50%'
      tooltipArrow.style.borderColor = 'black transparent transparent transparent'
      tooltipArrow.style.marginLeft = '-5px'
      break
  }
  tooltipBox.style.position = 'absolute'
  tooltipBox.style.zIndex = '90'
  tooltipBox.style.backgroundColor = 'black'
  tooltipBox.style.color = '#fff'
  tooltipBox.style.textAlign = 'center'
  tooltipBox.style.padding = '5px 20px 5px 20px'
  tooltipBox.style.borderRadius = '6px'
  tooltipBox.style.visibility = 'hidden'

  tooltipText.style.fontSize = '12px'

  tooltipArrow.style.content = ''
  tooltipArrow.style.position = 'absolute'
  tooltipArrow.style.zIndex = '90'
  tooltipArrow.style.borderWidth = '5px'
  tooltipArrow.style.borderStyle = 'solid'
  tooltipArrow.style.visibility = 'hidden'
  tooltipBox.appendChild(tooltipText)
  tooltipBox.classList.add('directive-tooltip-selector')
  tooltipArrow.classList.add('directive-tooltip-selector')
  el.appendChild(tooltipBox)
  el.appendChild(tooltipArrow)
  el.onmouseover = function () {
    tooltipBox.style.visibility = 'visible'
    tooltipArrow.style.visibility = 'visible'
  }
  el.onmouseleave = function () {
    tooltipBox.style.visibility = 'hidden'
    tooltipArrow.style.visibility = 'hidden'
  }
}
