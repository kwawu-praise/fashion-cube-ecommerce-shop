import { useState } from "react"

interface ProductsTableTitleInterface {
  title: string[],
}

interface ProductsTableBodyInterface {
  uid: number,
  product: [{
    image: string,
    description: [{
      productName: string,
      productCategoryDescription: string
    }]
  }],
  category: string,
  brand: string,
  price: number,
  stock: string,
  rating: number,
  order: number,
  sales: number,
  action: [{
    view: string,
    edit: string,
    deleteAction: string,
  }]
}

const BestSellingProduct = () => {

  const ProductsTableTitle: ProductsTableTitleInterface[] = [
    {
      title: [
        "UID",
        "PRODUCT",
        "CATEGORY",
        "BRAND",
        "PRICE",
        "STOCK",
        "RATING",
        "ORDER",
        "SALES",
        "ACTIONS",
      ]

    }


  ]
  const ProductsTableBody: ProductsTableBodyInterface[] = [
    {
      uid: 1234,
      product: [{
        image: "images/ch.jpg",
        description: [{
          productName: "Top and Skirt ",
          productCategoryDescription: "Women exclusive"
        }]
      }],
      category: "Womans",
      brand: "Balenciaga",
      price: 100,
      stock: "starImages",
      rating: 5,
      order: 942,
      sales: 4000,
      action: [{
        view: "eye image",
        edit: "pencil Image",
        deleteAction: "delete image",
      }]

    },
    {
      uid: 49240,
      product: [{
        image: "images/ed.jpg",
        description: [{
          productName: "Top and Skirt ",
          productCategoryDescription: "Women exclusive"
        }]
      }],
      category: "Unisex",
      brand: "Fendi",
      price: 100,
      stock: "starImages",
      rating: 5,
      order: 942,
      sales: 4000,
      action: [{
        view: "eye image",
        edit: "pencil Image",
        deleteAction: "delete image",
      }]

    }


  ]

  const RenderProductsTableTitles = () => {
    return (

      ProductsTableTitle.map(({ title }) => (
        title.map((item) => (
          <th className="text-center border text-white border-[#d8dbde] bg-blue-600 h-14">
            {item}
          </th>

        ))
      ))

    )
  }

  const RenderProductsTableBody = () => {

    return (
      ProductsTableBody.map(({
        uid,
        product,
        category,
        brand,
        price,
        stock,
        rating,
        order,
        sales,
        action
      }, index) => (
        <tr key={uid} className={`border border-[#d8dbde]  h-20 ${index % 2 === 0 ? "bg-gray-200" : "bg-white"} `}>
          <td className="border text-center border-[#d8dbde] ">#{uid}</td>
          <td className="border text-center h-full border-[#d8dbde] ">{product.map(({ image, description }) => (
            <div className="flex h-full space-x-4 p-3 items-center">
              <div className=" h-20 w-20">
                <img src={image} className=" h-full w-full  object-cover " />
              </div>
              <div>
                {description.map(({ productName, productCategoryDescription }) => (
                  <div>
                    <div><p className="font-bold text-xl">{productName}</p></div>

                    <div><p>{productCategoryDescription}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ))}</td>

          <td className="border border-[#d8dbde] text-center">{category}</td>
          <td className="border border-[#d8dbde] text-center">{brand}</td>
          <td className="border border-[#d8dbde] text-center">{price}</td>
          <td className="border border-[#d8dbde] text-center">{stock}</td>
          <td className="border border-[#d8dbde] text-center">{rating}</td>
          <td className="border border-[#d8dbde] text-center">{order}</td>
          <td className="border border-[#d8dbde] text-center">{sales}</td>
          <td className="border border-[#d8dbde] text-center">{action.map(({ view, edit, deleteAction }) => (
            <div>
              <div>
                <div>{view}</div>
                <div>{edit}</div>
                <div>{deleteAction}</div>
              </div>
            </div>
          ))}</td>
        </tr>
      ))

    )
  }




  return (
    <div className="w-full p-5">
      <main className=" w-full shadow-lg/50 rounded-2xl p-5">
        <div>
          <h2 className="font-bold  text-3xl">Best Selling Products</h2>
        </div>
        <div className="flex space-x-16 mt-10" >
          <div >
            <p className="text-xl font-medium">SHOW BY</p>
            <div className="border  border-[#bfbebd] w-50 h-10 rounded-lg px-3 my-5 ">
              <select className=" w-full h-10 ">
                <option>None</option>
                <option>ten</option>
                <option>ten</option>
                <option>ten</option>

              </select>


            </div>
          </div>
          <div>
            <p className="text-xl font-medium">CATEGORY BY</p>
            <div className="border border-[#bfbebd] w-50 h-10 rounded-lg px-3 my-5  ">
              <select className="w-full h-10">
                <option>None</option>
                <option>ten</option>
                <option>ten</option>
                <option>ten</option>

              </select>
            </div>
          </div>

        </div>

        <section>
          <div>
            <table className="border w-full">
              <thead className="">
                <tr>
                  {RenderProductsTableTitles()}

                </tr>
              </thead>

              <tbody>
                {
                  RenderProductsTableBody()
                }             </tbody>
            </table>
          </div>
        </section>
      </main>
    </div >
  )
}

export default BestSellingProduct
