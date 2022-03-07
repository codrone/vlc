const txt1 = document.getElementById('text');
const slog = "You want it, we got you covered";
let index = 1;
setInterval(write, 200);
function write(){
    txt1.innerHTML = slog.slice(0,index);
    index++;
    if (index > slog.length){
        index = 1;
    }
}