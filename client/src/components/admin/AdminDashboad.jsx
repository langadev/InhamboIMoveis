import { FaHome, FaUsers, FaClipboardList } from "react-icons/fa";

function StatCard({ icon, label, value, color }) {
  return (
    <div className={`flex items-center bg-${color}-500 text-white rounded-md p-5`}>
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

function ReservationRow({ reservation }) {
  return (
    <tr className="border-b">
      <td className="p-4">{reservation.id}</td>
      <td className="p-4">{reservation.user}</td>
      <td className="p-4">{reservation.houseName}</td>
      <td className="p-4">{reservation.date}</td>
      <td className="p-4">{reservation.guests}</td>
      <td className="p-4">
        <button className="bg-red-500 text-white rounded-md px-4 py-1 hover:bg-red-600">
          Cancelar
        </button>
      </td>
    </tr>
  );
}

function AdminDashboard() {
  const stats = {
    totalHouses: 24,
    totalUsers: 150,
    totalReservations: 58,
  };

  const reservations = [
    {
      id: 1,
      user: "Alfredo Langa",
      houseName: "Casa tipo 4 em Maputo",
      date: "2024-12-01",
      guests: 4,
    },
    {
      id: 2,
      user: "Maria João",
      houseName: "Casa tipo 3 na Matola",
      date: "2024-12-10",
      guests: 2,
    },
  ];

  return (
    <div className="px-5 py-10 max-w-7xl mx-auto">
      {/* Estatísticas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <StatCard
          icon={<FaHome />}
          label="Total de Casas"
          value={stats.totalHouses}
          color="blue"
        />
        <StatCard
          icon={<FaUsers />}
          label="Total de Usuários"
          value={stats.totalUsers}
          color="green"
        />
        <StatCard
          icon={<FaClipboardList />}
          label="Total de Reservas"
          value={stats.totalReservations}
          color="purple"
        />
      </section>

      {/* Lista de Reservas */}
      <section className="bg-white shadow rounded-md p-5">
        <h2 className="font-bold text-xl mb-5">Reservas Recentes</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4">#ID</th>
              <th className="p-4">Usuário</th>
              <th className="p-4">Casa</th>
              <th className="p-4">Data</th>
              <th className="p-4">Pessoas</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((reservation) => (
                <ReservationRow key={reservation.id} reservation={reservation} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  Nenhuma reserva encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDashboard;
