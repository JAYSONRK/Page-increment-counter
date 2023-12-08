const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;

        if(startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10)
        }

    }

    updateCounter()
})


// 3 methods to conver string to Number;

// Using the unary plus operator:
// var n = +structuredClone;

// The number constructor:
// var n = Number(str);

// The parseFloat function:
// var n = parseFloat(str);