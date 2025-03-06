const instrumentals = ["balaban", "tar", "saz", "zurna"];

const containerEl = document.querySelector(".container");

instrumentals.forEach((instrumental) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.style.backgroundImage = "url(image/" + instrumental + ".png)";
    btnEl.innerHTML = instrumental
    const audioEl = document.createElement("audio");
    audioEl.src = "sound/" + instrumental + ".mp3";

    containerEl.appendChild(btnEl);
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", () => {
        audioEl.play();
    });
    btnEl.addEventListener("mouseout", () => {
        audioEl.pause();
        audioEl.currentTime = 0; // Səsi sıfırdan başlatmaq üçün
    });
    window.addEventListener("keydown", (event) => {
        if (event.key === instrumental.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)"
            }, 100)
        }
    })
})