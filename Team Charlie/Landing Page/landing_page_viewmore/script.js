//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any Key and release

inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user char to lowercase and return only those word/sentence which start with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        console.log(emptyArray);
        emptyArray = emptyArray.map((data) => {
            return (data =
                '<a href="../../companyPages/' +
                data +
                '.html"><li>' +
                data +
                "</li></a>");
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocomplete Box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute to all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete Box
    }
};

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; // pasing the user selected list item data in textifeild
    searchWrapper.classList.remove("active"); //hide autocomplete Box
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = "Not Found :(";
    } else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}