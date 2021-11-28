import { useLoaderData, json, LoaderFunction, Link } from "remix";

export type LoaderData = { [key: string]: any };

export let loader: LoaderFunction = async ({ params }: LoaderData) => {
  const products = await fetch(`http://fakestoreapi.com/products`).then(
    (response) => response.json()
  );

  return json({
    params,
    products,
  });
};

export default function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">Products</h1>
      <div className="flex flex-wrap gap-4 lg:justify-center">
        {products.map((e: any) => (
          <Link
            className="w-full lg:w-96 xl:w-80 flex p-3 content-center rounded-md shadow-md bg-white hover:blur-sm"
            to={`/products/${e.id}`}
          >
            <img className="w-24" src={e.image} alt={e.title} />
            <div className="px-3 py-4 flex flex-col justify-between">
              <p className="line-clamp-2 overflow-ellipsis">{e.title}</p>
              <p className="text-xl font-bold">Price {e.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
