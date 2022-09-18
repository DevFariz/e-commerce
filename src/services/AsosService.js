import { useHttp } from "../hooks/useHttp"

const useAsosService = () => {

  const {request} = useHttp();

  const _apiBase = 'https://asos2.p.rapidapi.com/';

  const getAllProducts = async () => {
    // const res = await request(`${_apiBase}products/v2/list?store=US&offset=0&categoryId=4209&limit=32`)
    // return res.products.map(_transformProduct);
    return 'a'
  }

  const _transformProduct = (product) => {
    return {
      id: product.id,
      name: product.name,
      colour: product.colour,
      priceCurrent: product.price.current,
      pricePrevious: product.price.previous,
      brandName: product.brandName,
      productImg: product.imageUrl
    }
  }


  return {getAllProducts}
}

export default useAsosService;