const format = () => {
    let input = document.getElementById("input").value;
    let slString = input.replaceAll(/[\n|\s]/gm, "")
    let outString = ""
    let indentCounter = 0
    let indentRate = 2
    let newline = true
    for (let i = 0; i < slString.length; i++) {
        if (newline) {
            for (let j = 0; j < indentCounter * indentRate; j++) {
                outString += " "
            }
            newline = false
        }
        outString += slString[i]
        if (slString[i] == "{") {
            indentCounter++;
            newline = true
            outString += "\n"
        }
        if (slString[i] == "[") {
            if (slString[i + 1] != "]") {
                indentCounter++;
                newline = true
                outString += "\n"
            }

        }
        if (slString[i] == "}" || slString[i] == "]") {
            if (slString[i + 1] != ",") {
                indentCounter--;
                newline = true
                outString += "\n"
            }

        }
        if (slString[i] == ",") {
            newline = true
            outString += "\n"
        }
        if (slString[i + 1] && !slString[i].match(/[{|}|\[|\]]/gm) && slString[i + 1].match(/[\]|}]/gm)) {
            indentCounter--;
            newline = true
            outString += "\n"
        }


    }

    // set output field
    document.getElementById("output").innerHTML = outString;
}