import { useLoaderData, json, LoaderFunction } from "remix";

export type LoaderData = { [key: string]: any };

export let loader: LoaderFunction = async ({ params }: LoaderData) => {
  const product = await fetch(
    `http://fakestoreapi.com/products/${params.productId}`
  ).then((response) => response.json());

  return json({
    params,
    product,
  });
};

type ProductDetailPageProps = {};

export default function ProductDetailPage(
  props: ProductDetailPageProps
): JSX.Element {
  const { product } = useLoaderData();
  return (
    <div className="p-5 bg-white">
      <h1 className="text-3xl font-bold">#{product.title}</h1>
      <h4 className="bg-gray-200 p-2 italic">Category: {product.category}</h4>
      <div className="flex flex-row gap-2">
        <img
          className="w-56 m-4"
          src={product.image}
          alt={`${product.title} image`}
        />
        <div className="p-5">
          <p className="text-xl italic">{product.description}</p>
          <div>
            <p className="pt-3">
              rate by {product.rating.count} people with an average calification
              of{" "}
              <span className="text-red-500 text-bold text-xl">
                {product.rating.rate}
              </span>
            </p>
            <p className="py-4 text-2xl">
              Price <span className="font-bold">${product.price}</span>
            </p>
            <button className="px-6 py-2 mt-4 rounded-md bg-blue-900 text-gray-100">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
