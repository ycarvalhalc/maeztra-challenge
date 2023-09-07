import SkuSelector from './SkuSelector'

const Product = ({
    image,
    price,
    name,
    text,
    skus,
}: any) => {
  return (
    <div className="product">
        <img className="product__image" src={image} alt="" />

        <div className="product__informations">
            <div className="product__skuSelector">
                <SkuSelector skus={skus} />
            </div>

            <div className="product__description">
                <p className="product__price">{price}</p>

                <p className="product__name">{name}</p>

                <p className="product__text">{text}</p>
            </div>

            <button className="product__buyButton">Adicionar</button>
        </div>
    </div>
  )
}

export default Product