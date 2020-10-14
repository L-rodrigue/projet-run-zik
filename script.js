//Boutons quantité
let quantity = document.querySelector('#quantity').innerHTML;//Je crée une variable et récupére la quantité
document.querySelector('#more').addEventListener('click', function () {//Je séléctionne mon + et crée un événement click
    quantity++;//J'ajoute +1 a ma quantité a chaque click de +
    document.querySelector('#quantity').innerHTML = quantity;
});
document.querySelector('#less').addEventListener('click', function () {//Je séléctionne mon - et crée un événement click
    if (quantity > 1) {//Je met une condition en lui disant si la quantité est supérieur a 1
        quantity--;//Je retire de 1 la quantité
    }
    document.querySelector('#quantity').innerHTML = quantity;//J'affiche la quantité
});


const cart = {
    productListInit() { //Initialisation de la liste produit
        if (localStorage.getItem('cart')) {
            cart.productList = JSON.parse(localStorage.getItem('cart')).productList;
        }
        else {
            cart.productList = [];
        }
    },
    addItem(product) {
        let positionOfItem = this.selectItemInList(product);
        console.log(positionOfItem);
        if (!positionOfItem) {
            this.productList.push(product);
        }
        else {
            this.productList[positionOfItem].quantity += product.quantity;
        }
        console.log(cart);
    },
    selectItemInList(product) { //Si l'objet est trouvé, retourne son index, sinon retourne false
        for (let index in this.productList) {
            if (this.productList[index].key === product.key) {
                return index;
            }
        }
        return false;
    },
    totalQuantity() {
        let totalPQuantity = 0;
        for (let product in this.productList) {
            totalPQuantity += this.productList[product].quantity;
        }
        return totalPQuantity;
    }
}

cart.productListInit(); // Initialisation de la liste produit
console.log(cart.productList);


if (cart.totalQuantity() === 0) {
    document.querySelector('.numberOfItems').style.display = 'none';
} else {
    document.querySelector('.numberOfItems').style.display = 'flex';
    document.querySelector('.numberOfItems').innerHTML = cart.totalQuantity();
}
// On récupère ici le data-product qui a été mis dans le html
//Boutons panier
document.querySelector('#addToCart').addEventListener('click', function () {//Je séléctionne mon bouton ajouter au panier et lui met un événement click

    const product = {
        key: document.querySelector('#product').dataset.product,
        name: document.querySelector('#product').innerHTML,
        price: parseInt(document.querySelector('#price').innerHTML),
        quantity: parseInt(document.querySelector('#quantity').innerHTML)
    };
    cart.addItem(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (cart.totalQuantity() === 0) {
        document.querySelector('.numberOfItems').style.display = 'none';
    } else {
        document.querySelector('.numberOfItems').style.display = 'flex';
        document.querySelector('.numberOfItems').innerHTML = cart.totalQuantity();
    }
});


document.querySelector('.cartHover').addEventListener('mouseover', function () {//affiche dans le hover les éléments séléctionnées a jour
    let totalPrice = 0;
    document.querySelector('.recapCart').innerHTML = '';
    for (let i in cart.productList) {
        let p = document.createElement('p');
        p.innerHTML += `${cart.productList[i].name}  Quantité  <span>${cart.productList[i].quantity}</span>  Sous-total  <span>${cart.productList[i].quantity * cart.productList[i].price}</span>€  `;   
        document.querySelector('.recapCart').appendChild(p);
        totalPrice += cart.productList[i].price * cart.productList[i].quantity;
    }
    let p = document.createElement('p');
    p.innerHTML = `Total : ${totalPrice}€`;
    document.querySelector('.recapCart').appendChild(p);
});