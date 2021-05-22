(function () {
  const nodeList = document.getElementsByName('generator')
  if (!nodeList) return
  if (!nodeList[0]) return
  const generator = nodeList[0].content
  const message = generator === "STUDIO" ? 'STUDIO' : 'others'
  chrome.runtime.sendMessage(message)
})()
