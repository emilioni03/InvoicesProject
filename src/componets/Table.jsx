export default function Tables({ encabezado, data}) {
    return (
        <section className>
      {/* Table Header */}
      <div className="invoice-table-row invoice-table-header bg-white mt-10 rounded-xl px-10  py-4 flex items-center gap-x-3 text-sm font-semibold  text-gray-600">
        <div className="text-left">{encabezado[0]}</div>
        <div className="text-left">{encabezado[1]}</div>
        <div className="text-center">{encabezado[2]}</div>
        <div className="text-center ">{encabezado[3]}</div>
        <div className="text-right">{encabezado[4]}</div>
        <div className="flex-1  text-center">{encabezado[5]}</div>
      </div>{/* /Table Header */}
      {/* Table Body */}
      <div className="bg-white mt-5 rounded-xl text-sm  text-gray-500 divide-y divide-indigo-50 overflow-x-auto  shadow">
        {data.forEach(element => {
            
        })}
        <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
          <div className="text-left ">12</div>
          <div className="text-left">John Doe</div>
          <div className="text-center">2019/11/20</div>
          <div className="text-center">2019/12/20</div>
          <div className="text-right">$10.00</div>
          <div className="text-center ">
            <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">Draft</span>
          </div>
        </div>
      </div>{/* /Table Body */}
    </section>
    );
}