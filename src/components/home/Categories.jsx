import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '48fec02c4fmshe34be3216d8a8d6p14b3dcjsn7b018be15528',
    //     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    //   }
    // };

    // fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=us', options)
    //   .then(response => response.json())
    //   .then(response => {
    //     setCategories(response)
    //   })
    //   .catch(err => console.error(err));
  }, [])

  return (
    <section className="max-w-screen-2xl mx-auto px-2 mb-10">
      <h2 className="text-center text-3xl mb-10 font-semibold">Categories</h2>
      <ul className="flex justify-evenly flex-wrap">
        {categories.map((category) => {
          return (
            <li className="text-2xl font-medium mx-3 px-3 py-2 bg-slate-100">
              {category.CatName}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
