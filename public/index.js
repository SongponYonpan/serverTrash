const opt = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
    //body: JSON.stringify(data)
}

async function getData() {
    const response = await fetch('/trash', opt);
    const data =  await response.json();
    console.log(data);
  
    document.getElementById(`barTrashA/plastic`).setAttribute("style", `width: ${data.A.plastic}%;`);
    document.getElementById(`barTrashA/metal`).setAttribute("style", `width: ${data.A.metal}%;`);
    document.getElementById(`barTrashA/paper`).setAttribute("style", `width: ${data.A.paper}%;`);
    document.getElementById(`barTrashA/others`).setAttribute("style", `width: ${data.A.others}%;`);
    (data.A.plastic < 75) ? document.getElementById(`textTrashA/plastic`).innerHTML = "" : document.getElementById(`textTrashA/plastic`).innerHTML = "FULL";
    (data.A.metal < 75) ? document.getElementById(`textTrashA/metal`).innerHTML = "" : document.getElementById(`textTrashA/metal`).innerHTML = "FULL";
    (data.A.paper < 75) ? document.getElementById(`textTrashA/paper`).innerHTML = "" : document.getElementById(`textTrashA/paper`).innerHTML = "FULL";
    (data.A.others < 75) ? document.getElementById(`textTrashA/others`).innerHTML = "" : document.getElementById(`textTrashA/others`).innerHTML = "FULL";

    document.getElementById(`barTrashB/plastic`).setAttribute("style", `width: ${data.B.plastic}%;`);
    document.getElementById(`barTrashB/metal`).setAttribute("style", `width: ${data.B.metal}%;`);
    document.getElementById(`barTrashB/paper`).setAttribute("style", `width: ${data.B.paper}%;`);
    document.getElementById(`barTrashB/others`).setAttribute("style", `width: ${data.B.others}%;`);
    (data.B.plastic < 75) ? document.getElementById(`textTrashB/plastic`).innerHTML = "" : document.getElementById(`textTrashB/plastic`).innerHTML = "FULL";
    (data.B.metal < 75) ? document.getElementById(`textTrashB/metal`).innerHTML = "" : document.getElementById(`textTrashB/metal`).innerHTML = "FULL";
    (data.B.paper < 75) ? document.getElementById(`textTrashB/paper`).innerHTML = "" : document.getElementById(`textTrashB/paper`).innerHTML = "FULL";
    (data.B.others < 75) ? document.getElementById(`textTrashB/others`).innerHTML = "" : document.getElementById(`textTrashB/others`).innerHTML = "FULL";
  
    // data.forEach(element => {
    //     document.getElementById(`barTrash${element.unit}/plastic`).setAttribute("style", `width: ${element.plastic}%;`);
    //     document.getElementById(`barTrash${element.unit}/metal`).setAttribute("style", `width: ${element.metal}%;`);
    //     document.getElementById(`barTrash${element.unit}/paper`).setAttribute("style", `width: ${element.paper}%;`);
    //     document.getElementById(`barTrash${element.unit}/others`).setAttribute("style", `width: ${element.others}%;`);
    //     (element.plastic < 75) ? document.getElementById(`textTrash${element.unit}/plastic`).innerHTML = "" : document.getElementById(`textTrash${element.unit}/plastic`).innerHTML = "FULL";
    //     (element.metal < 75) ? document.getElementById(`textTrash${element.unit}/metal`).innerHTML = "" : document.getElementById(`textTrash${element.unit}/metal`).innerHTML = "FULL";
    //     (element.paper < 75) ? document.getElementById(`textTrash${element.unit}/paper`).innerHTML = "" : document.getElementById(`textTrash${element.unit}/paper`).innerHTML = "FULL";
    //     (element.others < 75) ? document.getElementById(`textTrash${element.unit}/others`).innerHTML = "" : document.getElementById(`textTrash${element.unit}/others`).innerHTML = "FULL";
    // });
}

getData();

setInterval(getData,5000);