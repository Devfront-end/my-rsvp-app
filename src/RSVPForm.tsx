const RSVPForm = () => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">RSVP Here</h2>
      <form>
        <label className="block mb-2">Name</label>
        <input type="text" className="w-full p-2 mb-4" placeholder="Name" />

        <label className="block mb-2">Can you attend?</label>
        <input type="checkbox" className="mb-4" />

        <label className="block mb-2">Comments</label>
        <textarea className="w-full p-2 mb-4" placeholder="Your comments"></textarea>

        <label className="block mb-2">Upload a picture (optional)</label>
        <input type="file" className="w-full mb-4" />

        <label className="block mb-2">Email (optional)</label>
        <input type="email" className="w-full p-2 mb-4" placeholder="Email" />

        <label className="block mb-2">Meal Preference (optional)</label>
        <select className="w-full p-2 mb-4">
          <option>Select meal preference</option>
          <option>Vegetarian</option>
          <option>Non-Vegetarian</option>
        </select>

        <label className="block mb-2">Select event time (optional)</label>
        <input type="datetime-local" className="w-full p-2 mb-4" />

        <label className="block mb-2">Social media link (optional)</label>
        <input type="url" className="w-full p-2 mb-4" placeholder="Social media link" />

        <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded">Submit RSVP</button>
      </form>
    </div>
  );
};

export default RSVPForm;
