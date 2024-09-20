import { Download, ShieldCheck } from "lucide-react";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import logo from "./images/logo.png";
import Image from "next/image";
import DutchFlag from "~/components/icons/DutchFlag";

export default function Home() {
  return (
    <main className='grid grid-cols-2 h-screen w-screen'>
      <div className='flex p-16 flex-col gap-4'>
        <nav className='pb-16 flex'>
          <div className='flex-1'>
            <Image src={logo} alt='logo' />
          </div>
          <Select defaultValue='nl'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='nl'>
                <DutchFlag className='size-4 float-start mx-2 mt-0.5' />{" "}
                Nederlands
              </SelectItem>
            </SelectContent>
          </Select>
        </nav>
        <div>
          <h2 className='text-4xl font-bold tracking-tight'>
            Betaalmethoden
          </h2>
          <p className='text-ms leading-8'>
            Kies een betaalmethode die het best bij u past.
          </p>
        </div>

        <RadioGroup defaultValue='comfortable'>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <div className='flex-none bg-primary w-20 h-14 rounded-lg' />
            <Label htmlFor='r1' className='flex-1 font-bold text-lg'>
              iDeal
            </Label>
            <Badge variant='secondary'>Populair</Badge>
            <RadioGroupItem value='iDeal' id='r1' />
          </div>
        </RadioGroup>

        <Alert variant='secondary' className='gap-4'>
          <ShieldCheck className='stroke-primary size-8' />
          <AlertDescription>
            Wij houden ons volledig aan de databeveiligingsnormen van de
            betalingskaartindustrie.
          </AlertDescription>
        </Alert>
      </div>
      <div className='flex flex-col bg-secondary p-16 gap-2'>
        <div className='ring-2 ring-primary text-primary p-2 text-center w-full mb-16'>
          Vermijd extra kosten betaal uw openstaande factuur direct!
        </div>

        <div>
          <h2 className='text-4xl font-bold tracking-tight'>
            Te betalen bedrag
          </h2>
          <p className='text-ms leading-8'>
            Hieronder ziet u de factuurgegevens.
          </p>
        </div>
        <Card className='w-full border-none shadow-none'>
          <CardHeader className='flex items-center flex-row pt-0.5'>
            <CardDescription className='text-foreground flex-1'>
              Factuurnummer: <span className='font-bold'>#9c6111</span>
            </CardDescription>
            <Button variant='link' size='sm' className='flex-none'>
              Downloaden <Download className='size-4 ml-2' />
            </Button>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <div className='flex w-full'>
              <div className='w-full'>
                <CardTitle className='flex-1 leading-normal'>
                  Opzegbrief basic fit
                </CardTitle>
                <CardDescription className='flex-none max-w-64'>
                  Standaard prijs voor opzetellen van een opzegbrief.
                </CardDescription>
              </div>
              <CardTitle className='flex-none'>€30,00</CardTitle>
            </div>
            <hr />
          </CardContent>
          <CardFooter className='flex flex-col'>
            <CardTitle className='w-full pb-6'>
              Totaal <span className='float-end'>€30,00</span>
            </CardTitle>
            <Button className='w-full flex-none'>Nu betalen</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
