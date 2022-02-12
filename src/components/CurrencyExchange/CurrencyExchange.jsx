import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "../../redux/currency-operations";
import { getData } from "../../redux/currency-selectors";

export default function CurrencyExchange() {
  const data = useSelector(getData);
  const [baseVal, setBaseVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!baseVal) return;
    dispatch(getCurrency(baseVal));
  }, [dispatch, baseVal]);

  const handleChange = ({ currentTarget: { value } }) => setBaseVal(value);
  const { date, base, rates, error } = data;
  return (
    <section>
      <h1>CurrencyExchange </h1>
      <label>
        Current currency:
        <select name="base" onChange={handleChange} value={baseVal} required>
          <option value=""></option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
          <option value="PLN">PLN</option>
        </select>
      </label>
      {data &&
        (data.success ? (
          <div>
            <h3>To day:{date}</h3>
            <p>
              EUR={rates.EUR} {base}
            </p>
            <p>
              USD={rates.USD} {base}
            </p>
            <p>
              UAH={rates.UAH} {base}
            </p>
            <p>
              PLN={rates.PLN} {base}
            </p>
          </div>
        ) : (
          <h4>{error.type} - choose EUR for free request</h4>
        ))}
    </section>
  );
}
