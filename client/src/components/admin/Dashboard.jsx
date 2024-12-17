import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHome, FiCalendar, FiBarChart, FiLogOut, FiUser } from 'react-icons/fi';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('users'); // Aba ativa inicial

  const tabs = [
    { id: 'users', label: 'Users', icon: <FiUsers /> },
    { id: 'properties', label: 'Properties', icon: <FiHome /> },
    { id: 'reservations', label: 'Reservations', icon: <FiCalendar /> },
    { id: 'reports', label: 'Reports', icon: <FiBarChart /> },
  ];

  // Dados para as abas
  const users = [
    { id: 1, name: 'Alfredo Langa', email: 'alfredo@example.com', role: 'Admin' },
    { id: 2, name: 'Maria João', email: 'maria@example.com', role: 'User' },
  ];

  const properties = [
    { id: 1, name: 'Casa tipo 4', location: 'Maputo', price: '$120,000' },
    { id: 2, name: 'Apartamento T3', location: 'Matola', price: '$90,000' },
  ];

  const reservations = [
    {
      id: 1,
      user: 'Alfredo Langa',
      houseName: 'Casa tipo 4 em Maputo',
      date: '2024-12-01',
      guests: 4,
    },
    {
      id: 2,
      user: 'Maria João',
      houseName: 'Apartamento T3 na Matola',
      date: '2024-12-10',
      guests: 2,
    },
  ];

  // Componentes reutilizáveis para tabelas
  const UserRow = ({ user }) => (
    <tr className="border-b">
      <td className="p-4">{user.id}</td>
      <td className="p-4">{user.name}</td>
      <td className="p-4">{user.email}</td>
      <td className="p-4">{user.role}</td>
    </tr>
  );

  const PropertyRow = ({ property }) => (
    <tr className="border-b">
      <td className="p-4">{property.id}</td>
      <td className="p-4">{property.name}</td>
      <td className="p-4">{property.location}</td>
      <td className="p-4">{property.price}</td>
    </tr>
  );

  const ReservationRow = ({ reservation }) => (
    <tr className="border-b">
      <td className="p-4">{reservation.id}</td>
      <td className="p-4">{reservation.user}</td>
      <td className="p-4">{reservation.houseName}</td>
      <td className="p-4">{reservation.date}</td>
      <td className="p-4">{reservation.guests}</td>
    </tr>
  );

  // Conteúdo das abas
  const tabContent = {
    users: (
      <section className="p-5">
        <h2 className="font-bold text-xl mb-5">Usuários</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4">#ID</th>
              <th className="p-4">Nome</th>
              <th className="p-4">Email</th>
              <th className="p-4">Função</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </section>
    ),
    properties: (
      <section className="p-5">
        <h2 className="font-bold text-xl mb-5">Propriedades</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4">#ID</th>
              <th className="p-4">Nome</th>
              <th className="p-4">Localização</th>
              <th className="p-4">Preço</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <PropertyRow key={property.id} property={property} />
            ))}
          </tbody>
        </table>
      </section>
    ),
    reservations: (
      <section className="p-5">
        <h2 className="font-bold text-xl mb-5">Reservas Recentes</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4">#ID</th>
              <th className="p-4">Usuário</th>
              <th className="p-4">Casa</th>
              <th className="p-4">Data</th>
              <th className="p-4">Pessoas</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <ReservationRow key={reservation.id} reservation={reservation} />
            ))}
          </tbody>
        </table>
      </section>
    ),
    reports: (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, doloremque?</p>
      </div>
    ),
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-1/4 bg-gray-800 px-8 py-10 flex flex-col gap-8 text-white"
      >
        {/* Logo */}
        <h2 className="font-bold text-2xl flex items-center gap-1">
          Langa<span className="text-blue-500">Imóveis</span>
        </h2>

        {/* Menu */}
        <div className="flex flex-col gap-4">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 cursor-pointer ${
                activeTab === tab.id ? 'text-blue-400' : 'hover:text-blue-400'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-auto flex flex-col gap-2 border-t border-gray-700 pt-4">
          <motion.span whileHover={{ x: 10 }} className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white">
            <FiUser />
            Account
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="flex items-center gap-3 cursor-pointer text-red-400 hover:text-red-500">
            <FiLogOut />
            Logout
          </motion.span>
        </div>
      </motion.div>

      {/* Conteúdo Dinâmico */}
      <div className="w-3/4 bg-gray-100 flex items-start justify-center overflow-auto">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}

export default Dashboard;
