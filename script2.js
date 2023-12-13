let api = "http://localhost:3000/data2"
let tbody = document . querySelector ( ".tbody" )


async function getData () {
    try {
        const { data } = await axios . get ( api )
        get ( data )
    } catch (error) {
        console.log(error);
    }
}
getData()


function get ( data ) {
    tbody.innerHTML = ""
    data.forEach ((elem) => {
        
        let tr = document . createElement ( "tr" )
        let td = document . createElement ( "td" )
        td.style.width="30%"
        td.style.borderBottom = "1px solid black"
        let Name = document.createElement ( "h3" )
        Name.innerHTML = elem.name
        td.append( Name )
        
        let td2 = document . createElement ( "td" )
        let Job = document.createElement ( "h3" )
        Job.innerHTML = elem.job
        td2.style.borderBottom = "1px solid black"
        td2.style.width="30%"
        td2.append( Job )

        let td3 = document . createElement ( "td" )
        let City = document.createElement ( "h3" )
        City.innerHTML = elem.city
        td3.style.borderBottom = "1px solid black"
        td3.style.width="9%"
        td3.append( City )


        tr.append ( td , td2 , td3 )
        tbody . appendChild ( tr )
    })
}


// Search
let inpSearch = document . querySelector ( ".inpSearch" )

let inpSelect = document . querySelector ( ".inpSelect" )

inpSearch . oninput = () => {
    serach(inpSearch.value.trim().toLowerCase())
}

async function serach(inp){
    try {
        const resp = await fetch(`${api}/?q=${inp}`)
        const neew = await resp.json()
        get(neew)
    } catch (error) {
        console.log(error);
    }
}




inpSelect . oninput = () => {
    select(inpSelect.value.trim().toLowerCase())
}

async function select(inp){
    try {
        const resp = await fetch(`${api}/?q=${inp}`)
        const neew = await resp.json()
        get(neew)
    } catch (error) {
        console.log(error);
    }
}