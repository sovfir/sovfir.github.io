function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = formattedTime;
  }
  
  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);


// Получаем элементы
var windowElement = document.getElementById("myWindow");
var header = document.getElementById("header");
var projectWindow = document.getElementById("projects");
var headerProjects = document.getElementById("headerProjects");

// Переменные для хранения координат
var offsetX = 0;
var offsetY = 0;
var isDragging = false;

// Обработчики событий для мыши
header.addEventListener("mousedown", startDragging);
document.addEventListener("mouseup", stopDragging);
document.addEventListener("mousemove", dragWindow);

// Функции для перетаскивания
function startDragging(e) {
    isDragging = true;
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
}

function stopDragging() {
    isDragging = false;
}

function dragWindow(e) {
    if (isDragging) {
        windowElement.style.left = e.clientX - offsetX + "px";
        windowElement.style.top = e.clientY - offsetY + "px";
    }
}

// Закрытие окна
function closeWindow() {
    windowElement.style.display = "none";
}

// открытие окна
function openWindow() {
    windowElement.style.display = "block";
}




// Переменные для второго окна
var offsetXProjects = 0;
var offsetYProjects = 0;
var isDraggingProjects = false;

function stopDraggingProjects() {
    isDraggingProjects = false;
}


// Обработчики событий для второго окна
headerProjects.addEventListener("mousedown", startDraggingProjects);
document.addEventListener("mousemove", dragProjectWindow);
document.addEventListener("mouseup", stopDraggingProjects);


// Функции для второго окна
function startDraggingProjects(e) {
    isDraggingProjects = true;
    offsetXProjects = e.clientX - projectWindow.getBoundingClientRect().left;
    offsetYProjects = e.clientY - projectWindow.getBoundingClientRect().top;
}

function dragProjectWindow(e) {
    if (isDraggingProjects) {
        projectWindow.style.left = e.clientX - offsetXProjects + "px";
        projectWindow.style.top = e.clientY - offsetYProjects + "px";
    }
}

// Закрытие второго окна
function closeProjectWindow() {
    projectWindow.style.display = "none";
}

// Открытие второго окна
function openProjectWindow() {
    projectWindow.style.display = "block";
}

// Обработчики событий для кнопок открытия окон
const openMainWindowButton = document.getElementById("mycomputer");
openMainWindowButton.addEventListener("click", openWindow);

const openProjectWindowButton = document.getElementById("bin");
openProjectWindowButton.addEventListener("click", openProjectWindow);
