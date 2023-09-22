var selectedNumber = 0;
var rating = document.getElementsByClassName("rating card")[0];
trapFocus(rating);

function openThanksPage() {
    if (selectedNumber == 0) {
        alert("Please give us rating before submiting!");
        return;
    }

    document.getElementsByClassName("selected-rating")[0].innerHTML = selectedNumber;

    document.getElementsByClassName("rating")[0].style.display = "none";
    document.getElementsByClassName("thanks")[0].style.display = "grid";
}

function saveNumber(number) {
    selectedNumber = number;
}

function handleKeyPress(event, number) {
    if (event.key === 'Enter' || event.key === ' ') {
        saveNumber(number);
        event.preventDefault();
    }
}

function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    });
}