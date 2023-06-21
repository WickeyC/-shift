import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  color: #141418;
  margin-bottom: 30px;

  th {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e3e3e3;
    height: 60px;
    font-weight: 400;
  }
  td {
    vertical-align: middle;
    border-bottom: 1px solid #e3e3e3;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 150px;
  }
  td:first-child, th:first-child {
    padding: 0 20px;
  }
  td:nth-of-type(2) {
    padding-right: 20px;
  }
  td:nth-of-type(3) {
    padding-right: 20px;
  }
  td:nth-of-type(4),
  th:nth-of-type(4) {
    padding-right: 20px;
  }

  .table__delete {
    width: 25px;
    height: 25px;
    margin-right: 18px;
    background-color: #fff;
    img {
      width: 17px;
      height: 19px;
    }
  }
`;

const AddressTable: React.FC<{ addresses: any; deleteAddress: any }> = ({ addresses, deleteAddress }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {addresses?.map((addr: any) => (
          <tr key={`address-item-${addr?.id}`}>
            <td>{addr?.name}</td>
            <td>{addr?.address}<br />{addr?.state} - {addr?.city} - {addr?.postcode}</td>               
            <td>{addr?.phoneNumber}</td>
            <td>
              <button className="table__delete flex-center" type="button">
                <img src="/img/cart/delete.svg" alt="Delete" onClick={() => deleteAddress(addr?.id)} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AddressTable;
