import { useState } from 'react';

const SkuSelector = (
    { skus }: any
) => {
    const [skuSelected, setSkuSelected] = useState(0)

    const handleSkuClick = (id: number) => {
        setSkuSelected(id)
    }

    return (
        <ul className="product__skuList">
            {skus.map((sku: string, index: number) => (
                <li 
                    onClick={() => handleSkuClick(index)}
                    className={`product__skuItem ${skuSelected == index ? 'product__skuItem--selected' : '' }`} 
                    style={{backgroundColor: `${sku}`}}
                    key={index}
                >
                { sku }
                </li>
            ))}
        </ul>
    )
}

export default SkuSelector