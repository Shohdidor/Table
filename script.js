let api = "http://localhost:3000/data"
let box = document . querySelector ( ".box" )

async function getData () {
    try {
        const { data } = await axios . get ( api )
        get ( data )
    } catch (error) {
        console.log(error);
    }
}
getData()

let dialog = document.querySelector ( ".dialog" )


function get ( data ) {
    box.innerHTML = ""
    data.forEach ((elem) => {

        let div = document . createElement ( "div" )
        div.style.color = "greenyellow"
        div.style.borderRadius="2px"
        div.style.background = "rgba(126, 126, 236, 0.989)"
        div.style.width = "40%"
        div.style.marginLeft="2%"
        div.style.marginTop="2%"
        div.style.borderRadius="9px"
        let Task = document.createElement ( "h3" )
        Task.innerHTML = elem.task
        Task.style.marginLeft = "4%"

        let Name = document.createElement ( "h3" )
        Name.innerHTML = elem.name
        Name.style.marginLeft = "4%"
        Name.style.marginTop="-3%"
        Name.style.fontSize = "100%"

        let City = document.createElement ( "h3" )
        City.innerHTML = elem.city
        City.style.marginLeft="77%"

        let btnInfo = document . createElement ( "button" )
        btnInfo.innerHTML = "I n f o"
        btnInfo.style.padding="1%"
        btnInfo.style.paddingInline="5%"
        btnInfo.style.background="purple"
        btnInfo.style.color="white"
        btnInfo.style.border="none"
        btnInfo.style.borderTopRightRadius="5px"
        btnInfo.style.fontWeight="700"
        btnInfo.style.cursor="pointer"
        btnInfo.onclick = () => {
            InfoOpen (elem)
        }

        div.append ( Task , Name , City , btnInfo)
        box.appendChild ( div )
    })
}



let hh1 = document . querySelector ( ".hh1" )
let hh2 = document . querySelector ( ".hh2" )
let hh3 = document . querySelector ( ".hh3" )

let Back = document . querySelector ( ".Back" )



async function InfoUser( id , user ){
    try {
        const { data } = await axios.put(`${api}/${id}`,user)
    } catch (error) {
        console.log(error);
    }
}

function InfoOpen (elem) {
    dialog . showModal ()
    hh1.innerHTML = elem.task
    hh2.innerHTML = elem.name
    hh3.innerHTML = elem.city
    Back.onclick = () => {
        dialog.close()
    }
}