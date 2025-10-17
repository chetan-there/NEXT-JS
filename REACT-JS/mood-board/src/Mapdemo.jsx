function Mapdemo() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
  const phones =["iphone","Cphone","onePlus","samsung"]

  return (
    <>
          <ul>
              {fruits.map((fruit, index) => (
                  <li key={index}>{fruit}</li>
              ))}
          </ul>
      
              <ol>
                  {phones.map((phone, index1) => (
                      <li key={index1}>{phone}</li>
                  ))}
              </ol>
          </>

  );
}

export default Mapdemo