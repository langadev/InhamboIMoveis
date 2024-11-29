import { FaBed, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function ReservationCard({ reservation }) {
  return (
    <div className="bg-white shadow rounded-md p-5 mb-4">
      <h3 className="font-semibold text-lg mb-2">{reservation.houseName}</h3>
      <p className="text-gray-600">
        <FaMapMarkerAlt className="inline mr-2" />
        {reservation.location}
      </p>
      <div className="flex justify-between items-center mt-3">
        <div>
          <p>
            <FaCalendarAlt className="inline mr-2" />
            Data: <strong>{reservation.date}</strong>
          </p>
          <p>
            <FaBed className="inline mr-2" />
            Pessoas: <strong>{reservation.guests}</strong>
          </p>
        </div>
        <button className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600">
          Cancelar Reserva
        </button>
      </div>
    </div>
  );
}

function UserDashboard() {
  const user = {
    name: "Alfredo Langa",
    email: "alfredo.langa@example.com",
    reservations: [
      {
        id: 1,
        houseName: "Casa tipo 4 em Maputo",
        location: "Sommershield, Maputo",
        date: "2024-12-01",
        guests: 4,
      },
      {
        id: 2,
        houseName: "Casa tipo 3 na Matola",
        location: "Matola, Cidade da Matola",
        date: "2024-12-15",
        guests: 2,
      },
    ],
  };

  return (
    <div className="px-5 py-10 max-w-4xl mx-auto">
      <div className="bg-blue-500 text-white rounded-md p-5 mb-5">
        <h1 className="text-2xl font-bold">Bem-vindo, {user.name}!</h1>
        <p>Email: {user.email}</p>
      </div>

      <section>
        <h2 className="font-bold text-xl mb-4">Minhas Reservas</h2>
        {user.reservations.length > 0 ? (
          user.reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))
        ) : (
          <p className="text-gray-600">Você ainda não possui reservas.</p>
        )}
      </section>
    </div>
  );
}

export default UserDashboard;
