let divContainer=document.createElement("div")
divContainer.style.display="flex"
divContainer.style.flexDirection="column"
divContainer.style.alignItems="center"
divContainer.style.backgroundColor="yellow"
divContainer.style.padding="30px"
divContainer.style.width="fit-content"


document.body.appendChild(divContainer)

let imgTag=document.createElement("img")
imgTag.setAttribute("src","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
imgTag.style.width="500px"
divContainer.appendChild(imgTag)

let pTag=document.createElement("p")
pTag.textContent="This is a beutiful image with blue lake and green Tree. which is written in the p tag"
pTag.style.color="blue"
pTag.style.backgroundColor="lightgreen"
pTag.style.textShadow="2px 2px 3px lightgreen"


let spanTag=document.createElement("span")
spanTag.textContent="this is span tag which is created by DOM"
spanTag.style.backgroundColor="pink"
spanTag.style.color="red"
divContainer.append(pTag,spanTag)
