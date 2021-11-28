import type { MetaFunction } from "remix";
import RemixLogo from "~/components/RemixLogo";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div>
      <main className="p-7 bg-white rounded-xl">
        <h2 className="flex flex-row gap-3 justify-center">
          <div className="bottom-6 text-4xl text-center m-0 p-0">
            Welcome to
          </div>
          <RemixLogo className="my-1" />
        </h2>
        <p className="text-xl py-4">We're stoked that you're here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
      </main>
    </div>
  );
}
