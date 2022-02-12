import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { convert } from "../../redux/currency-operations";
import { getExchange } from "../../redux/currency-selectors";

import s from "./Converter.module.css";
export default function Converter() {
  const exchange = useSelector(getExchange);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case "from":
        setFrom(value);
        break;

      case "to":
        setTo(value);
        break;

      case "amount":
        setAmount(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from, to, amount);
    dispatch(convert({ from, to, amount }));
    setFrom("");
    setTo("");
    setAmount("");
  };
  return (
    <section>
      <h1>Converter</h1>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label>
          From:
          <select name="from" onChange={handleChange} value={from} required>
            <option value=""></option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
            <option value="PLN">PLN</option>
          </select>
        </label>
        <label>
          To:
          <select name="to" onChange={handleChange} value={to} required>
            <option value=""></option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
            <option value="PLN">PLN</option>
          </select>
        </label>
        <label className={s.label} htmlFor={"filter"}>
          Amount:
        </label>
        <input id={"filter"} className={s.input} type="text" name="amount" value={amount} onChange={handleChange} required />
        <button type="submit">Exchange</button>
      </form>
      <div>{exchange && (!exchange.success ? <h2>{exchange.error.info}</h2> : <h2>{exchange.result}</h2>)}</div>
    </section>
  );
}
