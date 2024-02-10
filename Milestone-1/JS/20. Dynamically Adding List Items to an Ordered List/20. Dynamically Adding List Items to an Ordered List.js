document.addEventListener("DOMContentLoaded", function () {
    const learningList = [
        "Item 1: HTML and Semantics",
        "Item 2: Starting with CSS",
        "Item 3: Working Template",
        "Item 4: Mobile responsive webpages",
        "Item 5:Grid and Flex-box in CSS",
        "Item 6:Projects using HTML & CSS",
        "Item 7: Getting Started with JavaScript",
        "Item 8:Getting Started with JavaScript",
        "Item 9:Advance JavaScript",
        "Item 10:Working with DOM",
        "Item 11: Making Projects using HTML, CSS and JavaScript",
        "Item 12:Understanding Fundamental of Computer Science",
        "Item 13:Getting Started with Database",
        "Item 14:Understanding the Database",
        "Item 15: Starting with NodeJS and Express",
        "Item 16:Understanding React and its Fundamentals",
        "Item 17:Understanding Hooks and Routers",
        "Item 18:Starting and Completing Full Fledge Projects",
    ];

    const addItemBtn = document.getElementById("addItemBtn");
    const learningListElement = document.getElementById("learningList");
    const messageElement = document.getElementById("message");
    let currentItemIndex = 0;

    function addNextItem() {
        if (currentItemIndex < learningList.length) {
            const listItem = document.createElement("li");
            listItem.textContent = learningList[currentItemIndex];
            learningListElement.appendChild(listItem);
            currentItemIndex++;

            if (currentItemIndex === learningList.length) {
                addItemBtn.disabled = true;
                messageElement.textContent = "All items have been added.";
            }
        }
    }

    addItemBtn.addEventListener("click", addNextItem);

    // Initial call to add the first item
    addNextItem();
});

    //     ,
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //    " ",
    //    " ",
    //    " ",
    //    "".
    //   "",
    //   "  ",
    //     "",
    //    "",
    //     "",
    //    " "
    //     "Starting and Completing Full Fledge Projects"