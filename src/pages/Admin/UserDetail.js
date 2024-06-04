import React, { useEffect, useState } from "react";
import { onGetAllUsersHandler } from "../../services/common";

function UserDetail() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await onGetAllUsersHandler();
        setUsers(response.users);
        // console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
console.log(users.length)
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    renderPageNumbers.push(
      <button
        key={i}
        id={i}
        onClick={handleClick}
        className={`px-3 py-1 mx-1 ${currentPage === i ? 'bg-blue-500 text-white rounded-md' : 'bg-gray-200 text-gray-700 rounded-md'}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 h-[100vh] pt-20">
      <div className="overflow-x-auto rounded-3xl w-[800px] shadow-sm shadow-white">
        <div className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm w-full">
          <div className="px-4 py-8">
            <h1 className="text-3xl font-semibold px-4 pb-6">User Detail</h1>
            <div className="mx-4 border-2 rounded-xl">
              <div className="ltr:text-left rtl:text-right">
                <div className="text-xl flex font-bold text-center border-b-2 border-gray-200">
                  <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">User</div>
                  <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">Date</div>
                  <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">Log In</div>
                  <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">Log Out</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200 text-center min-h-[350px]">
              {currentRows.map((user, index) => (
                  <div key={index} className={`flex ${index % 2 === 1 ? 'even:bg-blue-50' : ''}`}>
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">{user.userName}</div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">{user.date}</div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">{user.logIn}</div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">{user.logOut}</div>
                  </div>
                ))}
                
              
              </div>
              <div className="flex justify-center py-4">
                {renderPageNumbers}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
