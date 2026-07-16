import { Button } from "./components/ui/button"
import './App.css'
import Navbar from "./components/ui/Navbar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function App(){
    return(
        <div>
        <h1 className="bg-amber-500 font-bold">Hello welcome to tailwind</h1>
        <Button>Login</Button>

        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
           </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

        <Navbar></Navbar>
        </div>
    )
}
export default App