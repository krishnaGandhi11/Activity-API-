let url = "http://universities.hipolabs.com/search?name=India&";
let btn = document.querySelector("button");
let para = document.querySelector("p");
let inp = document.querySelector("input");
let list = document.querySelector("#list")

btn.addEventListener("click", async () => {
    let country = inp.value;
    let collArray = await getCollesges(country);
    show(collArray);
})

function show(collArray){
    for(col of collArray){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollesges(country) {
    try{
        let res = await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }
    catch (e){
        console.log("Error Caught ",e);
        return [];
    }
}





// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let inp = document.querySelector("input");
// let list = document.querySelector("#list")

// btn.addEventListener("click", async () => {
//     let country = inp.value;
//     let collArray = await getCollesges(country);
//     show(collArray);
// })

// function show(collArray){
//     for(col of collArray){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getCollesges(country) {
//     try{
//         let res = await axios.get(url+country);
//         // console.log(res.data);
//         return res.data;
//     }
//     catch (e){
//         console.log("Error Caught ",e);
//         return [];
//     }
// }