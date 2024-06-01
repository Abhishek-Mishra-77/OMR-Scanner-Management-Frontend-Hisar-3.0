import React, { useState } from "react";

function UpdatedDetails() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modalBackground") {
      handleClose();
    }
  };

  const tasks = [
    { id: 1, task: "Data Entry", moduleType: "Module 1" },
    { id: 2, task: "Review Reports", moduleType: "Module 2" },
    { id: 3, task: "Update Records", moduleType: "Module 3" },
    { id: 4, task: "Prepare Presentation", moduleType: "Module 4" },
    { id: 5, task: "Send Emails", moduleType: "Module 5" },
    { id: 6, task: "Data Analysis", moduleType: "Module 6" },
    { id: 7, task: "Research", moduleType: "Module 7" },
    { id: 8, task: "Development", moduleType: "Module 8" },
    { id: 9, task: "Testing", moduleType: "Module 9" },
    { id: 10, task: "Deployment", moduleType: "Module 10" },
  ];

  const totalPages = Math.ceil(tasks.length / rowsPerPage);

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedRows = tasks.slice(startIndex, startIndex + rowsPerPage);

    return selectedRows.map((task) => (
      <div
        className="flex text-center py-1 odd:bg-blue-100 text-md"
        key={task.id}
      >
        <div className="whitespace-nowrap mt-1 px-4 py-2 font-medium text-gray-900 w-1/3">
          {task.id}
        </div>
        <div className="whitespace-nowrap px-4 mt-1 py-2 text-gray-700 w-1/3">
          {task.task}
        </div>
        <div className="whitespace-nowrap px-4 py-2 text-gray-700 w-1/3">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-3xl">
            Show
          </button>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    return (
      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <button
            onClick={() => handleClickPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handleClickPage(index + 1)}
              className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "text-gray-900"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => handleClickPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    );
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-700 to-purple-700 h-[100vh] pt-20">
      {isVisible ? (
        <div
          id="modalBackground"
          className="flex justify-center items-center"
          onClick={handleBackgroundClick}
        >
          <div
            role="alert"
            className="rounded-xl border border-gray-100 bg-white p-4 w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 py-4 px-4">
                <h1 className="block text-gray-900 text-3xl font-semibold">
                  All Tasks
                </h1>
              </div>

              <button
                className="text-gray-500 transition hover:text-gray-600"
                onClick={handleClose}
              >
                <span className="sr-only">Dismiss popup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 hover:text-red-500 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mx-4 border-2 rounded-xl my-4">
              <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                  <div className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <div className="ltr:text-left rtl:text-right">
                      <div className="flex text-center text-lg">
                        <div className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/3">
                          Task
                        </div>
                        <div className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/3">
                          Module Type
                        </div>
                        <div className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/3">
                          Updated details
                        </div>
                      </div>
                    </div>

                    <div className="divide-y divide-gray-200">
                      {renderTableRows()}
                    </div>
                  </div>
                </div>

                <div className="rounded-b-lg border-t border-gray-200 px-4 py-4">
                  {renderPagination()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-3xl w-[800px] shadow-sm shadow-white">
          <div className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm w-full">
            <div className="px-4 py-8">
              <h1 className="text-3xl font-semibold px-4 pb-8 pt-4">
                User Detail
              </h1>
              <div className="mx-4 border-2 rounded-xl">
                <div className="ltr:text-left rtl:text-right">
                  <div className="text-xl flex font-bold text-center">
                    <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">
                      User
                    </div>
                    <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">
                      Date
                    </div>
                    <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">
                      Clock In
                    </div>
                    <div className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 w-1/4">
                      Clock Out
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-gray-200 text-center overflow-y-auto h-[280px]">
                  <div className="odd:bg-blue-50 flex">
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">
                      John Doe
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">
                      $120,000
                    </div>
                  </div>
                  <div className="odd:bg-blue-50 flex">
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">
                      John Doe
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">
                      $120,000
                    </div>
                  </div>
                  <div className="odd:bg-blue-50 flex">
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">
                      John Doe
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">
                      $120,000
                    </div>
                  </div>
                  <div className="odd:bg-blue-50 flex">
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">
                      John Doe
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">
                      $120,000
                    </div>
                  </div>
                  <div className="odd:bg-blue-50 flex">
                    <div className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 w-1/4">
                      John Doe
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-700 w-1/4">
                      24/05/1995
                    </div>
                    <div className="whitespace-nowrap px-4 py-3 text-gray-704 w-1/4">
                      $120,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatedDetails;
