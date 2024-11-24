function ProductCard({ url, alt, price }) {
  return (
    <div className="">
      <img src={url} alt={alt} />
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
