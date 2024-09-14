import RSVPForm from './RSVPForm';
import GuestList from './GuestList';
import './App.css'; // Assuming you're using some CSS file for styles
import './index.css'; // Or App.css if you're using that file

function App() {
  return (
    <div className="app-container flex">
      <div className="form-container w-1/2 p-6">
        <RSVPForm />
      </div>
      <div className="guest-list-container w-1/2 p-6">
        <GuestList />
      </div>
    </div>
  );
}

export default App;

// Or App.css if you're using that file
