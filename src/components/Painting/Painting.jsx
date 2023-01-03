

export const Painting =({imageUrl,title,price,authorPhoto,authorName,quantity})=> <div>
<img src={imageUrl} alt={title} width="480" />
<h2>{title}</h2>
<p>
  Автор: <a href={authorPhoto}>{authorName}</a>
</p>
<p>Цена: {price} кредитов</p>
<p>Доступность: {quantity<10?"закінчується":"є в наявності" }</p>
<button type="button">Добавить в корзину</button>
</div>



