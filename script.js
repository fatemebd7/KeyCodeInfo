let $ = document

let title = $.querySelector('.title')
let titleWitch = $.querySelector('.title-witch')
let eventKey = $.querySelector('.key')
let eventLocation = $.querySelector('.location')
let eventwitch = $.querySelector('.witch')
let eventCode = $.querySelector('.code')

$.body.addEventListener('keydown' , function(event){{
    console.log(event);
event.preventDefault()
title.innerHTML='JavaScript Key Code ' + event.keyCode
eventKey.innerHTML=event.key
titleWitch.innerHTML = event.keyCode
eventLocation.innerHTML = event.location
eventwitch.innerHTML = event.keyCode
eventCode.innerHTML = event.code

}})