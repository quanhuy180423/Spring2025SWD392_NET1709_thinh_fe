export default function PriceList() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center">Bảng giá</h1>
        <div className="overflow-x-auto w-full p-2 mt-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="table-fixed w-full text-sm text-left md:text-base border-collapse">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Tên vắc xin
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Loại vắc xin
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Nhà sản xuất
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Nước sản xuất
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Khối lượng liều (ml)
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Số liều mỗi lọ
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Giá mỗi liều (VNĐ)
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto"
                  >
                    Bệnh phòng ngừa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    Vắc xin A
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    Loại 1
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    Công ty X
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    Việt Nam
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    0.5
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    10
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    100.000
                  </td>
                  <td className="px-4 py-2 w-1/8 md:px-6 md:py-3 md:w-auto">
                    Bệnh Y
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }