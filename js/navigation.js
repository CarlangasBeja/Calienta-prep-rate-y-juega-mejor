function switchTab(tabId, button) {

    const tabs =
        document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });


    const selectedTab =
        document.getElementById(tabId);

    if (selectedTab) {

        selectedTab.classList.add("active");

    }


    const buttons =
        document.querySelectorAll(".nav-item");

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function irAModoCampo() {

    const button =
        document.querySelectorAll(".nav-item")[3];

    switchTab("campo", button);

}