"use client";

import CardTicket from "@/components/CardTicket";
import { useEffect, useState } from "react";
import fetchTicket from "@/app/service/fetchTicket";

export default function Ticket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTicket = async () => {
      const ticket = await fetchTicket();

      setData(ticket.payload.items); // Call the fetch function when the component mounts
    };
    getTicket();
  }, []);

  return (
    <>
      <article className="container mx-auto p-5 pt-10">
        <h1 className="font-bold text-3xl text-slate-300">All tickets</h1>
        <section className="grid grid-cols-3 mt-5 gap-5">
          {data &&
            data.map((item) => {
              return (
                <CardTicket
                  key={item.ticketId}
                  name={item.passengerName}
                  payment={item.paymentStatus}
                  date={item.travelDate}
                  source={item.sourceStation}
                  destination={item.destinationStation}
                  price={item.price}
                  status={item.ticketStatus}
                  number={item.seatNumber}
                />
              );
            })}
        </section>
      </article>
    </>
  );
}
