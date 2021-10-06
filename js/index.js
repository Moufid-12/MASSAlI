(function () {
            
  

    var afficherOnglets =function (a, animations) {
        if (animations== undefined) {
            animations=true
        }
        var div =a.parentNode.parentNode.parentNode
        var activeTab= div.querySelector('.onglet-contenue.active')
        var tranEnd = div.querySelector(a.getAttribute('href'))
            var li =a.parentNode
           
            if (li.classList.contains('active')) {
                return false
            }
           
            div.querySelector('.onglets .active').classList.remove('active')
            li.classList.add('active')
            // pour les paragraphes
            // div.querySelector('.onglet-contenue.active').classList.remove('active')
            // div.querySelector(a.getAttribute('href')).classList.add('active')

            //Pour les animations
            if (animations) {
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transition =function () {
                this.classList.remove('fade')
                this.classList.remove('active')

                tranEnd.classList.add('active')
                tranEnd.classList.add('fade')
                tranEnd.classList.add('in')
                activeTab.removeEvenListener('transitionend',transition)
            }
            activeTab.addEventListener('transitionend',transition)
            }else{ 
                tranEnd.classList.add('active')
                activeTab.classList.remove('active')
            }
            
    }
    var onglets = document.querySelectorAll('.onglets a')
    for (let i = 0; i < onglets.length; i++) {
        onglets[i].addEventListener('click', function (e) {
            afficherOnglets(this,true)  //Y'aura d'annimations
            
        });
        
    }
    /* Le recupere le hash= (le lien)
        Ajouter la class active sur le lien href="hash"
        Retirer la class active sur les autres onglets
        Afficher/Masquer les contenus
    */
    
    var hash =window.location.hash
    var a= document.querySelector('a[href="'+hash+'"]')
    if (a!==null && !a.classList.contains('active')) {
        afficherOnglets(a,false)  //Y'aura pas d'animations
    }  
})()