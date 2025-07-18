var inp = document.querySelector('#inp');
var button = document.querySelector('button');
var content = document.querySelector('#content');
window.onload = () => {
    content.innerHTML = localStorage.getItem('tasks') || '';
    attach();
};
button.addEventListener('click',()=>{
    if(inp.value.trim().length != 0){
        var nw = `<div class="parent flex items-center justify-between gap-x-2">
        <div  class="box w-4 h-4 sm:w-5 sm:h-5 border border-solid border-zinc-900 rounded-sm">
        <img src="check-fill.png" class="correct object-cover opacity-0" alt="">
                    </div>
                    <h1 class="task text-sm sm:text-lg lg:text-xl font-medium " >${inp.value}</h1>
                    <img src="delete-bin-line.png"  class="dustbin opacity-40" alt="">
                    </div>`
        content.innerHTML += nw;
        inp.value = "";

    }
    localStorage.setItem('tasks', content.innerHTML);
    attach();
    })
    function attach(){
        var boxes = document.querySelectorAll('.box');
        var tasks = document.querySelectorAll('.task');
        var corrects = document.querySelectorAll('.correct');
        var dust = document.querySelectorAll('.dustbin')
        boxes.forEach((box, index) => {
            box.onclick = () => {
                tasks[index].classList.toggle('line-through');
                corrects[index].classList.toggle('opacity-0');
                localStorage.setItem('tasks', content.innerHTML);
            };
        });
        dust.forEach((bin,index)=>{
            bin.onclick = ()=>{
                bin.parentElement.remove();
                localStorage.setItem('tasks', content.innerHTML);
            };
        });
    }
