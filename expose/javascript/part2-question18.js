function Second(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(Second, 1000);