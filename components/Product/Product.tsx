/* eslint-disable */

export const Product = () => (
  <div>
    <ProductHeader image={image} title={title} subtitle={subtitle} />
    <ProductAttributes attributes={[attribute1, attribute2]} />
    <ProductRating ratings={[rating1, rating2]} />
    <ProductPrice price={price} unit={unit} />
    <Button onClick={addToBasket} />
    <Button onClick={addToComparison} />
  </div>
);
