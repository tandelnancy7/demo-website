  const dummyEvents = [
      {
        _id: '1',
        event_name: 'Tech Conference 2024',
        event_date: '2024-10-15',
        event_description: 'A conference for tech enthusiasts and professionals.',
        photo: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180'
      },
      {
        _id: '2',
        event_name: 'Art Gallery Exhibition',
        event_date: '2024-11-20',
        event_description: 'An exhibition showcasing modern art from local artists.',
        photo: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180'
      },
      {
        _id: '3',
        event_name: 'Food Festival',
        event_date: '2024-12-05',
        event_description: 'A festival featuring food from around the world.',
        photo: 'https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=180'
      },
      {
        _id: '4',
        event_name: 'Tech Conference 2024',
        event_date: '2024-10-15',
        event_description: 'A conference for tech enthusiasts and professionals.',
        photo: 'https://tse4.mm.bing.net/th?id=OIP.Ymp2QykpzP3rfqFkAzDjHgHaFD&pid=Api&P=0&h=180'
      },
    
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
  
     //Initial render
    renderEvents(dummyEvents);
  
