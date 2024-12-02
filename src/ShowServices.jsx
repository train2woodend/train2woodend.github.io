import React from "react";

const ShowServices = (props) => {

  const TableRow = (props) => {
    return props.services.map((item, index) =>
        <tr key={index}>
          <td className="departure">{item.departure}</td>
          <td className="arrival">{item.arrival}</td>
          <td className={`service ${item.type}`}>{item.type}</td>
        </tr>
    );
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="departure" scope="col">Departure:</th>
            <th className="arrival" scope="col">Arrival:</th>
            <th className="service" scope="col">Service:</th>
          </tr>
        </thead>
        <tbody>
          <TableRow services={props.services} />
        </tbody>
      </table>
    </>
  );
}

export default ShowServices;
