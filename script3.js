let api = "http://localhost:3000/data3"
let box = document . querySelector ( ".box" )

let dialogEdit = document . querySelector ( ".dialogEdit")
let inpEdit = dialogEdit.querySelector  ( ".inpEdit" )
let inpEdit2 = dialogEdit.querySelector  ( ".inpEdit2" )
let inpEdit3 = dialogEdit.querySelector  ( ".inpEdit3" )
let Back = document . querySelector ( ".Back" )
let Edit = document . querySelector ( ".Edit" )


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
        div.style.padding="1%"
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

        let btnDel = document . createElement ( "button" )
        btnDel . innerHTML = " D e l e t e "
        btnDel.onclick = () => {
            deleteUser ( elem . id )
        }
        btnDel.style.background = "lightgreen"
        btnDel.style.color="black"
        btnDel.style.cursor="pointer"
        btnDel.style.fontFamily = "san-serif"
        btnDel.style.fontWeight = "900"
        btnDel.style.border = "none"
        btnDel.style.padding="1%"
        btnDel.style.paddingInline = "2%"
        btnDel.style.borderRadius="4px"    
        btnDel.style.marginLeft="4%"

        let btnEdit = document . createElement ( "button" )
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editOpen (elem)
        }
        btnEdit.style.background = "lightgreen"
        btnEdit.style.color="black"
        btnEdit.style.cursor="pointer"
        btnEdit.style.fontFamily = "san-serif"
        btnEdit.style.fontWeight = "900"
        btnEdit.style.border = "none"
        btnEdit.style.padding="1%"
        btnEdit.style.paddingInline = "2%"
        btnEdit.style.borderRadius="4px"    
        btnEdit.style.marginLeft="4%"


        div.append ( Task , Name , City , btnDel , btnEdit)
        box.appendChild ( div )
    })
}

async function editUser ( id , user ){
    try {
        const { data } = await axios.put ( `${api}/${id}`, user )
    } catch (error) {
        console.log(error);
    }
}

Back.onclick = () => {
    dialogEdit.close()
}


function editOpen ( elem ){
    dialogEdit.showModal()
    inpEdit.value = elem.task
    inpEdit2 . value = elem.name
    inpEdit3 . value = elem . city
    Edit . onclick = () => {
        let obj = { 
            task : inpEdit . value,
            name : inpEdit2 . value,
            city : inpEdit3 . value
        }
        editUser(elem.id,obj)
        dialogEdit.close()
    }
}


async function deleteUser ( id ) {
    try {
        const { data } = await axios.delete ( `${api}/${id}`)
    } catch (error) {
        console.log(error);
    }
}