
// input
var totalCost = document.getElementById('totalCost');
var totalDiscount = document.getElementById('totalDiscount');
var noDiscount = document.getElementById('noDiscount');

// radio buttons
var procurement = document.getElementById('procurement');
var intelligence1 = document.getElementById('intelligence1');
var intelligence2 = document.getElementById('intelligence2');
var intelligence3 = document.getElementById('intelligence3');
var intelligence4 = document.getElementById('intelligence4');
var advocacyProgram = document.getElementById('advocacyProgram');
var fastSigning = document.getElementById('fastSigning');
var redLines = document.getElementById('redLines');
var twoYear = document.getElementById('twoYear');
var threeYear = document.getElementById('threeYear');
var negotiations1 = document.getElementById('negotiations1');
var negotiations2 = document.getElementById('negotiations2');
var negotiations3 = document.getElementById('negotiations3');
var negotiations4 = document.getElementById('negotiations4');
var negotiations5 = document.getElementById('negotiations5');
var negotiations6 = document.getElementById('negotiations6');

var procurementRemove = document.getElementById('procurementRemove');
var intelligenceRemove = document.getElementById('intelligenceRemove');
var negotiationsRemove = document.getElementById('negotiationsRemove');

// format number to USD
function toUSD(number) {
  const usd = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(number);
  return `${usd}/year`;
}

// format usd to number
const toNumber = (usd) => +usd.replace('/year', '').replace(/\$|,/g, '');

// set defaults
totalCost.value = toUSD(0);

// calculation
function calculateChange() {
  totalCost.value = 0;
  noDiscount.value = toUSD(0);

  if (procurement.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 3000);
  if (intelligence1.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 35000);
  if (intelligence2.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 55000);
  if (intelligence3.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 75000);
  if (intelligence4.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 95000);
  if (negotiations1.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 10000);
  if (negotiations2.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 20000);
  if (negotiations3.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 30000);
  if (negotiations4.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 40000);
  if (negotiations5.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 50000);
  if (negotiations6.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) + 60000);
  if (negotiationsRemove.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) - 0);
  if (intelligenceRemove.checked)
    totalCost.value = toUSD(toNumber(totalCost.value) - 0);
    
  if (fastSigning.checked) calculateFastSigning();
  if (advocacyProgram.checked) calculateAdvocacyProgram();
  if (redLines.checked) calculateRedLines();
  if (twoYear.checked) calculateTwoYearDiscount();
  if (threeYear.checked) calculateThreeYearDiscount();
}

// call functions
procurement.onclick = () => calculateChange();
procurementRemove.onclick = () => calculateChange();
intelligence1.onclick = () => calculateChange();
intelligence2.onclick = () => calculateChange();
intelligence3.onclick = () => calculateChange();
intelligence4.onclick = () => calculateChange();
intelligenceRemove.onclick = () => calculateChange();
advocacyProgram.onchange = () => calculateChange();
negotiations1.onclick = () => calculateChange();
negotiations2.onclick = () => calculateChange();
negotiations3.onclick = () => calculateChange();
negotiations4.onclick = () => calculateChange();
negotiations5.onclick = () => calculateChange();
negotiations6.onclick = () => calculateChange();
negotiationsRemove.onclick = () => calculateChange();
fastSigning.onchange = () => calculateFastSigning();
advocacyProgram.onclick = () => calculateAdvocacyProgram();
redLines.onclick = () => calculateRedLines();
twoYear.onclick = () => calculateTwoYearDiscount();
threeYear.onclick = () => calculateThreeYearDiscount();

// discount calculations
function calculateFastSigning() {
  const prevCostTotal = toNumber(totalCost.value);
  const discount = prevCostTotal / 20;
  const prevDiscount = toNumber(totalDiscount.value);

  if (fastSigning.checked) {
    totalDiscount.value = discount;
    noDiscount.value = toUSD(prevCostTotal);
    totalCost.value = toUSD(prevCostTotal - discount);
  } else {
    totalCost.value = toUSD(prevCostTotal + prevDiscount);
  }
}

function calculateAdvocacyProgram() {
  const prevCostTotal = toNumber(totalCost.value);
  const discount = prevCostTotal / 20;
  const prevDiscount = toNumber(totalDiscount.value);

  if (advocacyProgram.checked) {
    totalDiscount.value = discount;
    noDiscount.value = toUSD(prevCostTotal);
    totalCost.value = toUSD(prevCostTotal - discount);
  } else {
    totalCost.value = toUSD(prevCostTotal + prevDiscount);
  }
}

function calculateRedLines() {
  const prevCostTotal = toNumber(totalCost.value);
  const discount = prevCostTotal / 20;
  const prevDiscount = toNumber(totalDiscount.value);

  if (redLines.checked) {
    totalDiscount.value = discount;
    noDiscount.value = toUSD(prevCostTotal);
    totalCost.value = toUSD(prevCostTotal - discount);
  } else {
    totalCost.value = toUSD(prevCostTotal + prevDiscount);
  }
}

