import Calendar from "../components/Calendar"

const eventList = [
  {
    title: 'evento 3',
    date: '2023-06-05',
    start: '2023-06-05',
    end: '2023-06-07',
  },
  { title: 'event 1', date: '2023-06-01' },
  { title: 'event 2', date: '2023-06-02' },
  { title: 'event 4', date: '2023-06-01' },
  {
    title: 'evento 5',
    date: '2023-06-02',
    start: '2023-06-02T08:00:00',
    end: '2023-06-02T09:00:00',
  },
]

export default function Home() {
  return (
    <div className="calendario">
      <Calendar events={eventList}/>
    </div>
  )
}
