// selecting html elements
let button = document.querySelector('.button');
let displayArea = document.getElementById('root');
let colorDisplay = document.querySelector('.color-code');


// displays color onto screen inlcuding hexcolor
let start = () => {
    button.addEventListener('click', () => {
        // randomColor generate with heximal string value 
        let colorArray = Math.floor(Math.random() * 16777215).toString(16);

        displayArea.style.backgroundColor = `#${colorArray}`;
        colorDisplay.innerHTML = `The code for this color is: <br><br> #${colorArray}`;

        // if backgroundcolor is black change the color to white
        if (colorArray === `000` || colorArray === `000000`) {
            let title = document.querySelector(`.header`);
            let resetButton = document.getElementById(`reset`);

            // change the color to white if background is black
            title.style.color = `#fff`;
            resetButton.style.color = `#fff`;
            colorDisplay.style.color = `#fff`;
            button.style.color = `#fff`;
        }

        // check to see if colorDisplay is hidden or not
        if (colorDisplay.style.visibility === `hidden`) {
            colorDisplay.style.visibility = `visible`;
        }

        restart();
    })
}


// restart function
let restart = () => {
    //get reset button
    let restart = document.querySelector(`#reset`);

    // if click on restart set background color to white and color-code display to hidden
    restart.addEventListener(`click`, () => {
        colorDisplay.style.visibility = 'hidden';
        displayArea.style.backgroundColor = `#fff`;
    });
}

// start application
start();