function calculateTwoYearDiscount() {
  const prevCostTotal = toNumber(totalCost.value);
  const discount = prevCostTotal * 0.15;
  const prevDiscount = toNumber(totalDiscount.value);

  if (twoYear.checked) {
    totalDiscount.value = discount;
    noDiscount.value = toUSD(prevCostTotal);
    totalCost.value = toUSD(prevCostTotal - discount);
  } else {
    totalCost.value = toUSD(prevCostTotal + prevDiscount);
  }
}

function calculateThreeYearDiscount() {
  const prevCostTotal = toNumber(totalCost.value);
  const discount = prevCostTotal * 0.2;
  const prevDiscount = toNumber(totalDiscount.value);

  if (threeYear.checked) {
    totalDiscount.value = discount;
    noDiscount.value = toUSD(prevCostTotal);
    totalCost.value = toUSD(prevCostTotal - discount);
  } else {
    totalCost.value = toUSD(prevCostTotal + prevDiscount);
  }
}


$(document).ready(function () {
  var $checkboxWrapper = $('div.available-discounts');

  $checkboxWrapper.find('input[type=checkbox]').on('change', function () {
    if ($checkboxWrapper.find('input[type=checkbox]:checked').length > 1) {
      $(this).prop('checked', false).change();
    }

    if ($checkboxWrapper.find('input[type=checkbox]:checked').length === 1) {
      $checkboxWrapper
        .find('input[type=checkbox]:not(:checked)')
        .closest('label')
        .css({ opacity: '0.5', 'pointer-events': 'none' });
    } else {
      $checkboxWrapper.find('label').css({ opacity: '', 'pointer-events': '' });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pricing-base-col-cart').forEach((trigger) => {
    trigger.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        document
          .querySelectorAll('.pricing-base-col-cart')
          .forEach((target) => target.classList.add('overflow-auto'));
      } else {
        document
          .querySelectorAll('.pricing-base-col-cart')
          .forEach((target) => target.classList.remove('overflow-auto'));
      }
    });
  });
});

// Mobile dropdown click trigger for tabs

  $('.intelligence-link-1').on('click', function (evt) {
    $('.intelligence-select-1').triggerHandler('click');
    evt.preventDefault();
  });
  
    $('.intelligence-link-2').on('click', function (evt) {
    $('.intelligence-select-2').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('.intelligence-link-3').on('click', function (evt) {
    $('.intelligence-select-3').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('.intelligence-link-4').on('click', function (evt) {
    $('.intelligence-select-4').triggerHandler('click');
    evt.preventDefault();
  });



  $('.negotiations-link-1').on('click', function (evt) {
    $('.negotiations-select-1').triggerHandler('click');
    evt.preventDefault();
  });
  
    $('.negotiations-link-2').on('click', function (evt) {
    $('.negotiations-select-2').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('.negotiations-link-3').on('click', function (evt) {
    $('.negotiations-select-3').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('.negotiations-link-4').on('click', function (evt) {
    $('.negotiations-select-4').triggerHandler('click');
    evt.preventDefault();
  });
  
      $('.negotiations-link-5').on('click', function (evt) {
    $('.negotiations-select-5').triggerHandler('click');
    evt.preventDefault();
  });
  
    
      $('.negotiations-link-6').on('click', function (evt) {
    $('.negotiations-select-6').triggerHandler('click');
    evt.preventDefault();
  });
  


// Mobile dropdown custom dropdown - active selection

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.intelligence-link-1').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.intelligence-link-1').forEach(target => target.classList.add('is-first'));
    document.querySelectorAll('.intelligence-link-2').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-3').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-4').forEach(target => target.classList.remove('is-first')); 
    });
 });

 document.querySelectorAll('.intelligence-link-2').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.intelligence-link-2').forEach(target => target.classList.add('is-first'));
    document.querySelectorAll('.intelligence-link-1').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-3').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-4').forEach(target => target.classList.remove('is-first')); 
    });
 });

 document.querySelectorAll('.intelligence-link-3').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.intelligence-link-3').forEach(target => target.classList.add('is-first'));
    document.querySelectorAll('.intelligence-link-1').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-2').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-4').forEach(target => target.classList.remove('is-first')); 
    });
 });

 document.querySelectorAll('.intelligence-link-4').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.intelligence-link-4').forEach(target => target.classList.add('is-first'));
    document.querySelectorAll('.intelligence-link-1').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-2').forEach(target => target.classList.remove('is-first'));
    document.querySelectorAll('.intelligence-link-3').forEach(target => target.classList.remove('is-first')); 
    });
 });
});


document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.negotiations-link-1').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.remove('is-active')); 
    });
 });

 document.querySelectorAll('.negotiations-link-2').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.remove('is-active')); 
    });
 });

 document.querySelectorAll('.negotiations-link-3').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.remove('is-active')); 
    });
 });

 document.querySelectorAll('.negotiations-link-4').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.remove('is-active')); 
    });
 });

 document.querySelectorAll('.negotiations-link-5').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.remove('is-active')); 
    });
 });

 document.querySelectorAll('.negotiations-link-6').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.negotiations-link-6').forEach(target => target.classList.add('is-active'));
    document.querySelectorAll('.negotiations-link-1').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-2').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-3').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-4').forEach(target => target.classList.remove('is-active'));
    document.querySelectorAll('.negotiations-link-5').forEach(target => target.classList.remove('is-active')); 
    });
 });
});
