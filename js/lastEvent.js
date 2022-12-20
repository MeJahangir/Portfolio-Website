function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add event Listener';
}

document.getElementById('event-listner').addEventListener('click', function () {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = "MD JAHANGIR ALAM JOY";
})