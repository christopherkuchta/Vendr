  $('intelligence-link-1').on('click', function (evt) {
    $('.pricing-select-1').triggerHandler('click');
    evt.preventDefault();
  });
  
    $('intelligence-link-2').on('click', function (evt) {
    $('.pricing-select-2').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('intelligence-link-3').on('click', function (evt) {
    $('.pricing-select-3').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('intelligence-link-4').on('click', function (evt) {
    $('.pricing-select-4').triggerHandler('click');
    evt.preventDefault();
  });
  

document.addEventListener("click", function (event) {
  // Check if clicked element or its parent has the data-dropdown attribute
  let dropdownElement = event.target.hasAttribute("data-dropdown")
    ? event.target
    : event.target.closest("[data-dropdown]");

  if (dropdownElement) {
    // Get the value of the data-dropdown attribute
    const dropdownValue = dropdownElement.getAttribute("data-dropdown");

    // Find the matching tab element using the data-w-tab attribute
    const tabElement = document.querySelector(
      `[data-w-tab="${dropdownValue}"]`
    );

    // If a matching tab is found, trigger a click on it
    if (tabElement) {
      tabElement.click();
    }

    // Extract text directly from the dropdown element
    const dropdownText = dropdownElement.textContent.trim();

    // Find the element with .replace-text class
    const replaceTextElement = document.querySelector(".replace-text");

    // If found, replace its text content with the text extracted from data-dropdown element
    if (replaceTextElement) {
      replaceTextElement.textContent = dropdownText;
    }
  }
});

$("[data-dropdown]").click(function () {
  //$(“.pricing-mobile-dropdown").css("z-index", "");
  $(".pricing-mobile-dropdown").triggerHandler("w-close.w-dropdown");
});
