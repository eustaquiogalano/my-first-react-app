import "./App.css";
import { Button } from "./components/Buttons";
import { App2, App3 } from "./components/Greeting";
import { ListOfProfessionals } from "./components/RenderList";
import { ScientistList } from "./components/RenderList";
import { BookList } from "./components/gospelList";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  return (
    <>
      <Button />
      <Button text="Dont Click Me" color="red" />
      <Button text="Look at Me" fontSize={30} />
      <App2 name="Jesus Christ" father="God" />
      <App3 />
      <BookList />
      <ListOfProfessionals />
      <ScientistList />
      <ColorPicker />
    </>
  );
}

export default App;
