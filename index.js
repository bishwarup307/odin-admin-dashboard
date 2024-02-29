const navSearchButton = document.querySelector(".nav-search-icon-mobile");
const navbarMain = document.querySelector(".navbar-main");
const navWithSearch = document.querySelector(".navbar-search");
const searchInput = document.querySelector("#search-bar");
const navbarBack = document.querySelector(".navbar-back");

// const teamIcons = document.querySelector(".team__icons");

const toolTipTargets = document.querySelectorAll(".tooltip-target");

const navbarLinks = document.querySelector(".navbar-links");
const hamburgerMenu = document.querySelector(".hamburger-nav-icon");

navSearchButton.addEventListener("click", () => {
    navbarMain.style.display = "none";
    navWithSearch.style.display = "flex";
    searchInput.focus();
});

navbarBack.addEventListener("click", () => {
    navbarMain.style.display = "flex";
    navWithSearch.style.display = "none";
});

hamburgerMenu.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("expanded");
});

// teamIcons.addEventListener("mouseover", (event) => {
//     event.stopPropagation();
//     targetDiv = event.target;
//     const name = targetDiv.dataset.name;

//     if (name) {
//         const tooltip = document.createDocumentFragment();

//         const p = document.createElement("p");
//         p.textContent = `Hi, ${name}`;
//         tooltip.appendChild(p);
//         targetDiv.appendChild(tooltip);
//     }
// });

toolTipTargets.forEach((teamMember) => {
    teamMember.addEventListener("mouseover", () => {
        const tooltip = teamMember.querySelector(".tooltip");
        if (tooltip) {
            tooltip.classList.toggle("hidden");
        } else {
            const tooltip = document.createElement("div");
            tooltip.classList.add("flex-col");
            tooltip.classList.add("tooltip");

            const name = teamMember.dataset.name;
            const role = teamMember.dataset.role;

            const p = document.createElement("p");
            p.classList.add("fw600");
            p.textContent = name;
            tooltip.appendChild(p);

            const teamRole = document.createElement("p");
            teamRole.classList.add("muted250");
            teamRole.classList.add("fs8");
            teamRole.textContent = role;
            tooltip.appendChild(teamRole);

            const profile = document.createElement("a");
            profile.textContent = "View profile";
            tooltip.appendChild(profile);

            const feedback = document.createElement("a");
            feedback.textContent = "Send or receive feedback";
            tooltip.appendChild(feedback);

            const update = document.createElement("a");
            update.textContent = "View most recent update";
            tooltip.appendChild(update);

            teamMember.appendChild(tooltip);
        }
    });

    teamMember.addEventListener("mouseout", () => {
        const tooltip = teamMember.querySelector(".tooltip");

        if (tooltip) {
            tooltip.classList.toggle("hidden");
        }
    });
});
