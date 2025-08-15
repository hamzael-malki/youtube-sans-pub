/*
 * Code développé par Hamza EL MALKI
 */

$(document).ready(function () {
    var youtubeInput = $('#youtubeLink');
    var resultElement = $('#result');
    var mentionElement = $('#mention');

    function isValidYouTubeUrl(url) {
        // Validation simple d’un lien YouTube
        var regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
        return regex.test(url);
    }

    $('form').submit(function (event) {
        event.preventDefault();
        var link = youtubeInput.val().trim();

        if (!isValidYouTubeUrl(link)) {
            alert('Veuillez entrer un lien YouTube valide.');
            return;
        }

        // Transformation : insérer un tiret après le "t" de "youtube"
        // Exemple : https://www.youtube.com/... → https://www.yout-ube.com/...
        var newLink = link.replace("youtube", "yout-ube");

        resultElement.html(
            `Lien modifié : <a href="${newLink}" target="_blank">${newLink}</a>`
        );

        // Ouvrir automatiquement le lien
        window.open(newLink, '_blank');

        mentionElement.text('By Hamza EL MALKI :)');
    });
});
