const submit = document.getElementById("submit-box");
var selector = document.getElementById("tent-numbers");
submit.addEventListener("click", e => {
  e.preventDefault;
  getSelectedOption();
});
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TO FILTER THE ARRAY
const filterArray = (arr, value) => arr.filter(elem => elem != value);

// TO HANDLE THE DROPDOWN
function getSelectedOption() {
  var value = selector.options[selector.selectedIndex].value;
  if (value) {
    // console.log(arr);
    arr = filterArray(arr, value);
    buildDropDown(arr);
    // console.log(arr);
  } else {
    alert("Please select a tent number form the dropdown");
  }
}

// TO BUILD THE DROPDOWN

function buildDropDown(filteredNumbersArray) {
  selector.innerHTML = "";
  var firstChild = ` <option value="">--Tent Number--</option>`;
  selector.innerHTML += firstChild;
  var row;
  if (filteredNumbersArray.length > 0) {
    filteredNumbersArray.forEach(element => {
      row = `<option value="${element}">number ${element}</option>`;
      selector.innerHTML += row;
    });
  } else {
    row = ` <option value="">No Tent available.....</option>`;
    selector.innerHTML += row;
  }
}
