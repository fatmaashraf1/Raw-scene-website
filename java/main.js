function changeMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item-header'),
    descriptionItems = document.querySelectorAll('.item-description'),
    activeDelay = .76,
    interval = 5000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => { // Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: (e) => { // Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
            dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
            if (index === dataIndex) { // Add active class to corresponding slide
                item.classList.add('active');
            }
        })
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
    },
    reset: () => { // Remove active classes
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds;

        items.forEach(item => {
            const children = item.childNodes; // .vertical-part(s)
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => { // iterate through .vertical-part(s) and style b element
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                    count++;
                }
            })
        })
    },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
//farida emad ..................

function displayShow() {
    document.getElementById("fetrailer1").innerHTML = "<video src='../Media/fetrailer1.mp4' controls width=400px/>";
}

function displayShow2() {
    document.getElementById("fetrailer2").innerHTML = "<video src='../Media/fetrailer2.mp4' controls width=400px/>";
}

function displayShow3() {
    document.getElementById("fetrailer3").innerHTML = "<video src='../Media/fetrailer3.mp4' controls width=400px/>";
}

function displayShow4() {
    document.getElementById("fetrailer4").innerHTML = "<video src='../Media/fetrailer4.mp4' controls width=400px/>";
}

function displayShow5() {
    document.getElementById("fetrailer5").innerHTML = "<video src='../Media/fetrailer5.mp4' controls width=400px/>";
}

function displayShow6() {
    document.getElementById("fetrailer6").innerHTML = "<video src='../Media/fetrailer6.mp4' controls width=400px/>";
}

function displayShow7() {
    document.getElementById("fetrailer7").innerHTML = "<video src='../Media/fetrailer7.mp4' controls width=400px/>";
}

function displayShow8() {
    document.getElementById("fetrailer8").innerHTML = "<video src='../Media/fetrailer8.mp4' controls width=400px/>";
}


var video = document.getElementById('fevideo_background');
var wrapper = document.getElementById('femalkst');
var image = document.getElementById('feimage_background');
video.addEventListener('ended', function() {
    video.style.display = 'none';
    image.style.display = 'inline';
    alert("Click on actor to see his biography");
}, false);

function changeMode() {
    var element = document.body;
    element.classList.toggle("light-mode");

}

function kaiframe() {
    document.getElementById("shertheme").innerHTML = "<iframe src=\"cool.html\" height=\"400\" width=\"1200\" ></iframe>";
}

function changeMode() {
    var element = document.body;
    element.classList.toggle("light-mode");


}

function changeMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
//end farida emad...................