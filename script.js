const dummyEvents = [
    {
      _id: '1',
      event_name: 'Tech Conference 2024',
      event_date: '2024-10-15',
      event_description: 'A conference for tech enthusiasts and professionals.',
      photo: 'https://via.placeholder.com/150'
    },
    {
      _id: '2',
      event_name: 'Art Gallery Exhibition',
      event_date: '2024-11-20',
      event_description: 'An exhibition showcasing modern art from local artists.',
      photo: 'https://via.placeholder.com/150'
    },
    {
      _id: '3',
      event_name: 'Food Festival',
      event_date: '2024-12-05',
      event_description: 'A festival featuring food from around the world.',
      photo: 'https://via.placeholder.com/150'
    },
    {
      _id: '4',
      event_name: 'Tech Conference 2024',
      event_date: '2024-10-15',
      event_description: 'A conference for tech enthusiasts and professionals.',
      photo: 'https://via.placeholder.com/150'
    },
    {
      _id: '5',
      event_name: 'Art Gallery Exhibition',
      event_date: '2024-11-20',
      event_description: 'An exhibition showcasing modern art from local artists.',
      photo: 'https://via.placeholder.com/150'
    },
    {
      _id: '6',
      event_name: 'Food Festival',
      event_date: '2024-12-05',
      event_description: 'A festival featuring food from around the world.',
      photo: 'https://via.placeholder.com/150'
    }
  ];
  
  const searchInput = document.getElementById('search');
  const eventList = document.getElementById('event-list');
  
  function renderEvents(events) {
    eventList.innerHTML = '';
    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.innerHTML = `
        <h2>${event.event_name}</h2>
        <img src="${event.photo}" alt="${event.event_name}" />
        <p><strong>Date:</strong> ${event.event_date}</p>
        <p><strong>Description:</strong> ${event.event_description}</p>
      `;
      eventList.appendChild(eventCard);
    });
  }
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredEvents = dummyEvents.filter(event =>
      event.event_name.toLowerCase().includes(searchTerm)
    );
    renderEvents(filteredEvents);
  });
  
  // Initial render
  renderEvents(dummyEvents);
  