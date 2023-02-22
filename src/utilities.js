//Define our labelmap
const labelMap = {
    1:{name: "car", color: 'green'},
}

//Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            //set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 5
            ctx.fillStyle = 'blue'
            ctx.font = '30px Arial'

            //Draw
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
            ctx.strokeRect(x*imgWidth, y*imgHeight, width*imgWidth, height*imgHeight);

            console.log(x*imgWidth, y*imgHeight, width*imgWidth, height*imgHeight)
        }
    }
}