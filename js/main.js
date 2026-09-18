document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".profile-card, .info-card, .about-box, .work-card, .contact-card, .contact-intro"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        setTimeout(() => {

            element.style.transition =
                "all 0.6s ease";

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }, index * 120);

    });

});
