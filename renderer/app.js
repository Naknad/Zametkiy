const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {

    const title = document.getElementById("title").value;

    const text = document.getElementById("text").value;

    await window.electronAPI.saveNote({
        title,
        text
    });

    alert("Заметка сохранена");
});