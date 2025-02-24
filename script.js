document.addEventListener("DOMContentLoaded", function() {
    console.log("Le site est chargé !");

    let contactLink = document.getElementById("contact-link");
    let contactSection = document.getElementById("contact");

    if (!contactLink) {
        console.error("L'élément #contact-link est introuvable !");
        return;
    }
    if (!contactSection) {
        console.error("L'élément #contact est introuvable !");
        return;
    }

    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le saut immédiat
        console.log("Clic détecté sur Contact !");

        // Ajoute la classe highlight pour voir l'effet
        contactSection.classList.add("highlight");
        console.log("Classe 'highlight' ajoutée !");

        // Retire la surbrillance après 2 secondes
        setTimeout(() => {
            contactSection.classList.remove("highlight");
            console.log("Classe 'highlight' supprimée !");
        }, 2000);

        // Défilement fluide vers la section "Contact"
        contactSection.scrollIntoView({ behavior: "smooth" });
        console.log("Défilement vers #contact lancé !");
    });
});
