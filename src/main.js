//get the trigger for mobile nav
let navTrigger = document.getElementById('mobile-nav-trigger')

//set an event for click
navTrigger.onclick = function () {

    toggleMobileNavigation()

}

function toggleMobileNavigation() {

    //get mobile nav wrapper
    let mobileMenu = document.getElementById('mobile-nav-wrapper')

    //save the true/false state of whether or not wrapper has visibility class
    let state = mobileMenu.classList.contains('mob-nav-on')

    //check visibility
    if (state === false) {

        //add class to mobile nav wrapper to toggle visibility (turn on)
        mobileMenu.classList.add('mob-nav-on')

        //add class to mobile nav toggle
        navTrigger.classList.add('open')

    } else {

        //remove class from mobile nav wrapper to toggle visibility (turn off)
        mobileMenu.classList.remove('mob-nav-on')

        //add class to mobile nav toggle
        navTrigger.classList.remove('open')

    }
}