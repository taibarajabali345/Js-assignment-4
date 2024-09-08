// const btn = document.getElementById('button');

// async function changeColor() {
//     let tab = await chrome.tabs.query({ active: true, currentWindow: true });
//     console.log(tab);
//     await chrome.scripting.executeScript({
//         target: { tabId: tab[0].id },
//         function: pickColor,
//     });
// }

// async function pickColor() {
//     try {
//         const eyeDropper = new EyeDropper();
//         const selectedColor = await eyeDropper.open();
//         console.log(selectedColor);
//     } catch (err) {
//         console.error(err);
//     }
// }

const btn = document.getElementById('button');

btn.addEventListener('click', async () => {
    try {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (!tab) {
            console.error('No active tab found.');
            return;
        }

        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: pickColor,
        });
    } catch (error) {
        console.error('Error executing script:', error);
    }
});

async function pickColor() {
    try {
        const eyeDropper = new EyeDropper();
        const selectedColor = await eyeDropper.open();
        console.log(selectedColor);
    } catch (err) {
        console.error('Error picking color:', err);
    }
}
