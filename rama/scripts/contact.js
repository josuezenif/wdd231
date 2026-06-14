const stamp = document.querySelector('#stamp');
const currentTime = new Date().toLocaleString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

stamp.innerHTML = currentTime;
