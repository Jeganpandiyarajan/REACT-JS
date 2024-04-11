import { Fragment } from "react";
import Card from './Card';
function App(){
  return(
    <>
    <Card name="Jegan" country="Madurai" skill="Backend Developer" online={false} profile="60.png"/>;
    <Card name="Mark Zuckerberg" country="New york" skill="Backend Developer" online={false} profile="55.png"/>;
    <Card name="Bill Gates" country="US" skill="Frontend Developer" online={false} profile="61.png"/>;
    <Card name="hamilton lewis" country="England" skill="Backend Developer" online={false} profile="62.png"/>;
    </>
  );
}
export default App;
