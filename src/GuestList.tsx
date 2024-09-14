const GuestList = () => {
  const guests = [
    { id: 1, name: 'Jules', date: 'Feb 21, 2024 9:09 pm', status: true, comment: 'Unmistakably !' },
    { id: 2, name: 'fred', date: 'Sep 21, 2022 9:56 am', status: true, comment: 'Looking forward to it' },
    { id: 3, name: 'U3', date: 'Sep 19, 2022 7:55 am', status: false, comment: 'Hello' },
    { id: 4, name: 'Mike', date: 'Sep 16, 2022 8:49 pm', status: false, comment: 'Sorry ! Maybe next...' },
  ];

  return (
    <div className="bg-blue-200 text-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Guest list</h2>
      <p>Currently <strong>{guests.length}</strong> guests are expected</p>
      <ul className="mt-4">
        {guests.map(guest => (
          <li key={guest.id} className="mb-4">
            <p className="text-lg">{guest.name} <span className="text-gray-500">{guest.date}</span></p>
            <p>{guest.comment}</p>
            <span className={guest.status ? 'text-green-600' : 'text-red-600'}>
              {guest.status ? '✔' : '✘'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
