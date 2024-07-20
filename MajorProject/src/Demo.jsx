import { useEffect, useState } from "react";
import { getallList } from "./Api";

export default function Demo() {
  const [data, setData] = useState([]);
  const view = async () => {
    try {
      const res = await getallList();
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    view();
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedValue = data.map((el) => {
        return { ...el, isCheaked: checked };
      });
      setData(checkedValue);
      console.log(checkedValue);
    } else {
      const checkedValue = data.map((el) =>
        el.title === name ? { ...el, isCheaked: checked } : el
      );
      setData(checkedValue);
      console.log(checkedValue);
    }
  };

  const submit = () => {
    const checkedId = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].isCheaked === true) {
        checkedId.push(data[i]._id);
        console.log(checkedId);
      }
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr className="text-center">
            <th>
              <input
                type="checkbox"
                name="allselect"
                checked={!data.some((el) => el?.isCheaked !== true)}
                onChange={handleChange}
              />
            </th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  name={el.title}
                  onChange={handleChange}
                  checked={el?.isCheaked || false}
                />
              </td>
              <td>{el.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
