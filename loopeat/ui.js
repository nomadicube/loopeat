document.getElementById('stop').addEventListener('click', () => {
    console.log("clicked");
    document.querySelectorAll('audio').forEach(el => el.stop());
});

function playSample(sample) {

    const audio = new Audio("samples/" + sample + ".wav");
    audio.cloneNode().play();
    console.log("fun " + sample);
}

function addNewbutton(parent, buttonType, buttonValue) {

    let div = document.createElement('div');
    div.className = buttonType;
    div.id = buttonValue;
    div.textContent = buttonValue;

    if (buttonType === "sample-button") {
        div.onclick = function () {
            playSample(buttonValue);
        }
    }

    parent.appendChild(div);
}

function addNewRow(parent, rowObject) {

    rowDiv = document.createElement('div');
    rowDiv.className = "sample-row";
    rowDiv.id = rowObject.type;
    rowDiv.textContent = rowObject.type;
    parent.appendChild(rowDiv);

    return rowDiv;
}

const instruments = [
    {
        type: "drums",
        samples: [
            "kick",
            "kickloop",
        ]
    },
    {
        type: "piano",
        samples: [
            "piano001",
        ]
    },

]

const sampleGrid = document.getElementById('sample-grid');

const minButtons = 8;
const minRows = 5;
const instrumentRows = instruments.length;
const instrumentRowsMissing = minRows - instrumentRows;

// add instrument rows and sample buttons
for (row of instruments) {
    let addedRow = addNewRow(sampleGrid, row);
    let buttonsMissing = minButtons - row.samples.length;

    for (let sample in row.samples) {
        addNewbutton(addedRow, "sample-button", row.samples[sample]);
    }
    for (let i = 0; i < buttonsMissing; i++) {
        addNewbutton(addedRow, "empty-button", null);
    }
}

// add empty rows
for (let i = 0; i < instrumentRowsMissing; i++) {
    let addedRow = addNewRow(sampleGrid, { type: "empty" });

    for (let i = 0; i < minButtons; i++) {
        addNewbutton(addedRow, "empty-button", null);
    }
}