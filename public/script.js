const container = document.getElementById('container');
const mainContainer = document.getElementById('mainContainer');
const listTodo = document.getElementById('listTodo');
const inputTodo = document.getElementById('inputTodo');
const addTodo = document.getElementById('addTodo');
const formInput = document.getElementById('inputWrapper');
// const deleteBtn = document.getElementById('deleteBtn');

formInput.addEventListener('submit', function(e) {
    e.preventDefault();
});

addTodo.addEventListener('click', function (e) {
    if (inputTodo.value != "") {
        addValueTodo(inputTodo.value);
        inputTodo.value = "";
    }
});

function addValueTodo(e) {
    let listWrapper = document.createElement('div');
    listWrapper.classList.add('listWrapper');

    listWrapper.innerHTML = `                <div id="listTodo" class="mb-3 flex items-center justify-center gap-2">
    <div class="px-3 py-2 w-full bg-white rounded-lg flex items-center justify-between gap-2 drop-shadow-lg">
        <p class="max-w-none w-full">${inputTodo.value}</p>
        <button class="p-1 bg-transparent rounded-lg hover:bg-slate-100">
            <svg class="h-6 w-6 fill-yellow-300 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f2e8e8" viewBox="0 0 256 256"><path d="M184.13,147.7a8.08,8.08,0,0,0-2.54,7.89l13.52,58.54a8,8,0,0,1-11.89,8.69l-51.1-31a7.93,7.93,0,0,0-8.24,0l-51.1,31a8,8,0,0,1-11.89-8.69l13.52-58.54a8.08,8.08,0,0,0-2.54-7.89L26.76,108.35A8,8,0,0,1,31.3,94.28l59.46-5.14a8,8,0,0,0,6.67-4.88L120.66,28.9a8,8,0,0,1,14.68,0l23.23,55.36a8,8,0,0,0,6.67,4.88l59.46,5.14a8,8,0,0,1,4.54,14.07Z" opacity="0.2"></path><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg>
        </button>
    </div>
    <button id="deleteBtn" class="h-8 bg-red-500 rounded-lg drop-shadow-lg px-2 hover:bg-red-600"><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f2e8e8" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></button>
</div>`;

    let deleteBtn = listWrapper.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", function(e) {
        listWrapper.remove();
    });

    mainContainer.appendChild(listWrapper);

}

