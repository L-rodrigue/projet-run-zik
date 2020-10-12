//Boutons quantité
let quantity = document.querySelector('#quantity').innerHTML;//Je crée une variable et récupére la quantité
document.querySelector('#more').addEventListener('click', function(){//Je séléctionne mon + et crée un événement click
  quantity++;//J'ajoute +1 a ma quantité a chaque click de +
  document.querySelector('#quantity').innerHTML = quantity;
});
document.querySelector('#less').addEventListener('click', function(){//Je séléctionne mon - et crée un événement click
  if(quantity > 1){//Je met une condition en lui disant si la quantité est supérieur a 1
    quantity--;//Je retire de 1 la quantité
  }
  document.querySelector('#quantity').innerHTML = quantity;//J'affiche la quantité
})

let quantityTotal = 0;
  if(localStorage.getItem('headphone') != null){
    quantityTotal += parseInt(localStorage.getItem('headphone').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
  if(localStorage.getItem('watch') != null){
    quantityTotal += parseInt(localStorage.getItem('watch').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
  if(localStorage.getItem('armbrand') != null){
    quantityTotal += parseInt(localStorage.getItem('armbrand').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
if(quantityTotal === 0){
  document.querySelector('.numberOfItems').style.display = 'none';
} else {
  document.querySelector('.numberOfItems').style.display = 'flex';
  document.querySelector('.numberOfItems').innerHTML = quantityTotal;
}

//Boutons panier
document.querySelector('#addToCart').addEventListener('click', function(){//Je séléctionne mon bouton ajouter au panier et lui met un événement click
  quantity;//Je récupére la quantité
  let product = document.querySelector('#product').innerHTML;//Je récupére le produit
  let price = parseInt(document.querySelector('#price').innerHTML);//Je récupére le prix et le change car il est en chaine de caractéres

  console.log(product);
  if(product === 'Casque confort Run‘Zik'){
    localStorage.setItem('headphone', [product,quantity,price]);
  }
  if(product === 'Montre Run\'Zik S plus'){
    localStorage.setItem('watch', [product,quantity,price]);
  }
  if(product === 'Brassard Zik+ Run Belt'){
    localStorage.setItem('armbrand', [product,quantity,price]);
  }
  document.querySelector('#event').innerHTML = 'Ajouter au panier';
  quantity = 1;
  document.querySelector('#quantity').innerHTML = quantity;

let quantityTotal = 0;
  if(localStorage.getItem('headphone') != null){
    quantityTotal += parseInt(localStorage.getItem('headphone').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
  if(localStorage.getItem('watch') != null){
    quantityTotal += parseInt(localStorage.getItem('watch').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
  if(localStorage.getItem('armbrand') != null){
    quantityTotal += parseInt(localStorage.getItem('armbrand').split(',')[1]);//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
}
if(quantityTotal === 0){
  document.querySelector('.numberOfItems').style.display = 'none';
} else {
  document.querySelector('.numberOfItems').style.display = 'flex';
  document.querySelector('.numberOfItems').innerHTML = quantityTotal;
}
  });


  document.querySelector('.cartHover').addEventListener('mouseover', function(){//affiche dans le hover les éléments séléctionnées a jour
    let totalPrice = 0;
    document.querySelector('.recapCart').innerHTML = '';
    if(localStorage.getItem('headphone') != null){
      let p = document.createElement('p');
      p.innerHTML = '<span id="itemCartHeadphone"></span>Quantité<span id="quantityCartHeadphone"></span>Sous-total<span id="totalPriceCartHeadphone"></span>€';
      document.querySelector('.recapCart').appendChild(p);
      document.querySelector('#itemCartHeadphone').innerHTML = localStorage.getItem('headphone').split(',')[0];//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      document.querySelector('#quantityCartHeadphone').innerHTML = localStorage.getItem('headphone').split(',')[1];//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      document.querySelector('#totalPriceCartHeadphone').innerHTML = localStorage.getItem('headphone').split(',')[2] * localStorage.getItem('headphone').split(',')[1] ;//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      totalPrice += localStorage.getItem('headphone').split(',')[2] * localStorage.getItem('headphone').split(',')[1];
    }
    if(localStorage.getItem('watch') != null){
      let p = document.createElement('p');
      p.innerHTML = '<span id="itemCartWatch"></span>Quantité<span id="quantityCartWatch"></span>Sous-total<span id="totalPriceCartWatch"></span>€';
      document.querySelector('.recapCart').appendChild(p);
      document.querySelector('#itemCartWatch').innerHTML = localStorage.getItem('watch').split(',')[0];
      document.querySelector('#quantityCartWatch').innerHTML = localStorage.getItem('watch').split(',')[1];
      document.querySelector('#totalPriceCartWatch').innerHTML = localStorage.getItem('watch').split(',')[2] * localStorage.getItem('watch').split(',')[1] ;//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      totalPrice += localStorage.getItem('watch').split(',')[2] * localStorage.getItem('watch').split(',')[1];
    }
    if(localStorage.getItem('armbrand') != null){
      let p = document.createElement('p');
      p.innerHTML = '<span id="itemCartArmbrand"></span>Quantité<span id="quantityCartArmbrand"></span>Sous-total<span id="totalPriceCartArmbrand"></span>€';
      document.querySelector('.recapCart').appendChild(p);
      document.querySelector('#itemCartArmbrand').innerHTML = localStorage.getItem('armbrand').split(',')[0];
      document.querySelector('#quantityCartArmbrand').innerHTML = localStorage.getItem('armbrand').split(',')[1];//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      document.querySelector('#totalPriceCartArmbrand').innerHTML = localStorage.getItem('armbrand').split(',')[2] * localStorage.getItem('armbrand').split(',')[1] ;//je selectionne la valeur stockée headphone, avec le.split je sépare les éléments du tableau et récupére le premier élément du tableau localStorage
      totalPrice += localStorage.getItem('armbrand').split(',')[2] * localStorage.getItem('armbrand').split(',')[1];
    }
    let total = document.createElement('p');
    document.querySelector('.recapCart').appendChild(total);
    total.innerHTML = 'Montant total:' + ' ' + totalPrice + '€';
  });
