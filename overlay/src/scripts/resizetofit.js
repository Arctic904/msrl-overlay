export const resizeToFit = (textElement, maxWidth) => {
    try{
        if(textElement.getComputedTextLength() > maxWidth){
            var fontSize = parseFloat(window.getComputedStyle(textElement).getPropertyValue("font-size"));
            fontSize = fontSize - 1
            textElement.style.fontSize = fontSize

            if(textElement.getComputedTextLength() > maxWidth){
                resizeToFit(textElement, maxWidth)
            }
        }
    }
    catch{
        console.log("Resize error")
    }
}