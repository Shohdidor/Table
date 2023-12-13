let api = "http://localhost:3000/data2"
let tbody = document . querySelector ( ".tbody" )

let inpAdd1 = document . querySelector ( ".inpAdd1" )
let inpAdd2 = document . querySelector ( ".inpAdd2" )
let inpAdd3 = document . querySelector ( ".inpAdd3" )
let btnAdd = document . querySelector ( ".btnAdd" )


async function addUser (){
    try {
        const { data } = await axios.post( api , {
            name : inpAdd1.value,
            job : inpAdd2.value,
            city : inpAdd3.value
        })
    } catch (error) {
        console.log(error);
    }
}
btnAdd.onclick = () => {
    addUser ()
}

async function getData () {
    try {
        const { data } = await axios . get ( api )
        get ( data )
    } catch (error) {
        console.log(error);
    }
}
getData()


function get ( data ){

}
