import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [orderBody, setOrderBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    fetch(
      "https://api.airtable.com/v0/appKtFQl50iN8fIy7/orders?api_key=keyrLBP7eOuED5fyV",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            name: name,
            email: email,
            location: location,
            orderBody: orderBody,
          },
        }),
      }
    ).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="container">
      <div className="order">
        <h2 className="order-title">בצע הזמנה</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <input
            type="text"
            placeholder="שם?"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="אימייל?"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="מקום?"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <textarea
            required
            cols="30"
            rows="10"
            placeholder="תוכן ההזמנה"
            value={orderBody}
            onChange={(e) => setOrderBody(e.target.value)}
          ></textarea>
          {!isPending && <button>שלח</button>}
          {isPending && <button disabled>שולח הזמנה</button>}
        </form>
      </div>
    </div>
  );
};

export default Order;
