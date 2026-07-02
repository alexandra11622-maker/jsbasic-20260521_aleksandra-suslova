class ProductCard {
    constructor(product) {
        this.product = product;
        this.elem = this.render();
    }

    render() {
        const card = document.createElement('div');
        card.className = 'card';

        // Заголовок
        const title = document.createElement('div');
        title.className = 'card__title';
        title.textContent = this.product.name;
        card.appendChild(title);

        // Картинка с классом card__image
        const img = document.createElement('img');
        img.className = 'card__image';
        img.src = `/assets/images/products/${this.product.image}`;
        img.alt = this.product.name;
        card.appendChild(img);

        // Body
        const body = document.createElement('div');
        body.className = 'card__body';
        card.appendChild(body);

        // Цена
        const price = document.createElement('div');
        price.className = 'card__price';
        price.textContent = `€${Number(this.product.price).toFixed(2)}`;
        body.appendChild(price);

        // Кнопка
        const button = document.createElement('div');
        button.className = 'card__button';
        button.textContent = 'Добавить в корзину';
        body.appendChild(button);

        // Событие
        button.addEventListener('click', () => {
            card.dispatchEvent(new CustomEvent('product-add', {
                detail: this.product.id,
                bubbles: true
            }));
        });

        return card;
    }
}

export default ProductCard;