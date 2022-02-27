import Card from './Card'
import Sdata from './DataS'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card imgsrc={Sdata[0].imgsrc}
            name = {Sdata[0].name}
            email = {Sdata[0].email}
            number = {Sdata[0].number}
            web = {Sdata[0].web}
        />
        <Card imgsrc={Sdata[1].imgsrc}
            name = {Sdata[1].name}
            email = {Sdata[1].email}
            number = {Sdata[1].number}
            web = {Sdata[1].web}
        />
        <Card imgsrc={Sdata[2].imgsrc}
            name = {Sdata[2].name}
            email = {Sdata[2].email}
            number = {Sdata[2].number}
            web = {Sdata[2].web}
        />
        <Card imgsrc={Sdata[3].imgsrc}
            name = {Sdata[3].name}
            email = {Sdata[3].email}
            number = {Sdata[3].number}
            web = {Sdata[3].web}
        />
        <Card imgsrc={Sdata[4].imgsrc}
            name = {Sdata[4].name}
            email = {Sdata[4].email}
            number = {Sdata[4].number}
            web = {Sdata[4].web}
        />
        <Card imgsrc={Sdata[5].imgsrc}
            name = {Sdata[5].name}
            email = {Sdata[5].email}
            number = {Sdata[5].number}
            web = {Sdata[5].web}
        />
        <Card imgsrc={Sdata[6].imgsrc}
            name = {Sdata[6].name}
            email = {Sdata[6].email}
            number = {Sdata[6].number}
            web = {Sdata[6].web}
        />
        <Card imgsrc={Sdata[7].imgsrc}
            name = {Sdata[7].name}
            email = {Sdata[7].email}
            number = {Sdata[7].number}
            web = {Sdata[7].web}
        />
        <Card imgsrc={Sdata[8].imgsrc}
            name = {Sdata[8].name}
            email = {Sdata[8].email}
            number = {Sdata[8].number}
            web = {Sdata[8].web}
        />
        <Card imgsrc={Sdata[9].imgsrc}
            name = {Sdata[9].name}
            email = {Sdata[9].email}
            number = {Sdata[9].number}
            web = {Sdata[9].web}
        />
    </div>
  );
}

export default App;
