export default function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = formattedTime;
  }
  