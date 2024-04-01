import { useState, useEffect } from "react";
import axios from "axios";
import "../ClientsList/ClientsList.css"
import "../ClientsList/Pagination.css";
import Pagination from "react-js-pagination";
export function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  useEffect(() => {
    axios
      .get("http://localhost/art-gallery/backend/ordersApi.php/api")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Orders:", error);
      });
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handleDeleteOrders = (id) => {
    console.log("Order id", id);
    if (window.confirm("Are you sure you want to delete this order?")) {
      axios
        .delete("http://localhost/art-gallery/backend/OrdersApi.php/api", {
          data: { id: id },
        })
        .then((response) => {
          // Handle successful deletion
          console.log(response.data);
          // Reload the clients after deletion
          axios
            .get("http://localhost/art-gallery/backend/OrdersApi.php/api")
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
              console.error("Error fetching Orders:", error);
            });
        })
        .catch((error) => {
          // Handle error during deletion
          console.error("Error deleting Orders:", error);
        });
    }
  };

  return (
    <>
      <div className="container Clients-list ">
        <h2 className="">Orders List</h2>

        <table className="table table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((orders) => (
              <tr key={orders.id}>
                <td>{orders.id}</td>
                <td>{orders?.lname}</td>
                <td>{orders?.fname}</td>
                <td>{orders?.email}</td>
                <td>{orders?.number}</td>
              
                <td style={{ width: "70px" }}>
                  <button
                    class="delete-button"
                    onClick={() => handleDeleteOrders(orders.id)}
                  >
                    <svg class="delete-svgIcon" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={orders.length}
            pageRangeDisplayed={4}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </>
  );
}
