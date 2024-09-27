// app/page.js
import DatePicker from '../components/DatePicker';
import CalendarPreview from '../components/CalenderPreview';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600">Date Picker 🗓</h1>

      {/* <div className="w-full max-w-md sm:max-w-lg bg-violet p-6 sm:p-8 rounded-lg shadow-md"> */}
        <DatePicker />
        <CalendarPreview />
      {/* </div> */}
    </main>
  );
}
