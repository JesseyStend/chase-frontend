import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen w-screen'>
      <Card>
        <CardHeader>
          <CardTitle>The start of something great</CardTitle>
          <CardDescription>
            The initialization of this project
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Click me!</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
