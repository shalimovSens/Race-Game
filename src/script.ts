(function() {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    try {
        canvas.getContext;
    } catch (err) {
        console.log(err);
        return
    }
    console.log('Все гуд');
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight; 
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;
    ctx.fillStyle = "rgb(53 54 58)";
    ctx.fillRect(0, 0, viewportWidth, viewportHeight);

    const lineWidth = 20;
    const lineHeight = 150;
    let initialPosY = viewportHeight;

    let lineCount = Math.ceil(viewportHeight / 300);
    const roadLineDrowing = setInterval(() => {
        ctx.fillStyle = "rgb(53 54 58)";
        ctx.fillRect(0, 0, viewportWidth, viewportHeight);
        if (initialPosY + lineHeight < 0) {
            // initialPosY = viewportHeight;
        }

        for (let lineNumber = 0; lineNumber < lineCount; lineNumber++) {
            ctx.fillStyle = `rgb(245 185 66)`;
            ctx.fillRect((viewportWidth / 2) - (lineWidth / 2), (initialPosY + 300 * lineNumber), lineWidth, lineHeight);
        }
        console.log(initialPosY)
        initialPosY -= 15;
    }, 40)

})()