export default function CardTicket({ ...props }) {
  return (
    <>
      <div className="bg-slate-700 rounded-lg p-5 flex flex-col">
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between gap-3">
            <h2 className="font-bold text-xl text-amber-500">{props.name}</h2>
            <div
              className={
                "text-white px-4 py-1 rounded-3xl text-sm capitalize " +
                (props.payment ? "bg-green-500" : "bg-red-500")
              }
            >
              <span>{props.payment ? "Paid" : "Unpaid"}</span>
            </div>
          </div>
          <section className="flex w-full flex-col mt-3 text-slate-300">
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Source Station:</dt>
              <dd className="text-slate-500">{props.source}</dd>
            </dl>
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Destination Station:</dt>
              <dd className="text-slate-500">{props.destination}</dd>
            </dl>
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Travel Date:</dt>
              <dd className="text-sky-600">{props.date}</dd>
            </dl>
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Price:</dt>
              <dd className="text-green-500 font-semibold">${props.price}</dd>
            </dl>
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Ticket Status:</dt>
              <dd className="text-gray-500 font-semibold">{props.status}</dd>
            </dl>
            <dl className="inline-flex gap-3">
              <dt className="font-medium">Seat Number:</dt>
              <dd className="text-yellow-600 font-semibold">{props.number}</dd>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
